
function minCoinChange(coins){
    return function(amount){
        let total = 0;
        let result = [];
        for(let i=coins.length;i>=0;i--){
            while(total+coins[i] <= amount){
                total+=coins[i];
                result.push(coins[i])
            }
           
        }
        return result
    }
}

//二分查找
function binaryFind(arr,target){
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while(startIndex <= endIndex){
        let midIndex = Math.floor(arr.length / 2);
        let midValue = arr[midIndex];
        if(midValue > target){
            endIndex = endIndex - 1
        }else if(midValue < target ){
            startIndex = startIndex + 1;
        }else{
            return midIndex
        }
    
    }
    return -1
}



function quickSort(arr){
    if(!Array.isArray(arr) || arr.length === 1){
        return arr
    }
    const midIndex = Math.floor(arr.length / 2);
    const minValue = arr[midIndex];
    const left = [];
    const right = []
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > minValue){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return quickSort(left).concat([midValue],quickSort(right))
}

function dubbleSort(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length - i - 1;i++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp
            }
        }
    };
    return arr
}