"use client";
import {
  Container,
  Group,
  TextInput,
  Button,
  UnstyledButton,
  Image,
  Box,
  rem,
  Indicator,
  ActionIcon,
  Menu,
  Title,
  Text,
  SimpleGrid,
  Paper,
  AspectRatio,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconSearch, IconMapPin, IconChevronDown, IconUserCircle } from '@tabler/icons-react';
import '@mantine/carousel/styles.css';
// Dummy Data for Product/Sale Cards        
const FASHION_DATA = [
  { img: 'images/1.png' },
  { img: 'images/2.png' },
  { img: 'images/3.png' },
  { img: 'images/4.png' },
   { img: 'images/5.png' },
    { img: 'images/7.png' },

];

export default function ProductGrid() {
  return (
    <Box bg="#ffff" minH="100vh">
   
     

      {/* --- PRODUCT CAROUSEL SECTION (Fashion & Life Style) --- */}
      <ProductSection title="Fashion,Accessories & Beauty" subtitle="Womens, Mens, Kids & Beauty Stores" data={FASHION_DATA} />
      <ProductSection title="Jewellary" subtitle="Gold & Diamond Stores" data={FASHION_DATA.slice(0, 4)} />

      {/* --- SPORTS SECTION --- */}
      <ProductSection title="Sports" subtitle="Sports Wear & Equipment Stores" data={FASHION_DATA.slice(0, 4)} />
       <ProductSection title="Home Appliance & Gadget Stores" subtitle="Tv, Fridge, Laptops, Mobile, Tablets & Washing Machine" data={FASHION_DATA.slice(0, 4)} />
        <ProductSection title="Home Decor" subtitle="Sofa, Bed, Couch, Chairs & Dining Table" data={FASHION_DATA.slice(0, 4)} />

    </Box>
  );
}

// Reusable Section Component for Fashion/Sports
function ProductSection({ title, subtitle, data }: { title: string; subtitle: string; data: any[] }) {
  return (
    <Container size="xl" py={40} >
      <Box ta="center" mb={30}>
        <Title order={2}  fw={800}>{title}</Title>
        <Text c="dimmed" size="sm" fw={500}>{subtitle}</Text>
      </Box>

      <Carousel
        slideSize={{ base: '100%', sm: '50%', md: '25%',lg: "25%" }}
        slideGap="md"
        align="start"
        slidesToScroll={1}
        withIndicators
        loop
        styles={{
          control: { backgroundColor: 'white', color: '#0000' },
          indicator: { backgroundColor: '#0000', width: rem(8), height: rem(8) }
        }}
      >

      {/* <Carousel
  slideSize={{
    base: "100%",       
    sm: "50%",       
    md: "33.3333%",  
    lg: "25%",       
    xl: "20%",       
    xxl: "16.66%", 
  }}
  slideGap="md"
  align="start"
  slidesToScroll={1}
  withIndicators
  loop
  dragFree
  styles={{
    control: { backgroundColor: "white", color: "#000" },
    indicator: { backgroundColor: "#000", width: rem(8), height: rem(8) },
  }}
> */}
        {data.map((item, index) => (
          <Carousel.Slide key={index}>
            <Paper radius="md" shadow="sm" withBorder style={{ overflow: 'hidden' }}>
              <AspectRatio ratio={4 / 5}>
                <Image src={item.img} alt="Product" />
              </AspectRatio>
            </Paper>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
}