import React from 'react';
import Image from 'next/image';
import dogRelax from '../../assets/img/secondBanner.png';

function SecondBannerComponent() {
  return (
    <Image
      className="w-screen h-auto text-center mx-auto mb-20"
      alt="First Banner"
      src={dogRelax}
    />
  );
}

export default SecondBannerComponent;
