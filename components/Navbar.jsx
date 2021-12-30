import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from "react-icons/bs";
import { FiKey } from 'react-icons/fi';

import { useState, useEffect } from "react";


const Navbar = () => {

    const useWindowDimensions = () => {
        const hasWindow = typeof window !== "undefined"
    
        function getWindowDimensions() {
          const width = hasWindow ? window.innerWidth : null
          return width
        }
    
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
    
        useEffect(() => {
          if (hasWindow) {
            function handleResize() {
              setWindowDimensions(getWindowDimensions())
            }
    
            window.addEventListener("resize", handleResize)
            return () => window.removeEventListener("resize", handleResize)
          }
        }, [hasWindow])
    
        return windowDimensions
    }
    
    const width = useWindowDimensions()
    const breakpoint = 700

    return (
        <Flex p="2" borderBottom="1px" borderColor="gray.100">
            <Box fontSize="3xl" color="blue.400" fontWeight="bold">
                <Link href="/" paddingLeft="2">Realtor</Link>
            </Box>
            <Spacer />
            <Box>
                {width >= breakpoint ? (
                    <>
                    <List display="flex" fontSize="lg" p="2">
                        <Link href="/" passHref>
                            <ListItem marginRight="5" cursor="pointer">
                                <ListIcon as={FcHome} />
                                Home
                            </ListItem>
                        </Link>
                        <Link href="/search" passHref>
                            <ListItem marginRight="5" cursor="pointer">
                                <ListIcon as={BsSearch} />
                                Search
                            </ListItem>
                        </Link>
                        <Link href="/search?purpose=for-sale" passHref>
                            <ListItem marginRight="5" cursor="pointer">
                                <ListIcon as={FcAbout} />
                                Buy Property
                            </ListItem>
                        </Link>
                        <Link href="/search?purpose=for-rent" passHref>
                            <ListItem marginRight="5" cursor="pointer">
                                <ListIcon as={FiKey} />
                                Rent property
                            </ListItem>
                        </Link>
                    </List>
                    </>
                ) : (
                    <>
                    <Menu>
                        <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                        <MenuList>
                            <Link href="/" passHref>
                                <MenuItem icon={<FcHome />}>Home</MenuItem>
                            </Link>
                            <Link href="/search" passHref>
                                <MenuItem icon={<BsSearch />}>Search</MenuItem>
                            </Link>
                            <Link href="/search?purpose=for-sale" passHref>
                                <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                            </Link>
                            <Link href="/search?purpose=for-rent" passHref>
                                <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                    </>
                )}
                {/* <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                    <MenuList>
                        <Link href="/" passHref>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href="/search" passHref>
                            <MenuItem icon={<BsSearch />}>Search</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-sale" passHref>
                            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-rent" passHref>
                            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                        </Link>
                    </MenuList>
                </Menu> */}
            </Box>
        </Flex>
    )
};


export default Navbar;