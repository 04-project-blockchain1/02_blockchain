class Block{
    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
    toString(){
        return `Block -
        Timestamp:   ${this.timestamp}
        Last Hash:   ${this.lastHash.substring(0,10)}
        Hash:        ${this.hash.substring(0,10)}
        Data         ${this.data}`; 
     }

     static genesis(){
         return new this("Genesis time", "-------", "abcd1234",[])
     }

     static mineBlock(lastBlock,blockData){
        const timestamp = Date.now(); // Zeit seit dem 01.01.1970
        const lastHash = lastBlock.hash;
        const hash = "to do hash";
        const data = blockData;

    return new this(timestamp,lastHash,hash,data);
     }
}
module.exports = Block;
