"use client";

import { Group, Text, Button, Indicator, ActionIcon, Container, Box, rem, Title, Modal, Center, Image, Stack, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSettings, IconUsers, IconBuildingStore, IconBell } from '@tabler/icons-react';
  import { useRouter } from "next/navigation";

export function AdminNavbar() {
  
  const router = useRouter();
  
  return (
    <>
    
    <Box component="nav" py="md" bg="white" style={{ borderBottom: `${rem(1)} solid #eee` }}>
      <Container size="xl">
        <Group justify="space-between">
          <Title order={2} c="#1A1F4C" fw={800} style={{ fontSize: rem(28) }}>
            Admin Dashboard
          </Title>

          <Group gap="sm" visibleFrom="sm">
            <Button 
              variant="outline" 
              color="#F2B052" 
              leftSection={<IconSettings size={18} />}
              radius="md"
            >
              Settings
            </Button>
            
            <Button 
              variant="filled" 
              bg="#F2B052" 
              c="dark"
              leftSection={<IconBuildingStore size={18} />}
              radius="md"
                  onClick={() => router.push("/Admin")}
            >
              Brands
            </Button>

            <Button 
              variant="outline" 
              color="#F2B052" 
              leftSection={<IconUsers size={18} />}
              radius="md"
              onClick={() => router.push("/Customer")}
            >
              Customers
            </Button>

            <Indicator label="4" size={16} color="#F2B052" withBorder offset={2}>
              <ActionIcon variant="transparent" color="gray" size="lg">
                <IconBell size={28} stroke={1.5} />
              </ActionIcon>
            </Indicator>
          </Group>

          {/* Mobile Notification Icon only */}
          <Box hiddenFrom="sm">
            <Indicator label="4" size={14} color="#F2B052">
              <IconBell size={24} />
            </Indicator>
          </Box>
        </Group>
      </Container>
    </Box>
   
    </>
  );
}