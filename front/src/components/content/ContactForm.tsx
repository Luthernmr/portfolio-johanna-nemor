import { FormControl, FormLabel, Input, Textarea, Button, VStack, useToast } from '@chakra-ui/react';
import { useState } from 'react';

const SendForm = async ({ name, email, message, toast }) => {
  try {
    const response = await fetch(
      "https://4h7edpif7c.execute-api.eu-west-1.amazonaws.com/send-mail/contactFunction",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
       body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    );
      console.log(response)
    if (response) {
      toast({
        title: "Email sent!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    toast({
      title: "Error",
      description: "Failed to send email",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const toast = useToast(); // useToast is now called inside a functional component

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await SendForm({ ...formData, toast }); // Pass toast as an argument to SendForm
    // Faites quelque chose avec les données du formulaire, comme les envoyer à un serveur
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch" color={"white"} width={"100%"}>
        <FormControl id="name" isRequired>
          <FormLabel>Votre nom</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Votre email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>Votre message</FormLabel>
          <Textarea name="message" value={formData.message} onChange={handleChange} />
        </FormControl>
        <Button type="submit" colorScheme="blue">Envoyer</Button>
      </VStack>
    </form>
  );
};

export default ContactForm;
