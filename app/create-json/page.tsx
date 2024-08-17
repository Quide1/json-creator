import JsonViewer from "../components/JsonViewer";
import SectionJson from "../components/SectionJson";

function page() {
  return (
    <main className="flex min-h-screen flex-col p-4 border-sky-600 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
      <section className="flex flex-col flex-grow justify-center w-full h-full  gap-2 border-yellow-600 border-2 lg:flex-row ">
        <SectionJson/>
       <SectionJson/>
      </section>
    </main>
  );
}

export default page;
