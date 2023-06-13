export interface Category {
    _id?:string
    label?: string;
    color?: string;
    icon?: string; 
}

export interface ResCategory {
    success?: boolean;
    categorie?: Category[]
}

export interface ResOneCategory {
    success?: boolean;
    categorie?: Category;
}