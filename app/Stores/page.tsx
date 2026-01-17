'use client';

import {
  Container,
  Grid,
  Paper,
  Stack,
  Title,
  Text,
  Button,
  Group,
  Badge,
  Image,
  Box,
  SimpleGrid,
  Divider,
  ActionIcon,
  rem,
  ScrollArea,
  TextInput,
  Select,
  Checkbox,
  UnstyledButton,
  Modal,
  em,
  Tabs,
  Avatar,
  Textarea,
} from '@mantine/core';
import { 
  IconStarFilled, 
  IconClock, 
  IconPhone, 
  IconMapPin, 
  IconShare, 
  IconThumbUp, 
  IconCalendar,
  IconCamera,
  IconPlus,
  IconSettings,
  IconX,
  IconChevronDown,
    IconMan,
  IconWoman,
  IconBabyCarriage,
  IconBrush,
  IconHome,
  IconDeviceMobile,
  IconCheck,
} from '@tabler/icons-react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

const BRANDS = [
  { name: 'H&M' , img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070' },
  { name: 'Puma', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070' },
  { name: 'Decathalon', img: '/images/Decathalon.jpeg' },
  { name: 'Nayaka', img: '/images/Nayka.jpeg' },
];

export default function BrandDiscoveryPage() {
    // const [opened, { open, close }] = useDisclosure(true);


    const [storeOpened, { open: openStore, close: closeStore }] = useDisclosure(false);
const [reviewOpened, { open: openReview, close: closeReview }] = useDisclosure(false);

    // 1. Hook to detect mobile screens (using Mantine's standard 'sm' breakpoint)
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);
  return (
    <>
    <Navbar/>
    <Container size="xl" py="xl" bg="#ffff">
      <Grid gutter="xl">
        {/* LEFT SIDEBAR: Filters */}
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Paper withBorder p="xl" radius="md" >
            <Stack gap="xl" >
              <FilterSection title="Product Categories" items={[ 'Men', 'Women', 'Kids', 'Beauty', 'Home Decor', 'Home Appliances', 'Gadgets', 'Jewellery']} active="Women" />
              <FilterSection title="Brands" items={['Zara', 'H&M', 'Puma', 'Forever 21']} active="Zara" />
              <FilterSection title="Area/Location" items={['Vaishali Nagar', 'Jagatpura', 'Civil Lines', 'C-Scheme', 'Malviya Nagar', 'Mansarover', 'Ajmer Road']} active="Vaishali Nagar" />
              <FilterSection title="Shopping Malls" items={['WTP Mall', 'JTM Mall', 'Gaurav Tower', 'Pink Square', 'Jaipur Mall', 'High Street']} active="WTP Mall" />
            </Stack>
          </Paper>
        </Grid.Col>

        {/* RIGHT CONTENT: Brand Cards */}
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Stack gap="md" >
            {/* Active Filter Badges */}
            <Group gap="xs" mb="lg">
              {['Women', 'Zara', 'Vaishali Nagar', '90% Off'].map((tag) => (
                <Badge 
                    key={tag} 
                    variant="light" 
                    color="#F2B052.4" 
                    size="lg" 
                    radius="sm" 
                    rightSection="×"
                    styles={{ root: { backgroundColor: '#F2B052',  textTransform: 'none' }}}
                >
                  {tag}
                </Badge>
              ))}
            </Group>

            {/* Brand List */}
            {BRANDS.map((brand) => (
              <Paper key={brand.name} withBorder p="md" radius="md" shadow="sm">
                <Grid gutter="lg" align="stretch">
                  <Grid.Col span={{ base: 12, sm: 4 }}>
               <Image onClick={openStore} src={brand.img} radius="md" h={180} />

                  </Grid.Col>
                  
                  <Grid.Col span={{ base: 12, sm: 8 }}>
                    <Stack gap="xs">
                      <Group justify="space-between">
                        <Title  order={3}  fw={800} >{brand.name}</Title>
                        <Group gap={4}>
                            <IconStarFilled size={18} color="#F2B052" />
                            <Text fw={700} size="lg">3.9</Text>
                        </Group>
                      </Group>
                      
                      <Text size="sm"  lineClamp={2}>
                        A unit of is one of the biggest brand in the tops in women wears.
                      </Text>

                      <Group gap={4} mt={5}>
                        <IconMapPin size={16} color="#F2B052" />
                        <Text size="xs" fw={600} >MI Road</Text>
                      </Group>

                      <Title order={4} fw={800} >
                        35% Off on food items <Text span size="xs" fw={500} >(Valid till 28th dec)</Text>
                      </Title>

                      <Group justify="space-between" mt="sm">
                        {/* <Button 
                            variant="filled" 
                            size="xs" 
                            radius="sm"
                            styles={{ root: { backgroundColor: '#F2B052', color: '#141414ff' }}}
                        >
                           View Cradit Card Offers
                        </Button> */}
                        
                        <Group gap="lg">
                            <Stack gap={2} align="center">
                                <IconThumbUp size={18} color="gray" />
                                <Text size="10px" >40K</Text>
                            </Stack>
                            <Stack gap={2} align="center">
                                <IconShare size={18} color="gray" />
                                <Text size="10px" >40K</Text>
                            </Stack>
                        </Group>
                      </Group>

                      <Divider my="xs" />

                      <Group justify="space-between">
                        <Group gap="xs">
                            <IconClock size={16} color="#F2B052" />
                            <Text size="xs" fw={600}>11:00 AM - 08:00 PM</Text>
                        </Group>
                        <Group gap="xs">
                            <IconPhone size={16} color="#F2B052" />
                            <Text size="xs" fw={600}>+91 - 8112XXXXXX</Text>
                        </Group>
                      </Group>
                    </Stack>
                  </Grid.Col>
                </Grid>
              </Paper>
            ))}
          </Stack>
        </Grid.Col>
      </Grid>


<Modal opened={storeOpened} onClose={closeStore} size="90%" radius="md">

      {/* Top Header Section */}
      <Box pos="relative">
        <ActionIcon 
          pos="absolute" 
          right={-10} 
          top={8} 
        
          
          onClick={close}
         styles={{
        root: {
          borderColor:"#F2B052",
          backgroundColor: 'white',
          color:"black",
         
          paddingLeft: rem(15),
          paddingRight: rem(15),

          borderWidth: rem(1.5),
          '&:hover': {
            backgroundColor: '#fff9f0', // Very light orange tint on hover
          },
        },
       
       
      }}
        >
          ✕
        </ActionIcon>

        <Grid gutter="xl">
          {/* Main Gallery Image */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5"
              radius="md"
              pt={15}
              h={368}
              alt="Main Store"
              
            />
          </Grid.Col>

          {/* Store Info */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Group justify="space-between" align="flex-start" wrap="nowrap">
              <Stack gap={4}>
                <Text fw={700} size="xl" style={{ fontSize: '1.8rem', }}>
                  Lifestyle- A Brand for Clot...
                </Text>
                <Group gap={5}>
                  <IconStarFilled size={16} color="#F2B052" />
                  <Text fw={600}>3.9</Text>
                </Group>
              </Stack>
            </Group>

            <Text size="sm"  mt="md" lineClamp={3}>
              The Lifestyle stores have a multi-level store format, which is normally spread
              over two or three floors that provides a square line-of-sight, allowing
              customers to view product sections in a single glance...
            </Text>

            <Stack gap="xs" mt="md">
              <Group wrap="nowrap" align="flex-start">
                <IconMapPin size={18}  />
                <Text size="md">MGF Metropolitan Bhawani Singh Marg, Sahakar Bhawan Circle, Jaipur 302006</Text>
              </Group>

              <Button variant="light"  size='md' radius="sm" fullWidth={false} w="fit-content">
               Book Your Product
              </Button>

              <Group justify="space-between" mt="sm">
                <Group gap="xs">
                  <IconClock size={18}  />
                  <Text size="sm" fw={500}>11:00 AM - 09:00 PM</Text>
                  <IconChevronDown size={14} />
                  <Divider orientation="vertical" />
                  <IconPhone size={18}  />
                  <Text size="sm">+91 - 8112XXXXXX</Text>
                </Group>
                
                <Group gap="xs">
                  <Stack align="center" gap={0}>
                    <IconThumbUp size={20} />
                    <Text size="xs">48K</Text>
                  </Stack>
                  <Stack align="center" gap={0}>
                    <IconShare size={20} />
                    <Text size="xs">48K</Text>
                  </Stack>
                </Group>
              </Group>
            </Stack>

            {/* Thumbnail Grid */}
            <Grid mt="md" gutter="xs">
              {[1, 2, 3, 4].map((i) => (
                <Grid.Col span={3} key={i}>
                  <Image src={`https://picsum.photos/200/150?random=${i}`} radius="sm" h={80} />
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
        </Grid>
      </Box>

      {/* Categories Tabs */}
      {/* <Tabs defaultValue="women" mt="xl" color="#F2b052"  variant="pills" > */}
      <Tabs
  defaultValue="women"
  mt="xl"
  color="#F2B052"
  variant="pills"
  styles={{
    tab: {
      color: "#000",          // inactive text
      fontWeight: 600,
    },
    tabLabel: {
      color: "#000",          // ensure text is black
    },

  }}
>
        {/* <Tabs.List justify="center" >
          <Tabs.Tab value="men" >Men</Tabs.Tab>
          <Tabs.Tab value="women">Women</Tabs.Tab>
          <Tabs.Tab value="kids">Kids</Tabs.Tab>
          <Tabs.Tab value="beauty">Beauty</Tabs.Tab>
          <Tabs.Tab value="home">Home Decor</Tabs.Tab>
          <Tabs.Tab value="gadgets">Gadgets</Tabs.Tab>
        </Tabs.List>
      </Tabs> */}

      {/* TABS HEADER */}
      <Tabs.List justify="center">
        <Tabs.Tab value="men" leftSection={<IconMan size={16} />}>
          Men
        </Tabs.Tab>

        <Tabs.Tab value="women" leftSection={<IconWoman size={16} />}>
          Women
        </Tabs.Tab>

        <Tabs.Tab value="kids" leftSection={<IconBabyCarriage size={16} />}>
          Kids
        </Tabs.Tab>

        <Tabs.Tab value="beauty" leftSection={<IconBrush size={16} />}>
          Beauty
        </Tabs.Tab>

        <Tabs.Tab value="home" leftSection={<IconHome size={16} />}>
          Home Decor
        </Tabs.Tab>

        <Tabs.Tab value="gadgets" leftSection={<IconDeviceMobile size={16} />}>
          Gadgets
        </Tabs.Tab>
      </Tabs.List>

      {/* TABS CONTENT */}
      <Tabs.Panel value="men">Men Products</Tabs.Panel>
      <Tabs.Panel value="women">Women Products</Tabs.Panel>
      <Tabs.Panel value="kids">Kids Products</Tabs.Panel>
      <Tabs.Panel value="beauty">Beauty Products</Tabs.Panel>
      <Tabs.Panel value="home">Home Decor</Tabs.Panel>
      <Tabs.Panel value="gadgets">Gadgets</Tabs.Panel>
    </Tabs>

      {/* Lower Sections */}
      <Grid mt="xl" gutter="xl">
        {/* Offers Section */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="md" style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
            <Group justify="space-between" align="center" mb="md">

  <Group gap="xs">
    <Button style={{background:"#F2B052",color:"#1f1e1e"}} size="md" variant="filled">Store Offers</Button>
    <Button
      variant="outline"
 
      size="md"
      styles={{
        root: {
          borderColor:"#F2B052",
          backgroundColor: 'white',
          color:"black",
         
          paddingLeft: rem(15),
          paddingRight: rem(15),
          borderWidth: rem(1.5),
          '&:hover': {
            backgroundColor: '#fff9f0', // Very light orange tint on hover
          },
        },
        inner: {
            justifyContent: 'space-between',
        },
        label: {
          marginRight: rem(10),
          marginLeft: rem(5),
        }
      }}
    >
      Cradit Card Offers
    </Button>
    <Button
      variant="outline"
 
      size="md"
      styles={{
        root: {
          borderColor:"#F2B052",
          backgroundColor: 'white',
          color:"black",
         
          paddingLeft: rem(15),
          paddingRight: rem(15),
          borderWidth: rem(1.5),
          '&:hover': {
            backgroundColor: '#fff9f0', // Very light orange tint on hover
          },
        },
        inner: {
            justifyContent: 'space-between',
        },
        label: {
          marginRight: rem(10),
          marginLeft: rem(5),
        }
      }}
    >
      Coupon Code
    </Button>
  </Group>
</Group>

            <Group gap="sm">
              <Badge color="#F2B052" variant="filled" size="xs" circle />
              <Text size="xs">Ongoing offers</Text>
              <Badge color="gray" variant="outline" size="xs" circle />
              <Text size="xs">Closing soon</Text>
            </Group>

            {[
              { label: 'Westside', deal: 'Flat 25% Off', date: '20th Mar' },
              { label: 'Nike', deal: 'Flat Rs 1,000 Off', date: '22th Mar' },
              { label: 'Zara', deal: 'Buy 1 Get 1', date: '25th Mar' },
            ].map((offer, idx) => (
              <Group key={idx} justify="space-between" wrap="nowrap" style={{ borderBottom: '1px solid #f0f0f0', paddingBottom: '10px' }}>
                <Group>
                  <Image src="https://picsum.photos/80/50" w={80} h={50} radius="sm" />
                  <Stack gap={0}>
                    <Text size="sm" fw={700} color="#F2B052">{offer.deal}</Text>
                    <Text size="xs" color="dimmed">on Shirts and Trousers</Text>
                  </Stack>
                </Group>
                <Text size="xs" color="dimmed">Valid till <Text span fw={700} color="#F2B052">{offer.date}</Text></Text>
              </Group>
            ))}
          </Stack>
        </Grid.Col>

        {/* Other Outlets Section */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="md" style={{ border: '1px solid #eee', padding: '15px', borderRadius: '8px' }}>
            <Text fw={700} size="lg">Our Other Outlets</Text>
            <ScrollArea h={250}>
              {[1, 2, 3].map((i) => (
                <Group key={i} mb="md" wrap="nowrap">
                  <Image src="https://picsum.photos/100/70" w={100} h={70} radius="sm" />
                  <Box style={{ flex: 1 }}>
                    <Text fw={700} size="sm">Happy Shoppy</Text>
                    <Text size="xs" color="dimmed">Brand of Clothes</Text>
                    <Group gap={4} mt={4}>
                       <IconStarFilled size={12} color="#F2B052" />
                       <Text size="xs" fw={700}>4.1</Text>
                    </Group>
                  </Box>
                  <Stack gap={0} align="flex-end">
                    <Group gap={2}>
                      <IconMapPin size={12} color="#F2B052" />
                      <Text size="xs" fw={700}>0.5km</Text>
                    </Group>
                    <Text size="xs" color="dimmed" ta="right">MI Road, Jaipur...</Text>
                  </Stack>
                </Group>
              ))}
            </ScrollArea>
          </Stack>
        </Grid.Col>
      </Grid>

      {/* Footer Reviews Button */}
      <Box mt="xl" ta="center">
     <Button
  variant="filled"
  color="#F2B052"
  radius="md"
  rightSection={<IconChevronDown size={18} />}
  size="lg"
  onClick={openReview}
>
  Reviews
</Button>

      </Box>
    </Modal>

<Modal opened={reviewOpened} onClose={closeReview} size="80%" centered>

      <Stack gap="md">
        <Title order={4} c="brandBlue.9">Review Us</Title>
        
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          {/* Left Side: Input Form */}
          <Paper withBorder p="md" radius="md" style={{ borderColor: 'var(--mantine-color-brandBlue-2)' }}>
            <Group mb="sm">
              <Avatar size="sm" src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" />
              <Text size="xs" c="dimmed">Write Text Here.</Text>
            </Group>
            
            <Textarea placeholder="Share your experience..." minRows={4} variant="unstyled" />
            
            <Box mt="xl">
              <Text fw={700} c="brandBlue.9" mb="xs">Rate Us</Text>
              <Group gap="xs">
                {['Excellent', 'Good', 'Average', 'Poor', 'Bad'].map((label) => (
                  <Stack key={label} align="center" gap={4}>
                    <Text size="xs" c="brandBlue.9">{label}</Text>
                  </Stack>
                ))}
              </Group>
            </Box>

            <Group justify="flex-end" mt="xl">
              <Button color="brandOrange.4" rightSection={<IconCheck size={16} />}>
                Submit Review
              </Button>
            </Group>
          </Paper>

          {/* Right Side: Existing Reviews */}
          <Stack>
            {[1, 2].map((i) => (
              <Paper key={i} withBorder p="md" radius="md" style={{ borderColor: 'var(--mantine-color-brandBlue-2)' }}>
                <Group mb="xs">
                  <Avatar size="sm" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} />
                  <Box>
                    <Text size="xs" fw={700} c="brandBlue.9">Shruti Rathore</Text>
                    <Text size="xs" c="brandOrange.4">★★★★☆</Text>
                  </Box>
                </Group>
                <Text size="xs" c="dimmed" lineClamp={3}>
                  "I highly recommend this store... outstanding pricing and customer service."
                </Text>
              </Paper>
            ))}
          </Stack>
        </SimpleGrid>

        <Group justify="center" mt="md">
 <Button onClick={closeReview}>
  Close ↑
</Button>

        </Group>
      </Stack>
    </Modal>

    </Container>
    <Footer/>
    </>
  );
}

// Helper component for Sidebar Sections
function FilterSection({ title, items, active }: { title: string, items: string[], active: string }) {
  return (
    <Box>
      <Title order={4}  mb="xs">{title}</Title>
      <Text size="xs"  mb="md">Select Categories for Shop</Text>
      <Group gap="xs">
        {items.slice(0, 6).map((item) => (
          <Button
            key={item}
            variant={item === active ? 'filled' : 'outline'}
            size="compact-xs"
            radius="sm"
            color={item === active ? '#F2B052.4' : '#0000'}
            styles={{
              root: {
                backgroundColor: item === active ? '#F2B052' : 'transparent',
                color: item === active ? '#000' : '#141414ff',
                borderColor: item === active ? '#F2B052' : 'var(--mantine-color-gray-3)',
                padding: '4px 12px'
              }
            }}
          >
            {item}
          </Button>
        ))}
        <Text size="xs" fw={700}  >See More</Text>
      </Group>
    </Box>
  );
}