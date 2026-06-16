class Block {
    constructor(index, data, prevHash='') {
        this.index = index;
        this.timestamp = Date.now();
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return require('crypto')
            .createHash('sha256')
            .update(this.index + this.prevHash + JSON.stringify(this.data))
            .digest('hex');
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "Genesis", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(data) {
        const newBlock = new Block(
            this.chain.length,
            data,
            this.getLatestBlock().hash
        );

        this.chain.push(newBlock);
    }
}

module.exports = Blockchain;
