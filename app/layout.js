import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of KHARMIZ Ouiame - Data&Cloud Computing Engineering Student",
  description:
    "This is the portfolio of KHARMIZ Ouiame. I  am a passionate Data and Cloud Computing engineering student with a strong focus on Business Intelligence. I enjoy transforming raw data into actionable insights, designing efficient data pipelines, and building interactive dashboards. I am curious, analytical, and constantly seeking opportunities to learn and apply new technologies in real-world projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-gray-800">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      
    </html>
  );
}
