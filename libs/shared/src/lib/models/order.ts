export interface Order {
    _id?:string,
    shippingAddress?:string
    invoiceAddress?:String,             
    city?:String,
    country?: String,
    phone?:string
    status?:string
    total?:string,
    orderItems?:Array<string>
    user?:string
    created_at?:string
}

export interface ResOrder {
    success?: boolean,
    orders?: Order[]
}

export interface ResOneOrder {
    success?: boolean;
    order?: Order;
}