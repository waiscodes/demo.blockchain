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
			<div>
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
