import { Center, Flex } from '@chakra-ui/react';
import { Component } from 'react';


class LivreBlanc extends Component {
    componentDidMount() {
        if (!document.querySelector(`script[data-uid="a0bfe6cacd"]`)) {
            const script = document.createElement("script");
            script.async = true;
            script.setAttribute("data-uid", "a0bfe6cacd");
            script.src = "https://johanna-revert-nemor.ck.page/a0bfe6cacd/index.js";
            document?.getElementById("form-container")?.appendChild(script);
        }
    }

    render() {
        console.log("Rendering LivreBlanc component");
        return (
            <Center p={10}  width={"100%"}  >
                <Flex id="form-container" style={{ padding: '20px'}}></Flex>
            </Center>
        );
    }
}

export default LivreBlanc;
