import { Heading, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Box, Center, Image, Divider } from "@chakra-ui/react";
import { projects } from "../data/projects";
const categorys = ["all", "print", "strategies", "video", "podcast", "community_management", "web", "newsletter", "buisness_plan", "veille", "crise_management", "advergaming"];

export default function portfolio() {


    return (
        <Flex flexDirection={"column"} minH={"100vh"} width={"100%"} >
            <Center flexDirection={"column"}>
                <Tabs width={{ base: "97vw", lg: "70vw" }} h={"100%"} mt={'5vh'} variant={'soft-rounded'} colorScheme='purple'>
                    <TabList minHeight={"100%"} overflowY={"hidden"} overflowX={"auto"} height={'100%'}>
                        <Tab color={"gray.600"}>Tout</Tab>
                        <Tab color={"gray.600"}>Print</Tab>
                        <Tab color={"gray.600"}>Stratégies</Tab>
                        <Tab color={"gray.600"}>Projets vidéo</Tab>
                        <Tab color={"gray.600"}>Podcast</Tab>
                        <Tab color={"gray.600"}>Community management</Tab>
                        <Tab color={"gray.600"}>Web</Tab>
                        <Tab color={"gray.600"}>Newsletter</Tab>
                        <Tab color={"gray.600"}>Business plan</Tab>
                        <Tab color={"gray.600"}>Veille</Tab>
                        <Tab color={"gray.600"}>Gestion de crise</Tab>
                        <Tab color={"gray.600"}>Advergaming</Tab>
                    </TabList>
                    <TabPanels>
                        {categorys.map((cat, index) => (
                            <TabPanel key={index} >
                                {projects
                                    .filter(elem => elem.category === cat || cat === "all")
                                    .map((project, index) => (
                                        <Flex key={index} bgColor={"#FAF8FA"} mt={5} borderRadius={'10px'} flexDirection={{ base: "column", lg: index % 2 === 0 ? "row" : "row-reverse" }}
                                            transition={"ease-in-out 0.3s"}
                                            boxShadow="0 2px 5px rgba(0, 0, 0, 0.5)" _hover={{
                                                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
                                            }}>
                                            <Box width={{ base: "100%", lg: '45%' }} overflow={"hidden"}>
                                                <Image borderRadius={{ base: "10px 10px 0px 0px", lg: index % 2 === 0 ? "10px 0px 0px 10px" : "0px 10px 10px 0px" }} boxSize={"100%"} objectFit={"cover"} transition={"ease-in-out 0.3s"} _hover={{ transform: "scale(1.1)" }} src={project.img} />
                                            </Box>
                                            <Box p={{ base: 3, lg: 10 }} color={"#353244"} width={{ base: "100%", lg: '55%' }} maxW={'100%'}>
                                                <Heading size={{ base: "md", lg: "lg" }} color={"gray.600"} backgroundColor={"purple.100"} p={2} borderRadius={"25"}>
                                                        {project.title}
                                                </Heading>
                                                <Divider bg={"#353244"} mt={2} mb={2} />
                                                <Text fontFamily={"Roboto"} fontWeight={"100"} whiteSpace="pre-line" fontSize={{ base: "sm", lg: 'md' }}>{project.description}</Text>
                                            </Box>
                                        </Flex>
                                    ))}
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            </Center>
        </Flex>
    )
}