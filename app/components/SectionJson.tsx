import CopyClipboard from "../icons/CopyClipboard";
import JsonViewer from "./JsonViewer";

export interface AuxProps {
  children: React.ReactNode;
}
function SectionJson(props: AuxProps) {
  return (
    <div className="h-full flex-[50%] flex-col overflow-auto bg-slate-200 scrollbar m-0 p-0">
      <div className="p-1 flex justify-end h-[5%]  bg-slate-500">
        <button>
          <CopyClipboard height="15" width="15"/>
        </button>
      </div>
      <div className=" h-[95%] border-2 border-black flex-grow overflow-x-auto w-full">
      {props.children}
      </div>
    </div>
  );
}

export default SectionJson;
