"use client";
import Header from "@/components/nav-header";
import Start from "@/components/start";
import About from "@/components/about";
import Work from "@/containers/work";
import { CounterProvider } from "@/components/context";

export default function Home() {
  return (
    <CounterProvider>
      <Header />
      <Start />
      <Work />
      <About />
    </CounterProvider>
  );
}
