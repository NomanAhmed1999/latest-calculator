

var operator;


var result = document.getElementById('screen-result');

function getNum(num){
    result.value += num;
    if(result.value === num){
        result.value = num;
    }
}


function clearAll(){
    result.value = "";

}
function equal(){
    if(result.value == ""){
        result.value = 0;
    }
     result = document.getElementById('screen-result');
    result.value = eval(result.value);
}




function delet(){
  var deleteLast = result.value;
       deleteLast = [...deleteLast];
    deleteLast.pop();
    deleteLast = deleteLast.toString();
    console.log(deleteLast.indexOf(','));
    deleteLast = deleteLast.replaceAll(',','');
    result.value = deleteLast;


    

}