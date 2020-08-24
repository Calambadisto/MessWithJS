document.querySelector('button').onclick = function () {
   let l = document.querySelector('#length');
   let min = document.querySelector('#min');
   let max = document.querySelector('#max');
   let result = [];
   for (let i = 0; i < l; i++) {
       result.push(randomInteger(min, max));
   }
   console.log(result);
   document.querySelector('#out').innerHTML = result;
   return result;
}

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 0,5);
    return Math.round(rand);
  }