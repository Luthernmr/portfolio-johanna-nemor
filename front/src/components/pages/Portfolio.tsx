import { Heading, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Box, Center, Image, Divider } from "@chakra-ui/react";
import { projects } from "../data/projects";
const categorys = ["all","print", "strategies", "video", "podcast", "community_management", "web", "newsletter", "buisness_plan", "veille", "crise_management", "advergaming" ];

export default function portfolio() {


    return (
        <Flex flexDirection={"column"} minH={"100vh"} width={"100%"}backgroundColor={"#353244"}>
            <Center flexDirection={"column"}>
                <Heading mt="10vh" mb="10vh" size={{ base: "xl", lg: "2xl" }} color="white" fontWeight={"100"}>Mes projets</Heading>
                <Tabs width={{base:"97vw", lg:"70vw"}} h={"100%"}>
                    <TabList minHeight={"100%"}>
                        <Tab  color={"white"}>Tout</Tab>
                        <Tab  color={"white"}>Print</Tab>
                        <Tab  color={"white"}>Stratégies</Tab>
                        <Tab  color={"white"}>Projets vidéo</Tab>
                        <Tab  color={"white"}>Podcast</Tab>
                        <Tab  color={"white"}>Community management</Tab>
                        <Tab  color={"white"}>Web</Tab>
                        <Tab  color={"white"}>Newsletter</Tab>
                        <Tab  color={"white"}>Business plan</Tab>
                        <Tab  color={"white"}>Veille</Tab>
                        <Tab  color={"white"}>Gestion de crise</Tab>
                        <Tab  color={"white"}>Advergaming</Tab>
                    </TabList>
                    <TabPanels>
                        {categorys.map((cat, index) => (
                            <TabPanel key={index} >
                                {projects
                                    .filter(elem => elem.category === cat || cat === "all" )
                                    .map((project, index) => (
                                        <Flex key={index} bgColor={"#FAF8FA"} mt={5} borderRadius={'10px'} flexDirection={{ base: "column", lg: index % 2 === 0 ? "row" : "row-reverse"}}
                                            transition={"ease-in-out 0.3s"}
                                            boxShadow="0 4px 10px rgba(0, 0, 0, 0.5)" _hover={{
                                                boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
                                            }}>
                                            <Box  width={{base: "100%", lg: '45%'}}  overflow={"hidden"}>
                                                <Image  borderRadius={{base :"10px 10px 0px 0px", lg: index % 2 === 0 ? "10px 0px 0px 10px" : "0px 10px 10px 0px"}} boxSize={"100%"} objectFit={"cover"}transition={"ease-in-out 0.3s"}  _hover={{transform: "scale(1.1)" }} src={project.img} />
                                            </Box>
                                            <Box p={{ base: 3, lg:10}} color={"#353244"} width={{base: "100%", lg: '55%'}}>
                                                <Heading size={{base:"md", lg:"lg"}} color={"#B131FA"}>{project.title}</Heading>
                                                <Divider bg={"#353244"} mt={2} mb={2} />
                                                <Text fontFamily={"Roboto"} fontWeight={"100"} whiteSpace="pre-line" fontSize={{base:"sm", lg:'md'}}>{project.description}</Text>
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