import {createSignerFromKeypair, generateSigner} from '@metaplex-foundation/umi'
import {createTree, fetchMerkleTree} from '@metaplex-foundation/mpl-bubblegum'
import {ConnectUmi} from "../createUmi";
import * as web3 from "@solana/web3.js";
import {fromWeb3JsKeypair, fromWeb3JsPublicKey} from "@metaplex-foundation/umi-web3js-adapters";


async function createMerkleTree(){
    const umi = await ConnectUmi()
    const merkleTree = generateSigner(umi)

    console.log(merkleTree.publicKey)
    const builder = await createTree(umi, {
        merkleTree,
        maxDepth: 14,
        maxBufferSize: 64,
    })

    await builder.sendAndConfirm(umi)
}



// createMerkleTree()


