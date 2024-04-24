import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function PortfolioButton() {
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/portfolio');
    
    return (
        <Button backgroundColor={"#353244"} color={"white"} rounded={"full"} width={"15em"} boxShadow="0px 2px 6px rgba(0, 0, 0, 0.5)" fontSize={"lg"} onClick={handleOnClick}>Découvrir mon portfolio</Button>
    )
}