"use client"; // necesita useState/useEffect para manejar el fetch a mano
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Product } from "@/lib/data"; 
export default function AntiPatronPage() {
const [data, setData] = useState<Product[]>([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- a proposito: asi luce el anti-patron que vamos a reemplazar
    setLoading(true);
    fetch("/api/products")
    .then((res) => res.json())
    .then(setData)
    .catch(() => setError("Error al cargar productos"))
    .finally(() => setLoading(false));
    }, []);

    return (
        <div className="space-y-4">
            <Link href="/con-tanstack">a página con tanstack</Link>
            <h1 className="text-2xl font-bold">1. Fetch manual con useEffect</h1>
            <p className="text-stone-600">
            Funciona, pero fíjate en todo lo que tuvimos que escribir para algo tan
            simple: 3 estados, un <code>useEffect</code>, y ningún caché — si
            navegas a otra página y regresas, vuelve a pedir todo desde cero.
            </p>
            {loading && <p>Cargando...</p>}
            {error && <p className="text-rose-600">{error}</p>}
            <ul className="divide-y divide-stone-200 rounded-xl border border-stone-200 bg-white">
            {data.map((p) => (
                <li key={p.id} className="flex justify-between px-4 py-3">
                    <span>{p.title}</span>
                    <span className="text-stone-500">${p.price.toFixed(2)}</span>
                </li>
            ))}
            </ul>
        </div>
    );
}