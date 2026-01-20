"use client";
<<<<<<< HEAD


=======
>>>>>>> 80ca922 (Initial commit)
import {
  Group,
  TextInput,
  Button,
  UnstyledButton,
  Image,
  Container,
  Box,
  rem,
  Indicator,
  ActionIcon,
  Menu,
  Burger,
  Drawer,
  Stack,
  Text,
  Modal,
  Center,
  Title,
  PinInput,
  Divider,
  Grid,
  Checkbox,
  Radio,
  Card,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  IconSearch,
  IconMapPin,
  IconChevronDown,
  IconUserCircle,
  IconUser,
  IconPlayerPlayFilled,
  IconCheck,
  IconCamera,
  IconBell,
  IconSettings,
  IconDeviceFloppy,
  IconClock,
  IconPhone,
  IconThumbUp,
  IconShare,
  IconStarFilled,
<<<<<<< HEAD

=======
>>>>>>> 80ca922 (Initial commit)
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 36em)"); // <576px
  const isLaptop = useMediaQuery("(max-width: 75em)"); // <1200px
  const [opened, { open, close }] = useDisclosure(false);

  const [notifOpened, notifHandlers] = useDisclosure(false);
  const [profileOpened, profileHandlers] = useDisclosure(false);
  const [settingsOpened, settingsHandlers] = useDisclosure(false);

<<<<<<< HEAD

  <ActionIcon
    variant="outline"
    color="gray"
    onClick={closeddddd}   
  >
    <Text size="xs">X</Text>
  </ActionIcon>


  const [isOpn, setIsOpn] = useState(false)
  const router = useRouter();

  function Openeddddd() {
    setIsOpn(true)
  }


  function closeddddd() {
    setIsOpn(false)
  }

  const [step, setStep] = useState<'phone' | 'otp'>('phone');

  const brandColor = 'primary';
  const darkPurple = '#0f0f0fff';

=======
  <ActionIcon variant="outline" color="gray" onClick={closeddddd}>
    <Text size="xs">X</Text>
  </ActionIcon>;

  const [isOpn, setIsOpn] = useState(false);
  const router = useRouter();

  function Openeddddd() {
    setIsOpn(true);
  }

  function closeddddd() {
    setIsOpn(false);
  }

  const [step, setStep] = useState<"phone" | "otp">("phone");

  const brandColor = "primary";
  const darkPurple = "#0f0f0fff";
>>>>>>> 80ca922 (Initial commit)

  const offers = [
    {
      id: 1,
<<<<<<< HEAD
      brand: 'H&M',
      image: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?q=80&w=300',
      description: 'A unit of is one of the biggest brand in the tops in women wears.',
      location: 'MI Road',
      offer: '35% Off on food items',
      validity: 'Valid till 28th dec',
=======
      brand: "H&M",
      image:
        "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?q=80&w=300",
      description:
        "A unit of is one of the biggest brand in the tops in women wears.",
      location: "MI Road",
      offer: "35% Off on food items",
      validity: "Valid till 28th dec",
>>>>>>> 80ca922 (Initial commit)
      rating: 3.9,
    },
    {
      id: 2,
<<<<<<< HEAD
      brand: 'Puma',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300',
      brandLogo: 'https://logo.clearbit.com/puma.com',
      description: 'A unit of is one of the biggest brand in the tops in women wears.',
      location: 'MI Road',
      offer: '35% Off on food items',
      validity: 'Valid till 28th dec',
      rating: 3.9,
     
    }
  ];


=======
      brand: "Puma",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300",
      brandLogo: "https://logo.clearbit.com/puma.com",
      description:
        "A unit of is one of the biggest brand in the tops in women wears.",
      location: "MI Road",
      offer: "35% Off on food items",
      validity: "Valid till 28th dec",
      rating: 3.9,
    },
    {
      id: 3,
      brand: "H&M",
      image:
        "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?q=80&w=300",
      description:
        "A unit of is one of the biggest brand in the tops in women wears.",
      location: "MI Road",
      offer: "35% Off on food items",
      validity: "Valid till 28th dec",
      rating: 3.9,
    },
    {
      id: 4,
      brand: "Puma",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300",
      brandLogo: "https://logo.clearbit.com/puma.com",
      description:
        "A unit of is one of the biggest brand in the tops in women wears.",
      location: "MI Road",
      offer: "35% Off on food items",
      validity: "Valid till 28th dec",
      rating: 3.9,
    },
    {
      id: 5,
      brand: "H&M",
      image:
        "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?q=80&w=300",
      description:
        "A unit of is one of the biggest brand in the tops in women wears.",
      location: "MI Road",
      offer: "35% Off on food items",
      validity: "Valid till 28th dec",
      rating: 3.9,
    },
    {
      id: 6,
      brand: "Puma",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300",
      brandLogo: "https://logo.clearbit.com/puma.com",
      description:
        "A unit of is one of the biggest brand in the tops in women wears.",
      location: "MI Road",
      offer: "35% Off on food items",
      validity: "Valid till 28th dec",
      rating: 3.9,
    },
  ];

>>>>>>> 80ca922 (Initial commit)
  return (
    <>
      <Box
        component="nav"
        h={70}
        bg="white"
        style={{
          borderBottom: `${rem(1)} solid #eee`,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container size="xl" w="100%">
          <Group justify="space-between" wrap="nowrap">
<<<<<<< HEAD

            {/* LEFT: Logo */}
            {/* <Image src="/images/Logo.jpeg" h={40} w="auto" /> */}


=======
            {/* LEFT: Logo */}
            {/* <Image src="/images/Logo.jpeg" h={40} w="auto" /> */}

>>>>>>> 80ca922 (Initial commit)
            <Link href="/" style={{ display: "inline-block" }}>
              <Image src="/images/Logo.jpeg" h={40} w="auto" alt="Logo" />
            </Link>
            {/* CENTER: Search + Location (Hidden on Mobile) */}
            {!isMobile && (
              <Group gap="xs" style={{ flex: 1, maxWidth: rem(600) }}>
                <TextInput
                  placeholder="Search"
                  leftSection={<IconSearch size={16} />}
                  radius="md"
                  flex={1}
                  styles={{
                    input: { border: `${rem(1.5)} solid #f2b052` },
                  }}
                />

                <Menu shadow="md" width={150}>
                  <Menu.Target>
                    <UnstyledButton
                      px="sm"
                      py={6}
                      style={{
                        border: `${rem(1.5)} solid #f2b052`,
                        borderRadius: rem(8),
                        display: "flex",
                        alignItems: "center",
                        gap: rem(5),
                      }}
                    >
                      <IconMapPin size={18} />
                      <Text fw={600} size="sm">
                        Jaipur
                      </Text>
                      <IconChevronDown size={14} />
                    </UnstyledButton>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item>Delhi</Menu.Item>
                    <Menu.Item>Mumbai</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
            )}

            {/* RIGHT: Actions */}
            <Group gap="md" wrap="nowrap">
              {!isMobile && (
                <Button
                  radius="md"
                  className="btn-primary"
                  onClick={() => router.push("/Login")}
                >
                  🤝 Partner With Us
                </Button>
<<<<<<< HEAD

              )}


=======
              )}

>>>>>>> 80ca922 (Initial commit)
              <Indicator label="3" size={16} color="primary">
                <ActionIcon size="lg" variant="transparent" onClick={open}>
                  <IconUserCircle size={32} />
                </ActionIcon>
              </Indicator>

              {/* Mobile Menu Icon */}
<<<<<<< HEAD
              {isMobile && (
                <Burger opened={opened} onClick={open} />
              )}
=======
              {isMobile && <Burger opened={opened} onClick={open} />}
>>>>>>> 80ca922 (Initial commit)
            </Group>
          </Group>
        </Container>
      </Box>

      {/* MOBILE DRAWER */}
      {/* <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        padding="md"
        size="75%"
      >
        <Stack gap="md">
          <TextInput
            placeholder="Search"
            leftSection={<IconSearch size={16} />}
          />

          <Button fullWidth color="primary">
            Partner With Us
          </Button>

          <Button variant="light">Jaipur</Button>
        </Stack>
      </Drawer> */}

<<<<<<< HEAD

=======
>>>>>>> 80ca922 (Initial commit)
      <Modal
        opened={opened}
        onClose={close}
        size="750px"
        padding={0}
        withCloseButton={true}
        centered
        styles={{
<<<<<<< HEAD
          content: { overflow: 'hidden', borderRadius: '12px' },
          header: { position: 'absolute', right: 10, top: 10, zIndex: 10, backgroundColor: 'transparent' }
=======
          content: { overflow: "hidden", borderRadius: "12px" },
          header: {
            position: "absolute",
            right: 10,
            top: 10,
            zIndex: 10,
            backgroundColor: "transparent",
          },
>>>>>>> 80ca922 (Initial commit)
        }}
      >
        <Group grow gap={0} wrap="nowrap" align="stretch">
          {/* Left Section: Branding & Image */}
<<<<<<< HEAD
          <Box
            style={{ backgroundColor: 'primary' }}
            p="xl"
            visibleFrom="sm"
          >
            <Center mb="xl">
              {/* Replace src with your 3D illustration path */}
              <Image
                src="/images/Cart.png"
                alt="Shopping Cart"
                w={350}
              />
=======
          <Box style={{ backgroundColor: "primary" }} p="xl" visibleFrom="sm">
            <Center mb="xl">
              {/* Replace src with your 3D illustration path */}
              <Image src="/images/Cart.png" alt="Shopping Cart" w={350} />
>>>>>>> 80ca922 (Initial commit)
            </Center>
            <Title order={2} c="#2e1a47" fw={800}>
              BrandIn Town
            </Title>
            <Text c="#2e1a47" size="lg" fw={500} mt="sm">
              Discover Deals, Earn Rewards, and Shop Smarter!
            </Text>
          </Box>

          {/* Right Section: Auth Form */}
          <Box p={40} style={{ flex: 1 }}>
            <Stack align="center" gap="xs">
              <Center
                style={{
<<<<<<< HEAD
                  border: '2px solid primary',
                  borderRadius: '50%',
                  width: 60,
                  height: 60
                }}
              >
                <img src="/images/user.svg" alt="" style={{ color: 'primary', fontSize: '24px' }} />
              </Center>

              <Text size="sm" fw={700} c="#2e1a47">Welcome to</Text>
              <Title order={1} c="primary" style={{ fontSize: '32px' }}>BrandIn Town</Title>

              <Group gap="xs" mt={-10} mb="lg">
                <Box h={1} w={30} bg="primary" />
                <Text size="xs" c="dimmed">Authenticate Yourself.</Text>
=======
                  border: "2px solid primary",
                  borderRadius: "50%",
                  width: 60,
                  height: 60,
                }}
              >
                <img
                  src="/images/user.svg"
                  alt=""
                  style={{ color: "primary", fontSize: "24px" }}
                />
              </Center>

              <Text size="sm" fw={700} c="#2e1a47">
                Welcome to
              </Text>
              <Title order={1} c="primary" style={{ fontSize: "32px" }}>
                BrandIn Town
              </Title>

              <Group gap="xs" mt={-10} mb="lg">
                <Box h={1} w={30} bg="primary" />
                <Text size="xs" c="dimmed">
                  Authenticate Yourself.
                </Text>
>>>>>>> 80ca922 (Initial commit)
                <Box h={1} w={30} bg="primary" />
              </Group>
            </Stack>

<<<<<<< HEAD
            <Text fw={700} c="#2e1a47" mb={5} size="md">Enter your phone number</Text>
=======
            <Text fw={700} c="#2e1a47" mb={5} size="md">
              Enter your phone number
            </Text>
>>>>>>> 80ca922 (Initial commit)

            <Group gap="xs" grow>
              <TextInput
                placeholder="+91"
                variant="filled"
<<<<<<< HEAD
                styles={{ input: { border: '1px solid primary', height: '45px', textAlign: 'center', width: '60px' } }}
=======
                styles={{
                  input: {
                    border: "1px solid primary",
                    height: "45px",
                    textAlign: "center",
                    width: "60px",
                  },
                }}
>>>>>>> 80ca922 (Initial commit)
                readOnly
              />
              <TextInput
                placeholder="9012345678"
<<<<<<< HEAD
                styles={{ input: { border: '1px solid primary', height: '45px' } }}
              // style={{ flex: 3 }}
=======
                styles={{
                  input: { border: "1px solid primary", height: "45px" },
                }}
                // style={{ flex: 3 }}
>>>>>>> 80ca922 (Initial commit)
              />
            </Group>

            <Button
              fullWidth
              mt="xl"
              size="md"
              radius="md"
<<<<<<< HEAD
              style={{ backgroundColor: 'primary', color: '#2e1a47' }}
              rightSection={<i className="fa-solid fa-play-circle" style={{ fontSize: '12px' }}></i>}
              onClick={open}>
=======
              style={{ backgroundColor: "primary", color: "#2e1a47" }}
              rightSection={
                <i
                  className="fa-solid fa-play-circle"
                  style={{ fontSize: "12px" }}
                ></i>
              }
              onClick={open}
            >
>>>>>>> 80ca922 (Initial commit)
              Send OTP
            </Button>
          </Box>
        </Group>
      </Modal>

      <Modal
        opened={opened}
        onClose={close}
        size="780px"
        padding={0}
        withCloseButton
        centered
        radius="lg"
        styles={{
<<<<<<< HEAD
          content: { overflow: 'hidden' },
          header: { position: 'absolute', right: 10, top: 10, zIndex: 10, backgroundColor: 'transparent' }
=======
          content: { overflow: "hidden" },
          header: {
            position: "absolute",
            right: 10,
            top: 10,
            zIndex: 10,
            backgroundColor: "transparent",
          },
>>>>>>> 80ca922 (Initial commit)
        }}
      >
        <Group grow gap={0} wrap="nowrap" align="stretch">
          {/* Left Section: Branding */}
<<<<<<< HEAD
         <Box
=======
          <Box
>>>>>>> 80ca922 (Initial commit)
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
<<<<<<< HEAD
              paddingLeft: "70px"
=======
              paddingLeft: "70px",
>>>>>>> 80ca922 (Initial commit)
              // alignItems: "center",
            }}
          >
            <Stack>
              <Title order={1} fw={800}>
                BrandInTown
              </Title>
<<<<<<< HEAD
              <Text size="lg">
                Discover Deals, Earn Rewards, Shop Smarter!
              </Text>
=======
              <Text size="lg">Discover Deals, Earn Rewards, Shop Smarter!</Text>
>>>>>>> 80ca922 (Initial commit)
            </Stack>
          </Box>

          {/* Right Section: Form Logic */}
          <Box p={40} style={{ flex: 1.8 }}>
            <Stack align="center" gap="xs" mb="xl">
              <Center>
                {/* <IconUser size={35} color={brandColor} stroke={1.5} /> */}
                <Image src="/images/Logo.jpeg" h={40} w="auto" />
              </Center>

<<<<<<< HEAD

              <Group gap="xs" mt={-5} w="100%" justify="center">
                <Box h={1} w={40} bg={brandColor} opacity={0.5} />
                <Text size="xs" c={darkPurple} fw={500}>
                  {step === 'phone' ? 'Authenticate Yourself.' : "Let's get your number Verified."}
=======
              <Group gap="xs" mt={-5} w="100%" justify="center">
                <Box h={1} w={40} bg={brandColor} opacity={0.5} />
                <Text size="xs" c={darkPurple} fw={500}>
                  {step === "phone"
                    ? "Authenticate Yourself."
                    : "Let's get your number Verified."}
>>>>>>> 80ca922 (Initial commit)
                </Text>
                <Box h={1} w={40} bg={brandColor} opacity={0.5} />
              </Group>
            </Stack>

<<<<<<< HEAD
            {step === 'phone' ? (
              /* PHONE INPUT VIEW */
              <Stack gap="md">

                <Group >
=======
            {step === "phone" ? (
              /* PHONE INPUT VIEW */
              <Stack gap="md">
                <Group>
>>>>>>> 80ca922 (Initial commit)
                  <TextInput
                    defaultValue="+91"
                    variant="default"
                    readOnly
<<<<<<< HEAD
                    styles={{ input: { border: `1.5px solid ${brandColor}`, textAlign: 'center', width: '50px', fontWeight: 600 } }}
                  />
                  <TextInput
                    placeholder="9012345678"
                    styles={{ input: { border: `1.5px solid ${brandColor}`, flex: 1, width: "150px" } }}
=======
                    styles={{
                      input: {
                        border: `1.5px solid ${brandColor}`,
                        textAlign: "center",
                        width: "50px",
                        fontWeight: 600,
                      },
                    }}
                  />
                  <TextInput
                    placeholder="9012345678"
                    styles={{
                      input: {
                        border: `1.5px solid ${brandColor}`,
                        flex: 1,
                        width: "150px",
                      },
                    }}
>>>>>>> 80ca922 (Initial commit)
                  />
                </Group>

                <Button
                  fullWidth
                  size="md"
                  style={{ width: "200px" }}
<<<<<<< HEAD
                  
=======
>>>>>>> 80ca922 (Initial commit)
                  mt="md"
                  bg={brandColor}
                  c={darkPurple}
                  radius="md"
<<<<<<< HEAD
                  onClick={() => setStep('otp')}

=======
                  onClick={() => setStep("otp")}
>>>>>>> 80ca922 (Initial commit)
                  rightSection={<IconPlayerPlayFilled size={16} />}
                >
                  Send OTP
                </Button>
              </Stack>
            ) : (
              /* OTP INPUT VIEW */
              <Stack gap="md" align="center">
<<<<<<< HEAD
                <Text fw={600} c={darkPurple} size="sm">An 4 digit code has been sent to you</Text>
=======
                <Text fw={600} c={darkPurple} size="sm">
                  An 4 digit code has been sent to you
                </Text>
>>>>>>> 80ca922 (Initial commit)

                <PinInput
                  size="xl"
                  length={4}
                  placeholder="0"
                  type="number"
<<<<<<< HEAD
                  styles={{ input: { border: `1.5px solid ${brandColor}`, borderRadius: '8px' } }}
=======
                  styles={{
                    input: {
                      border: `1.5px solid ${brandColor}`,
                      borderRadius: "8px",
                    },
                  }}
>>>>>>> 80ca922 (Initial commit)
                />

                <Button
                  fullWidth
                  size="lg"
                  mt="md"
                  bg={brandColor}
                  c={darkPurple}
                  radius="md"
                  rightSection={<IconCheck size={18} />}
<<<<<<< HEAD
                  onClick={() => Openeddddd()}>
=======
                  onClick={() => Openeddddd()}
                >
>>>>>>> 80ca922 (Initial commit)
                  Verify OTP
                </Button>

                <Stack gap={2} align="center" mt="sm">
                  <Text size="xs" c="dimmed">
<<<<<<< HEAD
                    Request code again <span style={{ color: brandColor }}>00:59s</span>
=======
                    Request code again{" "}
                    <span style={{ color: brandColor }}>00:59s</span>
>>>>>>> 80ca922 (Initial commit)
                  </Text>
                  <Divider label="Or" labelPosition="center" w="100%" my="xs" />
                  <Text
                    size="xs"
                    fw={700}
                    c={darkPurple}
<<<<<<< HEAD
                    style={{ cursor: 'pointer' }}
                    onClick={() => setStep('phone')}
                  >
                    Edit phone number <span style={{ color: brandColor }}>+91-9012345678</span>
=======
                    style={{ cursor: "pointer" }}
                    onClick={() => setStep("phone")}
                  >
                    Edit phone number{" "}
                    <span style={{ color: brandColor }}>+91-9012345678</span>
>>>>>>> 80ca922 (Initial commit)
                  </Text>
                </Stack>
              </Stack>
            )}
          </Box>
        </Group>
      </Modal>

      <Modal
        opened={isOpn}
        onClose={closeddddd}
        size="900px"
        padding={0}
        withCloseButton={false}
        centered
<<<<<<< HEAD
        radius="md" >
        {/* Header Section */}
        <Box p="md" style={{ borderBottom: '1px solid #eee' }}>
          <Group justify="space-between">
            <Title order={2} c={darkPurple}>User's Profile Page</Title>
=======
        radius="md"
      >
        {/* Header Section */}
        <Box p="md" style={{ borderBottom: "1px solid #eee" }}>
          <Group justify="space-between">
            <Title order={2} c={darkPurple}>
              User's Profile Page
            </Title>
>>>>>>> 80ca922 (Initial commit)
            <Group gap="xs">
              <Button
                variant="outline"
                color={darkPurple}
                leftSection={<IconSettings size={16} />}
                radius="md"
<<<<<<< HEAD
                styles={{ root: { borderColor: '#ddd' } }}
=======
                styles={{ root: { borderColor: "#ddd" } }}
>>>>>>> 80ca922 (Initial commit)
              >
                Settings
              </Button>
              <Button
                bg={brandColor}
                c={darkPurple}
                leftSection={<IconUser size={16} />}
                radius="md"
              >
                Profile
              </Button>
              {/* <Indicator label="4" size={16} color={brandColor} offset={2} withBorder>
                <ActionIcon variant="transparent" c={brandColor} size="lg">
                  <IconBell size={24} onClick={open}/>
                </ActionIcon>
              </Indicator> */}

<<<<<<< HEAD
              <Indicator label="4" size={16} color={brandColor} offset={2} withBorder>
=======
              <Indicator
                label="4"
                size={16}
                color={brandColor}
                offset={2}
                withBorder
              >
>>>>>>> 80ca922 (Initial commit)
                <ActionIcon
                  variant="transparent"
                  c={brandColor}
                  size="lg"
<<<<<<< HEAD

=======
>>>>>>> 80ca922 (Initial commit)
                  onClick={notifHandlers.open}
                >
                  <IconBell size={24} />
                </ActionIcon>
              </Indicator>

<<<<<<< HEAD


              <ActionIcon variant="outline" color="primary" onClick={closeddddd}>
=======
              <ActionIcon
                variant="outline"
                color="primary"
                onClick={closeddddd}
              >
>>>>>>> 80ca922 (Initial commit)
                <Text size="xs">X</Text>
              </ActionIcon>
            </Group>
          </Group>
        </Box>

        {/* Main Form Content */}
        <Box p={40}>
          <Grid gutter={40}>
            {/* Left: Profile Image Section */}
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Box pos="relative" w={200}>
                <Box
                  style={{
                    border: `2px solid ${brandColor}`,
<<<<<<< HEAD
                    borderRadius: '12px',
                    overflow: 'hidden',
                    aspectRatio: '1/1'
=======
                    borderRadius: "12px",
                    overflow: "hidden",
                    aspectRatio: "1/1",
>>>>>>> 80ca922 (Initial commit)
                  }}
                >
                  <Image
                    src="/images/profile-avatar.png" // Replace with your 3D avatar path
                    alt="Profile"
                  />
                </Box>
                <ActionIcon
                  pos="absolute"
                  bottom={-15}
                  right={-15}
                  size={45}
                  radius="xl"
                  bg={brandColor}
                  c={darkPurple}
<<<<<<< HEAD
                  style={{ border: '4px solid white' }}
=======
                  style={{ border: "4px solid white" }}
>>>>>>> 80ca922 (Initial commit)
                >
                  <IconCamera size={24} />
                </ActionIcon>
              </Box>
            </Grid.Col>

            {/* Right: Form Details */}
            <Grid.Col span={{ base: 12, md: 9 }}>
              <Stack gap="xs" mb="lg">
<<<<<<< HEAD
                <Title order={2} c={darkPurple}>Users Details</Title>
                <Text c="dimmed" size="sm" fw={500}>Fill the Details to get Fair Deals</Text>
=======
                <Title order={2} c={darkPurple}>
                  Users Details
                </Title>
                <Text c="dimmed" size="sm" fw={500}>
                  Fill the Details to get Fair Deals
                </Text>
>>>>>>> 80ca922 (Initial commit)
              </Stack>

              <Grid gutter="md">
                <Grid.Col span={6}>
<<<<<<< HEAD
                  <TextInput label="Name" placeholder="Nalini Sharma" withAsterisk styles={{ label: { color: darkPurple, fontWeight: 700 } }} />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput label="Phone Number" placeholder="9012345678" withAsterisk styles={{ label: { color: darkPurple, fontWeight: 700 } }} />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput label="EMail ID" placeholder="nalinisharma@gmai.com" styles={{ label: { color: darkPurple, fontWeight: 700 } }} />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput label="WhatsApp Number" placeholder="" styles={{ label: { color: darkPurple, fontWeight: 700 } }} />
                  <Checkbox label="Same as phone number" size="xs" mt={5} color={brandColor} />
=======
                  <TextInput
                    label="Name"
                    placeholder="Nalini Sharma"
                    withAsterisk
                    styles={{ label: { color: darkPurple, fontWeight: 700 } }}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput
                    label="Phone Number"
                    placeholder="9012345678"
                    withAsterisk
                    styles={{ label: { color: darkPurple, fontWeight: 700 } }}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput
                    label="EMail ID"
                    placeholder="nalinisharma@gmai.com"
                    styles={{ label: { color: darkPurple, fontWeight: 700 } }}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput
                    label="WhatsApp Number"
                    placeholder=""
                    styles={{ label: { color: darkPurple, fontWeight: 700 } }}
                  />
                  <Checkbox
                    label="Same as phone number"
                    size="xs"
                    mt={5}
                    color={brandColor}
                  />
>>>>>>> 80ca922 (Initial commit)
                </Grid.Col>
              </Grid>

              <Stack gap="xl" mt="xl">
                {/* Gender & Age Row */}
                <Group align="flex-start" grow>
<<<<<<< HEAD
                  <Radio.Group label="Select Gender" withAsterisk styles={{ label: { color: darkPurple, fontWeight: 700 } }}>
=======
                  <Radio.Group
                    label="Select Gender"
                    withAsterisk
                    styles={{ label: { color: darkPurple, fontWeight: 700 } }}
                  >
>>>>>>> 80ca922 (Initial commit)
                    <Group mt="xs">
                      <Radio value="female" label="Female" color={brandColor} />
                      <Radio value="male" label="Male" color={brandColor} />
                      <Radio value="others" label="Others" color={brandColor} />
                    </Group>
                  </Radio.Group>

<<<<<<< HEAD
                  <Radio.Group label="Select Age Group" withAsterisk styles={{ label: { color: darkPurple, fontWeight: 700 } }}>
                    <Group mt="xs">
                      <Radio value="20-30" label="20-30 yrs" color={brandColor} />
                      <Radio value="30-40" label="30-40 yrs" color={brandColor} />
                      <Radio value="40-50" label="40-50 yrs" color={brandColor} />
=======
                  <Radio.Group
                    label="Select Age Group"
                    withAsterisk
                    styles={{ label: { color: darkPurple, fontWeight: 700 } }}
                  >
                    <Group mt="xs">
                      <Radio
                        value="20-30"
                        label="20-30 yrs"
                        color={brandColor}
                      />
                      <Radio
                        value="30-40"
                        label="30-40 yrs"
                        color={brandColor}
                      />
                      <Radio
                        value="40-50"
                        label="40-50 yrs"
                        color={brandColor}
                      />
>>>>>>> 80ca922 (Initial commit)
                    </Group>
                  </Radio.Group>
                </Group>

                {/* Status & WhatsApp Row */}
                <Group align="flex-start" grow>
<<<<<<< HEAD
                  <Radio.Group label="Marital Status" styles={{ label: { color: darkPurple, fontWeight: 700 } }}>
                    <Group mt="xs">
                      <Radio value="unmarried" label="Unmarried" color={brandColor} />
                      <Radio value="married" label="Married" color={brandColor} />
                    </Group>
                  </Radio.Group>

                  <Radio.Group label="Allow Offers On WhatsApp" styles={{ label: { color: darkPurple, fontWeight: 700 } }}>
=======
                  <Radio.Group
                    label="Marital Status"
                    styles={{ label: { color: darkPurple, fontWeight: 700 } }}
                  >
                    <Group mt="xs">
                      <Radio
                        value="unmarried"
                        label="Unmarried"
                        color={brandColor}
                      />
                      <Radio
                        value="married"
                        label="Married"
                        color={brandColor}
                      />
                    </Group>
                  </Radio.Group>

                  <Radio.Group
                    label="Allow Offers On WhatsApp"
                    styles={{ label: { color: darkPurple, fontWeight: 700 } }}
                  >
>>>>>>> 80ca922 (Initial commit)
                    <Group mt="xs">
                      <Radio value="yes" label="Yes" color={brandColor} />
                      <Radio value="no" label="No" color={brandColor} />
                    </Group>
                  </Radio.Group>
                </Group>
              </Stack>

              <Group justify="space-between" mt={40} align="flex-end">
<<<<<<< HEAD
                <Checkbox label={<Text size="xs">Click To Agree with <span style={{ color: brandColor }}>T&C Apply *</span></Text>} color={brandColor} />
=======
                <Checkbox
                  label={
                    <Text size="xs">
                      Click To Agree with{" "}
                      <span style={{ color: brandColor }}>T&C Apply *</span>
                    </Text>
                  }
                  color={brandColor}
                />
>>>>>>> 80ca922 (Initial commit)
                <Button
                  bg={brandColor}
                  c={darkPurple}
                  size="lg"
                  px={40}
                  radius="md"
                  rightSection={<IconDeviceFloppy size={18} />}
                >
                  Save
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Box>
      </Modal>

<<<<<<< HEAD

=======
>>>>>>> 80ca922 (Initial commit)
      <Modal
        opened={notifOpened}
        onClose={notifHandlers.close}
        size="lg"
        title={<Title order={4}>Offers & Notifications</Title>}
        centered
      >
        <Stack gap="md">
          {offers.map((item) => (
            <Card key={item.id} withBorder radius="md" padding="md" shadow="sm">
<<<<<<< HEAD
              <Group wrap="nowrap" align="flex-start"
                // Responsive: Stack vertically on mobile, row on larger screens
                style={{
                  flexDirection: 'row',
                  '@media (min-width: 560px)': { flexDirection: 'row' }
                } as any}
=======
              <Group
                wrap="nowrap"
                align="flex-start"
                // Responsive: Stack vertically on mobile, row on larger screens
                style={
                  {
                    flexDirection: "row",
                    "@media (min-width: 560px)": { flexDirection: "row" },
                  } as any
                }
                onClick={() => {
                  notifHandlers.close(); // close modal first (optional)
                  router.push("/Stores"); // redirect
                }}
>>>>>>> 80ca922 (Initial commit)
              >
                {/* Brand Image */}
                <Image
                  src={item.image}
                  height={150}
<<<<<<< HEAD
                  w={{ base: '100%', sm: 180 }}
=======
                  w={{ base: "100%", sm: 180 }}
>>>>>>> 80ca922 (Initial commit)
                  radius="md"
                  alt={item.brand}
                />

                <Stack gap={4} style={{ flex: 1 }}>
                  <Group justify="space-between">
<<<<<<< HEAD
                    <Title order={4} color="secondary">{item.brand}</Title>
                    <Group gap={4}>
                      <IconStarFilled size={14} color="var(--mantine-color-orange-filled)" />
                      <Text fw={700} size="sm">{item.rating}</Text>
=======
                    <Title order={4} c="secondary">
                      {item.brand}
                    </Title>
                    <Group gap={4}>
                      <IconStarFilled
                        size={14}
                        color="var(--mantine-color-orange-filled)"
                      />
                      <Text fw={700} size="sm">
                        {item.rating}
                      </Text>
>>>>>>> 80ca922 (Initial commit)
                    </Group>
                  </Group>

                  <Text size="xs" c="dimmed" lineClamp={2}>
                    {item.description}
                  </Text>

                  <Group gap={4}>
                    <IconMapPin size={12} color="orange" />
<<<<<<< HEAD
                    <Text size="xs" fw={500} c="dimmed">{item.location}</Text>
                  </Group>

                  <Group gap={8} mt={4}>
                    <Text fw={800} color="secondary" size="md">{item.offer}</Text>
                    <Text size="xs" c="dimmed">({item.validity})</Text>
=======
                    <Text size="xs" fw={500} c="dimmed">
                      {item.location}
                    </Text>
                  </Group>

                  <Group gap={8} mt={4}>
                    <Text fw={800} c="secondary" size="md">
                      {item.offer}
                    </Text>
                    <Text size="xs" c="dimmed">
                      ({item.validity})
                    </Text>
>>>>>>> 80ca922 (Initial commit)
                  </Group>

                  {/* <Button variant="light" color="orange" size="compact-xs" radius="sm" w="fit-content">
                    View Credit Card Offers
                  </Button> */}

                  {/* <Group justify="space-between" align="flex-end" mt="auto">
                    <Stack gap={2}>
                      <Group gap={4}>
                        <IconClock size={12} color="gray" />
                        <Text size="xs" c="dimmed">{item.hours}</Text>
                      </Group>
                      <Group gap={4}>
                        <IconPhone size={12} color="gray" />
                        <Text size="xs" c="dimmed">{item.phone}</Text>
                      </Group>
                    </Stack>

                  </Group> */}
                </Stack>
<<<<<<< HEAD

=======
>>>>>>> 80ca922 (Initial commit)
              </Group>
            </Card>
          ))}
        </Stack>
      </Modal>
    </>
  );
}
