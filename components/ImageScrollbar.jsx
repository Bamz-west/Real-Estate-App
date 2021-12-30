import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


const LeftArrow = () => {
    const { scrollPrev, isFirstItemVisible } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon 
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                disabled={isFirstItemVisible}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    );
}


const RightArrow = () => {
    const { scrollNext, isLastItemVisible } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon 
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                disabled={isLastItemVisible}
                fontSize="2xl"
                cursor="pointer"
            />
        </Flex>
    );
}

const ImageScrollbar = ({ data }) => {
    // console.log({data})
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: "hidden" }}>
            {data.map((item) => (
                <Box key={item.id} title={item.id} width="910px" itemID={item.id} overflow="hidden" p="1">
                    <Image
                        placeholder="blur" 
                        blurDataURL={item.url} 
                        src={item.url} 
                        width={1000}
                        height={500}
                        alt="property"
                        sizes="(max-width: 500px) 100px, (max-width: 1024px) 400px, 1000px"
                    />
                </Box>
            ))}
        </ScrollMenu>
    );
}


export default ImageScrollbar;