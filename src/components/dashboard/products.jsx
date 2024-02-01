import React from 'react';
import { useGetProducts } from '../../api/products';

const Products = () => {
  const { data: allProducts, isLoading, isFetched } = useGetProducts();
  console.log(allProducts);
  return (
    <article className="col-span-12 lg:col-span-4 bg-white rounded-lg p-3">
      <h3 className="my-3 capitalize text-lg font-semibold">Top Products</h3>
      {isFetched &&
        allProducts?.map((product) => (
          <aside className="flex items-center mb-4 shadow-md py-3 px-2 rounded-lg">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <img
                src={product?.images[0]?.url}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="mx-2">
                <span className="block">{product?.name}</span>
                <span className="block text-sm -translate-y-1 text-gray-400">
                  {product?.category}
                </span>
              </p>
              <p> $ {product?.discountPrice}</p>
            </div>
          </aside>
        ))}
    </article>
  );
};

export default Products;
