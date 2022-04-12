import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  color,
  useDisclosure,
  Button,
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  Text,
  DrawerOverlay,
  VStack,
  StackDivider,
  DrawerFooter
} from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import React from 'react'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('#FF8000', '#FF8000')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'orange' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            {/* <Logo /> */}
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          justifyContent="flex-start"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/about" path={path}>
            About Me
          </LinkItem>
          <LinkItem href="/services" path={path}>
            Services
          </LinkItem>
          <LinkItem
            // _target="_blank"
            href="/testimonials"
            path={path}
            //   display="inline-flex"
            //   alignItems="center"
            //   style={{ gap: 4 }}
            //   pl={2}
          >
            Testimonials
          </LinkItem>
          <LinkItem href="/products" path={path}>
            Products
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            {/* Dropdown Menu */}
            {/* <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/about" passHref>
                  <MenuItem as={Link}>About Me</MenuItem>
                </NextLink>
                <NextLink href="/services" passHref>
                  <MenuItem as={Link}>Services</MenuItem>
                </NextLink>
                <NextLink href="/testimonies" passHref>
                  <MenuItem as={Link}>Testimonies</MenuItem>
                </NextLink>
                <NextLink href="/products" passHref>
                  <MenuItem as={Link}>Products</MenuItem>
                </NextLink>
                <NextLink href="/contact" passHref>
                  <MenuItem as={Link}>Contact</MenuItem>
                </NextLink>
                <MenuItem as={Link} href="#">
                  View Source
                </MenuItem>
              </MenuList>
            </Menu> */}

            <Button rightIcon={<HamburgerIcon />} onClick={onOpen}>
              Menu
            </Button>
            <Drawer
              isOpen={isOpen}
              size="full"
              onClose={onClose}
              initialFocusRef={firstField}
            >
              <DrawerOverlay height="100% !important" />
              <DrawerContent
                bg={useColorModeValue('#f0e7db', '#202023')}
                height="100% !important"
              >
                <DrawerHeader>
                  <Text textAlign="center" color="#ff8000">
                    Resonate With Yourself
                  </Text>
                  <DrawerCloseButton />
                </DrawerHeader>
                {/* Drawer Body */}
                <DrawerBody>
                  <VStack
                    divider={
                      <StackDivider
                        borderColor={useColorModeValue('#202023', '#ff8000')}
                      />
                    }
                    spacing={5}
                    align="center"
                    fontSize="lg"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                  >
                    <NextLink href="/" passHref>
                      <Button onClick={onClose} variant="link">
                        Home
                      </Button>
                    </NextLink>
                    <NextLink href="/" passHref>
                      <Button onClick={onClose} variant="link">
                        About Me
                      </Button>
                    </NextLink>
                    <Menu isLazy placement="bottom" colorScheme={'orange'}>
                      <MenuButton as={Button} variant="link">
                        Services <ChevronDownIcon />
                      </MenuButton>
                      <MenuList>
                        <NextLink href="/dearmoring" passHref>
                          <MenuItem onClick={onClose}>De-Armoring</MenuItem>
                        </NextLink>
                        <NextLink href="/dearmoring" passHref>
                          <MenuItem onClick={onClose}>De-Armoring</MenuItem>
                        </NextLink>
                        <NextLink href="/dearmoring" passHref>
                          <MenuItem onClick={onClose}>De-Armoring</MenuItem>
                        </NextLink>
                      </MenuList>
                    </Menu>
                    <NextLink href="/testimonials" passHref>
                      <Button onClick={onClose} variant="link">
                        Testimonials
                      </Button>
                    </NextLink>
                    <NextLink href="/contact" passHref>
                      <Button onClick={onClose} variant="link">
                        Contact
                      </Button>
                    </NextLink>
                  </VStack>
                </DrawerBody>
                <DrawerFooter
                  width="100%"
                  textAlign="center"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button onClick={onClose}>Close</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
