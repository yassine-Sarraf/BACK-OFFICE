export interface User {
    _id?:string,
    name?:string,
    email?:string,
    password?:string,
    address?:String,
    city?:String,
    country?:String,
    phone?:String,
    isAdmin?:boolean
}

export interface ResUser {
    success?: boolean;
    user: User[]
}

export interface ResOneUser {
    success?: boolean;
    user?: User;
}