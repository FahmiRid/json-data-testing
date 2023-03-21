import React, { useState } from "react";
import JsonData from './jsonData.json';
import AddNewRules from './AddNewRules';
function JsonTable() {
  const [data, setData] = useState(JsonData);
  const [showModal, setShowModal] = useState(false);

  const handleCreateNewRule = () => {
    setShowModal(true);
  }
  const addRule = (newRule) => {
    setData([...data, newRule]);
    setShowModal(false);
  };


  

  return (
    <div className="w-full">
      <button onClick={handleCreateNewRule} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Create New Rule
      </button>
      <table className="table-auto w-full border border-gray-400">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Match</th>
            <th className="px-4 py-2">Field</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Level</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Movement</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white">
              <td className="border px-4 py-2">{item.match}</td>
              <td className="border px-4 py-2">{item.field}</td>
              <td className="border px-4 py-2">{item.type}</td>
              <td className="border px-4 py-2">{item.level}</td>
              <td className="border px-4 py-2">{item.category}</td>
              <td className="border px-4 py-2">{item.movement}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddNewRules addRule={addRule} closeModal={() => setShowModal(false)} />
    </div>
  );
}

export default JsonTable;
