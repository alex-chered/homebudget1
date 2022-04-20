import {
  Injectable,
  UnprocessableEntityException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// typeorm
import { FindManyOptions, ILike, Repository } from 'typeorm';

// "currency" module
import { CurrencyEntity } from './currency.entity';
import { CreateCurrencyDto, UpdateCurrencyDto } from './dto';

// ==============================|| CURRENCY -> SERVICE ||============================== //

@Injectable()
export class CurrencyService {
  //
  // CONSTRUCTOR
  //
  constructor(
    @InjectRepository(CurrencyEntity)
    private readonly currencyRepository: Repository<CurrencyEntity>,
  ) {}

  //
  // GET ALL
  //
  async getAll(name?: string): Promise<CurrencyEntity[]> {
    // <!-- Body --!>

    // define the base options
    const options: FindManyOptions<CurrencyEntity> = {
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
    return this.currencyRepository.find(options);
  }

  //
  // GET ONE
  //
  async getOne(id: number): Promise<CurrencyEntity> {
    // <!-- Body --!>
    return this.findById(id);
  }

  //
  // CREATE
  //
  async create(createCurrencyDto: CreateCurrencyDto): Promise<CurrencyEntity> {
    // <!-- Body --!>

    //
    const currencyInDb = await this.currencyRepository.findOne({
      name: createCurrencyDto.name,
    });
    if (currencyInDb) {
      throw new UnprocessableEntityException('The currency already exists');
    }

    //
    const newCurrency = new CurrencyEntity();
    Object.assign(newCurrency, createCurrencyDto);

    // save in the db
    return this.currencyRepository.save(newCurrency);
  }

  //
  // UPDATE
  //
  async update(updateCurrencyDto: UpdateCurrencyDto): Promise<CurrencyEntity> {
    // <!-- Body --!>

    //
    const currencyInDb = await this.findById(updateCurrencyDto.id);
    Object.assign(currencyInDb, updateCurrencyDto);

    // save in the db
    return this.currencyRepository.save(currencyInDb);
  }

  //
  // FIND BY ID
  //
  async findById(id: number): Promise<CurrencyEntity> {
    // <!-- Body --!>
    const currency = await this.currencyRepository.findOne(id);
    if (!currency) {
      throw new NotFoundException(`The currency doesn't exist`);
    }

    //
    return currency;
  }
}
