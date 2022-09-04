import Button from "@mui/material/Button";
import React from "react";
import Block from "./components/Block";
import useBlockchain from "./hooks/useBlockchain";

const App: React.FC = (): JSX.Element => {
	const { blockchain, addBlock } = useBlockchain();
	return (
		<>
			<Button onClick={() => addBlock("Hello")}>Add Block</Button>
			{blockchain.map((block) => (
				<Block key={block.height} block={block} />
			))}
		</>
	);
};

export default App;
