import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBody from "@/components/PageBody";
import TeamPageClient from "./TeamPageClient";

export const metadata = {
  title: "Our Team — VernaTech",
  description: "Meet the leadership and experts driving innovation at VernaTech.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <PageBody className="min-h-screen bg-slate-50 pt-24">
        <TeamPageClient />
      </PageBody>
      <Footer />
    </>
  );
}
