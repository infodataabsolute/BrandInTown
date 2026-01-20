"use client";
import Link from 'next/link';
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
  Anchor,
} from '@mantine/core';
import { useRouter } from 'next/navigation'; // Correct hook for App Router
import { useMediaQuery } from '@mantine/hooks';
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
} from '@tabler/icons-react';

// REMOVED: import PrivacyPolicyPage from '../app/privacy-policy/page';
// (Never import a page into a component in Next.js)

export default function Footer() {
  const router = useRouter(); // Initialize the router
  const isMobile = useMediaQuery('(max-width: 36em)');
  const isTablet = useMediaQuery('(max-width: 62em)');

  // Define the missing handleNavigation function
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const stackAlign = isMobile ? 'center' : 'flex-start';

  return (
    <Box
      component="footer"
      py={"xl"}
      pos="relative"
      style={{
        backgroundColor: "#f3b052",
        overflow: "hidden",
      }}
    >
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
          opacity: 0.85,
          zIndex: 0,
        }}
      />

      <Container size="lg" pos="relative" style={{ zIndex: 1 }}>
        <SimpleGrid
          cols={isMobile ? 1 : isTablet ? 2 : 4}
          spacing={isMobile ? 30 : 50}
          verticalSpacing={30}
        >
          {/* 1. Logo Section */}
          <Stack gap="md" align={stackAlign}>
            <Box bg="white" p="xs" w="fit-content">
              <Image src="/images/Logo.jpeg" h={30} alt="Logo" />
            </Box>
            <Text size="sm" fw={500} ta={isMobile ? 'center' : 'left'} maw={250}>
              Clarity gives you the blocks and components you need to create a truly professional website.
            </Text>
            <Group justify={isMobile ? 'center' : 'flex-start'}>
              <ActionIcon size="lg" radius="xl" color="#0f0f0f">
                <IconBrandFacebook size={18} />
              </ActionIcon>
              <ActionIcon size="lg" radius="xl" color="#0f0f0f">
                <IconBrandLinkedin size={18} />
              </ActionIcon>
              <ActionIcon size="lg" radius="xl" color="#0f0f0f">
                <IconBrandInstagram size={18} />
              </ActionIcon>
            </Group>
          </Stack>

          {/* 2. Company Section */}
          <Stack gap="xs" align={stackAlign}>
            <Text fw={700}>Company</Text>
            <Anchor component={Link} href="/about-us" c="#1A1A1A" size="sm">About Us</Anchor>
            <Anchor component={Link} href="/about-us" c="#1A1A1A" size="sm">Career</Anchor>
            <Anchor component={Link} href="/about-us" c="#1A1A1A" size="sm">Our Stories</Anchor>
            <Anchor component={Link} href="/Terms-conditions" c="#1A1A1A" size="sm">Terms & Conditions</Anchor>
           
            {/* REDIRECT FIXED: Path must match your folder name exactly */}
            <Anchor c="#1A1A1A" size="sm" onClick={(e) => { e.preventDefault();
                handleNavigation('/privacy-policy');
              }}
              style={{ cursor: 'pointer' }}
            >
              Privacy Policy
            </Anchor>
          </Stack>

          {/* 3. Categories Section */}
          <Stack gap="xs" align={stackAlign}>
            <Text fw={700}>Categories</Text>
<<<<<<< HEAD
    <Anchor c="#1A1A1A" href="/#fashion">Fashion, Accessories & Beauty</Anchor>
<Anchor  c="#1A1A1A" href="/#home-decor">Home Decor</Anchor>
<Anchor  c="#1A1A1A" href="/#appliances">Home Appliance</Anchor>
<Anchor  c="#1A1A1A" href="/#jewellery">Jewellery</Anchor>
<Anchor  c="#1A1A1A" href="/#sports">Sports</Anchor>
{/* <Anchor  c="#1A1A1A" href="/#gadgets">Personal Gadgets</Anchor> */}
=======
    <Anchor c="#1A1A1A"  size="sm" href="/Stores">Fashion, Accessories & Beauty</Anchor>
<Anchor  c="#1A1A1A"  size="sm" href="/Stores">Home Decor</Anchor>
<Anchor  c="#1A1A1A"  size="sm" href="/Stores">Home Appliance</Anchor>
<Anchor  c="#1A1A1A"  size="sm" href="/Stores">Jewellery</Anchor>
<Anchor  c="#1A1A1A"  size="sm" href="/Stores">Sports</Anchor>
{/* <Anchor  c="#1A1A1A"  size="sm" href="/#gadgets">Personal Gadgets</Anchor> */}
>>>>>>> 80ca922 (Initial commit)
          </Stack>

          {/* 4. Support Section */}
          <Stack gap="xs" align={stackAlign}>
            <Text fw={700}>Grow With Us</Text>
            <Anchor component={Link} href="/Login" c="#1A1A1A" size="sm">Become A Partner</Anchor>
            <Anchor component={Link} href="/help-center" c="#1A1A1A" size="sm">Download Our App</Anchor>
            <Anchor component={Link} href="/help-center" c="#1A1A1A" size="sm">Advertise With Us</Anchor>
            <Anchor component={Link} href="/help-center" c="#1A1A1A" size="sm">Help Centre</Anchor>
          </Stack>
        </SimpleGrid>

        <Divider my="lg" color="rgba(0,0,0,0.1)" />

        <Text size="xs" fw={600} ta="center">
          © Copyright 2026, All Rights Reserved by Swarnpushp Innovations Pvt. Ltd.
        </Text>
      </Container>
    </Box>
  );
}



// "use client";
// import {
//   Container,
//   Text,
//   SimpleGrid,
//   Stack,
//   Group,
//   ActionIcon,
//   Image,
//   Divider,
//   Box,
//   rem,
//   Anchor,
// } from '@mantine/core';
// import { useMediaQuery } from '@mantine/hooks';
// import {
//   IconBrandFacebook,
//   IconBrandLinkedin ,
//   IconBrandInstagram,
// } from '@tabler/icons-react';

// const FOOTER_DATA = [ { title: 'Company', links: ['About Us', 'Career', 'Our Stories', 'Terms & Conditions', 'Privacy Policy'], }, { title: 'Categories', links: ['Fashion,Accessories & Beauty', 'Home Decor', 'Home Appliance ', 'Jewellery', 'Sports', 'Personal Gadgets'], }, { title: 'Grow With Us', links: ['Become A Partner', 'Download Our App', 'Advertise With Us', 'Mail Us', 'Help Centre'], }, ];



// const themeStyles = {
//   primary: 'primary',
//   darkBlue: '#1b1b1bff',
//   input: {
//     label: { marginBottom: rem(5), color: 'secondary', fontWeight: 600 },
//     input: { borderColor: 'primary', borderRadius: rem(8) }
//   }
// };
// export default function Footer() {
//   const isMobile = useMediaQuery('(max-width: 36em)');   // <576px
//   const isTablet = useMediaQuery('(max-width: 62em)');   // <992px

//   return (
//  <Box
//   component="footer"
// py={"xl"}
//   pos="relative"
//   style={{
//     backgroundColor: "#f3b052",
//     overflow: "hidden",
//   }}
// >
//   {/* Background Image Layer */}
//   <Box
//     pos="absolute"
//     top={0}
//     left={0}
//     right={0}
//     bottom={0}
//     style={{
//       backgroundImage: "url('/images/Capa.png')",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       opacity: 0.85,   // image ki strength control yahan se
//       zIndex: 0,
//     }}
//   />


    



//       <Container size="lg" >
//         <SimpleGrid
//           cols={isMobile ? 1 : isTablet ? 2 : 4}
//           spacing={isMobile ? 30 : 50}
//           verticalSpacing={30}
          
//         >
//           {/* Logo Section */}
//           <Stack
//             gap="md"
//             align={isMobile ? 'center' : 'flex-start'}
//           >
//             <Box bg="white" p="xs"  w="fit-content">
//               <Image src="/images/Logo.jpeg" h={30} />
//             </Box>

//             <Text
//               size="sm"
//               fw={500}
//               ta={isMobile ? 'center' : 'left'}
//               maw={250}
//             >
//               Clarity gives you the blocks and components you need to create a
//               truly professional website.
//             </Text>

//             <Group justify={isMobile ? 'center' : 'flex-start'}>
//               <ActionIcon size="lg" radius="xl" color="#0f0f0f">
//                 <IconBrandFacebook size={18} />
//               </ActionIcon>
//               <ActionIcon size="lg" radius="xl" color="#0f0f0f">
//                 <IconBrandLinkedin  size={18} />
//               </ActionIcon>
//               <ActionIcon size="lg" radius="xl" color="#0f0f0f">
//                 <IconBrandInstagram size={18} />
//               </ActionIcon>
//             </Group>
//           </Stack>

//           {/* Footer Links */}
//           {FOOTER_DATA.map((section) => (
//             <Stack
//               key={section.title}
//               gap="xs"
//               align={isMobile ? 'center' : 'flex-start'}
//             >
//               <Text fw={700}>{section.title}</Text>

//               {section.links.map((link) => (
//                 <Anchor key={link} c="#1A1A1A" size="sm">
//                   {link}
//                 </Anchor>
//               ))}
//             </Stack>
//           ))}
//         </SimpleGrid>

//         <Divider my="lg" />

//         <Text
//           size="xs"
//           fw={600}
//           ta="center"
//         >
//           © Copyright 2025, All Rights Reserved by Swarnpushp Innovations Pvt. Ltd.
//         </Text>
//       </Container>
//     </Box>
//   );
// }


