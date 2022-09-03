import React from "react";
import Blockchain from "./blockchain";
import Block from "./components/Block";

const App: React.FC = (): JSX.Element => {
	const myChain = new Blockchain();
	myChain.addBlock("second block");
	myChain.addBlock("second block");
	myChain.addBlock("second block");

	return (
		<>
			{myChain.chain.map((block) => (
				<Block key={block.height} block={block} />
			))}
		</>
	);
};

export default App;
