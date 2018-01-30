// ForEach Function
//
// var items = document.querySelectorAll('.menu__item-content');
// items.forEach(function(item, index){
//   item.addEventListener('click', function(){
//     alert(index);
//   });
// });

//
// indexOf Array.prototype
//
var items = document.querySelectorAll('.menu__item-content');
items.forEach(function(item, index){
  item.addEventListener('click', function(){
    console.log(Array.prototype.indexOf.call(items, this));
    // Syntax: str.indexOf(searchValue[, fromIndex]);
    // The same: items.indexOf(item);
  });
});

//
// indexOf []
//
// var items = document.querySelectorAll('.menu__item-content');
// items.forEach(function (item, index) {
//   item.addEventListener('click', function () {
//     console.log([].indexOf.call(items, this));
//     // Syntax: str.indexOf(searchValue[, fromIndex]);
//     // The same: items.indexOf(item);
//   });
// });

// jQuery Index
// $('.menu__item').on('click', function(){
//   console.log( $(this).index() ); 
// });

// jQuery eq
// $('.menu__item')[5]
// $('.menu__item').eq(5)
