
class Cart {
  constructor(){
    this.items = []
  }

  add(item){
    const foundItem = this.items.find(t => t.id == item.id) 

    if (foundItem){
      foundItem.increment()
    } else {
      this.items.push(item)
    }

    console.log(this.item);
  }
}

export  default Cart