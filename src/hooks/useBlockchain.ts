import React, { useEffect, useState } from "react";
import SHA256 from "crypto-js/sha256";

interface Block {
	height: number;
	hash: string;
	previousHash: string;
	timeStamp: Date;
	tx: string;
}

const useBlockchain = () => {
	const [blockchain, setBlockchain] = useState<Block[]>([
		{ height: 0, hash: "Genesis-block", previousHash: "-------", timeStamp: new Date(), tx: "Genesis" },
	]);

	const addBlock = (tx: string) => {
		const prevBlock = blockchain[blockchain.length - 1];
		const timestamp = new Date();
		const prevHash = prevBlock.hash;
		const height = prevBlock.height + 1;
		const hash = SHA256(`${height}${prevHash}${timestamp}${tx}`).toString();

		setBlockchain([...blockchain, { height, hash, previousHash: prevHash, timeStamp: timestamp, tx }]);
	};

	return {
		blockchain,
		addBlock,
	};
};

export default useBlockchain;
