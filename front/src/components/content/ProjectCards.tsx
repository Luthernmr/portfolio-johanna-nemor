
import 'react-multi-carousel/lib/styles.css';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";
import { Image, Box, Text, Flex, Button, IconButton } from '@chakra-ui/react';
import { projects } from '../data/projects'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export default function ProjectCards() {

    return (
        <Box width={"100%"} justifyContent={"center"} alignContent={"center"} p={10}>

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={projects.length}
                visibleSlides={3.1}
                infinite
            >
                <Box  position="relative" m={10}>

                    <Box position={"absolute"} left={"-1%"} top={"50%"} transform="translate(-50%, -50%)" zIndex={999}>
                        <ButtonBack>

                            <IconButton
                                isRound={true}
                                variant='solid'
                                backgroundColor={"#black"}
                                aria-label='Done'
                                fontSize='30px'
                            
                                icon={<ChevronLeftIcon />}
                            />
                        </ButtonBack>
                    </Box>
                    <Box>

                        <Slider>
                            {projects.map((elem, index) => (
                                <Slide index={index}>
                                    <Flex
                                        width={"90%"}
                                        height={"100%"}
                                        backgroundColor={"white"}
                                        flexDirection={"column"}
                                        borderRadius={"20px"}
                                        boxShadow="0px 2px 6px rgba(0, 0, 0, 0.5)"
                                        position="relative"
                                        _hover={{
                                            ".overlay": {
                                                opacity: 1,
                                                rounded: "full",
                                                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)"
                                            },
                                            ".overlay2": {
                                                opacity: 1,
                                                rounded: "full",
                                            },
                                            ".img": {
                                                opacity: 0.5,
                                            }
                                        }}
                                    >
                                        <Image
                                            className={"img"}
                                            boxSize={"100%"}
                                            objectFit={"cover"}
                                            transition={"ease-in-out 0.3s"}
                                            src={elem.img}
                                            borderRadius={"20px"}

                                        />
                                        <Button
                                            position="absolute"
                                            top="50%"
                                            left="50%"
                                            transform="translate(-50%, -50%)"
                                            textAlign="center"
                                            opacity={0}
                                            className="overlay"
                                            transition=".3s ease"
                                            bg="#B131FA"
                                            color="white"
                                            fontSize="16px"
                                            p="16px 32px"
                                            borderRadius="10px"
                                            _hover={{
                                                backgroundColor: "#D869FE"
                                            }}
                                            as='a' href='#portefolio'
                                        >
                                            En savoir plus
                                        </Button>
                                        <Text position="absolute"
                                            bottom={"2%"}
                                            left={"2%"}
                                            p={"1"}
                                            rounded={"none"}
                                            opacity={0} className="overlay2"
                                            backgroundColor="white"
                                            borderRadius="2px"
                                            textAlign={"center"}
                                            transition=".3s ease"
                                        >{elem.title}

                                        </Text>
                                    </Flex>
                                </Slide>
                            ))}
                        </Slider>
                    </Box>
                    <Box position={"absolute"} right={"0%"} top={"50%"} transform="translate(-50%, -50%)" zIndex={999}>
                        <ButtonNext>
                            <IconButton
                                isRound={true}
                                variant='solid'
                                backgroundColor={"#black"}
                                aria-label='Done'
                                fontSize='30px'
                                icon={<ChevronRightIcon />}
                            />
                        </ButtonNext>
                    </Box>
                </Box>

            </CarouselProvider>
        </Box>

    );
}
