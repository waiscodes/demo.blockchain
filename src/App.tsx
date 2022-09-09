import React from "react";
import useChain from "./blockchain/useChain";

const App: React.FC = (): JSX.Element => {
	const { chain } = useChain();
	return (
		<>
			<pre>{JSON.stringify(chain, null, 2)}</pre>
		</>
	);
};

export default App;
