import React from 'react';
import Image from 'next/image';
import allies from '../../assets/img/aliados.png';

function MarcasComponent() {
  const marcas = ['1', '2', '3', '4'];

  return (
    <>
      <div className="mx-auto max-w-2xl mb-10 lg:mx-0">
        <p className="mt-2 text-xs leading-8 text-gray-600">
          Lorem ipsum dolor sit amet.
        </p>
        <h6 className="text-xl font-bold tracking-tight text-red-600 sm:text-xl">
          TRABAJAMOS CON LAS MEJORES MARCAS
        </h6>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        <p className="mt-2 text-xs leading-8 text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, ad
          facere voluptatem laboriosam laborum ea! In neque, expedita a voluptas
          deserunt accusamus, tenetur, porro id architecto ipsam illo?
          Blanditiis, error?
        </p>
        <div className="grid gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {marcas.map((item) => (
            <div className="grid grid-rows-3 grid-flow-col gap-1" key={item}>
              <Image
                className="w-40 h-50 text-center mx-auto"
                alt={`${item} Logo`}
                src={allies}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MarcasComponent;
