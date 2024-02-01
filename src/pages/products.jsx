import React, { useState } from 'react';
import CategoryList from '../components/listBox';
import { useGetProduct } from '../api/products';

const Products = () => {
  const [productId, setProductId] = useState('');
  const [modalData, setModalData] = useState('');
  const [visible, setVisible] = useState(false);

  const {
    data: products,
    isFetched,
    refetch,
    isLoading,
  } = useGetProduct({}, { productId });

  const handleCategory = (Id) => {
    setProductId(Id);
    refetch();
  };

  const handleModalData = (product) => {
    setModalData(product);
  };

  return (
    <section>
      <CategoryList handleCategory={handleCategory} />
      <article className="flex  flex-wrap">
        {isFetched && products?.length > 0 ? (
          products?.map((product) => (
            <aside
              key={product?.id}
              onClick={() => handleModalData(product)}
              className="w-[300px] h-[350px] shadow-lg rounded-md overflow-hidden my-3 mr-3 cursor-pointer"
            >
              <div className="w-full h-[200px]">
                <img
                  src={product?.images[0].url}
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="px-3">
                <h3 className="text-xl my-3 flex justify-between items-center">
                  <p>
                    <span className="block">{product?.name}</span>
                    <span className="block text-sm text-gray-400">
                      {product?.category}
                    </span>
                  </p>
                  <p>${product?.discountPrice}</p>
                </h3>
                <p>{product?.description}</p>
              </div>
            </aside>
          ))
        ) : (
          <p className="text-center w-full h-[300px] flex justify-center items-center">
            {isLoading ? (
              <span>loading Products</span>
            ) : (
              <span>No products</span>
            )}
          </p>
        )}
      </article>
      <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-xl bg-white">
        hi there
      </section>
    </section>
  );
};

export default Products;
