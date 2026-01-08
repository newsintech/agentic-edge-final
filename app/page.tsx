import ModuleLoader from "@/components/ModuleLoader";

export default function Home() {
  return (
    <main>
      <ModuleLoader modules={['01-hero/hero']} />
    </main>
  );
}
