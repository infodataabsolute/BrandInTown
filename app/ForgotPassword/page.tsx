'use client';

import { 
  Modal, 
  Button, 
  PasswordInput, 
  Text, 
  Title, 
  Stack, 
  Group, 
  Box, 
  Image, 
  CloseButton 
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLock } from '@tabler/icons-react';

export default function ResetPasswordModal() {
  const [opened, { open, close }] = useDisclosure(true);

  return (
    <Modal
      opened={opened}
      onClose={close}
      withCloseButton={false} // Custom close button used inside
      size="800px"
      padding={0}
      radius="lg"
      centered
    >
      <Group gap={0} wrap="nowrap" align="stretch">
        {/* Left Side: Image & Brand Branding */}
        <Box
          style={{
            flex: 1,
            position: 'relative',
            background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/forgot.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            minHeight: '500px',
          }}
          visibleFrom="sm"
        >
          <Title order={2}>Brand In Town</Title>
          <Text size="lg" opacity={0.9}>
            Show best deal to your customers
          </Text>
        </Box>

        {/* Right Side: Reset Password Form */}
        <Box style={{ flex: 1.2, padding: '40px', position: 'relative' }}>
          <CloseButton 
            onClick={close} 
            pos="absolute" 
            top={20} 
            right={20} 
            variant="subtle" 
            radius="xl" 
          />
          
          <Stack align="center" gap="lg" mt="xl">
            {/* Top Illustration Placeholder */}
            <Box style={{ width: 140, height: 140, borderRadius: '50%', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Image 
                src="/images/loginup.jpeg" 
                radius="xl"
                bdrs={50}
                alt="Illustration"
               />
            </Box>

            <Stack align="center" gap={4}>
              <Group gap={8}>
                <Title order={3} fw={700} >Reset Password</Title>
                <IconLock size={20} color="orange" />
              </Group>
              <Text c="dimmed" size="sm">Create a new password.</Text>
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
                color="orange.4"
                mt="md"
                rightSection={<IconLock size={16} />}
                styles={{
                    root: { backgroundColor: '#F2B052' } // Matching the orange in your image
                }}
              >
                Save
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Group>
    </Modal>
  );
}