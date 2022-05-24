import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Image,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo1 from '../../assets/logo1.jpg'

export default function NavBar({ search }) {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>

      <Box bg="#00cbc3" px={10} height="90px">
        <Flex h={"90px"} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/home">
              <Image src={logo1} alt='logo1' objectFit='cover' />
          </Link>


          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={2} >
              <Button
                onClick={toggleColorMode}
                size={"lg"}
                color="with"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                mt="5%"

              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"lg"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2th2D1A2YcTh083GVyiFNL1rjqfYRveyxww&usqp=CAU"
                  />
                </MenuButton>
                <MenuList alignItems={"center"} position="relative" zIndex={3}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2th2D1A2YcTh083GVyiFNL1rjqfYRveyxww&usqp=CAU"
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Welcome : {"User"}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Link to="/profile">
                    <MenuItem>My Profile Panel</MenuItem>
                  </Link>
                  <Link to="/favorites">
                    <MenuItem>My Favorites</MenuItem>
                  </Link>
                  <MenuItem >Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}