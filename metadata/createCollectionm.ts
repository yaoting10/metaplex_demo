import {ConnectUmi, loadWalletKey} from "../createUmi";
import {createNft} from "@metaplex-foundation/mpl-token-metadata";
import {createSignerFromKeypair, generateSigner, percentAmount} from "@metaplex-foundation/umi";
import {fromWeb3JsKeypair} from "@metaplex-foundation/umi-web3js-adapters";

async function createCollections() {
    const umi = await ConnectUmi()
    const myKeypair = loadWalletKey("/Users/tim/.config/solana/CPTzWd8yFBD1ZrcH97FoCGT7Q4n9XzVwNACFbByZmGvs.json");
    const collectionMint = createSignerFromKeypair(umi, fromWeb3JsKeypair(myKeypair))
    // const collectionMint = generateSigner(umi)
    let sign = await createNft(umi, {
        mint: collectionMint,
        name: 'CET NFT collection',
        symbol: "CET",
        uri: 'https://raw.githubusercontent.com/nicktaobo/solana_demo_asserts/main/src/nft_collection.json',
        sellerFeeBasisPoints: percentAmount(5.5), // 5.5%
        isCollection: true,
    }).sendAndConfirm(umi)
    console.info(sign)
}

createCollections()