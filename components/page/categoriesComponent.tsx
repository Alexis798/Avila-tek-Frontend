import React from 'react';
import Image from 'next/image';
import petFace from '../../assets/img/petFace.png';

function CategoriesComponent() {
  const title = 'una gran variedad de categorías';
  const categories = [
    'Perros',
    'Gatos',
    'Peces',
    'Roedores',
    'Reptiles',
    'Placeholder',
  ];

  return (
    <>
      <div className="mx-auto max-w-2xl mb-10 lg:mx-0">
        <p className="mt-2 text-xs leading-8 text-gray-600">
          Lorem ipsum dolor sit amet.
        </p>
        <h6 className="text-xl font-bold tracking-tight text-red-600 sm:text-xl">
          {title.toUpperCase()}
        </h6>
      </div>

      <div className="grid gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-6">
        {categories.map((item) => (
          <div className="grid grid-rows-3 grid-flow-col gap-1" key={item}>
            <Image
              className="w-20 h-auto text-center mx-auto"
              alt={`${item} Logo`}
              src={petFace}
            />
            <p className="text-center">{item}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CategoriesComponent;
