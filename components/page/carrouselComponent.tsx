import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import dog from '../../assets/img/dog.png';
import dogEat from '../../assets/img/Sin título.jpg';
import dogRelax from '../../assets/img/5439024.jpg';

function CarrouselComponent() {
  const imageData = [
    {
      label: 'Image 1',
      alt: 'image1',
      url: 'https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png',
    },
    {
      label: 'Image 2',
      alt: 'image2',
      url: 'https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg',
    },
    {
      label: 'Image 3',
      alt: 'image3',
      url: 'https://japan.stripes.com/sites/default/files/styles/community_site_carousel_750x500/public/article-images/main_13.jpg?itok=_GELFbpY',
    },
  ];

  const renderSlides = imageData.map((image) => (
    <div className="h-1/2" key={image.alt}>
      <Image src={dogRelax} />
    </div>
  ));

  return (
    <div style={{ width: '100%' }} className="mb-20">
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        transitionTime={100}
        showThumbs={false}
        className="carousel-container"
      >
        <div className="h-80">
          <Image
            className="w-screen h-auto text-center mx-auto"
            alt="First Banner"
            src={dog}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="h-80">
          <Image
            className="w-screen h-auto text-center mx-auto"
            alt="First Banner"
            src={dogEat}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="h-80">
          <Image
            className="w-screen h-auto text-center mx-auto"
            alt="First Banner"
            src={dogRelax}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default CarrouselComponent;
