import React, { useState } from "react";
import Block from "../blockchain/Block";

interface Props {
	addBlock: (tx: string) => void;
	prevBlock: Block;
}
const AddBlock: React.FC<Props> = ({ addBlock, prevBlock }) => {
	const [tx, setTx] = useState<string>("");
	const [hash, setHash] = useState("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"); // SHA256 hash of empty string

	const submitTx = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addBlock(tx);
		setTx("");
	};

	const handleChange = (tx: string) => {
		setTx(tx);
		setHash(Block.getBlockHash(tx));
	};

	return (
		<form
			onSubmit={submitTx}
			className="p-6 m-3 overflow-scroll bg-white rounded-2xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
		>
			<h3 className="text-4xl font-semibold text-center mb-4">Add New Block</h3>
			<div className="flex my-2">
				<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
					Hash
				</span>
				<input
					type="text"
					value={hash}
					onChange={() => null}
					className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					disabled
				/>
			</div>
			<div className="flex my-2">
				<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
					Previous Hash
				</span>
				<input
					type="text"
					value={prevBlock.hash}
					onChange={() => null}
					className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					disabled
				/>
			</div>
			<textarea
				id="add-block"
				rows={3}
				className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Your message..."
				onChange={(e) => handleChange(e.target.value)}
				value={tx}
			></textarea>
			<button
				type="submit"
				className="w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2"
			>
				Mine Block
			</button>
		</form>
	);
};

export default AddBlock;
