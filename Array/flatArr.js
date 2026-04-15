function flatten(arr,depth=1){
    let result=[];
    for(let i=0;i<arr.length;i++){
        let item=arr[i];
        if(Array.isArray(item) && depth>0){
            let flatItem=flatten(item,depth-1);
            for(let j=0;j<flatItem.length;j++){
                result[result.length]=flatItem[j];
            }
        }else{
            result[result.length]=item;
        }
    }
    return result;
}
console.log(flatten([1,[2,[3,[4]]]],2));