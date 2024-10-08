import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ResetPasswordEmailProps {
  resetLink: string | undefined;
  name: string | undefined | null;
}

export const ResetPasswordEmailText = ({
  name,
  resetLink,
}: ResetPasswordEmailProps) => `
Hi ${name || "there"},

Someone recently requested a password change for your Astrae Design account. If this was you, click the link below to set a new password:

${resetLink}

If you don't want to change your password or didn't request this, just ignore and delete this message.

Happy Coding!

The Astrae Design Team
58 Okodee Road, KNUST Kumasi, Ghana
`;

export const ResetPasswordEmail = ({
  name,
  resetLink,
}: ResetPasswordEmailProps) => (
  <Html>
    <Head />
    <Preview>Astrae Design reset your account password</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://res.cloudinary.com/dlnsqeeos/image/upload/v1728419360/atl0dtnn1itnhmahbroy.png"
          width="120"
          height="42"
          alt="Astrae"
          style={logo}
        />
        <Hr style={hr} />
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
          Someone recently requested a password change for your Astrae Design
          account. If this was you, you can set a new password here:
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={resetLink}>
            Reset Password
          </Button>
        </Section>
        <Text style={paragraph}>
          If you don&apos;t want to change your password or didn&apos;t request
          this, just ignore and delete this message.
        </Text>
        <Text style={paragraph}>Happy Coding!</Text>
        <Hr style={hr} />
        <Text style={footer}>58 Okodee Road KNUST Kumasi, Ghana</Text>
      </Container>
    </Body>
  </Html>
);

ResetPasswordEmail.PreviewProps = {
  resetLink: "https://test.com",
  name: "Abiola",
} as ResetPasswordEmailProps;

export default ResetPasswordEmail;

const main = {
  backgroundColor: "#ffffff",
  padding: "0 20px 0 20px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#0096FA",
  borderRadius: "8px",
  color: "#FFF !important",
  fontWeight: "500",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#cccccc",
  fontSize: "14px",
};
