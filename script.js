var array = [];
max = 0;
min = 0;
for(i = 0; i < 1000; i++)
{
  array.push(Math.round( Math.random() * (max - min) - min));
}
console.log(array);

function MaxMin()
{
  min = array[0];
  max = min;
  for (i = 1; i < array.length; ++i) {
      if (array[i] > max) max = array[i];
      if (array[i] < min) min = array[i];
  }
  console.log
}

function Median()
{
  var half = Math.floor(ar1.length / 2);
  array.sort(function(a, b) { return a - b;});

  if (array.length % 2) {
    return array[half];
  } else {
    return (array[half] + array[half] + 1) / 2.0;
  }
}

function QuickSort(arr) {
    if (arr.length < 2) return arr;
    let min = 1;
    let max = arr.length - 1;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    let pivot = arr[rand];
    const left = [];
    const right = [];
    arr.splice(arr.indexOf(pivot), 1);
    arr = [pivot].concat(arr);
    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    console.log(this)
    return QuickSort(left).concat(pivot, QuickSort(right));
  }
array1 = QuickSort(array)
console.log(array1)

let tags = document.getElementsByTagName("*");
let r = []
for (var i = 1; i < tags.length; i++) {
    r.push(tags[i].localName)
    }
let result = r.filter((v, i, a) => a.indexOf(v) == i)
    .map(v => [v, r.filter(x => x == v).length]);
console.log(result);

window.onload=() => {
  let some = document.getElementById('some')
  some.ondblclick = () => {
    some.requestFullscreen()
  }
  let button = document.getElementById('contact')
  console.log(button)
  button.onclick = (e) => {
      console.log(e.pageX, e.pageY)
      let abc = document.getElementById('info')
      abc.setAttribute('class', 'panel-show')
  }
}
