//함수형 프로그래밍을 이용하여 함수에 대한 결과를 다른 함수로 이어주기

const sum = (a,b) => a+b;
const printResult = (result) => {
    console.log(`결과는 ${result}입니다`);
};
const calculationAndPrint = (calculationResult, callback)=>{
    callback(calculationResult)
}

//sum함수에 대한 결과를 printReuslt함수로 연결시켜줌
calculationAndPrint(sum(10,20),printResult);