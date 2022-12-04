//map함수에 대한 이해, map은 모든 데이터에 조건을 대응시켜 새로운 리스트를 만드는것

const list = [1,2,3]

const multipleList = list.map(item=>item*10);//모든 요소를 10배
multipleList.forEach(item => console.log(item))