//  Find the most frequent element
function mostFrequent(arr){
    var occurences={};
    var maxCount=0;
    var maxElement=null;
    for(var i=0;i<arr.length;i++){
        var element=arr[i];
        if (occurences[element]===undefined){
            occurences[element]=1;
        }else{
            occurences[element]=occurences[element]+1;
        }
        if(occurences[element]>maxCount){
            maxCount=occurences[element];
            maxElement=element;
        }
    }
    return maxElement;
}
var data=[4,5,7,8,4,6,7,9,4,2,7,6,7];
console.log(mostFrequent(data));