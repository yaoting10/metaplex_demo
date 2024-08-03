import {createSignerFromKeypair, generateSigner, none} from '@metaplex-foundation/umi'
import { mintV1 } from '@metaplex-foundation/mpl-bubblegum'
import {ConnectUmi, loadWalletKey} from "../createUmi";
import * as web3 from "@solana/web3.js";
import {fromWeb3JsKeypair, fromWeb3JsPublicKey} from "@metaplex-foundation/umi-web3js-adapters";

export async function mintNft(): Promise<void> {

    const umi = await ConnectUmi()
    // const myKeypair = loadWalletKey("/Users/tim/.config/solana/TimMVWPtXAAgnZpSVG2oQkznfknRtMiXJdcqhFfLXWd.json");
    // const to = createSignerFromKeypair(umi, fromWeb3JsKeypair(myKeypair))
    const leafOwner = fromWeb3JsPublicKey(new web3.PublicKey("TimMVWPtXAAgnZpSVG2oQkznfknRtMiXJdcqhFfLXWd"))
    // merkleTree
    let merkleTree = fromWeb3JsPublicKey(new web3.PublicKey("CjUpE5RphSaH61Ek4XsBvvFai5pJ6v7RrmY3Hq3wMpcr"))
    let sign= await mintV1(umi, {
        leafOwner,
        merkleTree,
        metadata: {
            name: 'My first Compressed NFT',
            uri: 'https://raw.githubusercontent.com/nicktaobo/solana_demo_asserts/main/src/fishing_nft.json',
            sellerFeeBasisPoints: 500, // 5%
            collection: none(),
            creators: [
                { address: umi.identity.publicKey, verified: false, share: 100 },
            ],
        },
    }).sendAndConfirm(umi)

    console.info(sign)
}

mintNft()

