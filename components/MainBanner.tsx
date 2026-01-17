"use client";

import {
  Container,
  Grid,
  Title,
  Text,
  Button,
  Group,
  Image,
  Paper,
  Box,
} from "@mantine/core";
import { Zalando_Sans } from "next/font/google";

export default function MainHeroBanner() {
  return (
   <Box
  component="footer"
         
  
  mx= {"3%"}
  bd= "md"
  pos="relative"
  bottom={"2px"}
  bdrs={"30"}

  style={{
    backgroundColor: "#F2B052",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)", // 👈 bottom shadow
    
    
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


    



    

      <Container size="auto" >
        <Grid >
          {/* LEFT CONTENT */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title
              order={1}
              fw={600}
            
              mt={65}
              lh={1.2}
            >
              When You Buy Local, <br />
              You Give Back To What Matters Most.
            </Title>

            <Text mt="md" size="lg">
              When you buy from local stores, you’re not just purchasing a
              product — you’re investing in your community. Every purchase helps
              support local jobs, families, and dreams. You get personalized
              service, unique products, and the satisfaction of knowing you’re
              making a difference.
            </Text>

            <Text mt="md" >
              Skip the online cart. Visit your neighborhood store today and be
              part of something bigger.
            </Text>
          </Grid.Col>

          {/* RIGHT IMAGE */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box ta="center">
              <Image
                src="/images/Cart.png"
                alt="Shopping Cart"
                w="100%"
                maw={450}
                // mx="auto"
              />
            </Box>
          </Grid.Col>
        </Grid>

        {/* LOGO STRIP */}
        <Paper
          mt={90}
          radius="md"
          py="md"
          bg="white"
          shadow="sm"
           
        >
          <Group justify="space-between" wrap="nowrap" >
            {[
              "/images/a.png",
              "/images/b.png",
              "/images/c.png",
              "/images/d.png",
              "/images/e.png",
              "/images/f.png",
              "/images/g.png",
              "/images/h.png",
              "/images/c.png",
              "/images/b.png",
              "/images/d.png",
            ].map((logo, index) => (
              <Image key={index} src={logo} h={38} fit="contain"  />
            ))}
          </Group>
        </Paper>
      </Container>
    </Box>
  );
}
