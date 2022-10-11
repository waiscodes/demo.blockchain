import React from "react";
import useChain from "./blockchain/useChain";
import AddBlock from "./components/AddBlock";
import Block from "./components/Block";

const App: React.FC = (): JSX.Element => {
	const { chain, addBlock, updateBlockData, brokenBlockHeight } = useChain();

	return (
		<main className="m-auto container max-w-3xl text-white">
			<AddBlock addBlock={addBlock} prevBlock={chain[chain.length - 1]} />
			<div className="flex flex-col-reverse">
				{chain.map((block, index) => (
					<Block key={index} updateBlockData={updateBlockData} block={block} brokenBlockHeight={brokenBlockHeight} />
				))}
			</div>
		</main>
	);
};

export default App;
