import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Navigation/Footer";
import CTANOTES from "@/components/Pages/Notes/CTA/CTA-NOTES";

export default function NotesPage() {
  return (
    <div>
      <Navbar />
      <CTANOTES />
      <Footer />
    </div>
  );
}
