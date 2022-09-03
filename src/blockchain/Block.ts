export interface IBlock {
	hash: string;
	prevHash: string;
	timestamp: Date;
	height: number;
	tx: string;
}

class Block implements IBlock {
	hash: string;
	prevHash: string;
	tx: string;
	timestamp: Date;
	height: number;

	constructor({ hash, prevHash, tx, timestamp, height }: IBlock) {
		this.hash = hash;
		this.prevHash = prevHash;
		this.tx = tx;
		this.timestamp = timestamp;
		this.height = height;
	}

	static createGenesisBlock(): Block {
		return new Block({
			hash: "0",
			prevHash: "0",
			timestamp: new Date(),
			height: 0,
			tx: "0",
		});
	}
}

export default Block;
