import Block from "./Block";

class Blockchain {
	chain: Block[];

	constructor() {
		this.chain = [Block.createGenesisBlock()];
	}
}

export default Blockchain;
