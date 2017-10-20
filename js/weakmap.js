// WeakMap

// var weakMap = new WeakMap();
// var dogs = {};

// function Dog(name, type) {
//   this.name = name;
//   this.type = function() {`
//     console.log(type);
//   }
// }

// dogs = new Dog('Taro', 'Shiba');

// // weakMap(key, value)
// weakMap.set(dogs, 'Taro');

// console.log(weakMap.get(dogs))
// console.log(weakMap[dogs])

// DOM 拡張
var wm = new WeakMap();
var dom = document.querySelector('.abc');
wm.set(dom, {dom: 'foobar'});
we.get(dom).foobar = 'red';

function toggle() {
  if(wm.get(dom).foobar === 'red') {
   dom.style.color = 'red';
  }

  dom = null;
}

// Private member
var privateData = new WeakMap();
var Person = function(name, age) {
  privateData.set(this, {name: name, age: age})
}

Person.prototype.getName = function() {
  return privateData.get(this).name;
}

Person.prototype.getAge = function() {
  return privateData.get(this).age
};

function getPerson() {
  var name = document.getElementsByName('name')[0].value;
  var age = document.getElementsByName('age')[0].value;
  var user = new Person(name, age);

  console.log(user.getName());
  console.log(user.getAge());
  console.log(user)
}

var passedObjects = new WeakSet();

// 一度だけなんらかの処理をする
function doSomethingOnce(object) {
  if(!passedObjects.has(object)) {
    passedObjects.add(object);

    //一度だけなんらかの処理をする
    //
  }
}
