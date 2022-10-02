import React, { useState } from "react";
import useChain from "./blockchain/useChain";
import Block from "./components/Block";

const App: React.FC = (): JSX.Element => {
	const [tx, setTx] = useState<string>("");
	const { chain, addBlock, updateBlockData, isChainValid } = useChain();

	const submitTx = () => {
		addBlock(tx);
		setTx("");
	};

	return (
		<>
			{isChainValid ? <p>Chain is valid</p> : <p>Chain is not valid</p>}
			<input value={tx} onChange={(e) => setTx(e.target.value)} />
			<button onClick={() => submitTx()}>Add Block</button>

			{chain.map((block, index) => (
				<Block key={index} updateBlockData={updateBlockData} block={block} />
			))}
		</>
	);
};

export default App;
