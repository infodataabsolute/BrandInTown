"use client";

import { 
  Container, 
  SimpleGrid, 
  Text, 
  Paper, 
  Image, 
  AspectRatio, 
  Stack, 
  rem,
  Title,
  Box
} from '@mantine/core';

const CATEGORIES = [
  { label: 'Fashion,Accessories & Beauty', image: 'images/man.png',src:'/Stores' },

  { label: 'Home Decor', image: 'images/home.png',src:'/Stores'  },
  { label: 'Home Appliances', image: 'images/elec.png',src:'/Stores'  },

  { label: 'Jewellery', image: 'images/jewellary.png',src:'/Stores'  },
  { label: 'Sports', image: 'images/sports.png' ,src:'/Stores' },
  { label: 'Personal Gadgets', image: 'images/gadgets.png',src:'/Stores'  },
];
import { useRouter } from "next/navigation";

export default function CategorySection() {
   const router = useRouter();
  return (
    <Container style={{justifyContent:"center"}} size="sm" py="xl">
     

      <SimpleGrid 
        // Monitor: 9 items, Tablet: 4, Mobile: 3
        cols={{ base: 3, sm: 4, md: 6, lg: 6 }} 
        spacing={{ base: '40px' }}
      >
        {CATEGORIES.map((item) => (
          <Stack key={item.label} align="center" gap={10}>
            <Paper
              radius={16} // Modern Rounded Square
              // withBorder
              style={{
                // borderColor: '#eee',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                width: '80%',
              }}
              // Hover animations
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'primary';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#eee';
              }}
            >
              <AspectRatio ratio={1 / 1}>
                <Image 
                  src={item.image} 
                  alt={item.label}
                  fit="cover"
                  onClick={() => router.push("/Stores")}
                />
              </AspectRatio>
            </Paper>

            <Text fw={600}  size="sm" ta="center" c="dimmed">
              {item.label}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  );
}