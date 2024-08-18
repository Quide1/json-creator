import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ghcolors as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsonExample from "@/app/mock/jsonExample.json";
const jsonExample2 = {
  name: "martin",
  edad: "43"
}
function JsonViewer() {
  const codeString = JSON.stringify(jsonExample, null, 2);
  const newExample = JSON.stringify(jsonExample2, null, 2)
  return (
    <SyntaxHighlighter
      language="json"
      showLineNumbers={true}
      style={theme}
      customStyle={{
        backgroundColor: "transparent",
        border:"none"
      }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
}

export default JsonViewer;
