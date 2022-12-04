onmessage = function(e){
    let a = parseInt(e.data.a)
    let b = parseInt(e.data.b)
    //두 수를 곱한 값을 리턴한다.
    postMessage(a*b);
}