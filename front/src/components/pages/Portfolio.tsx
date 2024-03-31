import { Heading, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Box, Center, Image, Divider, useBreakpointValue } from "@chakra-ui/react";
import { projects } from "../data/projects";

const categorys = ["print", "strategies", "graphics", "video", "podcast", "events", "community_management", "web", "newletter"];

export default function portfolio() {
    const fontSize = useBreakpointValue({ base: "sm", lg: "lg" });
    return (
        <Flex flexDirection={"column"} minH={"100vh"} width={"100%"} backgroundColor={"#B131FA"}>
            <Center flexDirection={"column"}>
                <Heading mt="10vh" mb="10vh" size={{ base: "2xl", lg: "3xl" }} color="white">MES PROJETS</Heading>
                <Tabs variant='soft-rounded' colorScheme={"purple"} width={{base:"97vw", lg:"70vw"}}>
                    <TabList overflow={"auto"}>
                        <Tab fontSize={fontSize} color={"white"}>Print</Tab>
                        <Tab fontSize={fontSize} color={"white"}>Stratégies</Tab>
                        <Tab fontSize={fontSize} color={"white"}>Graphismes</Tab>
                        <Tab fontSize={fontSize} color={"white"}>Projets vidéo</Tab>
                        <Tab fontSize={fontSize} color={"white"}>Podcast</Tab>
                        <Tab fontSize={fontSize} color={"white"}>Evenementiel</Tab>
                        <Tab fontSize={fontSize} color={"white"}>Community management</Tab>
                    </TabList>
                    <TabPanels>
                        {categorys.map((cat) => (
                            <TabPanel key={cat} >
                                {projects
                                    .filter(elem => elem.category === cat)
                                    .map((project, index) => (
                                        <Flex key={index} bgColor={"#FAF8FA"} mt={5} borderRadius={'10px'} flexDirection={{ base: "column", lg: index % 2 === 0 ? "row" : "row-reverse"}}
                                            transition={"ease-in-out 0.3s"}
                                            boxShadow="0 4px 10px rgba(0, 0, 0, 0.5)" _hover={{
                                                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
                                            }}>
                                            <Box p={{ base: 3, lg:10}} color={"#353244"} width={{base: "100%", lg: '55%'}}>
                                                <Heading size={{base:"lg", lg:"xl"}} >{project.title}</Heading>
                                                <Divider bg={"#353244"} mt={2} mb={2} />
                                                <Text fontFamily={"Roboto"} fontWeight={"100"} whiteSpace="pre-line" fontSize={{base:"sm", lg:'lg'}}>{project.description}</Text>
                                            </Box>
                                            <Box  width={{base: "100%", lg: '45%'}}>
                                                <Image borderRadius={{base :"0px 0px 10px 10px", lg: index % 2 === 0 ? "0px 10px 10px 0px" : "10px 0px 0px 10px"}} boxSize={"100%"} objectFit={"cover"}src={project.img} />
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