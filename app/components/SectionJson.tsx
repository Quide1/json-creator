import CopyClipboard from "../icons/CopyClipboard"
import JsonViewer from "./JsonViewer"

function SectionJson() {
    return (
        <div className="overflow-x-auto flex-1 w-full min-h-ful p-2  scrollbar bg-[#111b27]">
            <div className="p-2 border-2 border-white flex justify-end">
                <button>
                    <CopyClipboard />
                </button>
            </div>
            <JsonViewer />
        </div>
    )
}

export default SectionJson
