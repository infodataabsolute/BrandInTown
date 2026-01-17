'use client';

import { useState } from 'react';
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
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLock, IconSend, IconBuildingStore, IconChevronLeft } from '@tabler/icons-react';
  import { useRouter } from "next/navigation";

export default function AuthModals() {
   const router = useRouter();
  const [opened, { open, close }] = useDisclosure(true);
  // View handle karne ke liye state: 'login' | 'signup' | 'reset'
  const [view, setView] = useState('signup');
    
  return (
    <Modal
      opened={opened}
      onClose={close}
      withCloseButton={false}
      size="850px"
      padding={0}
      radius="lg"
      centered
      styles={{
        content: { overflow: 'hidden' },
      }}
    >
      <Group gap={0} wrap="nowrap" align="stretch">
        {/* LEFT SECTION: Visual Brand Side */}
        <Box
          style={{
            flex: 1,
            backgroundColor: '#F2B052',
            // Fix: linear-gradient ko string quotes mein rakha hai
            backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/login.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: 'white',
          }}
          visibleFrom="sm"
        >
          <Stack gap="xs">
            <Title order={1} fw={800} style={{ fontSize: '2.5rem', lineHeight: 1.2 }}>
              Brand In Town
            </Title>
            <Text size="xl" fw={500} opacity={0.9}>
              Show best deal to your customers
            </Text>
          </Stack>
        </Box>

        {/* RIGHT SECTION: Form Side */}
        <Box style={{ flex: 1.2, padding: '40px', position: 'relative', backgroundColor: 'white' }}>
          <CloseButton
            onClick={close}
            pos="absolute"
            top={15}
            right={15}
            variant="transparent"
          />

          <Stack align="center" gap="sm">
            {/* Header Illustration */}
            <Center
              style={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                border: '1px solid #eee',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/loginup.jpeg"
                alt="Auth Illustration"
              />
            </Center>

            {/* View Switching Logic */}
            {view === 'signup' && <CreateAccountView setView={setView} />}
            {view === 'reset' && <ResetPasswordView setView={setView} />}
            {view === 'login' && (
                <Stack w="100%" align="center">
                    <Title order={2}>Welcome Back</Title>
                    <Text>Login Form can go here</Text>
                    <Anchor component="button" onClick={() => setView('signup')}>Don't have an account? Register</Anchor>
                </Stack>
            )}
          </Stack>
        </Box>
      </Group>
    </Modal>
  );
}

// VIEW: Reset Password
function ResetPasswordView({ setView }) {
  return (
    <Stack w="100%" gap="xs">
      <Stack align="center" gap={2}>
        <Group gap={2}>
          <Title order={2} c="blue.9" fw={800}>Reset Password</Title>
          <Text size="xl">🔐</Text>
        </Group>
        <Text c="dimmed" size="sm">Create a new password.</Text>
      </Stack>

      <PasswordInput placeholder="New Password" size="md" radius="md" />
      <PasswordInput placeholder="Confirm Password" size="md" radius="md" />

      <Button
        fullWidth
        size="md"
        radius="md"
        color="orange.5"
        rightSection={<IconLock size={18} />}
        style={{ backgroundColor: '#F2B052' }}
      >
        Save
      </Button>

      <Button 
        variant="subtle" 
        color="gray" 
        leftSection={<IconChevronLeft size={16} />}
        onClick={() => setView('signup')}
      >
        Back to Signup
      </Button>
    </Stack>
  );
}

// VIEW: Create Account
function CreateAccountView() {
  const router = useRouter();
  return (
    <Stack  w="100%" gap="xs">
      <Stack align="center" gap={5}>
        <Group gap={8} justify="center">
          <Title order={3} fw={800} style={{ textAlign: 'center' }}>
            Create Account for Brand In Town <IconBuildingStore size={22} color="#F2B052" style={{ verticalAlign: 'middle' }} />
          </Title>
        </Group>
        <Text c="dimmed" size="xs" ta="center" px="md">
          Please enter your email ID and phone number. You will receive the verification code on your phone.
        </Text>
      </Stack>

      <TextInput placeholder="Email Id" size="md" radius="sm" />
      <PasswordInput placeholder="Password" size="md" radius="sm" />
      <TextInput placeholder="Phone Number" size="md" radius="sm" />

      <Button
        fullWidth
        size="md"
        radius="md"
        style={{ backgroundColor: '#F2B052' }}
        rightSection={<IconSend size={18} />}
        onClick={() => {}} // Temporary for testing
      >
        Send OTP
      </Button>
 
      <Text size="sm" ta="center">or</Text>

      <Text  size="sm" ta="center">
        Already have an account? <Anchor component="button" fw={700} color="orange.5"  onClick={() => router.push("/Login")}>Log In</Anchor>
      </Text>

      <Text size="xs" c="dimmed" ta="center" >
        By proceeding, you agree to Brand In Town <Anchor size="xs">Terms of Service</Anchor> and acknowledge Brand In Town <Anchor size="xs">Privacy Policy</Anchor>.
      </Text>
    </Stack>
  );
}