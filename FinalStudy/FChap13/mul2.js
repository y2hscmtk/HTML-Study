onmessage= function(e){
    //수신받는 데이터는 모두 문자열이므로 정수형으로 변환 필요
    let num1 = parseInt(e.data.num1)
    let num2 = parseInt(e.data.num2)
    postMessage(num1*num2);
}