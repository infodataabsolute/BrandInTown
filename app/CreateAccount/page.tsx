"use client";

import { useState } from "react";
import {
  Modal,
  Button,
  TextInput,
  PasswordInput,
  Text,
  Title,
  Stack,
  Group,
  Box,
  Image,
  CloseButton,
  Anchor,
  Center,
  PinInput,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconSend,
  IconLock,
  IconChevronLeft,
  IconCheck,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function AuthModal() {
  const router = useRouter();

  const [opened, { close }] = useDisclosure(true);
  const [otpOpened, setOtpOpened] = useState(false);
  const [view, setView] = useState<"signup" | "reset" | "login">("signup");

  return (
    <>
      {/* ================= AUTH MODAL ================= */}
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="780px"
        padding={0}
        radius="lg"
        centered
      >
        <Group gap={0} wrap="nowrap" align="stretch">
          {/* LEFT */}
          <Box
            visibleFrom="sm"
            style={{
              flex: 1,
              backgroundImage:
                "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url('/images/login.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: 40,
              color: "#fff",
              display: "flex",
              paddingLeft: "70px"
              // alignItems: "center",
            }}
          >
            <Stack>
              <Title order={1} fw={800}>
                BrandInTown
              </Title>
              <Text size="lg">
                Discover Deals, Earn Rewards, Shop Smarter!
              </Text>
            </Stack>
          </Box>
          {/* RIGHT */}
          <Box
            style={{
              flex: 1.2,
              padding: 40,
              position: "relative",
              backgroundColor: "#fff",
            }}
          >
            <CloseButton onClick={close} pos="absolute" top={15} right={15} />

            <Stack align="center">
              <Center w={160}>
                <Image src="/images/Logo.jpeg" alt="Logo" />
              </Center>

              {view === "signup" && (
                <SignupView setOtpOpened={setOtpOpened} />
              )}

              {view === "reset" && (
                <ResetPasswordView setView={setView} />
              )}
            </Stack>
          </Box>
        </Group>
      </Modal>

      {/* ================= OTP MODAL ================= */}
      <Modal
        opened={otpOpened}
        onClose={() => setOtpOpened(false)}
        centered
        size="60%"
      
         
      >
        <Group grow gap={0} wrap="wrap" align="stretch">
          {/* LEFT IMAGE */}
          <Box
            visibleFrom="sm"
            style={{
              flex: 1,
              backgroundImage:
                "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url('/images/login.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: 40,
              color: "#fff",
              display: "flex",
              paddingLeft: "70px",
              alignItems: "center",
            }}
          >
            
            <Stack>
              <Title order={1} fw={800}>
                BrandInTown
              </Title>
              <Text size="lg">
                Discover Deals, Earn Rewards, Shop Smarter!
              </Text>
            </Stack>
          </Box>

          {/* RIGHT OTP */}
          <Stack gap="md" align="center" justify="center" p="xl">
             <Center>
                <Image src="/images/Logo.jpeg" h={40} w="auto" />
              </Center>
            <Text fw={600} size="sm">
              A 4 digit code has been sent to you
            </Text>

            <PinInput length={4} size="xl" />

            <Button
              fullWidth
              size="lg"
              radius="md"
              rightSection={<IconCheck size={18} />}
              onClick={() => router.push("/Login")}
            >
              Verify OTP
            </Button>

            <Stack gap={2} align="center" mt="sm">
              <Text size="xs" c="dimmed">
                Request code again <b>00:59s</b>
              </Text>

              <Divider label="Or" labelPosition="center" w="100%" />

              <Text size="xs" fw={700} style={{ cursor: "pointer" }}>
                Edit phone number <span>+91-9012345678</span>
              </Text>
            </Stack>
          </Stack>
        </Group>
      </Modal>
    </>
  );
}

/* ================= SIGNUP ================= */
function SignupView({
  setOtpOpened,
}: {
  setOtpOpened: (v: boolean) => void;
}) {
  const router = useRouter();

  return (
    <Stack w="100%" gap="sm">
      <Text size="md" c="dimmed" ta="center" fw={600}>
        Enter details to receive OTP
      </Text>

      <TextInput placeholder="Email ID" />
      <PasswordInput placeholder="Password" />
      <TextInput placeholder="Phone Number" />

      <Button
        fullWidth
        rightSection={<IconSend size={16} />}
        onClick={() => setOtpOpened(true)}
      >
        Send OTP
      </Button>

      <Text size="sm" ta="center">
        Already have an account?{" "}
        <Anchor onClick={() => router.push("/Login")}>Login</Anchor>
      </Text>
    </Stack>
  );
}

/* ================= RESET PASSWORD ================= */
function ResetPasswordView({
  setView,
}: {
  setView: (v: "signup") => void;
}) {
  return (
    <Stack w="100%">
      <Title order={2}>Reset Password</Title>

      <PasswordInput placeholder="New Password" />
      <PasswordInput placeholder="Confirm Password" />

      <Button rightSection={<IconLock size={16} />}>
        Save Password
      </Button>

      <Button
        variant="subtle"
        leftSection={<IconChevronLeft size={16} />}
        onClick={() => setView("signup")}
      >
        Back to Signup
      </Button>
    </Stack>
  );
}
