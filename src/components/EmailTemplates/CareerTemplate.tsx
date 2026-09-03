import {
  Html,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

interface CareerTemplateProps {
  name: string;
  email: string;
  role?: string;
}

export function CareerTemplate({ name, email, role }: CareerTemplateProps) {
  return (
    <Html>
      <Body>
        <Container>
          <Heading>New Job Application</Heading>

          <Text>
            <strong>Name:</strong> {name}
          </Text>

          <Text>
            <strong>Email:</strong> {email}
          </Text>

          <Text>
            <strong>Role:</strong> {role || "General"}
          </Text>

          <Text>
            A new candidate has submitted a job application. Resume is attached.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}