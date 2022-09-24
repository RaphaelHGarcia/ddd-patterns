export default class Address {

  _street: string
  _number: number
  _zipcode: string
  _city: string

  constructor (
    street: string,
    number: number,
    zipcode: string,
    city: string,
  ) {
    this._street = street
    this._number = number
    this._zipcode = zipcode
    this._city = city
  }

  get street (): string {
    return this._street
  }

  get number (): number {
    return this._number
  }

  get zipcode (): string {
    return this._zipcode
  }

  get city (): string {
    return this._city
  }

  validate (): void {
    if (this._street.length === 0) {
      throw new Error('Rua é obrigatório')
    }

    if (this._zipcode.length === 0) {
      throw new Error('CEP é obrigatório')
    }

    if (this._number > 0) {
      throw new Error('Número tem que ser maior que 0')
    }

    if (this._city.length === 0) {
      throw new Error('CEP é obrigatório')
    }
  }

  toString (): string {
    return `${this._street}, ${this._number}, ${this._zipcode} ${this._city}`
  }

}