import React from "react";

const Function = ({ selectedValues, addRows, calculate }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-lg p-4 flex justify-between items-center">
      <button
        onClick={addRows}
        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        Add 100 More Rows
      </button>
      <div className="relative">
        <select
          className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
          onChange={(e) => calculate(e.target.value)}
        >
          <option value="sum">Sum: {selectedValues.sum}</option>
          <option value="max">Max: {selectedValues.max}</option>
          <option value="min">Min: {selectedValues.min}</option>
          <option value="avg">Avg: {selectedValues.avg}</option>
          <option value="count">Count: {selectedValues.count}</option>
        </select>
      </div>
    </div>
  );
};

export default Function;
