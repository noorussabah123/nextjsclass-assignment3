import Image from "next/image";
import Header from "@/component/header";
import About from "@/component/about"
import Footer from "@/component/footer"

export default function Home() {
  return (
    <div>
    <Header />
    <About />
    <Footer />
    </div>
  );
}
