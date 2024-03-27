import { Heading, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Box, Center, Image, Divider } from "@chakra-ui/react";
import { projects } from "../data/projects";

const categorys = ["print", "strategies", "graphics", "video", "podcast", "events", "community_management", "web", "newletter"];

export default function portfolio() {
    return (
        <Flex flexDirection={"column"} minH={"100vh"} width={"100%"} border={'1px'} backgroundColor={"#B131FA"}>
            <Center flexDirection={"column"}>
                <Heading color={"white"} fontWeight={100}>PORTFOLIO</Heading>

                <Tabs variant='soft-rounded' colorScheme='mypurple' width={"70vw"}>
                    <TabList color={"blue"}>
                        <Tab >Print</Tab>
                        <Tab>Stratégies</Tab>
                        <Tab>Graphismes</Tab>
                        <Tab>Projets vidéo</Tab>
                        <Tab>Podcast</Tab>
                        <Tab>Evenementiel</Tab>
                        <Tab>Community management</Tab>
                    </TabList>
                    <TabPanels>
                        {categorys.map((cat) => (
                            <TabPanel key={cat}>
                                {projects
                                    .filter(elem => elem.category === cat)
                                    .map((project, index) => (
                                        <Flex key={index} bgColor={"#FAF8FA"} mt={5}  borderRadius={'10px'}  flexDirection={index % 2 === 0 ? "row" : "row-reverse"}>
                                            <Box p={5} color={"#353244"}>
                                                <Heading>{project.title}</Heading>
                                                <Divider  bg={"#353244"} mt={2} mb={2}/>
                                                <Text fontSize={"xl"}>{project.description}</Text>
                                            </Box>
                                            <Image borderRadius={index % 2 === 0 ? "0px 10px 10px 0px" :  "10px 0px 0px 10px"} boxSize={"40%"} objectFit={"cover"} src={project.img} />
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