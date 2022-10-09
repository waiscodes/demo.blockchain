import React, { useState } from "react";

interface Props {
	addBlock: (tx: string) => void;
}
const AddBlock: React.FC<Props> = ({ addBlock }) => {
	const [tx, setTx] = useState<string>("");

	const submitTx = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addBlock(tx);
		setTx("");
	};

	return (
		<form
			onSubmit={submitTx}
			className="p-6 m-3 overflow-scroll bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
		>
			<label htmlFor="add-block" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
				Block Data
			</label>
			<textarea
				id="add-block"
				rows={3}
				className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Your message..."
				onChange={(e) => setTx(e.target.value)}
				value={tx}
			></textarea>
			<button
				type="submit"
				className="w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2"
			>
				Create Block
			</button>
		</form>
	);
};

export default AddBlock;
