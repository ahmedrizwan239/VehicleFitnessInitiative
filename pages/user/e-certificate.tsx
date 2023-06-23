import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MainLayout from "@/layouts/main";
import {
  Box,
  Button,
  Text,
  Link,
  GridItem,
  Heading,

} from '@chakra-ui/react';

function Page() {
  const router = useRouter();

  return (
    <MainLayout>
        <Box textAlign="center" display="flex" py={10} px={6} h="76vh" justifyContent="center" flexDir="column">
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text">
                In Progress
            </Heading>
            {/* <Text fontSize="18px" mt={3} mb={2}>
                Under Construction
            </Text> */}
            <Text color={'gray.500'} mt={3} mb={6}>
                The page you're looking for is Under Construction
            </Text>
    
            <Link href="/user">
                <Button
                    colorScheme="teal"
                    bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                    color="white"
                    variant="solid">
                    Go to Home
                </Button>
            </Link>
        </Box>
      
    </MainLayout>
  );
}

export default Page;



