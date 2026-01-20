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
            </Card>
          ))}
        </Group>
      </div>
    </Container>
          </>
  );
}
