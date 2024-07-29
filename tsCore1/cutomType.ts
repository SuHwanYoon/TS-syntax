type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    //optional체이닝 -> 객체가 null or undefined일때 undefined를 반환
    address?: Address
}

let person1 : Person = {
    name: "yoon",
    age: 33,
    isStudent: true,

}

let person2 : Person = {
    name: "kim",
    age: 20,
    isStudent: false,
    address:{
        street:"main",
        city:"Anytown",
        country:"Korea"
    }
}

function displayPersonInfo(person:Person) {
    console.log(`${person.name} lives at ${person.address?.street}`)
}

displayPersonInfo(person1);