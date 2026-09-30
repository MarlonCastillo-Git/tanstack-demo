"use client";

import { useQuery } from "@tanstack/react-query";
import type { Product } from "@/lib/data";


async function fetchProducts(): Promise<Product[]> {
    const res = await fetch("/api/products");
    if (!res.ok) throw new Error ("Error al cargar los productos");
    return res.json();
}

export default function ProductList() {
    const { data, isLoading, error, isFetching, refetch, dataUpdatedAt } =
        useQuery ({
            queryKey: ["products"],
            queryFn: fetchProducts,
            staleTime: 1000 * 60, // 1 min, dentro de esta ventana, NO debe volver a pedir
        });

        if (isLoading) return <p>Cargando... </p>;
        if (error instanceof Error) return <p className="text-rose-600">{error.message}</p>;

        return (
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <p className="text-xs text-stone-500">
                        Actualizado: {new Date(dataUpdatedAt).toLocaleString()}
                        {isFetching && "  -  revalidando..."}
                    </p>
                    <button onClick={() => refetch()}
                        className="rounded-lg border border-stone-300 px-3 py-1 text-xs font-medium hover:bg-stone-100">
                            Refrescar
                    </button>
                </div>
                <ul className="divide-y divide-stone-200 rounded-xl border border-stone-200 bg-white">
                    {data?.map((p) => (
                        <li key={p.id} className="flex justify-between px-4 py-3">
                            <span>{p.title} </span>
                            <span className="text-stone-500"> ${p.price.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )

}