import React from "react";
import { default as BlockType } from "../blockchain/Block";

interface Props {
	block: BlockType;
}

const Block: React.FC<Props> = ({ block }): JSX.Element => {
	return <pre>{JSON.stringify(block, null, 2)}</pre>;
};

export default Block;
