"use client";
import { 
  Container, Grid, SimpleGrid, TextInput, Radio, Checkbox, 
  Button, Title, Text, Stack, Image, Paper, rem, Box, 
  Group, Table, ScrollArea, Select, Textarea, ActionIcon,
  Stepper,
  Modal,
  FileInput
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { 
  IconArrowLeft, IconArrowRight, IconUpload, 
  IconEdit, IconTrash, IconSearch, IconPlus, 
  IconCalendar,
  IconCamera,
  IconClock,
  IconMapPin,
  IconDeviceFloppy
} from '@tabler/icons-react';
import { useRef, useState } from 'react';
import { AdminNavbar } from '../../../components/admin/adminNavbar';

const themeStyles = {
  primary: '#F2b052',
  darkBlue: '#1A1F4C',
  input: {
    label: { marginBottom: rem(5), color: '#1A1F4C', fontWeight: 600 },
    input: { borderColor: '#F2b052', borderRadius: rem(8) }
  }
};

// Common Styles for consistent UI
const inputStyles = {
  label: { marginBottom: rem(5), color: '#1A1F4C', fontWeight: 600 },
  input: { 
    borderColor: '#F2b052', 
    borderRadius: rem(8),
    height: rem(42),
    '&:focus': { borderColor: '#1A1F4C' }
  }
};

export default function AdminFlow() {
  const [active, setActive] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);
   const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);


  // Mock data for Step 3
  const OFFER_DATA = [
    { title: 'Aman Puma', type: 'Store Offer', from: '10 August 2025', till: '10 December 2025' },
    { title: 'Aman Puma', type: 'Brand Offer', from: '10 August 2025', till: '10 December 2025' },
    { title: 'Aman Puma', type: 'Card Offer', from: '10 August 2025', till: '10 December 2025' },
    { title: 'Aman Puma', type: 'Brand Offer', from: '10 August 2025', till: '10 December 2025' },
    { title: 'Aman Puma', type: 'Brand Offer', from: '10 August 2025', till: '10 December 2025' },
  ];

  return (
   <>
   <AdminNavbar/>
    <Container size="xl" py={40}>
      <Stepper 
        active={active} 
        onStepClick={setActive} 
        color="orange" 
        size="sm"
        allowNextStepsSelect={false}
        mb={50}
      >
        <Stepper.Step label="Brand Details" />
        <Stepper.Step label="Store Details" />
        <Stepper.Step label="Offer Details" />
      </Stepper>

      {/* --- Step 1: Brand Details --- */}
      {active === 0 && (
        <Paper withBorder p="xl" radius="md" style={{ borderColor: '#F2b052' }}>
          <Grid gutter={40}>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Box 
                style={{ 
                  border: `2px dashed ${themeStyles.primary}`, 
                  borderRadius: rem(8),
                  height: rem(250),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Stack align="center" gap={5}>
                  <IconUpload color={themeStyles.primary} />
                  <Text size="sm" fw={500}>Upload your Image Here</Text>
                </Stack>
              </Box>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <Title order={2} c={themeStyles.darkBlue}>Brand Details</Title>
              <Text size="sm" c="dimmed" mb="xl">Fill the Details to gain Customer's trust</Text>
              
              <Stack gap="md">
                <Select label="Brand *" placeholder="Puma" data={['Puma', 'Nike', 'Adidas']} styles={themeStyles.input} />
                <Textarea label="About Brand *" placeholder="Description" minRows={3} styles={themeStyles.input} />
                <TextInput label="Address *" placeholder="Enter Address" styles={themeStyles.input} />
                
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                  <TextInput label="Contact Person Name *" placeholder="Naveen Sharma" styles={themeStyles.input} />
                  <TextInput label="Phone Number *" placeholder="91-9012345678" styles={themeStyles.input} />
                </SimpleGrid>

                <Group>
                  <Checkbox label="Active" color="orange" defaultChecked />
                  <Checkbox label="Verified" color="orange" />
                </Group>

                <TextInput label="Email ID/ User ID *" placeholder="naveensharma@gmail.com" styles={themeStyles.input} />
              </Stack>
            </Grid.Col>
          </Grid>
        </Paper>
      )}

      {/* --- Step 2: Store Details --- */}
      {active === 1 && (
        <Box>
          <Group justify="space-between" mb="xl">
            <Box>
              <Title order={2} c={themeStyles.darkBlue}>Store Details</Title>
              <Text size="sm" c="dimmed">List of stores associated with this brand</Text>
            </Box>
            <Group>
              <Button variant="outline" color="orange" leftSection={<IconUpload size={16} />}>Upload</Button>
              <Button onClick={open} bg={themeStyles.primary} c="dark">Add Store +</Button>
              <Select placeholder="City" data={['Jaipur', 'Delhi']} w={100} />
            </Group>
          </Group>

          <ScrollArea withBorder radius="md">
            <Table verticalSpacing="sm">
              <Table.Thead bg="#FFF8EE">
                <Table.Tr>
                  <Table.Th>Store Name</Table.Th>
                  <Table.Th>Manager Name</Table.Th>
                  <Table.Th>Exclusive Store</Table.Th>
                  <Table.Th>City</Table.Th>
                  <Table.Th>Location</Table.Th>
                  <Table.Th>Actions</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {[1, 2, 3, 4].map((i) => (
                  <Table.Tr key={i} style={{ borderBottom: '1px solid #F2b05244' }}>
                    <Table.Td>
                      <Text fw={600}>Aman Puma</Text>
                      <Text size="xs" c="dimmed">9:00 AM - 10:00 PM</Text>
                    </Table.Td>
                    <Table.Td>Naveen Sharma</Table.Td>
                    <Table.Td>Yes</Table.Td>
                    <Table.Td>Jaipur</Table.Td>
                    <Table.Td>Malviya Nagar</Table.Td>
                    <Table.Td>
                      <Group gap={5}>
                        <ActionIcon variant="transparent" c={themeStyles.darkBlue}><IconEdit size={16} /></ActionIcon>
                        <ActionIcon variant="transparent" c={themeStyles.darkBlue}><IconTrash size={16} /></ActionIcon>
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </ScrollArea>
        </Box>
      )}

      {/* --- Step 3: Offer Details (New Section) --- */}
      {active === 2 && (
        <Box>
          <Box mb="xl">
            <Title order={2} c={themeStyles.darkBlue}>Offer Details</Title>
            <Text size="sm" c="dimmed" fw={500}>List of stores associated with this brand</Text>
          </Box>

          <Group justify="space-between" mb="md">
            <Group gap="sm">
              <Button  onClick={open} variant="outline" color="orange" radius="md" leftSection={<IconUpload size={18} />}>Upload</Button>
              <Button onClick={open} variant="outline" color="orange" radius="md" leftSection={<IconPlus size={18} />}>Add Offer</Button>
            </Group>
            <Select placeholder="City" data={['Jaipur', 'Delhi']} radius="md" w={110} styles={{ input: { borderColor: '#F2b052' } }} />
          </Group>

          <ScrollArea>
            <Table verticalSpacing="md" style={{ borderCollapse: 'separate', borderSpacing: '0 10px' }}>
              <Table.Thead>
                <Table.Tr style={{ border: 'none' }}>
                  <Table.Th c="dimmed">Offer Title</Table.Th>
                  <Table.Th c="dimmed">Type</Table.Th>
                  <Table.Th c="dimmed">Valid From</Table.Th>
                  <Table.Th c="dimmed">Valid Till</Table.Th>
                  <Table.Th c="dimmed">Stores</Table.Th>
                  <Table.Th c="dimmed">Actions</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {OFFER_DATA.map((offer, index) => (
                  <Table.Tr key={index} style={{ outline: '1px solid #F2b052', borderRadius: rem(8) }}>
                    <Table.Td fw={600}>{offer.title}</Table.Td>
                    <Table.Td>{offer.type}</Table.Td>
                    <Table.Td>{offer.from}</Table.Td>
                    <Table.Td>{offer.till}</Table.Td>
                    <Table.Td>
                      <Text c={themeStyles.darkBlue} fw={700} td="underline" style={{ cursor: 'pointer' }}>View Stores</Text>
                    </Table.Td>
                    <Table.Td>
                      <Group gap="xs">
                        <ActionIcon variant="transparent" c="dark" ><IconEdit size={18} /></ActionIcon>
                        <ActionIcon variant="transparent" c="dark"><IconTrash size={18} /></ActionIcon>
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </ScrollArea>
        </Box>
      )}

      {/* --- Bottom Navigation Buttons --- */}
      <Group justify="flex-end" mt={40}>
        <Button 
          variant="outline" 
          color="orange" 
          onClick={() => setActive((current) => current - 1)}
          disabled={active === 0}
          leftSection={<IconArrowLeft size={18} />}
          radius="md"
        >
          Back
        </Button>
        <Button 
          bg={active === 2 ? '#BDBDBD' : themeStyles.primary} 
          c={active === 2 ? 'white' : 'dark'}
          onClick={() => active < 2 && setActive((current) => current + 1)}
          rightSection={<IconArrowRight size={18} />}
          radius="md"
        >
          {active === 2 ? 'Next' : 'Next'}
        </Button>
      </Group>

     

{/* add store */}


 <Modal 
        opened={opened} 
        onClose={close} 
        withCloseButton={true}
        centered
        size="70%" // Large size as per your image
        radius="md"
        padding="xl"
        styles={{ close: { color: '#F2b052', border: '1px solid #F2b052' } }}
      >
        <Stack gap="md">
          {/* Row 1: Store Name & Brand */}
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            <TextInput label="Store Name *" placeholder="Naveen Sharma" styles={inputStyles} />
            <Select label="Brand *" placeholder="Puma" data={['Puma', 'Nike', 'Adidas']} styles={inputStyles} />
          </SimpleGrid>

          {/* Row 2: About Store & Image Upload */}
          <Grid gutter="lg">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Textarea label="About Store *" placeholder="Description" minRows={4} styles={inputStyles} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Text size="sm" fw={600} c="#1A1F4C" mb={5}>Upload Image *</Text>
              <Box 
                style={{ 
                  border: `1.5px solid #1A1F4C`, 
                  borderRadius: rem(8), 
                  height: rem(105),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ActionIcon variant="filled" bg="#F2b052" size="xl" radius="xl">
                  <IconCamera size={26} color="black" />
                </ActionIcon>
              </Box>
            </Grid.Col>
          </Grid>

          {/* Row 3: Address (Full Width) */}
          <TextInput label="Address *" placeholder="Enter Full Address" styles={inputStyles} />

          {/* Row 4: City & Zip Code */}
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            <TextInput label="City *" placeholder="City Name" styles={inputStyles} />
            <TextInput label="Zip Code *" placeholder="302017" styles={inputStyles} />
          </SimpleGrid>

          {/* Row 5: State & Country */}
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            <TextInput label="State *" placeholder="Rajasthan" styles={inputStyles} />
            <TextInput label="Country *" placeholder="India" styles={inputStyles} />
          </SimpleGrid>

          {/* Row 6: Lat & Long */}
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            <TextInput label="Latitude" placeholder="Enter Latitude" styles={inputStyles} />
            <TextInput label="Longitude" placeholder="Enter Longitude" styles={inputStyles} />
          </SimpleGrid>

          {/* Row 7: Manager Info */}
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            <TextInput label="Manager Name *" placeholder="Manager Name" styles={inputStyles} />
            <TextInput label="Manager Contact No *" placeholder="91-0000000000" styles={inputStyles} />
          </SimpleGrid>

          {/* Row 8: Email & WhatsApp */}
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            <TextInput label="Email Id *" placeholder="email@gmail.com" styles={inputStyles} />
            <Box>
              <TextInput label="WhatsApp No *" placeholder="91-0000000000" styles={inputStyles} />
              <Checkbox label="Same as phone number" size="xs" mt={5} styles={{ label: { color: '#F2b052' } }} />
            </Box>
          </SimpleGrid>

          {/* Row 9: Status Toggles */}
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            <Box>
              <Text size="sm" fw={600} c="#1A1F4C" mb={5}>Exclusive Store *</Text>
              <Group>
                <Checkbox label="Yes" color="orange" defaultChecked iconColor="dark" />
                <Checkbox label="No" color="gray" />
              </Group>
            </Box>
            <Box>
              <Text size="sm" fw={600} c="#1A1F4C" mb={5}>Is Active *</Text>
              <Group>
                <Checkbox label="Yes" color="orange" defaultChecked iconColor="dark" />
                <Checkbox label="No" color="gray" />
              </Group>
            </Box>
          </SimpleGrid>

          {/* Row 10: Location & Shopping Mall */}
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            <Select label="Location *" placeholder="Select Location" data={['Malviya Nagar', 'Vaishali']} styles={inputStyles} />
            <Select label="Shopping Mall" placeholder="Select Mall" data={['GT Mall', 'WTP']} styles={inputStyles} />
          </SimpleGrid>

          {/* Row 11: Hours & Customer Contact */}
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            <Select label="Opening Hours" placeholder="09:00 AM - 10:00 PM" data={['09:00 AM - 09:00 PM', '10:00 AM - 10:00 PM']} styles={inputStyles} />
            <TextInput label="Contact Number For Customer *" placeholder="91-0000000000" styles={inputStyles} />
          </SimpleGrid>

          {/* Footer Action */}
          <Group justify="flex-end" mt="xl">
            <Button 
              bg="#F2b052" 
              c="dark" 
              radius="md" 
              size="lg" 
              px={50}
              rightSection={<IconPlus size={20} />}
              styles={{ root: { fontWeight: 700 } }}
            >
              Add
            </Button>
          </Group>
        </Stack>
      </Modal>
    
      
    </Container>
     
   </>
  );
}







//  {/* <Modal
//         opened={opened}
//         onClose={close}
//         title="Upload File"
//         centered
//         radius="md"
//       >
//         <Stack gap="md">
//           {/* Upload Button */}
//           <Button
//             variant="outline"
//             color="orange"
//             leftSection={<IconUpload size={18} />}
//             onClick={() => inputRef.current?.click()}
//           >
//             Upload File
//           </Button>

//           {/* Hidden File Input */}
//           <FileInput
//             inputRef={inputRef}
//             value={file}
//             onChange={setFile}
//             accept="image/*"
//             style={{ display: "none" }}
//           />

//           {/* Selected File Preview */}
//           {file && (
//             <Text size="sm">
//               Selected File: <strong>{file.name}</strong>
//             </Text>
//           )}

//           {/* Action Buttons */}
//           <Group justify="flex-end">
//             <Button variant="default" onClick={close}>
//               Cancel
//             </Button>
//             <Button
//               color="orange"
//               disabled={!file}
//               onClick={() => {
//                 console.log(file);
//                 close();
//               }}
//             >
//               Submit
//             </Button>
//           </Group>
//         </Stack>
//       </Modal> */}