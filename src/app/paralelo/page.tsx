import { headers } from "next/headers";

async function getProducts(base: string) {
    const res = await fetch (`${base}/api/products`, { cache: "no-store" });
    return res.json();
}

async function getProfile(base: string) {
    const res = await fetch (`${base}/api/profile`, { cache: "no-store" });
    return res.json();
}

export default async function ParaleloPage() {
    const h = await headers();
    const base = `${h.get("x-forwarded-proto") ?? "http"}://${h.get("host")}`;

    const start = Date.now();

    //Paralelo BIEN
    const [products, profile] = await Promise.all([
        getProducts(base),
        getProfile(base),
    ]);

    const elapsed = Date.now() - start;


    return (
        <div className="space-y-4">
            <h1 className="text 2xl font-bold">Fetching paralelo (Promise.all)</h1>
            <p className="rounded-lg bg-rose-50 px-4 py-2 text-rose-700">
                Tiempo total: <strong>{elapsed} ms</strong>
            </p>
            <p className="text-stone-600">
                Usuario: {profile.name} - {products.length} productos
            </p>
        </div>
    );

    
}