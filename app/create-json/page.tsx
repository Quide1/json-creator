import JsonInput from "../components/JsonInput";
import JsonViewer from "../components/JsonViewer";
import SectionJson from "../components/SectionJson";
import GithubIcon from "../icons/GithubIcon";

function page() {
  return (
    <main className="h-screen flex flex-col bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
      <menu className="flex flex-row justify-around items-center border-2 h-[5vh]">
        <p className="text-xl">JACRE</p>
        <a
          href="https://github.com/Quide1/json-creator"
          target="_blank"
          rel="noopener"
        >
          <GithubIcon />
        </a>
      </menu>
      <section className="flex flex-col h-[95vh] bg-slate-600 border-2 border-green-700 lg:flex-row gap-2">
        <SectionJson>
          <JsonInput />
        </SectionJson>
        <SectionJson>
          <JsonViewer />
        </SectionJson>
      </section>
    </main>
  );
}

export default page;
