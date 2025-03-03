import {
  Undo,
  Redo,
  Printer,
  Bold,
  Italic,
  Underline,
  CaseUpper,
  CaseLower,
} from "lucide-react";

const Toolbar = ({ applyStyle }) => {
  return (
    <div className="flex items-center space-x-4 bg-[#f0f4f9] p-2 rounded-full shadow-md">
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <Undo size={20} />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <Redo size={20} />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <Printer size={20} />
      </button>
      <div className="border-l border-gray-300 h-6"></div>

      <button
        className="p-2 hover:bg-gray-200 rounded-lg"
        onClick={() => applyStyle("fontWeight", "bold")}
      >
        <Bold size={20} />
      </button>
      <button
        className="p-2 hover:bg-gray-200 rounded-lg"
        onClick={() => applyStyle("fontStyle", "italic")}
      >
        <Italic size={20} />
      </button>
      <button
        className="p-2 hover:bg-gray-200 rounded-lg"
        onClick={() => applyStyle("textDecoration", "underline")}
      >
        <Underline size={20} />
      </button>
      <button
        className="p-2 hover:bg-gray-200 rounded-lg"
        onClick={() => applyStyle("textTransform", "uppercase")}
      >
        <CaseUpper size={20} />
      </button>
      <button
        className="p-2 hover:bg-gray-200 rounded-lg"
        onClick={() => applyStyle("textTransform", "lowercase")}
      >
        <CaseLower size={20} />
      </button>
    </div>
  );
};

export default Toolbar;
