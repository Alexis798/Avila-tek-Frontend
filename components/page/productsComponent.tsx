import React from 'react';
import Image from 'next/image';
import product from '../../assets/img/productPet.png';

function ProductComponent() {
  const products = ['1', '2', '3', '4', '5'];

  return (
    <div className="mb-20">
      <div className="mx-auto max-w-2xl mb-10 lg:mx-0">
        <p className="mt-2 text-xs leading-8 text-gray-600">
          Lorem ipsum dolor sit amet.
        </p>
        <h6 className="text-xl font-bold tracking-tight text-red-600 sm:text-xl">
          PRODUCTOS POPULARES
        </h6>
      </div>

      <div className="grid gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
        {products.map((item) => (
          <div className="grid gap-2" key={item}>
            <Image
              className="w-20 h-auto text-center mx-auto"
              alt={`${item} product`}
              src={product}
            />
            <p className="text-left text-xs text-gray-600">
              1st Choice Pussy Chiot
            </p>
            <div className="grid grid-cols-9">
              <i className="fa fa-paw text-gray-400" />
              <i className="fa fa-paw text-gray-400" />
              <i className="fa fa-paw text-gray-400" />
            </div>
            <p className="text-left text-xs text-gray-400">$ 9,99</p>
            <div className="content-center">
              <button
                type="button"
                className="bg-red-600 hover:bg-red-900 text-white font-bold py-1 px-4 rounded w-40"
              >
                <i className="fa fa-shopping-cart text-white-400 px-2" />
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductComponent;
