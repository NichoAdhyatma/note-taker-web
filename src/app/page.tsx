import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Note from "./components/note";
import MainLayout from "./main-layout";

export default function Home() {
  return (
    <MainLayout>
      <Navbar />
      <Note />
      <Footer />
    </MainLayout>
  );
}
