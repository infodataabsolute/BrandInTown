// 'use client';

// import { useRef } from 'react';
// import { Carousel } from '@mantine/carousel';
// import { Image, Container, Box } from '@mantine/core';
// import Autoplay from 'embla-carousel-autoplay';
// import '@mantine/carousel/styles.css';

// const logos = [
//   { src: '/images/a.png', alt: 'Chanel' },
//   { src: '/images/b.png', alt: 'Adidas' },
//   { src: '/images/c.png', alt: 'Vogue' },
//   { src: '/images/d.png', alt: 'Dior' },
//   { src: '/images/e.png', alt: 'H&M' },
//   { src: '/images/f.png', alt: 'Hollister' },
//   { src: '/images/g.png', alt: 'Nike' },
//   { src: '/images/a.png', alt: 'Gucci' },
//   { src: '/images/d.png', alt: 'Dior' },
//   { src: '/images/e.png', alt: 'H&M' },
//   { src: '/images/f.png', alt: 'Hollister' },
//   { src: '/images/g.png', alt: 'Nike' },
//   { src: '/images/a.png', alt: 'Gucci' },
// ];

// export default function LogoCarousel() {
//   const autoplay = useRef(
//     Autoplay({ delay: 800, stopOnInteraction: false })
//   );

//   return (
//     <>
  
//     <Container size="lg" py="xl">
//       <Carousel
//         withControls={false}
//         withIndicators={false}
//         height={100}
//         align="center"
//         slideGap="xl"
//         slideSize={{ base: '40%', sm: '25%', md: '16%', lg: '12%' }}
//         loop
//         dragFree
//         plugins={[autoplay.current]}
//         onMouseEnter={() => autoplay.current.stop()}
//         onMouseLeave={() => autoplay.current.reset()}
//       >
//         {logos.map((logo, index) => (
//           <Carousel.Slide key={index}>
//             <Box
//               style={{
//                 height: '100%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//             >
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 height={40}
//                 fit="contain"
//                 style={{
//                   filter: 'grayscale(100%)',
//                   opacity: 0.9,
//                 }}
//               />
//             </Box>
//           </Carousel.Slide>
//         ))}
//       </Carousel>
//     </Container>


    
//     </>
//   );
// }




​

"use client";

import {
  Card,
  Text,
  Title,
  Group,
  Image,
  Badge,
  Container,
  Box,
} from "@mantine/core";
import { useEffect, useRef } from "react";

export default function StoreActivityFeed() {
  const activities = [
    {
      store: "Reliance Trends",
      activity: "12 customers shopping now",
      image: "/images/a.png",
    },
    {
      store: "DMart",
      activity: "Flash offer on groceries",
      image: "/images/b.png",
    },
    {
      store: "Zudio",
      activity: "New arrivals launched",
      image: "/images/c.png",
    },
    {
      store: "Food Court",
      activity: "High footfall detected",
      image: "/images/d.png",
    },
    {
      store: "Pantaloons",
      activity: "3 orders placed recently",
      image: "/images/e.png",
    },
    {
      store: "INOX Mall",
      activity: "Movie tickets selling fast",
      image: "/images/f.png",
    },
    {
      store: "Croma",
      activity: "Electronics demo running",
      image: "/images/d.png",
    },
    {
      store: "Nike Store",
      activity: "Limited stock alert",
      image: "/images/g.png",
    },
  ];

  // duplicate list for infinite scroll
  const list = [...activities, ...activities];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scroll = 0;

    const interval = setInterval(() => {
      scroll += 1;
      el.scrollLeft = scroll;

      if (scroll >= el.scrollWidth / 2) {
        scroll = 0;
        el.scrollLeft = 0;
      }
    }, 20); // speed

    return () => clearInterval(interval);
  }, []);

  return (
    <Container size="xl" py="xl">
      {/* <Title order={3} mb="sm">
        🔥 Live Activity Near You
      </Title>

      <Text size="sm" c="dimmed" mb="md">
        8 activities happening in nearby stores & mall
      </Text> */}




    {/* <Box ta="center" mb={30}>
              <Title order={2} fw={800}>
                 Shop By Brands
              </Title>
              <Text c="dimmed" size="sm" fw={500}>
             FInd your favorite brands and explore trending names, All in one place.
              </Text>
            </Box> */}



      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <Group gap="sm" wrap="nowrap">
          {list.map((item, index) => (
            <Card
              key={index}
              // shadow="sm"
              // radius="50%"
              // withBorder
              style={{
                // minWidth: "23%", // 4 items visible
                flexShrink: 0,
              }}
            >
              <Group wrap="nowrap">
                <Image
                  src={item.image}
                  height={60}
                  width={50}
                  radius="md"
                  alt={item.store}
                />

                {/* <div>
                  <Group gap={6}>
                    <Text fw={600} size="sm">
                      {item.store}
                    </Text>
                    <Badge size="xs" color="green" variant="light">
                      LIVE
                    </Badge>
                  </Group>

                  <Text size="xs" c="dimmed" mt={4}>
                    {item.activity}
                  </Text>
                </div> */}
              </Group>
            </Card>
          ))}
        </Group>
      </div>
    </Container>
  );
}
