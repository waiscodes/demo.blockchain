import sha256 from "crypto-js/sha256";

const GENESIS = {
	height: 0,
	nonce: 0,
	hash: "Genesis",
	prevHash: "000000000000000000000000000000000000000000000000000000000000000000",
	timestamp: +new Date("2015-07-30"),
	difficulty: 4,
	tx: "Genesis Block",
};

const BLOCK_TIME = 14000;

class Block {
	public height: number;
	public nonce: number;
	public hash: string;
	public prevHash: string;
	public timestamp: number;
	public difficulty: number;
	public tx: string;

	constructor({ height, prevHash, hash, tx, timestamp, difficulty, nonce }: Block) {
		this.height = height;
		this.nonce = nonce;
		this.hash = hash;
		this.prevHash = prevHash;
		this.timestamp = timestamp;
		this.difficulty = difficulty;
		this.tx = tx;
	}

	static getBlockHash = (data: Block | string): string => {
		if (typeof data === "object") {
			data = JSON.stringify(data);
		}

		return sha256(data).toString();
	};

	static createGenesisBlock = (): Block => {
		return new this(GENESIS);
	};

	static mineBlock = (prevBlock: Block, tx: string): Block => {
		const { hash: prevHash, height: prevHeight, difficulty: prevDifficulty, timestamp: prevTimestamp } = prevBlock;
		let hash,
			timestamp,
			nonce = 0;
		let difficulty = prevDifficulty;
		const height = prevHeight + 1;

		do {
			nonce++;
			timestamp = +new Date();
			difficulty = Block.adjustDifficulty(prevDifficulty, prevTimestamp, timestamp);
			hash = Block.getBlockHash({ height, nonce, prevHash, timestamp, difficulty, tx } as Block);
		} while (hash.substring(0, difficulty) !== "0".repeat(difficulty));

		return new this({ height, nonce, prevHash, timestamp, difficulty, hash, tx });
	};

	static adjustDifficulty = (prevDifficulty: number, prevTimestamp: number, currTimestamp: number): number => {
		if (prevDifficulty < 4) return prevDifficulty + 1;

		if (currTimestamp - prevTimestamp > BLOCK_TIME) {
			return prevDifficulty - 1;
		} else {
			return prevDifficulty + 1;
		}
	};

	static isValidBlock = (prevBlock: Block, currBlock: Block): boolean => {
		if (currBlock.height === 0) return true;

		const { height, nonce, prevHash, timestamp, difficulty, tx } = currBlock;
		const currBlockHash = Block.getBlockHash({ height, nonce, prevHash, timestamp, difficulty, tx } as Block);

		// Difficulty should only be incremented by 1. Prevents hackers from making it too easy or too hard and taking over the network.
		const difficultyDiffOfOne = Math.abs(prevBlock.difficulty - currBlock.difficulty) === 1;

		if (currBlock.height === 0 && currBlock.hash !== GENESIS.hash) return false; // Contains genesis block
		else if (currBlock.height !== prevBlock.height + 1) return false; // Height should increment by 1
		else if (currBlock.difficulty < 1 || !difficultyDiffOfOne) return false;
		else if (currBlock.prevHash !== prevBlock.hash) return false;
		else if (currBlockHash !== currBlock.hash) return false;

		return true;
	};
}

export default Block;
