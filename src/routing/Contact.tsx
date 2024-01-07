import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { Schema, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useNavigate } from "react-router-dom";
import { FormEvent, useRef, useState } from "react";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must contain at least 3 characters" }),
  subject: z
    .string()
    .min(3, { message: "The subject must contain at least 3 characters" }),
  email: z.string().email(),
  message: z
    .string()
    .min(3, { message: "The message must contain at least 3 characters" }),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);
  const navigate = useNavigate();
  return (
    <>
      <Container marginTop="70px">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Center>
            <Heading marginBottom={6}>Contact us</Heading>
          </Center>

          <FormLabel htmlFor="name">Full name</FormLabel>
          <Input
            id="name"
            focusBorderColor="#2c1e73"
            variant="outline"
            bg={"white"}
            placeholder="Full name"
            size="md"
            maxWidth="600px"
            {...register("name")}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

          <FormLabel htmlFor="subject">Subject</FormLabel>
          <Input
            id="subject"
            focusBorderColor="#2c1e73"
            variant="outline"
            bg={"white"}
            placeholder="Subject"
            size="md"
            maxWidth="600px"
            {...register("subject")}
          />
          {errors.subject && (
            <p style={{ color: "red" }}>{errors.subject.message}</p>
          )}

          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            focusBorderColor="#2c1e73"
            variant="outline"
            bg={"white"}
            placeholder="Email"
            size="md"
            maxWidth="600px"
            {...register("email")}
          />

          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message} </p>
          )}

          <FormLabel htmlFor="message">Your message</FormLabel>
          <Textarea
            id="message"
            variant="outline"
            focusBorderColor="#2c1e73"
            bg={"white"}
            placeholder="Message"
            maxWidth="600px"
            minHeight="100px"
            {...register("message")}
          />
          {errors.message && (
            <p style={{ color: "red" }}>{errors.message.message} </p>
          )}

          <Center>
            <Button
              type="submit"
              borderColor="#2c1e73"
              _hover={{ bg: "#2c1e73", color: "white" }}
              minWidth="300px"
              variant="outline"
              marginTop="20px"
              border="2px"
              fontWeight="bold"
              fontSize={17}
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              alignItems="center"
            >
              Submit
            </Button>
          </Center>
        </Form>
      </Container>
    </>
  );
};

export default Contact;
