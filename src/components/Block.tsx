import React from "react";
import { IBlock } from "../blockchain/Block";
import Card from "@mui/material/Card";

interface Props {
	block: IBlock;
}

const Block: React.FC<Props> = ({ block }): JSX.Element => {
	return <pre>{JSON.stringify(block, null, 2)}</pre>;
};

export default Block;
