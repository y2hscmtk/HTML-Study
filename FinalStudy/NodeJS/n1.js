let num1 = 1;
let num2 = 2;
let result = 3;

const string1 = num1 +' 더하기 '+ num2 + '는 \"' + result + '\"입니다';
//백틱(`)을 이용하여 한번에 출력하기
const string2 = `${num1} 더하기 ${num2}는 \"${result}\"입니다`; 
console.log(string1);
console.log(string2);

//Node.js를 이용하여 출력하기 => 터미널을 키고 경로이동을 한 후에, node n1.js명령으로 실행