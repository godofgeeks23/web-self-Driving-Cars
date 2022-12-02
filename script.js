function val(x) {
    return x + 10;
}
function sum(a, b = val(a)) {
    return a + b;
}
console.log(sum(10));
