export interface User {
    id?: string | number,
    name: string,
    email: string,
    password: string
}

export interface LoginUser {
  password: string,
  email: string
}
