import React from 'react';
import Image from 'next/image';
import petFace from '../../assets/img/petFace.png';

function ServicesComponent() {
  const services = [
    'Peluqueria',
    'Odontologia',
    'Veterinario',
    'Entrenamiento',
    'Psicologia canina',
    'Fiesta de cumpleaños',
  ];

  return (
    <div className="mb-20">
      <div className="mx-auto max-w-2xl mb-10 lg:mx-0">
        <p className="mt-2 text-xs leading-8 text-gray-600">
          Lorem ipsum dolor sit amet.
        </p>
        <h6 className="text-xl font-bold tracking-tight text-red-600 sm:text-xl">
          NUESTROS SERVICIOS
        </h6>
        <p className="mt-2 text-xs leading-8 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          repellendus aperiam.
        </p>
      </div>

      <div className="grid gap-9 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {services.map((item) => (
          <div className="content-start" key={item}>
            <Image
              className="w-20 h-auto text-center mx-auto"
              alt={`${item} Logo`}
              style={{ marginLeft: '0%' }}
              src={petFace}
            />
            <p className="py-7 text-md">{item}</p>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, a,
              rerum aperiam quos provident modi doloremque.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesComponent;
