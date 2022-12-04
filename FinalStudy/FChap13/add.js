onmessage = function (e) {
	var sum = 0;
    //문자열의 형태로 오기때문에 정수로 변환하는 과정이 필요함
	var from = parseInt(e.data.from);
	var to = parseInt(e.data.to);
	for(var i=from; i<=to; i++) 
		sum += i;
	postMessage(sum);
}
