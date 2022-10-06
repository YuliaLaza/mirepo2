

var randomPick = (n,  min, max) => {
    var arr = [];
const range = max - min + 1;
   for (let index = 0; index < n; index++) {
        var randomNumber = Math.floor(Math.random() * range) + min;
        if (randomNumber !== arr[index]){
            arr.push(randomNumber);
        };
    };
     return arr;
};
    
    
    
    console.log(randomPick(10, 1, 100));