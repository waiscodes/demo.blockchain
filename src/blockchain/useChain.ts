import React, { useEffect, useState } from "react";
import SHA256 from "crypto-js/sha256";
import Block from "./Block";

const useChain = () => {
	const [chain, setChain] = useState<Block[]>([Block.createGenesisBlock()]);

	const isChainValid = () => {
		return chain.every((block, index) => Block.isValidBlock(chain[index - 1], block));
	};

	return {
		chain,
		isChainValid,
	};
};

export default useChain;
