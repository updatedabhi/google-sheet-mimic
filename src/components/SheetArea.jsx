import React, { useState } from "react";
import Function from "./Function";
import Toolbar from "./Toolbar";

const generateColumns = () =>
  Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const generateRows = (count) =>
  Array.from({ length: count }, () => Array(26).fill({ value: "", style: {} }));

const SheetArea = () => {
  const [rows, setRows] = useState(generateRows(100));
  const [selectedCells, setSelectedCells] = useState(new Set());
  const [selectedValues, setSelectedValues] = useState({
    sum: 0,
    max: 0,
    min: Infinity,
    avg: 0,
    count: 0,
  });
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedCol, setSelectedCol] = useState(null);

  const handleInputChange = (rowIndex, colIndex, value) => {
    const newRows = [...rows];
    newRows[rowIndex][colIndex] = { ...newRows[rowIndex][colIndex], value };
    setRows(newRows);
  };

  const addRows = () => {
    setRows([...rows, ...generateRows(10)]);
  };

  const handleMouseDown = (rowIndex, colIndex) => {
    setSelectedCells(new Set([`${rowIndex}-${colIndex}`]));
    setSelectedCol(colIndex);
    setIsSelecting(true);
  };

  const handleMouseEnter = (rowIndex, colIndex) => {
    if (isSelecting && colIndex === selectedCol) {
      setSelectedCells((prev) => new Set(prev).add(`${rowIndex}-${colIndex}`));
    }
  };

  const handleMouseUp = () => {
    setIsSelecting(false);
  };

  const calculate = () => {
    let selectedData = [...selectedCells]
      .map((key) => {
        const [rowIndex, colIndex] = key.split("-").map(Number);
        return Number(rows[rowIndex][colIndex].value);
      })
      .filter((n) => !isNaN(n));

    if (!selectedData.length) return;

    const sum = selectedData.reduce((a, b) => a + b, 0);
    const max = Math.max(...selectedData);
    const min = Math.min(...selectedData);
    const avg = sum / selectedData.length;
    const count = selectedData.length;

    setSelectedValues({ sum, max, min, avg, count });
  };

  const applyStyle = (styleKey, styleValue) => {
    const newRows = rows.map((row, rowIndex) =>
      row.map((cell, colIndex) => {
        if (selectedCells.has(`${rowIndex}-${colIndex}`)) {
          return {
            ...cell,
            style: {
              ...cell.style,
              [styleKey]: cell.style[styleKey] === styleValue ? "" : styleValue,
            },
          };
        }
        return cell;
      })
    );
    setRows(newRows);
  };

  return (
    <div>
      <div className="w-full">
        <Toolbar applyStyle={applyStyle} />
      </div>
      <div className="relative" onMouseUp={handleMouseUp}>
        <div className="overflow-auto border rounded shadow-lg">
          <table className="border-collapse">
            <thead>
              <tr className="bg-gray-200 sticky top-0">
                <th className="border p-2 w-8"></th>
                {generateColumns().map((col, i) => (
                  <th key={i} className="border p-2 w-16 text-center">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-100">
                  <td className="border p-2 text-center font-bold bg-gray-100">
                    {rowIndex + 1}
                  </td>
                  {row.map((cell, colIndex) => (
                    <td key={colIndex} className="border p-0">
                      <input
                        type="text"
                        className={`w-full h-8 text-center outline-none ${
                          selectedCells.has(`${rowIndex}-${colIndex}`)
                            ? "bg-blue-200"
                            : ""
                        }`}
                        style={cell.style}
                        value={cell.value}
                        onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                        onMouseEnter={() =>
                          handleMouseEnter(rowIndex, colIndex)
                        }
                        onChange={(e) =>
                          handleInputChange(rowIndex, colIndex, e.target.value)
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Function
          selectedValues={selectedValues}
          addRows={addRows}
          calculate={calculate}
        />
      </div>
    </div>
  );
};

export default SheetArea;
