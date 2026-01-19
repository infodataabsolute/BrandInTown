import { Container, Title, Text, Divider, Stack } from "@mantine/core";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of Your Company",
};

export default function PrivacyPolicyPage() {
  return (
    <>
    <Navbar/>
    <Container size="md" py="xl">
      <Stack gap="md">
        <Title order={2}>Privacy Policy</Title>

        <Text size="sm" c="dimmed">
          Last updated: January 2026
        </Text>

        <Divider />

        <Text size="sm">
          This Privacy Policy describes how <b>Your Company Name</b> ("we",
          "our", or "us") collects, uses, and protects your information when
          you use our website, mobile application, and services.
        </Text>

        <Title order={4}>1. Information We Collect</Title>
        <Text size="sm">
          We may collect personal information such as your name, email
          address, phone number, payment details, and usage data when you
          interact with our platform.
        </Text>

        <Title order={4}>2. How We Use Your Information</Title>
        <Text size="sm">
          Your information is used to provide and improve our services,
          process transactions, communicate updates, and ensure platform
          security.
        </Text>

        <Title order={4}>3. Sharing of Information</Title>
        <Text size="sm">
          We do not sell your personal data. Information may be shared with
          trusted partners only when required for service delivery or legal
          compliance.
        </Text>

        <Title order={4}>4. Cookies</Title>
        <Text size="sm">
          We use cookies and similar technologies to improve user experience
          and analyze platform performance. You can manage cookies through
          your browser settings.
        </Text>

        <Title order={4}>5. Data Security</Title>
        <Text size="sm">
          We implement reasonable security measures to protect your data.
          However, no online transmission is completely secure.
        </Text>

        <Title order={4}>6. Your Rights</Title>
        <Text size="sm">
          You may request access, correction, or deletion of your personal
          data. You can also opt out of promotional communications.
        </Text>

        <Title order={4}>7. Third-Party Links</Title>
        <Text size="sm">
          Our platform may contain links to third-party websites. We are not
          responsible for their privacy practices.
        </Text>

        <Title order={4}>8. Policy Updates</Title>
        <Text size="sm">
          This policy may be updated periodically. Changes will be posted on
          this page.
        </Text>

        <Title order={4}>9. Contact Us</Title>
        <Text size="sm">
          📧 Email: support@yourcompany.com  
          <br />
          📍 Address: Your Company Address
        </Text>
      </Stack>
    </Container>
    <Footer/>
    </>
  );
}
