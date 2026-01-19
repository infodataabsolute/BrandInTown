'use client';

import { 
  Modal, 
  Button, 
  PasswordInput, 
  Text, 
  Stack, 
  Group, 
  Box, 
  Image, 
  CloseButton, 
  Center,
  TextInput,
  PinInput,
  Divider,
  Title
} from '@mantine/core';
import { useState } from 'react';
import { IconCheck, IconLock, IconPlayerPlayFilled } from '@tabler/icons-react';
// import { Router, useRouter } from 'next/router';
import { useRouter } from "next/navigation";

export default function ResetPasswordModal() {
  const brandColor = "#f2b052";
  const darkPurple = "#2e1a47";

  const [resetOpened, setResetOpened] = useState(false); // Reset Password modal
  const [otpOpened, setOtpOpened] = useState(true);      // OTP modal
  const [step, setStep] = useState("phone");
  const [view, setView] = useState<"signup" | "reset" | "login">("signup");

 
   const router = useRouter(); 

  // Open Reset Password modal after OTP verification
  const handleVerifyOTP = () => {
    setOtpOpened(false);
    setResetOpened(true);
  };

  
  const handleSavePassword = () => {
    setResetOpened(false);
    router.push("/Login"); // ✅ LOGIN PAGE REDIRECT
  };

  return (
    <>
      {/* Reset Password Modal */}
      <Modal
        opened={resetOpened}
        onClose={() => setResetOpened(false)}
        withCloseButton={false} 
        size="800px"
        padding={0}
        radius="lg"
        centered
      >
        <Group gap={0} wrap="nowrap" align="stretch">
          {/* Left Side */}
          <Box
            style={{
              flex: 1,
              position: 'relative',
              background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/login.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              minHeight: '500px',
            }}
          ></Box>

          {/* Right Side */}
          <Box style={{ flex: 1.2, padding: '40px', position: 'relative' }}>
            <CloseButton 
              onClick={() => setResetOpened(false)} 
              pos="absolute" 
              top={20} 
              right={20} 
              variant="subtle" 
            />
            
            <Stack align="center" gap="lg" mt="xl">
              <Box style={{ width: 170, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <Image src="/images/Logo.jpeg" alt="Illustration" />
              </Box>

              <Stack align="center" gap={4}>
                <Text  size="md" fw={600}>Create a new password.</Text>
              </Stack>

              <Stack w="100%" gap="md">
                <PasswordInput
                  label="New Password"
                  placeholder="Enter new password"
                  radius="md"
                  size="md"
                />
                <PasswordInput
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  radius="md"
                  size="md"
                />
                
                <Button 
                  fullWidth 
                  size="md" 
                  radius="md" 
                  mt="md"
                  onClick={handleSavePassword}
                  rightSection={<IconLock size={16} />}
                  style={{ backgroundColor: brandColor, color: darkPurple }}
                >
                  Save
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Group>
      </Modal>

      {/* OTP Modal */}
      <Modal
        opened={otpOpened}
        onClose={() => setOtpOpened(false)}
        size="780px"
        padding={0}
        withCloseButton
        centered
        radius="lg"
        styles={{
          content: { overflow: "hidden" },
          header: { position: "absolute", right: 10, top: 10, zIndex: 10, backgroundColor: "transparent" },
        }}
      >
        <Group grow gap={0} wrap="nowrap" align="stretch">
          {/* Left Section */}
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

          {/* Right Section */}
          <Box p={40} style={{ flex: 1.8 }}>
            <Stack align="center" gap="xs" mb="xl">
              <Center>
                <Image src="/images/Logo.jpeg" h={40} w="auto" />
              </Center>

              <Group gap="xs" mt={-5} w="100%" justify="center">
                <Box h={1} w={40} bg={brandColor} opacity={0.5} />
                <Text size="xs" c={darkPurple} fw={500}></Text>
                <Box h={1} w={40} bg={brandColor} opacity={0.5} />
              </Group>
            </Stack>

            {step === "phone" ? (
              <Stack gap="md">
                   <Group gap="xs" mt={-10} mb="lg">
                <Box h={1} w={30} bg="primary" />
                <Text size="md" fw={"600"} ml={30} >Authenticate Yourself.</Text>
                <Box h={1} w={30} bg="primary" />
              </Group>
                <Group>
                  <TextInput
                    defaultValue="+91"
                    variant="default"
                    readOnly
                    styles={{ input: { border: `1.5px solid ${brandColor}`, textAlign: "center", width: "50px", fontWeight: 600, marginLeft:"40px" } }}
                  />
                  <TextInput
                    placeholder="9012345678"
                    styles={{ input: { border: `1.5px solid ${brandColor}`, flex: 1, width: "150px" } }}
                  />
                </Group>

                <Button
                  fullWidth
                  size="md"
                  style={{ width: "250px", backgroundColor: brandColor, color: darkPurple }}
                  mt="md"
                  ml={20}
                  radius="md"
                  onClick={() => setStep("otp")}
                  rightSection={<IconPlayerPlayFilled size={16} />}
                >
                  Send OTP
                </Button>
              </Stack>
            ) : (
              <Stack gap="md" align="center">
                {/* <img src="/images/Logo.jpeg" alt="" /> */}
                <Text fw={600} c={darkPurple} size="sm">
                  A 4 digit code has been sent to you
                </Text>

                <PinInput
                  size="xl"
                  length={4}
                  placeholder="0"
                  type="number"
                  styles={{ input: { border: `1.5px solid ${brandColor}`, borderRadius: "8px" } }}
                />

                <Button
                  fullWidth
                  size="lg"
                  mt="md"
                  style={{ backgroundColor: brandColor, color: darkPurple }}
                  radius="md"
                  rightSection={<IconCheck size={18} />}
                  onClick={handleVerifyOTP} // Opens Reset Password modal
                >
                  Verify OTP
                </Button>

                <Stack gap={2} align="center" mt="sm">
                  <Text size="xs" >
                    Request code again <span style={{ color: brandColor }}>00:59s</span>
                  </Text>
                  <Divider label="Or" labelPosition="center" w="100%" my="xs" />
                  <Text
                    size="xs"
                    fw={700}
                    c={darkPurple}
                    style={{ cursor: "pointer" }}
                    onClick={() => setStep("phone")}
                  >
                    Edit phone number <span style={{ color: brandColor }}>+91-9012345678</span>
                  </Text>
                </Stack>
              </Stack>
            )}
          </Box>
        </Group>
      </Modal>
    </>
  );
}
