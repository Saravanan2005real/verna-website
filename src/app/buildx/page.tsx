import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBody from "@/components/PageBody";
import BuildXClient from "./BuildXClient";

export const metadata = {
  title: "BuildX Hackathon — VernaTech",
  description: "Register for the BuildX Hackathon by VernaTech. 48 hours of intense coding, collaboration, and innovation.",
};

export default function BuildXPage() {
  return (
    <>
      <Header />
      <PageBody className="min-h-screen bg-slate-950">
        <BuildXClient />
      </PageBody>
      <Footer />
    </>
  );
}
