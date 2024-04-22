function A(x){
    let cem=0;
    let say=0;
    for(let i=0;i<x.length; i++){
        cem=cem+x[i];
        say++;
    }
    return cem/say;
}
let x=[12, 12,14, 20,10,12,10,6];
console.log(A(x));