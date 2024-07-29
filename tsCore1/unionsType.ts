type exUser = {
    username: string,
    role: "guest" | "member" | "admin"
}

type exUserRole = "guest" | "member" | "admin"

let userRole:exUserRole = "member"
let userRole2:exUser["role"] = "guest"