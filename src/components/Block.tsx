import React from "react";
import { default as BlockType } from "../blockchain/Block";

interface Props {
	block: BlockType;
	updateBlockData: (height: number, tx: string) => void;
}

const Block: React.FC<Props> = ({ block, updateBlockData }): JSX.Element => {
	const [tx, setTx] = React.useState<string>(block.tx);

	const handleTxChange = (tx: string) => {
		setTx(tx);
		updateBlockData(block.height, tx);
	};

	return (
		<>
			<div className="p-6 m-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<div className="block-header">
					<p>Height: {block.height}</p>
					<p>Difficulty: {block.difficulty}</p>
					<p>Nonce: {block.nonce}</p>
					<p>Timestamp: {block.timestamp}</p>

					<div className="hashes">
						<div className="flex my-2">
							<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
								Hash
							</span>
							<input
								type="text"
								defaultValue={block.hash}
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
								defaultValue={block.prevHash}
								className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								disabled
							/>
						</div>
					</div>
				</div>

				<textarea
					id="add-block"
					rows={4}
					className="block my-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Your message..."
					onChange={(e) => handleTxChange(e.target.value)}
					value={tx}
				></textarea>
			</div>
		</>
	);
};

export default Block;
