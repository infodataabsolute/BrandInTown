"use client";

import { Card, Text, Title, Progress, Group, Button, Container } from "@mantine/core";
import { useEffect, useState } from "react";

export default function ActivePage() {
  const items = [
    {
      title: "⚡ Beat the Clock",
      desc: "Complete task under 60 seconds",
      color: "indigo",
    },
    {
      title: "🧠 Spot the Error",
      desc: "Identify quality issues instantly",
      color: "teal",
    },
    {
      title: "🏆 Earn Badges",
      desc: "Complete challenges & level up",
      color: "pink",
    },
  ];

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const progressTimer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 2));
    }, 60);

    const slideTimer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
      setProgress(0);
    }, 3000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(slideTimer);
    };
  }, [paused]);

  return (
    <>
      {/* Page content */}
      <Container size="lg" py="xl">
        <Title order={2}>Active Page</Title>
        <Text c="dimmed">Your main content goes here</Text>
      </Container>

      {/* Auto-run component above footer */}
      <Container size="lg" pb="xl">
        <Card
          radius="xl"
          shadow="md"
          padding="lg"
          withBorder
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{
            height: 180,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Group justify="space-between" mb="xs">
              <Title order={4}>{items[index].title}</Title>
              <Text size="xs" fw={700} c={items[index].color}>
                LIVE
              </Text>
            </Group>

            <Text size="sm" c="dimmed">
              {items[index].desc}
            </Text>
          </div>

          <div>
            <Progress
              value={progress}
              color={items[index].color}
              size="sm"
              animated
            />

            <Button
              fullWidth
              mt="sm"
              radius="xl"
              variant="light"
              color={items[index].color}
            >
              Start
            </Button>
          </div>
        </Card>
      </Container>
    </>
  );
}
