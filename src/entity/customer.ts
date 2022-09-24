import Address from './address'

export default class Customer {

  _id: string
  _name: string
  _address!: Address
  _active: boolean = true

  constructor (
    id: string,
    name: string
  ) {
    this._id = id
    this._name = name
  }

  get id (): string { return this._id }

  get name (): string { return this._name }

  get Address (): Address { return this.Address }

  set Address (address: Address) {
    this._address = address
  }

  validate (): void {
    if (this._id.length === 0) {
      throw new Error('ID é obrigatório')
    }

    if (this._name.length === 0) {
      throw new Error('Nome é obrigatório')
    }
  }

  changeName (name: string): void {
    this._name = name
    this.validate()
  }

  isActive (): boolean {
    return this._active
  }

  activate (): void {
    if (this._address === undefined) {
      throw new Error('Para ativar um cliente é obrigatório ter um endereço')
    }

    this._active = true
  }

  deactivate (): void {
    this._active = false
  }

  changeAddress (address: Address): void {
    this._address = address
  }
}