import Button from "@/components/button";
import Header from "@/components/nav-header";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
      <Button>Hello</Button>
      <Header />
    </main>
  );
}
