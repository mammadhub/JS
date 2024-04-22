function pol(str1){
    let i=0;
    let n=1;
    let str2=[]
    while(i < str1.length){
        str2=str2+str1[str1.length-n];
        // str2.push(str1[str1.length-n]);
        i++;
        n++;
    }
    if(str1 == str2){
        return true;
    }
    else{
        return false;
    }
}
// let str1="salam"; False qaytardi
let str1="1234321";
// true qaytardi
console.log(pol(str1));