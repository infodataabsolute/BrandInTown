"use client";

import {
  Grid,
  Box,
  Title,
  Text,
  TextInput,
  Button,
  Checkbox,
  Group,
  Divider,
  Anchor,
  Center,
  Image,
  Stack,
  Container,
} from "@mantine/core";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <Grid h="100vh" m={0} gutter={0}>
      {/* LEFT BANNER: Mobile par hide ho jayega (hiddenFrom="sm") */}
      <Grid.Col span={{ base: 0, sm: 6 }} p={0} visibleFrom="sm">
        <Box
          h="100vh"
          style={{
            backgroundColor: "#F2B052",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Text Container */}
          <Box
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              color: "white",
              zIndex: 2,
              width: "100%",
            }}
          >
            <Title order={1} fw={800} style={{ fontSize: "2.5rem" }}>
              Brand In Town
            </Title>
            <Text size="xl">Show best deal to your customers</Text>
          </Box>

          {/* Banner Image */}
          <Image
            src="/images/Login.jpeg"
            alt="Brand Banner"
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              // height: "70%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Grid.Col>

      {/* RIGHT LOGIN FORM: Mobile par full width lega (span 12) */}
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <Center h="100%" px="md">
          <Container size="xs" w="100%" p={0}>
            <Stack gap="md">
              <Center>
                <Image
                  src="/images/Logo.jpeg"
                  w={200}
                  // h={100}
                  // style={{ borderRadius: "50%" }}
                  alt="Login"
                />
              </Center>
{/* 
              <Title order={3} ta="center">
                Log In to Brand In Town 🏪
              </Title> */}

              <Text size="sm" c="dimmed" ta="center">
                Please login to continue
              </Text>

              <TextInput
                label="User Id"
                placeholder="Enter your user ID"
                size="md"
                styles={{
                  input: { fontFamily: "Poppins, sans-serif" },
                }}
              />

              <TextInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                size="md"
                styles={{
                  input: { fontFamily: "Poppins, sans-serif" },
                }}
              />

              <Group justify="space-between" wrap="wrap">
                <Checkbox label="Remember me" size="sm" />
                <Anchor
                  size="sm"
                  onClick={() => router.push("/ForgotPassword")}
                  fw={500}
                >
                  Forgot Password?
                </Anchor>
              </Group>

              <Button
                color="orange"
                fullWidth
                size="md"
                radius="md"
                style={{ backgroundColor: "#F2B052" }}
                onClick={() => router.push("/PartnerDashboard")}
              >
                Login
              </Button>

              <Divider label="Or" labelPosition="center" />

              <Text size="sm" ta="center">
                Don’t have an account?{" "}
                <Anchor
                  fw={700}
                  onClick={() => router.push("/CreateAccount")}
                  color="orange"
                >
                  Create Account
                </Anchor>
              </Text>

              <Text size="xs" c="dimmed" ta="center" mt="sm">
                By proceeding, you agree to Brand InTown{" "}
                <Anchor size="xs">Terms of Service</Anchor> and{" "}
                <Anchor size="xs">Privacy Policy</Anchor>.
              </Text>
            </Stack>
          </Container>
        </Center>
      </Grid.Col>
    </Grid>
  );
}