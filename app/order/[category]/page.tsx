import ProductCard from "@/components/Products/ProductCard";
import { prisma } from "@/src/lib/prisma";

async function getProducts(category: string) {
  return await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });
}

async function OrderPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const products = await getProducts(category);

  return (
    <>
      <h1 className="text-2xl my-10">Elige tu pedido a continuación</h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
export default OrderPage;
