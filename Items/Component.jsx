import { Box, Flex, Grid, GridItem, Text, Icon } from "@chakra-ui/react";
import { GiArtificialHive } from "react-icons/gi";
import { FaAffiliatetheme } from "react-icons/fa6";

export default function Component() {
  return (
    <Box
      minW={"100vw"}
      minH={"100vh"}
      bgColor={"#2A0134"}
      alignItems={"center"}
      display={"flex"}
      justifyContent={"center"}
      width={"100%"}
    >
      <Flex h={"auto"} bgColor={"white"} p={"70px 50px"}>
        <Grid w={"33%"} gap={6}>
          <GridItem
            h="auto"
            bg="black.500"
            display={"flex"}
            border={"2px solid black"}
          >
            <GiArtificialHive />{" "}
            <Flex display={"grid"}>
              <Text fontWeight={700} fontSize={"1.3rem"}>
                SURFER AI
              </Text>
              <Text fontWeight={400} fontSize={"1.1rem"} color={"gray.600"}>
                Generate optimized article that
                <br /> rank with just a click
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}
