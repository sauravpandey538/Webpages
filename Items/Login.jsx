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
} from "@chakra-ui/react";
import { GiProgression } from "react-icons/gi";
import React from "react";
function Login() {
  const [show, setShow] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const click = () => setClicked(!clicked);

  const handleClick = () => setShow(!show);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100vh"}
      bgColor={"gray.600"}
    >
      <Flex
        h={800}
        w={800}
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
            Log in
          </Text>
          <Text as={"h4"} fontSize={"1.1rem"} fontWeight={350}>
            Continue your design journey with Saurav.
          </Text>
        </Box>
        <Box mt={"50px"}>
          <Text fontWeight={500} p={"10px 0"}>
            Email address
          </Text>
          <Input type="text" placeholder="Enter your e-mail address" />
        </Box>
        <Box mt={"30px"}>
          <Text fontWeight={500} p={"10px 0"}>
            Password
          </Text>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <HStack m={"30px 0"}>
          <Radio
            value="1"
            colorScheme={clicked ? "white" : "blue"}
            onClick={click}
          ></Radio>
          <Text fontSize={"1.01rem"}>Remember me for 30 days</Text>
        </HStack>
        <Link>
          <Text fontSize={"1.01rem"}>Forget a password?</Text>
        </Link>
        <Button width={"100%"} size={"lg"} m={"30px 0"} colorScheme="facebook">
          Log in
        </Button>
        <Text textAlign={"center"}>
          {" "}
          Don't have a Clarity account?
          <Link ml={2} fontWeight={600}>
            Register now
          </Link>
        </Text>
      </Flex>
    </Box>
  );
}

export default Login;
