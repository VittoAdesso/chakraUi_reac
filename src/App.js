import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon } from "react-icons/fa";

import AccordionBody from './components/accordionBody';
import Nav from './components/nav';

function App() {
   
  const { colorMode, toggleColorMode } = useColorMode(); 
  const isDark = colorMode === "dark";

  return (
    <VStack>
      <Flex w="100%">
        {/* <Heading ml="2" size="md" fontWeight='extrabold' 
        color='WHITE.500' > HELLOOO 👀👀💡👨‍💻👨‍💻</Heading> */}
        <Nav></Nav>
        <AccordionBody></AccordionBody>
        
        <Spacer></Spacer>
        <IconButton ml={9} icon={isDark ? <FaSun /> : <FaMoon />} 
        isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
    </VStack>
  );
}
   
export default App;