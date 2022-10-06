import React from "react";
import { default as BlockType } from "../blockchain/Block";

interface Props {
	block: BlockType;
	updateBlockData: (height: number, tx: string) => void;
}

const Block: React.FC<Props> = ({ block, updateBlockData }): JSX.Element => {
	const [tx, setTx] = React.useState<string>(block.tx);
	const handleTxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setTx(value);
		updateBlockData(block.height, tx);
	};
	return (
		<>
			<div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<p>Height: {block.height}</p>
				<p>Difficulty: {block.difficulty}</p>
				<p>Nonce: {block.nonce}</p>

				<p>Timestamp: {block.timestamp}</p>
				<p>Previous Hash: {block.prevHash}</p>
				<p>Hash: {block.hash}</p>
				<input type="text" name="tx" value={tx} onChange={(e) => handleTxChange(e)} />
			</div>
		</>
	);
};

export default Block;
