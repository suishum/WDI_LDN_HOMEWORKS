OrdersNewCtrl.$inject = ['Order', 'Item', '$state', '$scope'];

function OrdersNewCtrl(Order, Item, $state, $scope) {
  this.items = [];
  this.beverage = [];
  this.extras = [];
  this.coffeeExtras = [];
  this.teaExtras = [];

  Item.find()
    .then(res => this.items = res.data)
    .then(() => console.log(this.items))
    .then(() => this.items.forEach(item => {
      if (item.beverage) {
        this.beverage.push(item);
      }
    }))
    .then(() => this.items.forEach(item => {
      if (!item.beverage) {
        this.extras.push(item);
        if (item.constraints === 'coffee-only') {
          this.coffeeExtras.push(item);
        } else if (item.constraints === 'tea-only') {
          this.teaExtras.push(item);
        } else if (item.constraints === 'tea-or-coffee') {
          this.coffeeExtras.push(item);
          this.teaExtras.push(item);
        }
      }
    }));

  this.newOrder = {
    name: '',
    email: '',
    order: {
      beverage: '',
      extra1: '',
      extra2: ''
    },
    orderTotal: 0
  };

  function handleSubmit() {
    Order.create(this.newOrder)
      .then(() => $state.go('ordersIndex'));
  }
  this.handleSubmit = handleSubmit;

  function setExtras() {
    // console.log('setExtras function executed');
    // console.log($scope);
    // console.log($scope.ordersNew.newOrder.order.beverage);
    // console.log($scope.ordersNew.items[6]._id);
    const indexOfTea = $scope.ordersNew.items.findIndex(item => item.item === 'Tea');
    if ($scope.ordersNew.newOrder.order.beverage === $scope.ordersNew.items[indexOfTea]._id) {
      $scope.ordersNew.extras = $scope.ordersNew.teaExtras;
    } else {
      $scope.ordersNew.extras = $scope.ordersNew.coffeeExtras;
    }
  }

  function calculateTotal() {
    const indexOfBeverage = $scope.ordersNew.items.findIndex(item => item._id === $scope.ordersNew.newOrder.order.beverage);
    const indexOfExtra1 = $scope.ordersNew.items.findIndex(item => item._id === $scope.ordersNew.newOrder.order.extra1);
    const indexOfExtra2 = $scope.ordersNew.items.findIndex(item => item._id === $scope.ordersNew.newOrder.order.extra2);

    let beveragePrice = 0;
    let extra1Price = 0;
    let extra2Price = 0;

    if (indexOfBeverage > -1) {
      beveragePrice = parseFloat($scope.ordersNew.items[indexOfBeverage].price);
    }
    if (indexOfExtra1 > -1) {
      extra1Price = parseFloat($scope.ordersNew.items[indexOfExtra1].price);
    }
    if (indexOfExtra2 > -1) {
      extra2Price = parseFloat($scope.ordersNew.items[indexOfExtra2].price);
    }

    $scope.ordersNew.newOrder.orderTotal = beveragePrice + extra1Price + extra2Price;

  }

  $scope.$watch(() => this.newOrder.order.beverage, setExtras);
  $scope.$watchGroup([
    () => this.newOrder.order.beverage,
    () => this.newOrder.order.extra1,
    () => this.newOrder.order.extra2
  ], calculateTotal);
  
}

export default OrdersNewCtrl;
