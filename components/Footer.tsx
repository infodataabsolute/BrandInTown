"use client";
import {
  Container,
  Text,
  SimpleGrid,
  Stack,
  Group,
  ActionIcon,
  Image,
  Divider,
  Box,
  rem,
  Anchor,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconBrandFacebook,
  IconMapPin,
  IconBrandInstagram,
} from '@tabler/icons-react';

const FOOTER_DATA = [ { title: 'Company', links: ['About Us', 'Career', 'Our Stories', 'Terms & Conditions', 'Privacy Policy'], }, { title: 'Categories', links: ['Fashion,Accessories & Beauty', 'Home Decor', 'Home Appliance ', 'Jewellery', 'Sports', 'Personal Gadgets'], }, { title: 'Grow With US', links: ['Become A Partner', 'Download Our App', 'Advertise With Us', 'Mail Us', 'Help Centre'], }, ];

export default function Footer() {
  const isMobile = useMediaQuery('(max-width: 36em)');   // <576px
  const isTablet = useMediaQuery('(max-width: 62em)');   // <992px

  return (
 <Box
  component="footer"
py={"xl"}
  pos="relative"
  style={{
    backgroundColor: "#F2B052",
    overflow: "hidden",
  }}
>
  {/* Background Image Layer */}
  <Box
    pos="absolute"
    top={0}
    left={0}
    right={0}
    bottom={0}
    style={{
      backgroundImage: "url('/images/Capa.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 0.85,   // image ki strength control yahan se
      zIndex: 0,
    }}
  />


    



      <Container size="lg" >
        <SimpleGrid
          cols={isMobile ? 1 : isTablet ? 2 : 4}
          spacing={isMobile ? 30 : 50}
          verticalSpacing={30}
          
        >
          {/* Logo Section */}
          <Stack
            gap="md"
            align={isMobile ? 'center' : 'flex-start'}
          >
            <Box bg="white" p="xs"  w="fit-content">
              <Image src="/images/Logo.jpeg" h={30} />
            </Box>

            <Text
              size="sm"
              fw={500}
              ta={isMobile ? 'center' : 'left'}
              maw={250}
            >
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </Text>

            <Group justify={isMobile ? 'center' : 'flex-start'}>
              <ActionIcon size="lg" radius="xl" color="#101338ff">
                <IconBrandFacebook size={18} />
              </ActionIcon>
              <ActionIcon size="lg" radius="xl" color="#101338ff">
                <IconMapPin size={18} />
              </ActionIcon>
              <ActionIcon size="lg" radius="xl" color="#101338ff">
                <IconBrandInstagram size={18} />
              </ActionIcon>
            </Group>
          </Stack>

          {/* Footer Links */}
          {FOOTER_DATA.map((section) => (
            <Stack
              key={section.title}
              gap="xs"
              align={isMobile ? 'center' : 'flex-start'}
            >
              <Text fw={700}>{section.title}</Text>

              {section.links.map((link) => (
                <Anchor key={link} c="#1A1A1A" size="sm">
                  {link}
                </Anchor>
              ))}
            </Stack>
          ))}
        </SimpleGrid>

        <Divider my="lg" />

        <Text
          size="xs"
          fw={600}
          ta="center"
        >
          © Copyright 2025, All Rights Reserved by Swarnpushp Innovation Pvt. Ltd.
        </Text>
      </Container>
    </Box>
  );
}
