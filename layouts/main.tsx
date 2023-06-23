import React, { ReactNode } from "react";

import Link from "next/link";
import { Box } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "@/components/Head";

type Props = {
  children: ReactNode;
  title?: string;
};

const MainLayout = ({ children, title = "SafeRoads Initiative - Hackathon"}: Props) => (
  <>
    <Head title={title} />
    <Header/>
    {children}
    <Footer />
  </>
);

export default MainLayout;
