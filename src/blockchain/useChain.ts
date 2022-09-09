import React, { useEffect, useState } from "react";
import SHA256 from "crypto-js/sha256";
import Block from "./Block";

const useChain = () => {
	const [chain, setChain] = useState<Block[]>([Block.createGenesisBlock()]);

	return {
		chain,
	};
};

export default useChain;
