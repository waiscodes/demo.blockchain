import React, { useEffect, useState } from "react";
import SHA256 from "crypto-js/sha256";

interface Block {
	height: number;
	hash: string;
	previousHash: string;
	timeStamp: Date;
	tx: string;
}

const genesisBlock = {
	height: 0,
	timeStamp: new Date(),
	tx: "Genesis",
	previousHash: "-------",
	hash: "Genesis-block",
};

const useBlockchain = () => {
	const [blockchain, setBlockchain] = useState<Block[]>([genesisBlock]);

	const addBlock = (tx: string) => {
		const prevBlock = blockchain[blockchain.length - 1];
		const timeStamp = new Date();
		const previousHash = prevBlock.hash;
		const height = prevBlock.height + 1;
		const hash = SHA256(`${height}${previousHash}${timeStamp}${tx}`).toString();

		setBlockchain([...blockchain, { height, timeStamp, tx, previousHash, hash }]);
	};

	return {
		blockchain,
		addBlock,
	};
};

export default useBlockchain;
