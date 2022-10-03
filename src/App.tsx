import React, { useState } from "react";
import useChain from "./blockchain/useChain";
import Block from "./components/Block";

const App: React.FC = (): JSX.Element => {
	const [tx, setTx] = useState<string>("");
	const { chain, addBlock, updateBlockData, isChainValid } = useChain();

	const submitTx = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addBlock(tx);
		setTx("");
	};

	return (
		<main>
			{isChainValid ? <p>Chain is valid</p> : <p>Chain is not valid</p>}
			<form onSubmit={submitTx}>
				<input value={tx} onChange={(e) => setTx(e.target.value)} />
				<button>Add Block</button>
			</form>
			<div>
				{chain.map((block, index) => (
					<Block key={index} updateBlockData={updateBlockData} block={block} />
				))}
			</div>
		</main>
	);
};

export default App;
