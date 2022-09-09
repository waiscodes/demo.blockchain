import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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
			<TextField label="Add transaction" value={tx} onChange={(e) => setTx(e.target.value)} />
			<Button onClick={() => submitTx()}>Add Block</Button>
			{chain.map((block, index) => (
				<Block key={index} block={block} />
			))}
		</>
	);
};

export default App;
