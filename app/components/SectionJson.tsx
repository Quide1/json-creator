import CopyClipboard from "../icons/CopyClipboard";
import JsonViewer from "./JsonViewer";

export interface AuxProps {
  children: React.ReactNode;
}
function SectionJson(props: AuxProps) {
  return (
    <div className="h-full flex-[50%] flex-col overflow-auto bg-slate-900 scrollbar m-0 p-1">
      <div className="p-1 flex justify-end h-[5%]  bg-slate-900 ">
        <button>
          <CopyClipboard height="18" width="18"/>
        </button>
      </div>
      <div className="flex h-[95%] flex-grow overflow-x-auto w-full">
      {props.children}
      </div>
    </div>
  );
}

export default SectionJson;
