function rangeFilter() {
  return function (items, params) {

    const attr = Object.keys(params)[0];
    const min = parseFloat(Object.values(params)[0][0]);
    const max = parseFloat(Object.values(params)[0][1]);

    const range = [];

    for (let i=0, l=items.length; i<l; ++i){
      const item = items[i];
      if(item[attr]<=max && item[attr]>=min) range.push(item);
    }
    return range;
  };
}

export default rangeFilter;

// items, attr, min, max
// rangeFilter(vm.filtered, 'eyebrowLength', vm.min, vm.max);
// rangeFilter(vm.filtered, { eyebrowLength: [vm.min, vm.max] });
