// components/LoadingSkeleton.tsx
"use client"; // MUST be first line

import React from "react";
import { Flex, Skeleton, Stack } from "@mantine/core";

const SkeletonCard = () => {
  return (
    <Flex gap={16} align="center">
      <Skeleton height={80} width={80} radius="md" animate visible={true} />

      <Stack style={{ flex: 1, gap: 4 }}>
        <Skeleton color="red" height={20} radius="sm" width="70%" animate visible={true} />
        <Skeleton height={14} radius="sm" width="90%" animate visible={true} />
        <Skeleton height={14} radius="sm" width="50%" animate visible={true} />
      </Stack>
    </Flex>
  );
};

const LoadingSkeleton = () => {
    console.log("yes1")
  return (
    <Stack style={{ gap: 16 }}>
      {/* {Array.from({ length: 5 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))} */}
      <h1>hello</h1>
    </Stack>
  );
};

export default LoadingSkeleton;
