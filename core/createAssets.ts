import {ConnectUmi, loadFromKey, loadWalletKey} from "../createUmi";
import {create, fetchCollection} from "@metaplex-foundation/mpl-core";
import {createSignerFromKeypair} from "@metaplex-foundation/umi";
import {fromWeb3JsKeypair} from "@metaplex-foundation/umi-web3js-adapters";


async function createAssets(){
    const umi = await ConnectUmi()
    const myKeypair = loadWalletKey("/Users/tim/.config/solana/TimMVWPtXAAgnZpSVG2oQkznfknRtMiXJdcqhFfLXWd.json");
    // const myKeypair = loadFromKey("ASTkrdGxqVKnBb4dsPtGeJi2qezNCLdXGNKJwgLY5YV7")
    console.log("key", myKeypair.publicKey.toBase58())
    const assetSigner =  createSignerFromKeypair(umi, fromWeb3JsKeypair(myKeypair))
    // const collection = await fetchCollection(umi, "STTosGsaqN1WwNY15xkZReyh9tg8hmoVX7AR8tvAQSz")
    //
    // await create(umi, {
    //     asset: assetSigner,
    //     collection: collection,
    //     name: 'My Assets',
    //     uri: 'https://raw.githubusercontent.com/nicktaobo/solana_demo_asserts/main/src/fishing_nft.json',
    // }).sendAndConfirm(umi)
}

createAssets()
