import {
  Injectable,
  UnprocessableEntityException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// typeorm
import { FindManyOptions, ILike, Repository } from 'typeorm';

// "wallet-type" module
import { WalletTypeEntity } from './wallet-type.entity';
import { CreateWalletTypeDto, BaseWalletTypeDto } from './dto';

// ==============================|| WALLET TYPE -> SERVICE ||============================== //

@Injectable()
export class WalletTypeService {
  //
  // CONSTRUCTOR
  //
  constructor(
    @InjectRepository(WalletTypeEntity)
    private readonly repository: Repository<WalletTypeEntity>,
  ) {}

  //
  // GET ALL
  //
  async getAll(name?: string): Promise<WalletTypeEntity[]> {
    // <!-- Body --!>

    // define the base options
    const options: FindManyOptions<WalletTypeEntity> = {
      order: { id: 'ASC' },
    };
    // if the parameter "name" is set,
    // add the "where" condition to the options
    if (name) {
      options.where = {
        name: ILike(`%${name}%`),
      };
      options.take = 10;
    }

    // result
    return this.repository.find(options);
  }

  //
  // GET ONE
  //
  async getOne(id: number): Promise<WalletTypeEntity> {
    // <!-- Body --!>
    return this.findById(id);
  }

  //
  // CREATE
  //
  async create(
    createWalletTypeDto: CreateWalletTypeDto,
  ): Promise<WalletTypeEntity> {
    // <!-- Body --!>

    //
    const elementInDb = await this.repository.findOne({
      name: createWalletTypeDto.name,
    });
    if (elementInDb) {
      throw new UnprocessableEntityException('The wallet type already exists');
    }

    //
    const newElement = new WalletTypeEntity();
    Object.assign(newElement, createWalletTypeDto);

    // save in the db
    return this.repository.save(newElement);
  }

  //
  // UPDATE
  //
  async update(
    updateWalletTypeDto: BaseWalletTypeDto,
  ): Promise<WalletTypeEntity> {
    // <!-- Body --!>

    //
    const elementInDb = await this.findById(updateWalletTypeDto.id);
    Object.assign(elementInDb, updateWalletTypeDto);

    // save in the db
    return this.repository.save(elementInDb);
  }

  //
  // FIND BY ID
  //
  async findById(id: number): Promise<WalletTypeEntity> {
    // <!-- Body --!>
    const walletType = await this.repository.findOne(id);
    if (!walletType) {
      throw new NotFoundException(`The wallet type doesn't exist`);
    }

    //
    return walletType;
  }
}
