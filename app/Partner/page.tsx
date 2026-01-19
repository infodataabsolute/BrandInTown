'use client';

import { Group, Title, Button, Container, Paper } from '@mantine/core';
import { IconSettings, IconUserCircle } from '@tabler/icons-react';

export default function BrandHeader() {
  return (
    <Paper 
      shadow="none" 
      withBorder 
      p="md" 
      style={{ 
        borderLeft: 'none', 
        borderRight: 'none', 
        borderTop: 'none',
        borderRadius: 0 
      }}
    >
      <Container size="xl">
        <Group justify="space-between" align="center">
          {/* Left Side: Title */}
          <Title 
            order={1} 
            style={{ 
              fontSize: '28px', 
              fontWeight: 900, 
              letterSpacing: '-0.5px' 
            }}
          >
            Brand Profile Page
          </Title>

          {/* Right Side: Action Buttons */}
          <Group gap="md">
            <Button
              variant="outline"
              color="primary"
              radius="md"
              leftSection={<IconSettings size={18} />}
              styles={{
                root: {
                  borderColor: 'primary',
                  color: '#2D3436', // Dark text color
                },
                section: {
                    color: '#2D3436'
                }
              }}
            >
              Settings
            </Button>

            <Button
              variant="filled"
              radius="md"
              leftSection={<IconUserCircle size={18} />}
              style={{ 
                backgroundColor: 'primary',
                color: '#2D3436' // Dark text for contrast
              }}
            >
              Profile
            </Button>
          </Group>
        </Group>
      </Container>
    </Paper>
  );
}