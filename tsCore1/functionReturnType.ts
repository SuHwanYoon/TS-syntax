type newUserRole = "guest" | "member" | "admin"

type User = {
    username: string
    role: newUserRole
}

const users: User[] = [
    {username: "yoon" , role: "member"},
    {username: "kim" , role: "guest"},
    {username: "park" , role: "admin"}
]

function fetchUserDetails(username:string) : User {
    const user = users.find(user => user.username === username)
    //못찾으면 undifinded반환 ->  !user === ture
    if(!user){
        throw new Error(`유저목록에 유저이름 ${username} 은 존재하지않습니다.`)
    }
    return user;
}

console.log(fetchUserDetails('yoon'));
console.log(fetchUserDetails('choi'));