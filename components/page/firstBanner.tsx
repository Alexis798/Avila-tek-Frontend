import React from 'react';
import Image from 'next/image';
import dogEating from '../../assets/img/firstBanner.png';

function FirstBannerComponent() {
  return (
    <Image
      className="w-screen h-auto text-center mx-auto mb-20"
      alt="First Banner"
      src={dogEating}
    />
  );
}

export default FirstBannerComponent;
