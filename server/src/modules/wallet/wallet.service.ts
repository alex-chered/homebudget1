import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// typeorm
import { Repository } from 'typeorm';

// "user" module
import { UserEntity } from 'user/user.entity';

// "wallet" module
import { WalletEntity } from './wallet.entity';
import { CreateWalletDto, BaseWalletDto } from './dto';

// "currency" module
import { CurrencyService } from 'modules/currency/currency.service';

// "wallet-type" module
import { WalletTypeService } from 'modules/wallet-type/wallet-type.service';

// ==============================|| WALLET -> SERVICE ||============================== //

@Injectable()
export class WalletService {
  //
  // CONSTRUCTOR
  //
  constructor(
    // repository
    @InjectRepository(WalletEntity)
    private readonly repository: Repository<WalletEntity>,
    // wallet-type service
    private readonly walletTypeService: WalletTypeService,
    // currency service
    private readonly currencyService: CurrencyService,
  ) {}

  //
  // GET ALL
  //
  async getAll(userId: number): Promise<WalletEntity[]> {
    // <!-- Body --!>

    // select all wallets belonging to the user with userId
    const wallets = await this.repository.find({
      where: {
        user: { id: userId },
      },
    });

    // throw an axception if the user doesn't have wallets
    // if (wallets.length === 0) {
    //   throw new UnprocessableEntityException('The user has no wallets');
    // }

    return wallets;
  }

  //
  // GET ONE
  //
  async getOne(id: number, userId: number): Promise<WalletEntity> {
    // <!-- Body --!>
    return this.findById(id, userId);
  }

  //
  // CREATE
  //
  async create(dto: CreateWalletDto, user: UserEntity): Promise<WalletEntity> {
    // <!-- Body --!>

    // there can't be wallets with the same name for one user
    const walletInDb = await this.repository.findOne({
      where: {
        name: dto.name,
        user: { id: user.id },
      },
    });
    if (walletInDb) {
      throw new UnprocessableEntityException(`The wallet already exists`);
    }

    // find the currency
    const currency = await this.currencyService.findById(dto.currencyId);

    // find the wallet type
    const walletType = await this.walletTypeService.findById(dto.walletTypeId);

    // create the new wallet based on the "dto" object
    const newWallet = new WalletEntity(
      dto.name,
      dto.comment,
      walletType,
      currency,
      user,
    );

    // save in the db
    return this.repository.save(newWallet);
  }

  //
  // UPDATE
  //
  async update(dto: BaseWalletDto, user: UserEntity): Promise<WalletEntity> {
    // <!-- Body --!>

    // find the wallet
    const wallet = await this.findById(dto.id, user.id);

    // find the currency
    const currency = await this.currencyService.findById(dto.currencyId);

    // find the wallet type
    const walletType = await this.walletTypeService.findById(dto.walletTypeId);

    // update all possible fields
    wallet.name = dto.name;
    wallet.comment = dto.comment || '';
    wallet.currency = currency;
    wallet.walletType = walletType;

    // save in the db
    return this.repository.save(wallet);
  }

  //
  // FIND BY ID
  //
  async findById(id: number, userId: number): Promise<WalletEntity> {
    // <!-- Body --!>

    // select a wallet by id and userId
    const wallet = await this.repository.findOne({
      where: {
        id,
        user: { id: userId },
      },
    });

    // no wallet
    if (!wallet) {
      throw new NotFoundException(`The user doesn't have such wallet`);
    }

    return wallet;
  }
}
