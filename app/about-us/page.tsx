import {
  Container,
  Title,
  Text,
  Stack,
  Divider,
  SimpleGrid,
  Card,
} from "@mantine/core";
import {
  IconBuildingStore,
  IconUsers,
  IconTargetArrow,
  IconHeartHandshake,
} from "@tabler/icons-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "About Us",
  description: "Learn more about our company, mission, and values",
};

export default function AboutUsPage() {
  return (
    <>
    <Navbar/>
    <Container size="lg" py="xl">
      <Stack gap="xl">
        {/* Header */}
        <Stack gap={4}>
          <Title order={2}>About Us</Title>
          <Text c="dimmed" size="sm">
            Who we are and why we do what we do
          </Text>
        </Stack>

        <Divider />

        {/* Intro */}
        <Text size="sm">
          Welcome to <b>Your Company Name</b>. We are committed to connecting
          customers with trusted local businesses and brands. Our goal is to
          make shopping simple, reliable, and meaningful by supporting local
          communities and providing quality products.
        </Text>

        {/* Mission / Vision / Values */}
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          <Card withBorder radius="md" p="lg">
            <IconTargetArrow size={28} />
            <Title order={5} mt="sm">Our Mission</Title>
            <Text size="sm" c="dimmed">
              To empower local businesses and deliver a seamless shopping
              experience to customers everywhere.
            </Text>
          </Card>

          <Card withBorder radius="md" p="lg">
            <IconUsers size={28} />
            <Title order={5} mt="sm">Our Vision</Title>
            <Text size="sm" c="dimmed">
              To become a trusted platform where local commerce thrives and
              communities grow stronger together.
            </Text>
          </Card>

          <Card withBorder radius="md" p="lg">
            <IconHeartHandshake size={28} />
            <Title order={5} mt="sm">Our Values</Title>
            <Text size="sm" c="dimmed">
              Trust, transparency, customer satisfaction, and support for
              local entrepreneurs.
            </Text>
          </Card>
        </SimpleGrid>

        <Divider />

        {/* Why Choose Us */}
        <Stack gap="xs">
          <Title order={4}>Why Choose Us?</Title>
          <Text size="sm">
            • Wide range of trusted local stores and brands  
            <br />
            • Secure payments and easy ordering  
            <br />
            • Transparent pricing and policies  
            <br />
            • Dedicated customer support  
          </Text>
        </Stack>

        <Divider />

        {/* Closing */}
        <Stack gap="xs">
          <Title order={4}>Join Our Journey</Title>
          <Text size="sm">
            Whether you're a customer or a business partner, we invite you
            to be part of our growing community. Together, we can build a
            better, more connected shopping experience.
          </Text>
        </Stack>
      </Stack>
    </Container>
    <Footer/>
    </>
  );
}
