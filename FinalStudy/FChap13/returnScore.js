onmessage = function(e){
    let score = null;
    if (e.data<59)
        score = 'F'
    else if(60<=e.data&&e.data<=69)
        score = 'D'
    else if(70<=e.data&&e.data<=79)
        score = 'C'
    else if(80<=e.data&&e.data<=89)
        score = 'B'
    else
        score = 'A'
    postMessage(score); //메인 테스크로 정보 보내기
}