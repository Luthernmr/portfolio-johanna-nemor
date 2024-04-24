import { Button } from "@chakra-ui/react";

export default function DownloadCvButton(){
    const onButtonClick = () => {
        const pdfUrl = "/CV_NEMOR_Johanna.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "/CV_NEMOR_Johanna.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return(
        <Button backgroundColor={"#B131FA"} color={"white"} rounded={"full"} width={"15em"} mb={5} boxShadow="0px 2px 6px rgba(0, 0, 0, 0.5)" fontSize={"lg"}  onClick={onButtonClick} >Télécharger mon  CV</Button>
    )
}