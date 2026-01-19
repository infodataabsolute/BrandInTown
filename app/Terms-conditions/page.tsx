import {
  Container,
  Title,
  Text,
  Stack,
  Divider,
} from "@mantine/core";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Terms & Conditions",
  description: "Read our terms and conditions before using our services",
};

export default function TermsAndConditionsPage() {
  return (
    <>
    <Navbar/>
    <Container size="md" py="xl">
      <Stack gap="lg">
        {/* Header */}
        <Stack gap={4}>
          <Title order={2}>Terms & Conditions</Title>
          <Text size="sm" c="dimmed">
            Last updated: January 2026
          </Text>
        </Stack>

        <Divider />

        {/* Intro */}
        <Text size="sm">
          These Terms & Conditions ("Terms") govern your access to and use of
          our website, products, and services. By accessing or using our
          platform, you agree to be bound by these Terms.
        </Text>

        {/* Section 1 */}
        <Stack gap="xs">
          <Title order={4}>1. Use of Our Services</Title>
          <Text size="sm">
            You agree to use our services only for lawful purposes and in
            accordance with these Terms. Any misuse, unauthorized access,
            or violation of applicable laws is strictly prohibited.
          </Text>
        </Stack>

        {/* Section 2 */}
        <Stack gap="xs">
          <Title order={4}>2. User Accounts</Title>
          <Text size="sm">
            You are responsible for maintaining the confidentiality of your
            account credentials. You agree to notify us immediately of any
            unauthorized use of your account.
          </Text>
        </Stack>

        {/* Section 3 */}
        <Stack gap="xs">
          <Title order={4}>3. Payments & Transactions</Title>
          <Text size="sm">
            All payments made through our platform are subject to applicable
            payment terms. We are not responsible for payment failures caused
            by third-party payment providers.
          </Text>
        </Stack>

        {/* Section 4 */}
        <Stack gap="xs">
          <Title order={4}>4. Intellectual Property</Title>
          <Text size="sm">
            All content, trademarks, logos, and materials available on this
            platform are owned by or licensed to us. Unauthorized use is
            strictly prohibited.
          </Text>
        </Stack>

        {/* Section 5 */}
        <Stack gap="xs">
          <Title order={4}>5. Limitation of Liability</Title>
          <Text size="sm">
            We shall not be liable for any indirect, incidental, or
            consequential damages arising from your use of our services.
          </Text>
        </Stack>

        {/* Section 6 */}
        <Stack gap="xs">
          <Title order={4}>6. Termination</Title>
          <Text size="sm">
            We reserve the right to suspend or terminate your access to our
            services at any time, without prior notice, if you violate these
            Terms.
          </Text>
        </Stack>

        {/* Section 7 */}
        <Stack gap="xs">
          <Title order={4}>7. Changes to These Terms</Title>
          <Text size="sm">
            We may update these Terms from time to time. Continued use of
            the platform after changes indicates acceptance of the updated
            Terms.
          </Text>
        </Stack>

        {/* Section 8 */}
        <Stack gap="xs">
          <Title order={4}>8. Governing Law</Title>
          <Text size="sm">
            These Terms shall be governed and interpreted in accordance
            with the laws applicable in your jurisdiction.
          </Text>
        </Stack>

        <Divider />

        {/* Contact */}
        <Stack gap="xs">
          <Title order={4}>Contact Us</Title>
          <Text size="sm">
            If you have any questions about these Terms & Conditions, please
            contact us at <b>support@yourcompany.com</b>.
          </Text>
        </Stack>
      </Stack>
    </Container>
    <Footer/>
    </>
  );
}
