import { useEffect, useState } from "react";
import Block from "./Block";

const useChain = () => {
	const [chain, setChain] = useState<Block[]>([Block.createGenesisBlock()]);
	const [brokenBlockHeight, setBrokenBlockHeight] = useState<number>(-1);

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

	const updateBlockData = (height: number, tx: string) => {
		const block = getBlockByHeight(height);
		if (block) {
			block.tx = tx;
			block.hash = Block.getBlockHash(block);
			setBrokenBlockHeight(validateChain());
		}
	};

	const validateChain = () => {
		const brokenBlock = chain.find((block, index) => !Block.isValidBlock(chain[index - 1], block));
		return brokenBlock?.height ?? -1;
	};

	useEffect(() => {
		setBrokenBlockHeight(validateChain());
	}, [chain.length]);

	return {
		chain,
		brokenBlockHeight,
		addBlock,
		getBlockByTx,
		getBlockByHash,
		getBlockByHeight,
		updateBlockData,
	};
};

export default useChain;
