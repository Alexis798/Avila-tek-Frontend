import React from 'react';
import Image from 'next/image';
import ServicesComponent from '../components/page/servicesComponent';
import CategoriesComponent from '../components/page/categoriesComponent';
import ProductComponent from '../components/page/productsComponent';
import FirstBannerComponent from '../components/page/firstBanner';
import SecondBannerComponent from '../components/page/secondBanner';
import LastProductsComponent from '../components/page/lastProducts';
import MarcasComponent from '../components/page/marcasComponent';
import FooterComponent from '../components/page/footerComponent';
import FooterLineComponent from '../components/page/footerLine';

import petFace from '../assets/img/dogHouse.png';
import three from '../assets/img/three.png';
import HeaderLineComponent from '../components/page/headerLine';
import HeaderComponent from '../components/page/headerComponent';
import ProductDestacadoComponent from '../components/page/productosDestacados';
import CarrouselComponent from '../components/page/carrouselComponent';

function HomePage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div>
        <HeaderLineComponent />
        <HeaderComponent />
        <CarrouselComponent />
      </div>

      <div className="px-40">
        <CategoriesComponent />
        <ProductDestacadoComponent />
        <FirstBannerComponent />
        <ProductComponent />
        <SecondBannerComponent />
        <LastProductsComponent />
        <ServicesComponent />
        <MarcasComponent />
      </div>

      <div className="bg-neutral-200">
        <div className="px-10 bg-neutral-200">
          <FooterComponent />
        </div>
        <div className="px-20">
          <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 inline-block">
            <div>
              <Image
                className="w-10 h-10 text-center"
                alt="Hola"
                style={{ marginLeft: '0%' }}
                src={petFace}
              />
            </div>
            <div>
              <Image
                className="w-10 h-10"
                alt="Hola"
                style={{ marginLeft: '95%' }}
                src={three}
              />
            </div>
          </div>
        </div>
        <FooterLineComponent />
      </div>
    </>
  );
}

export default HomePage;
