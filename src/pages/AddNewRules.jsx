import React, { useState } from "react";
// import jsonTable from "./jsonTable";

function AddNewRules({ showModal, closeModal, addRule }) {
    const [match, setMatch] = useState("");
    const [field, setField] = useState("");
    const [type, setType] = useState("");
    const [level, setLevel] = useState("");
    const [category, setCategory] = useState("");
    const [movement, setMovement] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRule = { match, field, type, level, category, movement };
        addRule(newRule);
        closeModal();
    };

    return (
        <div className={`fixed z-10 inset-0 overflow-y-auto `}>
            <div className="flex items-center justify-center min-h-screen">
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                ></div>

                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="w-full">
                                    <div className="mb-4">
                                        <div>
                                            
                                        </div>
                                        <label
                                            htmlFor="match"
                                            className="block text-gray-700 font-bold mb-2"
                                        >
                                            Match
                                        </label>
                                        <input
                                            type="text"
                                            name="match"
                                            id="match"
                                            className="form-input rounded-md shadow-sm mt-1 block w-full"
                                            value={match}
                                            onChange={(e) => setMatch(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="field"
                                            className="block text-gray-700 font-bold mb-2"
                                        >
                                            Field
                                        </label>
                                        <input
                                            type="text"
                                            name="field"
                                            id="field"
                                            className="form-input rounded-md shadow-sm mt-1 block w-full"
                                            value={field}
                                            onChange={(e) => setField(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="type"
                                            className="block text-gray-700 font-bold mb-2"
                                        >
                                            Type
                                        </label>
                                        <input
                                            type="text"
                                            name="type"
                                            id="type"
                                            className="form-input rounded-md shadow-sm mt-1 block w-full"
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="level"
                                            className="block text-gray-700 font-bold mb-2"
                                        >
                                            Level
                                        </label>
                                        <input
                                            type="text"
                                            name="level"
                                            id="level"
                                            className="form-input rounded-md shadow-sm mt-1 block w-full"
                                            value={level}
                                            onChange={(e) => setLevel(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="category"
                                            className="block text-gray-700 font-bold mb-2"
                                        >
                                            Category
                                        </label>
                                        <input
                                            type="text"
                                            name="category"
                                            id="category="
                                            className="form-input rounded-md shadow-sm mt-1 block w-full"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="movement"
                                            className="block text-gray-700 font-bold mb-2"
                                        >
                                            Movement
                                        </label>
                                        <input
                                            type="text"
                                            name="movement"
                                            id="movement"
                                            className="form-input rounded-md shadow-sm mt-1 block w-full"
                                            value={movement}
                                            onChange={(e) => setMovement(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="submit"
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddNewRules;
