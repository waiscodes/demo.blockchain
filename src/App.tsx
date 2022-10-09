import React, { useState } from "react";
import useChain from "./blockchain/useChain";
import AddBlock from "./components/AddBlock";
import Block from "./components/Block";

const App: React.FC = (): JSX.Element => {
	const { chain, addBlock, updateBlockData, isChainValid } = useChain();

	return (
		<main className="text-white">
			<AddBlock addBlock={addBlock} />
			<div>
				{chain.map((block, index) => (
					<Block key={index} updateBlockData={updateBlockData} block={block} />
				))}
			</div>
		</main>
	);
};

export default App;
