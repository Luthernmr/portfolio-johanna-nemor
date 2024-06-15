import { Center, Flex } from '@chakra-ui/react';
import { Component } from 'react';


class LivreBlanc extends Component {
    componentDidMount() {
        if (!document.querySelector(`script[data-uid="23eb9de9d6"]`)) {
            const script = document.createElement("script");
            script.async = true;
            script.setAttribute("data-uid", "23eb9de9d6");
            script.src = "https://nemor.ck.page/23eb9de9d6/index.js";
            document?.getElementById("form-container")?.appendChild(script);
        }
    }

    render() {
        console.log("Rendering LivreBlanc component");
        return (
            <Center p={10}  width={"100%"}  border={"2px solid red"}>
                <Flex id="form-container" style={{ padding: '20px', border: '1px solid black' }}></Flex>
            </Center>
        );
    }
}

export default LivreBlanc;
