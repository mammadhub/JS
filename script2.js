function str1(myStr){
    if(myStr.length <= 20 && 10<=myStr.length ){
        return true;
    }
    else{
        return false;
    }
}
// let myStr = "salamlar dost";
// true qaytardi
let myStr="100bal :)";
console.log(str1(myStr));