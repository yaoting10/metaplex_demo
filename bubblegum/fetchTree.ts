import {ConnectUmi} from "../createUmi";
import * as web3 from "@solana/web3.js";
import {fetchMerkleTree} from "@metaplex-foundation/mpl-bubblegum";
import {fromWeb3JsPublicKey} from "@metaplex-foundation/umi-web3js-adapters";

async function fetchTree(){
    const umi = await ConnectUmi()
    let treeMint = new web3.PublicKey("SMBtHCCC6RYRutFEPb4gZqeBLUZbMNhRKaMKZZLHi7W")
    const merkleTreeAccount = await fetchMerkleTree(umi, fromWeb3JsPublicKey(treeMint))
    console.log(merkleTreeAccount)
}

fetchTree()