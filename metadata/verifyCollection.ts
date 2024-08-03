import { verifyCollectionV1, Metadata } from '@metaplex-foundation/mpl-token-metadata'
import {ConnectUmi, getRooter, loadFromKey, loadWalletKey} from "../createUmi";
import {createSignerFromKeypair, publicKey} from "@metaplex-foundation/umi";
import {fromWeb3JsKeypair} from "@metaplex-foundation/umi-web3js-adapters";

async function verifyCollection(){
    const umi = await ConnectUmi()

    // metadata is a nft public key
    // collectionMint is collection public key

    const metadata = publicKey("CPM3QvPUB3sSX3k4CiXMjw8VyVPRXuhpAQi6gQDz6Nqw")
    const collectionMint = publicKey("CPTzWd8yFBD1ZrcH97FoCGT7Q4n9XzVwNACFbByZmGvs")
    // const collectionAuthority = createSignerFromKeypair(umi, fromWeb3JsKeypair(getRooter()))
    const myKeypair = loadWalletKey("/Users/tim/.config/solana/TimMVWPtXAAgnZpSVG2oQkznfknRtMiXJdcqhFfLXWd.json");
    const collectionAuthority = createSignerFromKeypair(umi, fromWeb3JsKeypair(myKeypair))
   const sign = await verifyCollectionV1(umi, {
        metadata,
        collectionMint:collectionAuthority.publicKey,
        authority: collectionAuthority,
    }).sendAndConfirm(umi)
    console.log(sign)
}

verifyCollection()