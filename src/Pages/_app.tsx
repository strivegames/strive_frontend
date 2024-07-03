import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../app/components/Common/Layout";
import { Rubik } from "next/font/google";

import "../app/globals.css";
import Loader from "@/app/components/Common/Loader";
import { AuthProvider } from "@/app/Context/AuthContext";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-rubik",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { route } = router;
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const shouldRenderSidebar = route !== "/login" && route !== "/register";
  const shouldRenderNavBar = route !== "/login" && route !== "/register";
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <AuthProvider>
      <div className={`min-h-screen w-full font-rubik ${rubik.variable}`}>
        {shouldRenderSidebar && <Layout />}
        {loader && <Loader />}
        <Component {...pageProps}  setLoader={setLoader} />
      </div>
    </AuthProvider>
  );
}
