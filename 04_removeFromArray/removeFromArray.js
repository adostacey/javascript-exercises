const removeFromArray = function (array, item) {
  const args = Array.from(arguments);
  let items = args.slice(1);
  // console.log(items);

  return array.filter((element) => !items.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
