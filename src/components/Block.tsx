import React from "react";
import { default as BlockType } from "../blockchain/Block";

interface Props {
	block: BlockType;
	updateBlockData: (height: number, tx: string) => void;
	brokenBlockHeight: number;
}

const Block: React.FC<Props> = ({ block, updateBlockData, brokenBlockHeight }): JSX.Element => {
	const [tx, setTx] = React.useState<string>(block.tx);

	const timestamp = new Date(block.timestamp).toLocaleString();

	const handleTxChange = (tx: string) => {
		setTx(tx);
		updateBlockData(block.height, tx);
	};

	const isBrokenBlock = brokenBlockHeight !== -1 && block.hash !== "Genesis" && block.height >= brokenBlockHeight;

	return (
		<>
			<div
				className={`p-6 m-3 bg-white rounded-lg border ${
					isBrokenBlock ? "border-red-600" : "border-gray-200 dark:border-gray-700"
				} shadow-md dark:bg-gray-800`}
			>
				<div className="block-header">
					<div className="flex w-full justify-between border border-gray-200 rounded">
						<div className="height text-center border-r flex-1">
							<p className="text-sm font-medium text-gray-900 dark:text-gray-400">Height</p>
							<p className="text-3xl">{block.height}</p>
						</div>
						<div className="difficulty text-center border-r flex-1">
							<p className="text-sm font-medium text-gray-900 dark:text-gray-400">Difficulty</p>
							<p className="text-3xl">{block.difficulty}</p>
						</div>
						<div className="nonce text-center border-r flex-1">
							<p className="text-sm font-medium text-gray-900 dark:text-gray-400">Nonce</p>
							<p className="text-3xl">{block.nonce}</p>
						</div>
						<div className="time text-center flex-1">
							<p className="text-sm font-medium text-gray-900 dark:text-gray-400">Timestamp</p>
							<p>{timestamp}</p>
						</div>
					</div>

					<div className="hashes">
						<div className="flex my-2">
							<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
								Hash
							</span>
							<input
								type="text"
								value={block.hash}
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
					disabled={block.height === 0}
				></textarea>
			</div>
		</>
	);
};

export default Block;
