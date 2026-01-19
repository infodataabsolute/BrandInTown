"use client";
import { 
  Container, Grid, SimpleGrid, TextInput, Radio, 
  Checkbox, Button, Title, Text, Stack, Image, 
  Paper, rem, Box, 
  Group
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

export default function UserDetailsForm() {
  return (
    <Container size="lg" py={50}>
      <Grid gutter={50} align="flex-start">
        
        {/* Left Side: Profile Image */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper 
            withBorder 
            p={5} 
            radius="md" 
            style={{ borderColor: 'primary', width: 'fit-content', margin: '0 auto' }}
          >
            <Image
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nalini" // Dummy Avatar
              alt="User Profile"
              radius="md"
              w={250}
              h={250}
            />
          </Paper>
        </Grid.Col>

        {/* Right Side: Form Fields */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Title order={2} c="#1A1F4C" mb={5}>Users Details</Title>
          <Text c="dimmed" mb={30} fw={500}>Fill the Details to get Fair Deals</Text>

          <Stack gap="xl">
            {/* Input Row 1 */}
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput 
                label="Name" 
                placeholder="Nalini Sharma" 
                required 
                styles={inputStyles} 
              />
              <TextInput 
                label="Phone Number" 
                placeholder="9012345678" 
                required 
                styles={inputStyles} 
              />
            </SimpleGrid>

            {/* Input Row 2 */}
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput 
                label="EMail ID" 
                placeholder="nalinisharma@gmail.com" 
                styles={inputStyles} 
              />
              <Box>
                <TextInput 
                  label="WhatsApp Number" 
                  placeholder="WhatsApp Number" 
                  styles={inputStyles} 
                />
                <Checkbox 
                  label="Same as phone number" 
                  size="xs" 
                  mt={5} 
                  color="primary" 
                  styles={{ label: { color: 'primary' } }} 
                />
              </Box>
            </SimpleGrid>

            {/* Selection Groups */}
            <Box>
              <Text fw={600} size="sm" mb={10} c="#1A1F4C">Select Gender *</Text>
              <Radio.Group defaultValue="female">
                <Group>
                  <Radio value="female" label="Female" color="primary" />
                  <Radio value="male" label="Male" color="#1A1F4C" />
                  <Radio value="others" label="Others" color="#1A1F4C" />
                </Group>
              </Radio.Group>
            </Box>

            <Box>
              <Text fw={600} size="sm" mb={10} c="#1A1F4C">Select Age Group *</Text>
              <Radio.Group defaultValue="20-30">
                <Group>
                  <Radio value="20-30" label="20-30 yrs" color="primary" />
                  <Radio value="30-40" label="30-40 yrs" color="#1A1F4C" />
                  <Radio value="40-50" label="40-50 yrs" color="#1A1F4C" />
                  <Radio value="50+" label="50 & Above" color="#1A1F4C" />
                </Group>
              </Radio.Group>
            </Box>

            <SimpleGrid cols={2}>
              <Box>
                <Text fw={600} size="sm" mb={10} c="#1A1F4C">Marital Status</Text>
                <Radio.Group>
                  <Group>
                    <Radio value="unmarried" label="Unmarried" color="#1A1F4C" />
                    <Radio value="married" label="Married" color="#1A1F4C" />
                  </Group>
                </Radio.Group>
              </Box>

              <Box>
                <Text fw={600} size="sm" mb={10} c="#1A1F4C">Allow Offers On WhatsApp</Text>
                <Radio.Group defaultValue="no">
                  <Group>
                    <Radio value="yes" label="Yes" color="#1A1F4C" />
                    <Radio value="no" label="No" color="#1A1F4C" />
                  </Group>
                </Radio.Group>
              </Box>
            </SimpleGrid>

            {/* Back Button */}
            <Group justify="flex-end" mt={30}>
              <Button 
                variant="outline" 
                color="primary" 
                radius="md" 
                size="lg" 
                rightSection={<IconArrowLeft size={18} style={{ transform: 'rotate(180deg)' }} />}
                styles={{ root: { borderWidth: rem(1.5), color: '#1A1F4C' } }}
              >
                Back
              </Button>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

// Custom styles for orange border inputs
const inputStyles = {
  label: { marginBottom: rem(5), color: '#1A1F4C', fontWeight: 600 },
  input: { 
    borderColor: 'primary', 
    height: rem(45), 
    borderRadius: rem(8),
    '&:focus': { borderColor: 'primary' }
  }
};