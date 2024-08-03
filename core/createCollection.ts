import {ConnectUmi, loadWalletKey} from "../createUmi";
import {createSignerFromKeypair} from "@metaplex-foundation/umi";
import {fromWeb3JsKeypair} from "@metaplex-foundation/umi-web3js-adapters";
import {
    createCollection,
    create,
    fetchCollection,
} from '@metaplex-foundation/mpl-core'


async function createCollections(){
    const umi = await ConnectUmi()
    const myKeypair = loadWalletKey("/Users/tim/.config/solana/NCTYnE34spN49cpswKctYfkSAEARyQja1843PwrchWZ.json");
    const collectionSigner =  createSignerFromKeypair(umi, fromWeb3JsKeypair(myKeypair))
    let result = await createCollection(umi, {
        collection: collectionSigner,
        name: 'My Collection',
        uri: 'https://raw.githubusercontent.com/nicktaobo/solana_demo_asserts/main/src/new_collection_demo.json',
    }).sendAndConfirm(umi)
    console.info(result)
}

createCollections()