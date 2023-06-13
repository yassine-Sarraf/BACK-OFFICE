import { Category } from "./category";

export interface Product {
    _id?:string,
    title?:string,
    description?:String,
    content?:String,
    brand?:String,
    countStock?:number,
    price?: Number,
    thumbnail?:String,
    rating?:Number,
    isFeatred?:Boolean,
    category?:Category
}

export interface ResProduct {
    success?: boolean;
    product?: Product[]
}

export interface ResOneProduct {
    success?: boolean;
    product?: Product;
}