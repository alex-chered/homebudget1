// ==============================|| BASE -> MODEL ||============================== //

export abstract class BaseModel {
  private _id = 0;

  private _name = '';

  //
  // CONSTRUCTOR
  //
  constructor(name: string) {
    this._name = name;
  }

  //
  // ID (GETTER, SETTER)
  //
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  //
  // NAME (GETTER, SETTER)
  //
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  //
  // TO DTO
  //
  toDto(): object {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
