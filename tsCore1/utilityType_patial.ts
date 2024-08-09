//엄격한 타입체크 유저객체
type uxUser = {
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
type UpdatedUser = Partial<uxUser>

const utilUsers: uxUser[] = [
    {id: 1, username: "yoon", role: "member"},
    {id: 2, username: "kim", role: "contributor"},
    {id: 3, username: "park", role: "admin"},
    {id: 4, username: "choi", role: "member"}
]

//함수의 파라미터로 유연한 객체 속성을 지정할수있다
function updateUser(id:number, updateProperty: UpdatedUser) {
    //유저 배열에 있는 아이디와 일치하는 유저찾기
    const foundUsers = utilUsers.find(users => users.id === id ) 
    //아이디와 일치하는 유저가 없을경우(undifined)
    if (!foundUsers) {
        console.error("해당 id의 유저가 없습니다")
        return
    }
    //
    Object.assign(foundUsers, updateProperty)
}

//1번유저의 이름속성 바꾸기
updateUser(1, {username: "new yoon"})
//4번유저의 역할속성 바꾸기
updateUser(4, {role: "contributor"})

console.log(utilUsers)