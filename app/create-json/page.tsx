import SectionJson from "../components/SectionJson";
import GithubIcon from "../icons/GithubIcon";

function page() {
  return (
    <main className="flex min-h-screen flex-col border-sky-600 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
      <menu className="h-10 p-2 border-2 flex flex-row items-center justify-center font-mono font-bold gap-2">
        <p className="text-xl">jacre</p>
        <a href="https://github.com/Quide1/json-creator" target="_blank" rel="noopener">
        <GithubIcon />
        </a>
      </menu>
      <section className="flex flex-col flex-grow justify-center w-full h-full  gap-2 border-yellow-600 border-2 lg:flex-row ">
        <SectionJson />
        <SectionJson />
      </section>
    </main>
  );
}

export default page;
