function OrderCtrl() {
  console.log('order controller loaded');
  this.beverages = [{
    item: 'Latte',
    price: 2.5
  }, {
    item: 'Cappuccino',
    price: 2.5
  }, {
    item: 'Tea',
    price: 2
  }, {
    item: 'Flat White',
    price: 2.5
  }, {
    item: 'Espresso',
    price: 2
  }];

  this.teaExtras = [{
    item: 'Mint',
    price: 0.5
  }, {
    item: 'Ginger',
    price: 0.5
  }, {
    item: 'Honey',
    price: 0.5
  }];

  this.coffeeExtras = [{
    item: 'Extra Shot',
    price: 1
  }, {
    item: 'Chocolate',
    price: 0.5
  }, {
    item: 'Vanilla',
    price: 0.5
  }, {
    item: 'Caramel',
    price: 0.5
  }, {
    item: 'Ginger',
    price: 0.5
  }, {
    item: 'Honey',
    price: 0.5
  }];

  this.displayedExtras = [];

  this.newOrder = {
    name: '',
    email: '',
    order: [],
    orderTotal: 0
  };

  this.allOrders = [];
  this.showAllOrders = false;

  this.showExtra1 = false;
  this.showExtra2 = false;

  function handleSubmit() {
    this.allOrders.push(this.newOrder);
    this.showAllOrders = true;
    this.newOrder = {
      name: '',
      email: '',
      order: [],
      orderTotal: 0
    };
  }

  this.handleSubmit = handleSubmit;

  function addBeverageToOrder(beverage) {
    // reset order array
    this.newOrder.order = [];
    // push item to order array
    this.newOrder.order.push(beverage);
    // display extras
    if (beverage.item === 'Tea') {
      this.displayedExtras = this.teaExtras;
    } else {
      this.displayedExtras = this.coffeeExtras;
    }
    // show first extra
    this.showExtra1 = true;
  }

  this.addBeverageToOrder = addBeverageToOrder;

  function addExtra1ToOrder(extra) {
    // remove existing extra
    this.newOrder.order.splice(1, 1);
    // push new extra to array
    this.newOrder.order.push(extra);
    // show second extra
    this.showExtra2 = true;
  }

  this.addExtra1ToOrder = addExtra1ToOrder;

  function addExtra2ToOrder(extra) {
    this.newOrder.order.splice(2, 1);
    this.newOrder.order.push(extra);
  }

  this.addExtra2ToOrder = addExtra2ToOrder;

  function calculatePrice() {
    this.newOrder.orderTotal = 0;
    this.newOrder.order.forEach(item => {
      this.newOrder.orderTotal += item.price;
    });
  }

  this.calculatePrice = calculatePrice;
}

export default OrderCtrl;
