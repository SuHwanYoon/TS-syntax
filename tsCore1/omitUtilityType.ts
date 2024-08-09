//엄격한 타입체크 유저객체
type omUser = {
    id: number
    username: string,
    role: "contributor" | "member" | "admin"
}

//좀더 유연성이 있는 유저객체 - id, username 속성은 생략이 가능
// type UpdatedUser = {
//     id?:number
//     username?:string
//     role:"member" | "contributor" | "admin"
// }

//uxUser객체의 모든 속성을 선택적으로 만드는 Partial 타입
//일부 속성이 누락된 객체를 사용할수 있게한다
type omUpdatedUser = Partial<omUser>

// 유저아이디 변수
let nextUserId = 1


const omutilUsers: omUser[] = [
    {id: nextUserId++, username: "yoon", role: "member"},
    {id: nextUserId++, username: "kim", role: "contributor"},
    {id: nextUserId++, username: "park", role: "admin"},
    {id: nextUserId++, username: "choi", role: "member"}
]

//함수의 파라미터로 유연한 객체 속성을 지정할수있다
function omUpdateUser(id:number, updateProperty: omUpdatedUser) {
    //유저 배열에 있는 아이디와 일치하는 유저찾기
    const foundUsers = omutilUsers.find(users => users.id === id ) 
    //아이디와 일치하는 유저가 없을경우(undifined)
    if (!foundUsers) {
        console.error("해당 id의 유저가 없습니다")
        return
    }
    //
    Object.assign(foundUsers, updateProperty)
}

//1번유저의 이름속성 바꾸기
// updateUser(1, {username: "new yoon"})
// //4번유저의 역할속성 바꾸기
// updateUser(4, {role: "contributor"})

//속성을 추가해서 유저 객체를 추가하는 함수  
//Omit타입으로 객체에서 생략할 속성을 지정
//이함수는 id 속성이 생략된 omUser 타입 객체를 파라미터로 받지만 id속성이 존재하는 omUser 객체를 반환한다
function addNewUser(newUser: Omit<omUser, "id">): omUser {
    //로컬 객체 정의에서 id를 추가
    const user: omUser = {
        id: nextUserId++,
        //스프레드 연산자로 argument전달
        ...newUser
    }
    omutilUsers.push(user);
    return user;
}

addNewUser({username: "new user jang", role: "member"})

console.log(omutilUsers)