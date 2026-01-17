"use client";

import { 
  Table, 
  Checkbox, 
  ActionIcon, 
  TextInput, 
  Select, 
  Pagination, 
  Paper, 
  Title, 
  ScrollArea, 
  Badge, 
  Container,
  Group,
  Button
} from '@mantine/core';
import { IconSearch, IconFilter, IconEdit, IconTrash, IconDownload, IconBuildingStore, IconUsb, IconUser } from '@tabler/icons-react';

const DUMMY_DATA = Array(10).fill({
  store: 'Happy Shoppy',
  name: 'Naveen Sharma',
  contact: '+91-9012345678',
  email: 'naveensharma@gmail.com',
});

export function CustomerList() {
  return (
    <Container size="xl" py="xl">
      <Paper shadow="sm" radius="lg" withBorder p="xl" bg="#FDFDFD" style={{ borderColor: '#D1D1D1' }}>
        
        {/* Table Header & Filters */}
        <Group justify="space-between" mb="xl" wrap="wrap">
          <Group gap="xs">
            <IconUser color="#F2B052" />
            <Title order={4}>Customer List</Title>
          </Group>

          <Group gap="xs" style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Select 
              placeholder="Brands" 
              data={['Brand A', 'Brand B']} 
              radius="md" 
              w={120} 
              visibleFrom="md"
            />
            <Select 
              placeholder="City" 
              data={['Jaipur', 'Delhi']} 
              radius="md" 
              w={120} 
              visibleFrom="md"
            />
            <TextInput 
              placeholder="Search" 
              leftSection={<IconSearch size={16} />} 
              radius="md"
              styles={{ input: { borderColor: '#F2B052' } }}
            />
            <Button
              variant="outline" 
              color="dark" 
              radius="md" 
              leftSection={<IconDownload size={16} />}
            >
              Export
            </Button>
          </Group>
        </Group>

        {/* Responsive Table Area */}
        <ScrollArea>
          <Table verticalSpacing="md" minWidth={800}>
            <Table.Thead bg="#F2B052">
              <Table.Tr>
                
                <Table.Th c="white">Customer Name</Table.Th>
                <Table.Th c="white">Contact</Table.Th>
                <Table.Th c="white">Email ID</Table.Th>
                
                <Table.Th c="white">Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {DUMMY_DATA.map((item, index) => (
                <Table.Tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                 
                  <Table.Td>{item.name}</Table.Td>
                  <Table.Td>{item.contact}</Table.Td>
                  <Table.Td>{item.email}</Table.Td>
                 
                  <Table.Td>
                    <Group gap="xs">
                      <ActionIcon variant="transparent" color="blue"><IconEdit size={18} /></ActionIcon>
                      <ActionIcon variant="transparent" color="red"><IconTrash size={18} /></ActionIcon>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>

        {/* Pagination */}
        <Group justify="center" mt="xl">
          <Pagination total={3} color="#F2B052" radius="md" />
        </Group>
      </Paper>
    </Container>
  );
}