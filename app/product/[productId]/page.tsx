import { getAllProducts, getProduct } from "@/app/lib/data";
import { Product } from "@/app/lib/definitions";
import ProductDetails from "./_components/product-details";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;

  const [products, selectProduct] = await Promise.all([
    getAllProducts(),
    getProduct(productId),
  ]);

  const product = products.find((product: Product) => product.id === productId);
  const category = selectProduct.extra_infos[0].value;
  const price = product.current_price[0].USD[0];
  return (
    <>
      <ProductDetails
        src={`http://api.timbu.cloud/images/${product?.photos[0]?.url}`}
        category={category}
        productPhotos={selectProduct.photos}
        price={price}
        product={product}
      />
    </>
  );
}
