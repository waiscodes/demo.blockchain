import { useState } from "react";
import Block from "./Block";

const useChain = () => {
	const [chain, setChain] = useState<Block[]>([Block.createGenesisBlock()]);

	const addBlock = (tx: string) => {
		const newBlock = Block.mineBlock(chain[chain.length - 1], tx);
		setChain([...chain, newBlock]);
	};

	const getBlockByTx = (tx: string) => {
		return chain.filter((block) => block.tx === tx);
	};

	const getBlockByHash = (hash: string) => {
		return chain.find((block) => block.hash === hash);
	};

	const getBlockByHeight = (height: number): Block | undefined => {
		// height is 0-based and acts as an index
		return chain[height];
	};

	const isChainValid = () => {
		return chain.every((block, index) => Block.isValidBlock(chain[index - 1], block));
	};

	return {
		chain,
		isChainValid,
		addBlock,
		getBlockByTx,
		getBlockByHash,
		getBlockByHeight,
	};
};

export default useChain;
