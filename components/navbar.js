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
  DrawerFooter,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel
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
  const fontSize = '20px'

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
                bg={useColorModeValue(
                  'rgb(240, 231, 219, 0.95)',
                  'rgb(32, 32, 35, 0.95)'
                )}
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
                      <Button
                        onClick={onClose}
                        variant="link"
                        width="100%"
                        fontSize={fontSize}
                      >
                        Home
                      </Button>
                    </NextLink>
                    <NextLink href="/about" passHref>
                      <Button
                        onClick={onClose}
                        variant="link"
                        width="100%"
                        fontSize={fontSize}
                      >
                        About Me
                      </Button>
                    </NextLink>

                    <Accordion allowToggle border="transparent" width="100%">
                      <AccordionItem>
                        <h2>
                          <AccordionButton
                            padding="0"
                            fontWeight="500"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Box textAlign="center" fontSize={fontSize}>
                              Services
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          display="flex"
                          flexDir="column"
                          alignItems="center"
                          justifyContent="center"
                          textAlign="center"
                        >
                          <NextLink passHref href="/works/bodywork">
                            <Button
                              variant="link"
                              onClick={onClose}
                              width="100%"
                              py="2"
                              fontWeight="light"
                              fontSize="18px"
                            >
                              Bodywork
                            </Button>
                          </NextLink>
                          <NextLink passHref href="/works/de-armouring">
                            <Button
                              variant="link"
                              onClick={onClose}
                              width="100%"
                              py="2"
                              fontWeight="light"
                              fontSize="18px"
                            >
                              De-armouring
                            </Button>
                          </NextLink>
                          <NextLink passHref href="/works/tantric-de-armouring">
                            <Button
                              variant="link"
                              onClick={onClose}
                              width="100%"
                              py="2"
                              fontWeight="light"
                              fontSize="18px"
                            >
                              Tantric De-armouring
                            </Button>
                          </NextLink>
                          <NextLink passHref href="/works/sound-healing">
                            <Button
                              variant="link"
                              onClick={onClose}
                              width="100%"
                              py="2"
                              fontWeight="light"
                              fontSize="18px"
                            >
                              Sound Healing
                            </Button>
                          </NextLink>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>

                    <NextLink href="/testimonials" passHref>
                      <Button
                        onClick={onClose}
                        variant="link"
                        width="100%"
                        fontSize={fontSize}
                      >
                        Testimonials
                      </Button>
                    </NextLink>
                    <NextLink href="/contact" passHref>
                      <Button
                        onClick={onClose}
                        variant="link"
                        width="100%"
                        fontSize={fontSize}
                      >
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
