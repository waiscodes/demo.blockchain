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
				<p>{block.height}</p>
				<p>{block.difficulty}</p>
				<p>{block.nonce}</p>
				<p>{block.timestamp}</p>
				<p>{block.prevHash}</p>
				<p>{block.hash}</p>
				<input type="text" name="tx" value={tx} onChange={(e) => handleTxChange(e)} />
			</div>
		</>
	);
};

export default Block;
