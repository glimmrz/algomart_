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

export const WelcomeTemplate = ({ firstName }) => (
  <Html>
    <Head />
    <Preview>
      Your one-stop destination for premium jute bags, fresh groceries, tasty
      snacks, and stylish furniture.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src="" width="170" height="50" alt="shop" style={logo} />
        <Text style={paragraph}>Hi {firstName},</Text>
        <Text style={paragraph}>
          Welcome to shop, where quality meets convenience! Explore our unique
          collection of premium jute bags, fresh groceries, irresistible snacks,
          and stylish furniture. Whether you are looking for eco-friendly
          accessories or essentials for your home, shop has it all. Shop
          sustainably and elevate your lifestyle with us today!
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="">
            shop now
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The Shop team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>12 CA, USA</Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#ef6c00",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
