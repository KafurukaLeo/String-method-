// reduce method

const num = [10000,20000,30000,40000,50000];
const min = num.reduce((acc, ele) =>{
    return Math.min(acc, ele);
});
console.log(min);