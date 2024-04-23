function A(x) {
    let cem = 0;
    let say = 0;
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] == 'number' ) {
            cem = cem + x[i];
            say++;
        }
    }
    return cem / say;
}
let x = [12, 12, 14, 20, 'a',10, 12, 10, 'd','6'];
console.log(A(x));