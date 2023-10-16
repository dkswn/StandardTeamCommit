let arr = [3,5,6,1,2,4];
let max = 0;
for(let i =0; i < arr.length; i++){
    if(max > arr[i]){
        max = arr[i];
} 
return max;
}
