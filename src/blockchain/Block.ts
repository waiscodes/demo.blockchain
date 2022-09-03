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
}

export default Block;
