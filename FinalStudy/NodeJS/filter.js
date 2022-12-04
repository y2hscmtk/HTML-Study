//함수형 프로그래밍은 외부에 영향을 받지않는, 순수 함수만을 사용해야함

//필터 함수 사용 예시

const studentList =[
    {name:'ck',s:100,m:100},
    {name:'ksd',s:56,m:65},
    {name:'kth',s:80,m:70},
    {name:'collin',s:89,m:64},
    {name:'mr.kim',s:97,m:66}
]

//upperS90이라는 새로운 리스트에 편입됨
const upperS90 = studentList.filter(student => student.s>90);//s가 70이상인 학생들

console.log(studentList)
console.log(upperS90)