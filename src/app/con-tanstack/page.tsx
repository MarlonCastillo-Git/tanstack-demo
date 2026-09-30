import ProductList from "@/components/ProductList";

export default function ConTanStackPage() {
    return (
        <div className="space-y-4">
            <a href="../anti-patron/">a página con anti-patrón</a>
            <h1 className="text-2xl font-bold">El mismo listado, con useQuery de TanStack</h1>
            <p className="text-stone-600">
                Si navegamos a otra página del menú y se regresa acá: la lista debe aparecer instantánea
                por caché, mientras TanStack revalida en segundo plano.
                Fíjate en el aviso de revalidando arriba de la lista
            </p>
            <ProductList/>
        </div>
    );
}