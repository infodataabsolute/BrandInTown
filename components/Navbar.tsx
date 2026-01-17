"use client";

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
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 36em)"); // <576px
  const isLaptop = useMediaQuery("(max-width: 75em)"); // <1200px
  const [opened, { open, close }] = useDisclosure(false);

  const [isOpn, setIsOpn] = useState(false)
  const router = useRouter();

  function Openeddddd() {
    setIsOpn(true)
  }


  function closeddddd() {
    setIsOpn(false)
  }

  const [step, setStep] = useState<'phone' | 'otp'>('phone');

  const brandColor = '#f2ae52';
  const darkPurple = '#2e1a47';


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

            {/* LEFT: Logo */}
            {/* <Image src="/images/Logo.jpeg" h={40} w="auto" /> */}


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
                    input: { border: `${rem(1.5)} solid #F2B052` },
                  }}
                />

                <Menu shadow="md" width={150}>
                  <Menu.Target>
                    <UnstyledButton
                      px="sm"
                      py={6}
                      style={{
                        border: `${rem(1.5)} solid #F2B052`,
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

              )}

              <Indicator label="3" size={16} color="#F2B052">
                <ActionIcon size="lg" variant="transparent" onClick={open}>
                  <IconUserCircle size={32} />
                </ActionIcon>
              </Indicator>

              {/* Mobile Menu Icon */}
              {isMobile && (
                <Burger opened={opened} onClick={open} />
              )}
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

          <Button fullWidth color="#F2B052">
            Partner With Us
          </Button>

          <Button variant="light">Jaipur</Button>
        </Stack>
      </Drawer> */}


      <Modal
        opened={opened}
        onClose={close}
        size="750px"
        padding={0}
        withCloseButton={true}
        centered
        styles={{
          content: { overflow: 'hidden', borderRadius: '12px' },
          header: { position: 'absolute', right: 10, top: 10, zIndex: 10, backgroundColor: 'transparent' }
        }}
      >
        <Group grow gap={0} wrap="nowrap" align="stretch">
          {/* Left Section: Branding & Image */}
          <Box
            style={{ backgroundColor: '#F2B052' }}
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
            </Center>
            <Title order={2} c="#2e1a47" fw={800}>
              Brand In Town
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
                  border: '2px solid #F2B052',
                  borderRadius: '50%',
                  width: 60,
                  height: 60
                }}
              >
                <img src="/images/user.svg" alt="" style={{ color: '#F2B052', fontSize: '24px' }} />
              </Center>

              <Text size="sm" fw={700} c="#2e1a47">Welcome to</Text>
              <Title order={1} c="#F2B052" style={{ fontSize: '32px' }}>Brand In Town</Title>

              <Group gap="xs" mt={-10} mb="lg">
                <Box h={1} w={30} bg="#F2B052" />
                <Text size="xs" c="dimmed">Authenticate Yourself.</Text>
                <Box h={1} w={30} bg="#F2B052" />
              </Group>
            </Stack>

            <Text fw={700} c="#2e1a47" mb={5} size="md">Enter your phone number</Text>

            <Group gap="xs" grow>
              <TextInput
                placeholder="+91"
                variant="filled"
                styles={{ input: { border: '1px solid #F2B052', height: '45px', textAlign: 'center', width: '60px' } }}
                readOnly
              />
              <TextInput
                placeholder="9012345678"
                styles={{ input: { border: '1px solid #F2B052', height: '45px' } }}
              // style={{ flex: 3 }}
              />
            </Group>

            <Button
              fullWidth
              mt="xl"
              size="md"
              radius="md"
              style={{ backgroundColor: '#F2B052', color: '#2e1a47' }}
              rightSection={<i className="fa-solid fa-play-circle" style={{ fontSize: '12px' }}></i>}
              onClick={open}>
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
          content: { overflow: 'hidden' },
          header: { position: 'absolute', right: 10, top: 10, zIndex: 10, backgroundColor: 'transparent' }
        }}
      >
        <Group grow gap={0} wrap="nowrap" align="stretch">
          {/* Left Section: Branding */}
          <Box bg={brandColor} p="xl" visibleFrom="sm" style={{ flex: 1 }}>
            <Stack align="center" justify="center" h="100%" gap="xl">
              <Image
                src="/images/Cart.png" // Ensure this image is in your /public folder
                alt="Shopping Cart Illustration"
                w={350}
              />

            </Stack>
          </Box>

          {/* Right Section: Form Logic */}
          <Box p={40} style={{ flex: 1.8 }}>
            <Stack align="center" gap="xs" mb="xl">
              <Center>
                {/* <IconUser size={35} color={brandColor} stroke={1.5} /> */}
                <Image src="/images/Logo.jpeg" h={40} w="auto" />
              </Center>


              <Group gap="xs" mt={-5} w="100%" justify="center">
                <Box h={1} w={40} bg={brandColor} opacity={0.5} />
                <Text size="xs" c={darkPurple} fw={500}>
                  {step === 'phone' ? 'Authenticate Yourself.' : "Let's get your number Verified."}
                </Text>
                <Box h={1} w={40} bg={brandColor} opacity={0.5} />
              </Group>
            </Stack>

            {step === 'phone' ? (
              /* PHONE INPUT VIEW */
              <Stack gap="md">

                <Group ml={45}>
                  <TextInput
                    defaultValue="+91"
                    variant="default"
                    readOnly
                    styles={{ input: { border: `1.5px solid ${brandColor}`, textAlign: 'center', width: '50px', fontWeight: 600 } }}
                  />
                  <TextInput
                    placeholder="9012345678"
                    styles={{ input: { border: `1.5px solid ${brandColor}`, flex: 1, width: "150px" } }}
                  />
                </Group>

                <Button
                  fullWidth
                  size="md"
                  style={{ width: "200px" }}
                  ml={50}
                  mt="md"
                  bg={brandColor}
                  c={darkPurple}
                  radius="md"
                  onClick={() => setStep('otp')}

                  rightSection={<IconPlayerPlayFilled size={16} />}
                >
                  Send OTP
                </Button>
              </Stack>
            ) : (
              /* OTP INPUT VIEW */
              <Stack gap="md" align="center">
                <Text fw={600} c={darkPurple} size="sm">An 4 digit code has been sent to you</Text>

                <PinInput
                  size="xl"
                  length={4}
                  placeholder="0"
                  type="number"
                  styles={{ input: { border: `1.5px solid ${brandColor}`, borderRadius: '8px' } }}
                />

                <Button
                  fullWidth
                  size="lg"
                  mt="md"
                  bg={brandColor}
                  c={darkPurple}
                  radius="md"
                  rightSection={<IconCheck size={18} />}
                  onClick={() => Openeddddd()}>
                  Verify OTP
                </Button>

                <Stack gap={2} align="center" mt="sm">
                  <Text size="xs" c="dimmed">
                    Request code again <span style={{ color: brandColor }}>00:59s</span>
                  </Text>
                  <Divider label="Or" labelPosition="center" w="100%" my="xs" />
                  <Text
                    size="xs"
                    fw={700}
                    c={darkPurple}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setStep('phone')}
                  >
                    Edit phone number <span style={{ color: brandColor }}>+91-9012345678</span>
                  </Text>
                </Stack>
              </Stack>
            )}
          </Box>
        </Group>
      </Modal>

      <Modal
        opened={isOpn}
        onClose={closed}
        size="900px"
        padding={0}
        withCloseButton={false}
        centered
        radius="md"
        
      >
        {/* Header Section */}
        <Box p="md" style={{ borderBottom: '1px solid #eee' }}>
          <Group justify="space-between">
            <Title order={2} c={darkPurple}>User's Profile Page</Title>
            <Group gap="xs">
              <Button
                variant="outline"
                color={darkPurple}
                leftSection={<IconSettings size={16} />}
                radius="md"
                styles={{ root: { borderColor: '#ddd' } }}
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
              <Indicator label="4" size={16} color={brandColor} offset={2} withBorder>
                <ActionIcon variant="transparent" c={brandColor} size="lg">
                  <IconBell size={24} />
                </ActionIcon>
              </Indicator>
              <ActionIcon variant="outline" color="gray" onClick={close}>
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
                    borderRadius: '12px',
                    overflow: 'hidden',
                    aspectRatio: '1/1'
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
                  style={{ border: '4px solid white' }}
                >
                  <IconCamera size={24} />
                </ActionIcon>
              </Box>
            </Grid.Col>

            {/* Right: Form Details */}
            <Grid.Col span={{ base: 12, md: 9 }}>
              <Stack gap="xs" mb="lg">
                <Title order={2} c={darkPurple}>Users Details</Title>
                <Text c="dimmed" size="sm" fw={500}>Fill the Details to get Fair Deals</Text>
              </Stack>

              <Grid gutter="md">
                <Grid.Col span={6}>
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
                </Grid.Col>
              </Grid>

              <Stack gap="xl" mt="xl">
                {/* Gender & Age Row */}
                <Group align="flex-start" grow>
                  <Radio.Group label="Select Gender" withAsterisk styles={{ label: { color: darkPurple, fontWeight: 700 } }}>
                    <Group mt="xs">
                      <Radio value="female" label="Female" color={brandColor} />
                      <Radio value="male" label="Male" color={brandColor} />
                      <Radio value="others" label="Others" color={brandColor} />
                    </Group>
                  </Radio.Group>

                  <Radio.Group label="Select Age Group" withAsterisk styles={{ label: { color: darkPurple, fontWeight: 700 } }}>
                    <Group mt="xs">
                      <Radio value="20-30" label="20-30 yrs" color={brandColor} />
                      <Radio value="30-40" label="30-40 yrs" color={brandColor} />
                      <Radio value="40-50" label="40-50 yrs" color={brandColor} />
                    </Group>
                  </Radio.Group>
                </Group>

                {/* Status & WhatsApp Row */}
                <Group align="flex-start" grow>
                  <Radio.Group label="Marital Status" styles={{ label: { color: darkPurple, fontWeight: 700 } }}>
                    <Group mt="xs">
                      <Radio value="unmarried" label="Unmarried" color={brandColor} />
                      <Radio value="married" label="Married" color={brandColor} />
                    </Group>
                  </Radio.Group>

                  <Radio.Group label="Allow Offers On WhatsApp" styles={{ label: { color: darkPurple, fontWeight: 700 } }}>
                    <Group mt="xs">
                      <Radio value="yes" label="Yes" color={brandColor} />
                      <Radio value="no" label="No" color={brandColor} />
                    </Group>
                  </Radio.Group>
                </Group>
              </Stack>

              <Group justify="space-between" mt={40} align="flex-end">
                <Checkbox label={<Text size="xs">Click To Agree with <span style={{ color: brandColor }}>T&C Apply *</span></Text>} color={brandColor} />
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
    </>
  );
}
