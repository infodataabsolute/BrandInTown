import {
  Container,
  Title,
  Text,
  Stack,
  Divider,
  Card,
  SimpleGrid,
  Button,
} from "@mantine/core";
import {
  IconHelp,
  IconTruck,
  IconCreditCard,
  IconRefresh,
  IconUser,
  IconMail,
} from "@tabler/icons-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Help Center",
  description: "Get help and support for using our platform",
};

export default function HelpCenterPage() {
  return (
    <>
    <Navbar/>
    <Container size="lg" py="xl">
      <Stack gap="xl">
        {/* Header */}
        <Stack gap={4}>
          <Title order={2}>Help Center</Title>
          <Text c="dimmed" size="sm">
            Find answers to common questions or contact our support team.
          </Text>
        </Stack>

        <Divider />

        {/* Help Cards */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          <Card withBorder radius="md" p="lg">
            <IconTruck size={28} />
            <Title order={5} mt="sm">Orders & Delivery</Title>
            <Text size="sm" c="dimmed">
              Track orders, delivery timelines, and shipping information.
            </Text>
          </Card>

          <Card withBorder radius="md" p="lg">
            <IconCreditCard size={28} />
            <Title order={5} mt="sm">Payments & Refunds</Title>
            <Text size="sm" c="dimmed">
              Learn about payment methods, refunds, and billing issues.
            </Text>
          </Card>

          <Card withBorder radius="md" p="lg">
            <IconRefresh size={28} />
            <Title order={5} mt="sm">Returns & Cancellations</Title>
            <Text size="sm" c="dimmed">
              Understand our return, replacement, and cancellation policies.
            </Text>
          </Card>

          <Card withBorder radius="md" p="lg">
            <IconUser size={28} />
            <Title order={5} mt="sm">Account & Profile</Title>
            <Text size="sm" c="dimmed">
              Manage your account, password, and personal details.
            </Text>
          </Card>

          <Card withBorder radius="md" p="lg">
            <IconHelp size={28} />
            <Title order={5} mt="sm">General Questions</Title>
            <Text size="sm" c="dimmed">
              FAQs about using our website and services.
            </Text>
          </Card>

          <Card withBorder radius="md" p="lg">
            <IconMail size={28} />
            <Title order={5} mt="sm">Contact Support</Title>
            <Text size="sm" c="dimmed">
              Need more help? Reach out to our support team.
            </Text>
          </Card>
        </SimpleGrid>

        <Divider />

        {/* Contact Section */}
        <Stack gap="xs">
          <Title order={4}>Still need help?</Title>
          <Text size="sm" c="dimmed">
            Our support team is available to assist you.
          </Text>

          <Stack gap={4}>
            <Text size="sm">📧 Email: support@yourcompany.com</Text>
            <Text size="sm">📞 Phone: +91 90000 00000</Text>
            <Text size="sm">🕘 Support Hours: 9 AM – 6 PM (Mon–Sat)</Text>
          </Stack>

          <Button mt="md" w="fit-content">
            Contact Support
          </Button>
        </Stack>
      </Stack>
    </Container>
    <Footer/>
    </>
  );
}
