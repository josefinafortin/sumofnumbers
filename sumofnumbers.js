const test = [1,2,3];

function sumFor(num){
  let sum = 0;
  for(let i = 0; i<num.length; i++){
    sum+=num[i];
  }
  return sum;
}

//console.log(sumFor(test));

function sumWhile(num){
  let sum = 0;
  let i = 0;
  while(i<num.length){
    sum+=num[i];
    i++;
  }
  return sum;
}

//console.log(sumWhile(test));


function sumRecursion(num){

  if(num.length <= 0){
    return 0;
  }
    return num[0] + sumRecursion(num.slice(1,num.length));


}

//console.log(sumRecursion(test));


function sumTheSimpleWay(num){
return _.reduce(num, function (memo, num) {
  return memo + num;
}, 0);
}

//console.log(sumTheSimpleWay(test));
