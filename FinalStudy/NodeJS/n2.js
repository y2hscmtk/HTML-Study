const userList = [
    {name:'ksd', age: 31, score: 85},
    {name:'kjh', age: 25, score: 88},
    {name:'pch', age: 36, score: 92},
]

//forEach와 for of 활용

for(let i=0; i<=userList.length;i++){
    console.log(userList[i]);
}

console.log("-------------------\n");
//for of 문
for(let u of userList){
    console.log(u)
}
console.log("-------------------\n");
//for Each문
userList.forEach(function(u){
    console.log(u)
})
console.log("-------------------\n");
userList.forEach(u=>console.log(u))