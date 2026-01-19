"use client";

import { Carousel } from '@mantine/carousel';
import { 
  Box, 
  Text, 
  Title, 
  Button, 
  Group, 
  Container, 
  BackgroundImage, 
  Overlay,
  rem 
} from '@mantine/core';
import '@mantine/carousel/styles.css';

const SLIDE_DATA = [
  {
    image: '/images/banner.png', // Google/Unsplash Shoes Image
    // title: 'CHRISTMAS SALE',
    // subtitle: '20 - 26 DEC',
    // description: 'EXTRA 40% OFF ON SELECTED ITEMS*',
    // disclaimer: '*T&Cs and exclusion apply. See Promotions and Sale for more information',
  },
  {
    image: '/images/banner.png',
  
  },
   {
    image: '/images/banner.png',
  
  },
   {
    image: '/images/banner.png',
  
  },
   {
    image: '/images/banner.png',
  
  }
];

export default function HeroBanner() {
  return (
    <Carousel
   
      withIndicators
      classNames={{
        root: 'carousel-root',
        indicator: 'carousel-indicator',
      }}
      styles={{
        indicator: {
          width: rem(10),
          height: rem(10),
          transition: 'width 250s ease',
          backgroundColor: 'primary',
        },
        control: {
            // backgroundColor: 'lightgray',
            border: 'none'
        }
      }}
    >
      {SLIDE_DATA.map((slide, index) => (
        <Carousel.Slide key={index}>
          <Box style={{ position: 'relative', height: rem(450) }}>
            <BackgroundImage
              src={slide.image}
              
              h="98%"
              w="100%"
              style={{ display: 'flex', alignItems: 'center' }}
            >
            </BackgroundImage>
          </Box>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}