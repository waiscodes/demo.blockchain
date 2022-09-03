export interface IBlock {
	hash: string;
	prevHash: string;
	timestamp: Date;
	tx: string;
}

class Block implements IBlock {
	hash: string;
	prevHash: string;
	tx: string;
	timestamp: Date;

	constructor({ hash, prevHash, tx, timestamp }: IBlock) {
		this.hash = hash;
		this.prevHash = prevHash;
		this.tx = tx;
		this.timestamp = timestamp;
	}

	static createGenesisBlock(): Block {
		return new Block({
			hash: "0",
			prevHash: "0",
			timestamp: new Date(),
			tx: "0",
		});
	}
}

export default Block;
