// components/LoadingSkeleton.tsx
"use client";

import { Flex, Skeleton, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const SkeletonCard = () => {
  // 📱 Mobile
  const isMobile = useMediaQuery("(max-width: 768px)");

  // 💻 Laptop
  const isLaptop = useMediaQuery("(min-width: 769px) and (max-width: 1200px)");

  // 🖥️ Large Monitor
  const isDesktop = useMediaQuery("(min-width: 1201px)");

  return (
    <Flex
      gap={16}
      align={isMobile ? "flex-start" : "center"}
      direction={isMobile ? "column" : "row"}
      w="100%"
    >
      {/* Image Skeleton */}
      <Skeleton
        height={isMobile ? 120 : 80}
        width={isMobile ? "100%" : 80}
        radius="md"
        animate
        visible
      />

      {/* Text Skeletons */}
      <Stack
        style={{
          flex: 1,
          gap: 8,
          width: "100%",
        }}
      >
        <Skeleton
          height={22}
          width={
            isDesktop ? "40%" : isLaptop ? "60%" : "80%"
          }
          animate
          visible
        />

        <Skeleton
          height={14}
          width={isMobile ? "100%" : "90%"}
          animate
          visible
        />

        <Skeleton
          height={14}
          width={isDesktop ? "50%" : "70%"}
          animate
          visible
        />
      </Stack>
    </Flex>
  );
};

const LoadingSkeleton = () => {
  return (
    <Stack
      style={{
        gap: 24,
        width: "100%",
        padding: 16,
      }}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </Stack>
  );
};

export default LoadingSkeleton;
