OrdersIndexCtrl.$inject = ['Order', 'Item'];

function OrdersIndexCtrl(Order, Item) {
  this.orders = [];
  this.items = [];
  this.orderItems = [];

  Order.find()
    .then(res => this.orders = res.data)
    // .then(() => console.log(this.orders))
    .then(() => {
      this.orders.forEach(order => {
        const beverageId = order.order.beverage;
        const extra1Id = order.order.extra1;
        const extra2Id = order.order.extra2;
        this.orderItems.push([beverageId, extra1Id, extra2Id]);
        // console.log(this.orderItems);
      });

    });

  Item.find()
    .then(res => this.items = res.data)
    // .then(() => console.log(this.items))
    .then(() => {
      //map this.orderItems(ids) to item names/ or populate but idk =_=
      this.orderItems.forEach(order => {
        order.map(itemId => {
          this.items.forEach(item => {
            if (itemId === item._id) {
              console.log(item.item);
              itemId = item.item;
            }
          });
        });
      });
      console.log(this.orderItems);
    })
    .then(() => console.log(this.orderItems));



}

export default OrdersIndexCtrl;
