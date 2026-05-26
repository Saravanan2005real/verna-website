import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BuildXClient from "./BuildXClient";

export const metadata = {
  title: "BuildX Hackathon — VernaTech",
  description: "Register for the BuildX Hackathon by VernaTech. 48 hours of intense coding, collaboration, and innovation.",
};

export default function BuildXPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950">
        <BuildXClient />
      </main>
      <Footer />
    </>
  );
}
