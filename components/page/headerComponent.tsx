import React from 'react';
import Image from 'next/image';
import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import logo from '../../assets/img/logo.png';

function HeaderComponent() {
  const navBar = [
    'Inicio',
    'Comprar por marca',
    'Comprar por mascota',
    'Nuestro servicios',
    'Promociones',
    'Nosotros',
  ];

  return (
    <div className="mt-8">
      <div className="grid gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <Image
            className="w-50 h-auto text-center mx-auto"
            alt="logo"
            src={logo}
          />
        </div>
        <div>
          <TextField
            id="filled-start-adornment"
            placeholder="Buscador"
            sx={{ width: '100%', backgroundColor: '#FFFFFF' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="grid grid-cols-9 pl-40">
          <i className="fa fa-map-marker text-gray-400" />
          <i className="fa fa-home text-gray-400" />
          <i className="fa fa-user text-gray-400" />
          <i className="fa fa-shopping-cart text-gray-400" />
        </div>
      </div>

      <div className="px-20 shadow-md pt-7">
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-6">
          {navBar.map((item) => (
            <div className="py-2" key={item}>
              <p className="text-center text-xs text-gray-600">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
