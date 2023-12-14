import React from "react";
import {
  Flex,
  Box,
  Link,
  Text,
  Icon,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  HStack,
  Radio,
  Spacer,
} from "@chakra-ui/react";
import { GiProgression } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
function Register() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      minH={"100vh"}
      bgColor={"gray.600"}
    >
      <Flex
        minH={800}
        padding={"80px 80px"}
        display={"block"}
        bgColor={"white"}
        borderRadius={"20px"}
        boxShadow={" 4px 4px 20px  black"}
      >
        <Box>
          {" "}
          <Link fontSize="4xl" display="inline-flex" alignItems="center" mr={4}>
            <Icon as={GiProgression} />
            <Text ml={2} fontSize="xl" pt={4} fontWeight={600}>
              SAURAV
            </Text>
          </Link>
        </Box>
        <Box display={"block"} alignItems={"left"}>
          <Text as={"h3"} fontSize={"1.4rem"} pt={"45px"} fontWeight={600}>
            Register page
          </Text>
          <Text as={"h4"} fontSize={"1.1rem"} fontWeight={350}>
            Connecting with Saurav is so easy.
          </Text>
        </Box>
        <Box mt={"20px"}>
          <Text fontWeight={500} p={"10px 0"}>
            Email address
          </Text>
          <Input type="text" placeholder="Enter your e-mail address" />
        </Box>
        <Box mt={"20px"}>
          <Text fontWeight={500} p={"10px 0"}>
            Confirm your Password
          </Text>
          <Input type="text" placeholder="Enter your new Password" />
          <Button
            width={"100%"}
            size={"lg"}
            m={"30px 0"}
            colorScheme="facebook"
          >
            Send a OTP
          </Button>
          <Text textAlign={"center"} fontWeight={500} fontSize={"1.6rem"}>
            ━━━━━━━━━━━ Or ━━━━━━━━━━━
          </Text>

          <Button
            size={"lg"}
            mt={"30px"}
            width={"100%"}
            colorScheme="facebook"
            textAlign={"in"}
          >
            <FaFacebook /> <Text pl={3}>Continue with Facebook</Text>
          </Button>

          <Button size={"lg"} mt={"10px"} width={"100%"} colorScheme="purple">
            <FaGithub />
            <Text pl={3}>Continue with Github</Text>
          </Button>
          <Spacer />
          <Button size={"lg"} mt={"10px"} width={"100%"} colorScheme="twitter">
            <FaTwitter /> <Text pl={3}>Continue with Twitter</Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
export default Register;
