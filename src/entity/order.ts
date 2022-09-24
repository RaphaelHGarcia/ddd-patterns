import OrderItem from './order_item'

export default class Order {

  _id: string
  _customerId: string
  _items: OrderItem[]
  _total: number

  constructor (
    id: string,
    customerId: string,
    items: OrderItem[],
  ) {
    this._id = id
    this._customerId = customerId
    this._items = items
    this._total = this.total()

    this.validate()
  }

  get id () { return this._id }

  get customerId () { return this._customerId }

  get items () { return this._items }

  validate () {
    if (this._id.length === 0) {
      throw new Error('ID é obrigatório')
    }

    if (this._customerId.length === 0) {
      throw new Error('ID do cliente é obrigatório')
    }

    if (this._items.length === 0) {
      throw new Error('É obrigatório ter pelo menos um item no carrinho')
    }
  }

  total (): number {
    return this._items.reduce((acc, item) =>  acc + item._price, 0)
  }
}
