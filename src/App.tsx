import React, { useState } from "react";
import useChain from "./blockchain/useChain";
import Block from "./components/Block";

const App: React.FC = (): JSX.Element => {
	const [tx, setTx] = useState<string>("");
	const { chain, addBlock, isChainValid } = useChain();

	const submitTx = () => {
		addBlock(tx);
		setTx("");
	};

	return (
		<>
			<input value={tx} onChange={(e) => setTx(e.target.value)} />
			<button onClick={() => submitTx()}>Add Block</button>
			{chain.map((block, index) => (
				<Block key={index} block={block} />
			))}
		</>
	);
};

export default App;
