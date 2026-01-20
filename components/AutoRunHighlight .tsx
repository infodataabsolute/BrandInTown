"use client";

import {
  Card,
  Text,
  Title,
  Group,
  Image,
  Badge,
  Container,
} from "@mantine/core";
import { useEffect, useRef } from "react";

export default function StoreActivityFeed() {
  const activities = [
    {
      store: "Reliance Trends",
      activity: "12 customers shopping now",
      image: "/images/image 148.png",
    },
    {
      store: "DMart",
      activity: "Flash offer on groceries",
      image: "/stores/dmart.jpg",
    },
    {
      store: "Zudio",
      activity: "New arrivals launched",
      image: "/stores/zudio.jpg",
    },
    {
      store: "Food Court",
      activity: "High footfall detected",
      image: "/stores/foodcourt.jpg",
    },
    {
      store: "Pantaloons",
      activity: "3 orders placed recently",
      image: "/stores/pantaloons.jpg",
    },
    {
      store: "INOX Mall",
      activity: "Movie tickets selling fast",
      image: "/stores/inox.jpg",
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
    <Container size="lg" py="xl">
      <Title order={3} mb="sm">
        🔥 Live Activity Near You
      </Title>

      <Text size="sm" c="dimmed" mb="md">
        8 activities happening in nearby stores & mall
      </Text>

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <Group gap="md" wrap="nowrap">
          {list.map((item, index) => (
            <Card
              key={index}
              shadow="sm"
              radius="lg"
              withBorder
              style={{
                minWidth: "23%", // 4 items visible
                flexShrink: 0,
              }}
            >
              <Group wrap="nowrap">
                <Image
                  src={item.image}
                  height={100}
                  width={60}
                  radius="md"
                  alt={item.store}
                />

                <div>
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
                </div>
              </Group>
            </Card>
          ))}
        </Group>
      </div>
    </Container>
  );
}
