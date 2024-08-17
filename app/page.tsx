import Image from "next/image";
import Link from "next/link";
import GeminiIcon from "./icons/GeminiIcon";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 gap-4">
      <h1 className="text-7xl font-mono font-bold">JACRE</h1>
      <div className="flex flex-row items-center justify-center gap-2 flex-wrap text-center">
        <h3 className="text-3xl">Generative json with <span className="font-mono bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text">IA</span> </h3> <GeminiIcon />
      </div>

      <Link href={'create-json'} className="p-2 bg-white rounded-lg text-blue-700 font-bold">Generate!</Link >
    </main>
  );
}
