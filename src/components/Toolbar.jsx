import {
  Undo,
  Redo,
  Printer,
  Bold,
  Italic,
  Underline,
  Link,
  Table,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Plus,
  Minus,
  Percent,
  DollarSign,
  Search,
  CaseUpper,
  CaseLower,
} from "lucide-react";

const Toolbar = () => {
  return (
    <div className="flex items-center space-x-4 bg-[#f0f4f9] p-2 rounded-full shadow-md">
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <Search size={20} />
      </button>
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
      <button className="p-2 hover:bg-gray-200 rounded-lg">100%</button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <DollarSign size={20} />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <Percent size={20} />
      </button>
      <div className="border-l border-gray-300 h-6"></div>
      <button className="p-2 hover:bg-gray-200 rounded-lg">123</button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <Minus size={20} />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">10</button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <Plus size={20} />
      </button>
      <div className="border-l border-gray-300 h-6"></div>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <Bold size={20} />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <Italic size={20} />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <Underline size={20} />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <CaseUpper size={20} />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <CaseLower size={20} />
      </button>
      <div className="border-l border-gray-300 h-6"></div>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <AlignLeft size={20} />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <AlignCenter size={20} />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <AlignRight size={20} />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <AlignJustify size={20} />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <Link size={20} />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <Table size={20} />
      </button>
      <button className="p-2 hover:bg-gray-200 rounded-lg">
        <List size={20} />
      </button>
    </div>
  );
};

export default Toolbar;
