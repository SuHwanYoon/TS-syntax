let ages:number[] = [10,20]

type anotherPersonObj = {
    name: string
    age: number
    isStudent: boolean
}

let anotherPerson1: anotherPersonObj = {
    name: "Park",
    age: 10,
    isStudent: true
}


let anotherPerson2: anotherPersonObj = {
    name: "Kim",
    age: 30,
    isStudent: false
}

let people: anotherPersonObj[] = [anotherPerson1,anotherPerson2]

let people2: Array<anotherPersonObj> = [anotherPerson1,anotherPerson2]