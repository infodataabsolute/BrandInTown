"use client";

import {
  Card,
<<<<<<< HEAD
  Text,
  Title,
  Group,
  Image,
  Badge,
  Container,
  Box,
=======
  Container,
  Group,
  Image,
>>>>>>> 80ca922 (Initial commit)
} from "@mantine/core";
import { useEffect, useRef } from "react";

export default function StoreActivityFeed() {
  const activities = [
<<<<<<< HEAD
    {
      store: "Reliance Trends",
      activity: "12 customers shopping now",
      image: "/images/1.png",
    },
    {
      store: "DMart",
      activity: "Flash offer on groceries",
      image: "/images/1.png",
    },
    {
      store: "Zudio",
      activity: "New arrivals launched",
      image: "/images/1.png",
    },
    {
      store: "Food Court",
      activity: "High footfall detected",
      image: "/images/1.png",
    },
    {
      store: "Pantaloons",
      activity: "3 orders placed recently",
      image: "/images/1.png",
    },
   
  ];

  // duplicate list for infinite scroll
=======
    { store: "Reliance Trends", image: "/images/1.png" },
    { store: "DMart", image: "/images/1.png" },
    { store: "Zudio", image: "/images/1.png" },
    { store: "Food Court", image: "/images/1.png" },
    { store: "Pantaloons", image: "/images/1.png" },
    { store: "Reliance Trends", image: "/images/1.png" },
    { store: "DMart", image: "/images/1.png" },
    { store: "Zudio", image: "/images/1.png" },
    { store: "Food Court", image: "/images/1.png" },
    { store: "Pantaloons", image: "/images/1.png" },
    { store: "Reliance Trends", image: "/images/1.png" },
    { store: "DMart", image: "/images/1.png" },
    { store: "Zudio", image: "/images/1.png" },
    { store: "Food Court", image: "/images/1.png" },
    { store: "Pantaloons", image: "/images/1.png" },
  ];

>>>>>>> 80ca922 (Initial commit)
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
<<<<<<< HEAD
    }, 20); // speed
=======
    }, 20);
>>>>>>> 80ca922 (Initial commit)

    return () => clearInterval(interval);
  }, []);

  return (
<<<<<<< HEAD
    <>
    
      
             {/* <Box ta="center" mb={30}>
              <Title order={2} fw={800}>
                 Shop By Brands
              </Title>
              <Text c="dimmed" size="sm" fw={500}>
             FInd your favorite brands and explore trending names, All in one place.
              </Text>
            </Box> */}
    <Container size="xl" py="xl">
      {/* <Title order={3} mb="sm">
        🔥 Live Activity Near You
        </Title>
        
        <Text size="sm" c="dimmed" mb="md">
        8 activities happening in nearby stores & mall
      </Text> */}



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
              // radius="md"
              // withBorder
              style={{
                minWidth: "23%", // 4 items visible
                flexShrink: 0,
              }}
              >
              <Group wrap="nowrap">
                <Image
                  src={item.image}
                  height={40}
                  width={40}
                  // radius="md"
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
=======
    <Container size="100%" py="xl">
      {/* Scroll Wrapper */}
      <div
        ref={scrollRef}
        style={{
          overflowX: "hidden",
          width: "100%",
        }}
      >
        <Group wrap="nowrap" gap="md">
          {list.map((item, index) => (
            <Card
              key={index}
              padding={0}
              radius="md"
              style={{
                width: "260px",        // FIXED WIDTH
                height: "160px",       // FIXED HEIGHT
                flexShrink: 0,         // VERY IMPORTANT
                overflow: "hidden",
              }}
            >
              <Image
                src={item.image}
                alt={item.store}
                w="100%"
                h="100%"
                fit="cover"
              />
>>>>>>> 80ca922 (Initial commit)
            </Card>
          ))}
        </Group>
      </div>
    </Container>
<<<<<<< HEAD
          </>
=======
>>>>>>> 80ca922 (Initial commit)
  );
}
