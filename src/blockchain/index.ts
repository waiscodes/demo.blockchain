import SHA256 from "crypto-js/sha256";
import Block from "./Block";

class Blockchain {
	chain: Block[];

	constructor() {
		this.chain = [Block.createGenesisBlock()];
	}

	addBlock(tx: string): void {
		const prevBlock = this.chain[this.chain.length - 1];
		const timestamp = new Date();
		const prevHash = prevBlock.hash;
		const height = prevBlock.height + 1;
		const hash = SHA256(`${prevHash}${timestamp}${height}${tx}`).toString();

		const newBlock = new Block({
			hash,
			prevHash,
			tx,
			timestamp,
			height,
		});

		this.chain.push(newBlock);
	}
}

export default Blockchain;
