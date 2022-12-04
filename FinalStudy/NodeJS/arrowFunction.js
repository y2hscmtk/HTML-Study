//화살표 표기법에 대한연습

const studentList =[
    {name:'ck',s:100,m:100},
    {name:'ksd',s:56,m:65},
    {name:'kth',s:80,m:70}
]

const plus = (a,b)=> a+b; //a,b를 매개변수로 받아서 a+b를 리턴함

//ForEach문 활용
studentList.forEach(function(student){
    console.log(`${student.name}의 성적 총합은 ${plus(student.s, student.m)}점 입니다.`)
});