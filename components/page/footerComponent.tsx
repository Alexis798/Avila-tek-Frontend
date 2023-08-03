import React from 'react';

function FooterComponent() {
  return (
    <div className="mb-20">
      <div className="grid gap-9 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="content-start">
          <p className="py-7 text-md text-red-600">Sobre nosotros</p>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, a,
            rerum aperiam quos provident modi doloremque.
          </p>
        </div>

        <div className="content-start">
          <p className="py-7 text-md text-red-600">Mi Cuenta</p>
          <p className="text-sm text-gray-500 mb-3">Informacion personal</p>
          <p className="text-sm text-gray-500 mb-3">Direcciones</p>
          <p className="text-sm text-gray-500 mb-3">Mascotas</p>
          <p className="text-sm text-gray-500 mb-3">Ordenes</p>
          <p className="text-sm text-gray-500 mb-3">Agenda</p>
        </div>

        <div className="content-start">
          <p className="py-7 text-md text-red-600">Informacion</p>
          <p className="text-sm text-gray-500 mb-3">Formulario de contacto</p>
          <p className="text-sm text-gray-500 mb-3">Preguntas frecuentes</p>
          <p className="text-sm text-gray-500 mb-3">Terminos y condiciones</p>
          <p className="text-sm text-gray-500 mb-3">Politica de privacidad</p>
        </div>

        <div className="content-start">
          <p className="py-7 text-md text-red-600">Atencion al cliente</p>
          <p className="text-sm text-gray-500 mb-3">
            Bello Monte, calle XXXX, local 1
          </p>
          <p className="text-sm text-gray-500 mb-3">(0212) 575 54 12</p>
          <p className="text-sm text-gray-500 mb-3">soporte@maxipet.com</p>
          <p className="text-sm text-gray-500 mb-3">Lunes a Viernes</p>
          <p className="text-sm text-gray-500 mb-3">9:00 a.m. - 5:00 p.m.</p>
          <div className="grid grid-cols-9">
            <i className="fa fa-instagram text-gray-500" />
            <i className="fa fa-twitter text-gray-400" />
            <i className="fa fa-facebook text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
