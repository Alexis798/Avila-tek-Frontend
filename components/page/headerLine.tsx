import React from 'react';

function HeaderLineComponent() {
  return (
    <div className="bg-rose-700">
      <div className="grid gap-9 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
        <div className="content-start">
          <p className="text-sm text-white text-end py-1">
            <i className="fa fa-map-marker text-white px-1" />
            Bello Monte
            <i className="fa fa-chevron-down text-white px-1" />
            <i className="fa fa-instagram text-white px-2" />
            <i className="fa fa-twitter text-white px-2" />
            <i className="fa fa-facebook text-white px-2" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderLineComponent;
