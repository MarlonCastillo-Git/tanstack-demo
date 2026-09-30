import { NextResponse } from "next/server";
import { addProduct, products, sleep } from "@/lib/data";

export async function GET(){
    await sleep(800); // latencia simulada, para ver los estados de carga
    return NextResponse.json(products);
}


export async function POST(request: Request ){
    const { title, price } = await request.json();
    await sleep(400);
    const prodcut = addProduct(title, Number(price));
    return NextResponse.json(products, {status: 201});
    
}