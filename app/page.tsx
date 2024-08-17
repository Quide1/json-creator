import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-4 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
      <h1 className="text-7xl font-mono font-bold">JACRE</h1>
      <h3 className="text-3xl">Generative json with Ia</h3>
      <Link href={'create-json'} className="p-2 bg-white rounded-lg text-blue-700 font-bold">Generate!</Link >
    </main>
  );
}
