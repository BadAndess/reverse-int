module.exports =function reverse(n) {
    n = String(Math.abs(n));
    let res = n.split("").reverse().join("");
    res = Number(res);
    return res;
}

