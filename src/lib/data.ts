export interface Product {
    id: number;
    title: string;
    price: number;
    stock: number;
}

export interface Profile{
    name: string;
    role: string;
}


// "base de datos" en memoria y no dependemos de Internet ni ningún backend externo

export const products: Product[] = [
    { id: 1, title: "Teclado inalámbrico", price: 45.99, stock: 12 },
    { id: 2, title: "Mouse Logitech", price: 21.95, stock: 32 },
    { id: 3, title: "Monitor 27''", price: 199.95, stock: 5 },
    { id: 4, title: "Iphone Pro Max 17", price: 999.95, stock: 2 }
];

export const profile: Profile = { name: "Roberto Martínez", role: "Administrador" };

let nextId = 4;

export function addProduct(title: string, price: number): Product{
    const product = { id: nextId++, title, price, stock: 0 };
    products.push(product);
    return product;
}

//simula la latencia real de una API
export function sleep(ms: number){
    return new Promise((resolve) => setTimeout(resolve, ms));
}