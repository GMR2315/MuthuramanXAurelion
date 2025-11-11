

const add = (a,b) => {
    console.log(a+b);
}

const sub = (a,b) => {
    console.log(a-b);
}

module.exports = sub ;

const mul = (a,b) => {
    console.log(a*b);
}

const div = (a,b) => {
    console.log(a/b);
}
sub(3,2);
add(1,2);
mul(3,2);
div(3,2);

module.exports = {
    add,
    sub,
    mul,
    div
}
