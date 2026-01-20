"use client";

import {
  Container,
  Box,
  Title,
  Text,
  Paper,
  Image,
  AspectRatio,
  rem,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
      
import CardSlider from "../components/banerslider"  
import "@mantine/carousel/styles.css";

/* -------------------- DUMMY DATA -------------------- */
const FASHION_DATA = [
  { img: "images/1.png" },
  { img: "images/2.png" },
  { img: "images/3.png" },
  { img: "images/4.png" },
  { img: "images/5.png" },
  { img: "images/7.png" },
];

/* -------------------- MAIN COMPONENT -------------------- */
export default function ProductGrid() {
  return (
    <Box bg="white" mih="100vh">

      <ProductSection
        id="fashion"
        title="Fashion, Accessories & Beauty"
        subtitle="Womens, Mens, Kids & Beauty Stores"
        data={FASHION_DATA}
      />

      <ProductSection
        id="jewellery"
        title="Jewellery"
        subtitle="Gold & Diamond Stores"
        data={FASHION_DATA}
      />


      <CardSlider/>

      <ProductSection
        id="sports"
        title="Sports"
        subtitle="Sports Wear & Equipment Stores"
        data={FASHION_DATA}
      />

      <ProductSection
        id="appliances"
        title="Home Appliance & Personal Gadget"
        subtitle="TV, Fridge, Laptops, Mobile, Tablets & Washing Machine Stores"
        data={FASHION_DATA}
      />

      <ProductSection
        id="home-decor"
        title="Home Decor"
        subtitle="Sofa, Bed, Couch, Chairs & Dining Table Stores"
        data={FASHION_DATA}
      />
      {/* <ProductSection
        id="#gadgets"
        title="Home Appliance & Personal Gadget"

        subtitle="TV, Fridge, Laptops, Mobile, Tablets & Washing Machine Stores"
        data={FASHION_DATA}
      /> */}


    </Box>
  );
}

/* -------------------- REUSABLE SECTION -------------------- */
function ProductSection({
  id,
  title,
  subtitle,
  data,
}: {
  id: string;
  title: string;
  subtitle: string;
  data: { img: string }[];
}) {
  return (
    <Container size="xl" py={40} id={id}>
      <Box ta="center" mb={30}>
        <Title order={2} fw={800}>
          {title}
        </Title>
        <Text c="dimmed" size="sm" fw={500}>
          {subtitle}
        </Text>
      </Box>

      <Carousel
        slideSize={{ base: "100%", sm: "50%", md: "25%", lg: "25%" }}
        slideGap="md"
      
        styles={{
          control: { backgroundColor: "white", color: "#000" },
          indicator: {
            backgroundColor: "#000",
            width: rem(8),
            height: rem(8),
          },
        }}
      >
        {data.map((item, index) => (
          <Carousel.Slide key={index}>
            <Paper radius="md" shadow="sm" withBorder>
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




// "use client";
// import {
//   Container,
//   Group,
//   TextInput,
//   Button,
//   UnstyledButton,
//   Image,
//   Box,
//   rem,
//   Indicator,
//   ActionIcon,
//   Menu,
//   Title,
//   Text,
//   SimpleGrid,
//   Paper,
//   AspectRatio,
  
// } from '@mantine/core';
// import { Carousel } from '@mantine/carousel';
// import { IconSearch, IconMapPin, IconChevronDown, IconUserCircle } from '@tabler/icons-react';
// import '@mantine/carousel/styles.css';
// // Dummy Data for Product/Sale Cards        
// const FASHION_DATA = [
//   { img: 'images/1.png' },
//   { img: 'images/2.png' },
//   { img: 'images/3.png' },
//   { img: 'images/4.png' },
//    { img: 'images/5.png' },
//     { img: 'images/7.png' },

// ];

// export default function ProductGrid() {
//   return (
//     <Box bg="text-white" min-h="100vh">
   
     

//       {/* --- PRODUCT CAROUSEL SECTION (Fashion & Life Style) --- */}
//       <ProductSection title="Fashion,Accessories & Beauty" subtitle="Womens, Mens, Kids & Beauty Stores" data={FASHION_DATA} />
//       <ProductSection title="Jewellary" subtitle="Gold & Diamond Stores" data={FASHION_DATA.slice(0, 4)} />

//       {/* --- SPORTS SECTION --- */}
//       <ProductSection title="Sports" subtitle="Sports Wear & Equipment Stores" data={FASHION_DATA.slice(0, 4)} />
//        <ProductSection title="Home Appliance & Prsonal Gadget" subtitle="Tv, Fridge, Laptops, Mobile, Tablets & Washing Machine Stores" data={FASHION_DATA.slice(0, 4)} />
//         <ProductSection title="Home Decor" subtitle="Sofa, Bed, Couch, Chairs & Dining Table Stores" data={FASHION_DATA.slice(0, 4)} />

//     </Box>
//   );
// }

// // Reusable Section Component for Fashion/Sports
// function ProductSection({ title, subtitle, data }: { title: string; subtitle: string; data: any[] }) {
//   return (
//     <Container size="xl" py={40} >
//       <Box ta="center" mb={30}>
//         <Title order={2}  fw={800}>{title}</Title>
//         <Text c="dimmed" size="sm" fw={500}>{subtitle}</Text>
//       </Box>

//       <Carousel
//         slideSize={{ base: '100%', sm: '50%', md: '25%',lg: "25%" }}
//         slideGap="md"
//         align="start"
//         slidesToScroll={1}
//         withIndicators
//         loop
//         styles={{
//           control: { backgroundColor: 'white', color: '#0000' },
//           indicator: { backgroundColor: '#0000', width: rem(8), height: rem(8) }
//         }}
//       >

      
//         {data.map((item, index) => (
//           <Carousel.Slide key={index}>
//             <Paper radius="md" shadow="sm" withBorder style={{ overflow: 'hidden' }}>
//               <AspectRatio ratio={4 / 5}>
//                 <Image src={item.img} alt="Product" />
//               </AspectRatio>
//             </Paper>
//           </Carousel.Slide>
//         ))}
//       </Carousel>
//     </Container>
//   );
// }