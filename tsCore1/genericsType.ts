const gameScore = [14,21,33,42,59]

const favoriteThings = ["장미이슬", "고양이수염", "구리 주전자", "벙어리 장갑"]

const voters = [{name: "yoon", age: 42},{name: "kim", age: 20}]

//제네릭타입 설정해서 서로다른 타입의 배열을 모두 사용가능
function getLastItem<Type>(array : Type[]) : Type | undefined{
    return array[array.length-1]
}

console.log(getLastItem(gameScore))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))

