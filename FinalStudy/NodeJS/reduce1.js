//reduce 함수는 리스트에 직접 개입하여 값을 줄여나감

const studentList =[
    {name:'ck',s:100,m:100},
    {name:'ksd',s:56,m:65},
    {name:'kth',s:80,m:70},
    {name:'collin',s:89,m:64},
    {name:'mr.kim',s:97,m:66}
]

const science = studentList.map(student => student.s);//과학접수만 따로빼기
console.log(science)

const sum = science.reduce((a,b)=>a+b);//값을 하나씩 뽑아서 결과를 출력
console.log(sum)

const sum2 = studentList.map(student=>student.m).reduce((a,b)=>a+b);//값을 줄여나감
console.log(sum2)