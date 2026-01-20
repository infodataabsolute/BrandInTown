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
  Modal,
  PinInput,
} from "@mantine/core";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconCheck, IconPlayerPlayFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function LoginPage() {
  const brandColor = "#f2b052";
  const darkPurple = "#2e1a47";

  const [isOpn, setIsOpn] = useState(false);
  const [step, setStep] = useState("phone"); // ADDED: step state
  const Router = useRouter();

  const Openeddddd = () => setIsOpn(true);
  const closeddddd = () => setIsOpn(false);

  return (
    <>
      <Grid h="100vh" m={0} gutter={0}>
        {/* LEFT BANNER */}
        <Grid.Col span={{ base: 0, sm: 6 }} p={0} visibleFrom="sm">
          <Box
            h="100vh"
            style={{
              backgroundColor: brandColor,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Text Container */}
            <Box
              style={{
                position: "absolute",
                top: "5%",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                color: "white",
                zIndex: 2,
                width: "100%",
              }}
            >
              <Title order={1} fw={800} style={{ fontSize: "2.5rem" }}>
                BrandInTown
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
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid.Col>

        {/* RIGHT LOGIN FORM */}
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Center h="100%" px="md">
            <Container size="xs" w="100%" p={0}>
              <Stack gap="md">
                <Center>
                  <Image src="/images/Logo.jpeg" w={200} alt="Login" />
                </Center>

                <Text size="md" c="dimmed" ta="center" fw={600}>
                  Please login to continue
                </Text>

                <TextInput
                  label="User Id"
                  placeholder="Enter your user ID"
                  size="md"
                  styles={{ input: { fontFamily: "Poppins, sans-serif" } }}
                />

                <TextInput
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  size="md"
                  styles={{ input: { fontFamily: "Poppins, sans-serif" } }}
                />

                <Group justify="space-between" wrap="wrap">
                  <Checkbox label="Remember me" size="sm" />
                  <Anchor
                    size="sm"
                    onClick={() => Router.push("/ForgotPassword")}
                    fw={500}
                  >
                    Forgot Password?
                  </Anchor>
                </Group>

                <Button
                  fullWidth
                  size="md"
                  radius="md"
                  style={{ backgroundColor: brandColor, color: darkPurple }}
                  onClick={() => Router.push("/PartnerDashboard")}
                >
                  Login
                </Button>

                <Divider label="Or" labelPosition="center" />

                <Text size="sm" ta="center">
                  Don’t have an account?{" "}
                  <Anchor
                    fw={700}
                    onClick={() => Router.push("/CreateAccount")}
                    color={brandColor}
                  >
                    Create Account
                  </Anchor>
                </Text>

                <Text size="xs" c="dimmed" ta="center" mt="sm">
                  By proceeding, you agree to Brand InTown{" "}
                <Anchor
    component={Link}
    href="/Terms-conditions"
  
    size="xs"
    fw={600}
  >
    Terms of Service
  </Anchor>{" "}
  and{" "}
  <Anchor
    component={Link}
    href="/privacy-policy"
  
    size="xs"
    fw={600}
  >
    Privacy Policy
  </Anchor>
                </Text>
              </Stack>
            </Container>
          </Center>
        </Grid.Col>
      </Grid>

      
    </>
  );
}
