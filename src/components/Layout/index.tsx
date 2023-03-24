import { ReactNode } from "react";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import { SideBar } from "@/components/SideBar";

import styles from "./styles.module.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={inter.className}>
      <Navbar />
      <div className={styles.container}>
        <SideBar />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};
