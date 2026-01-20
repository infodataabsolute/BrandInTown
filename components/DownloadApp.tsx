"use client";

import {
  Container,
  Grid,
  Title,
  Text,
  Button,
  Image,
  Group,
  Stack,
  Paper,
} from "@mantine/core";
import { IconBrandAndroid, IconBrandApple } from "@tabler/icons-react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function DownloadAppPage() {
  return (
    <>
    <Navbar/>
    
    
    <Container size="xl" py="xl">
      <Paper radius="lg" p="xl" withBorder>
        <Grid align="center">
          {/* LEFT CONTENT */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <Title order={2}>
                Download the <span style={{ color: "#f2b052" }}>BrandInTown</span>{" "}
                App
              </Title>

              <Text c="dimmed" size="md">
                Discover nearby stores, live activities, exclusive deals, and
                rewards — all in one place. Shop smarter with BrandInTown.
              </Text>

              <Group mt="md">
                <Button
                  size="lg"
                  radius="md"
                  leftSection={<IconBrandAndroid size={22} />}
                  color="dark"
                  >
                  Google Play
                </Button>

                <Button
                  size="lg"
                  radius="md"
                  leftSection={<IconBrandApple size={22} />}
                  variant="outline"
                  >
                  App Store
                </Button>
              </Group>

              <Text size="xs" c="dimmed" mt="sm">
                Available for Android & iOS devices
              </Text>
            </Stack>
          </Grid.Col>

          {/* RIGHT IMAGE */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src="/images/logo.jpeg"
              radius="md"
              alt="Mobile App Preview"
              />
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
    <Footer/>
              </>
  );
}
