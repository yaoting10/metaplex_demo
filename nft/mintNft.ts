
import { fromWeb3JsKeypair } from "@metaplex-foundation/umi-web3js-adapters";
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import {createNft, fetchDigitalAsset, mplTokenMetadata, TokenStandard} from "@metaplex-foundation/mpl-token-metadata";
import {createSignerFromKeypair, generateSigner, percentAmount, signerIdentity} from "@metaplex-foundation/umi";
import * as web3 from "@solana/web3.js";
import {Context} from "@metaplex-foundation/umi/src/Context";

async function mintNFT(){

    let seed = [200, 41, 154, 90, 53, 227, 138, 68, 150, 54, 244, 113, 156, 248, 174, 116, 154, 230, 54, 63, 141, 141, 85, 255, 147, 214, 191, 76, 33, 129, 167, 30]
    let myKeyPair =web3.Keypair.fromSeed(Uint8Array.from(seed));
    let signer = fromWeb3JsKeypair(myKeyPair)
    const umi = createUmi('https://api.devnet.solana.com', 'processed')
        .use(mplTokenMetadata())
    const mint = createSignerFromKeypair(umi, signer)
    umi.use(signerIdentity(mint, true))

    // console.log(signer)
    await createNft(umi, {
        mint,
        name: 'My NFT',
        uri: 'https://raw.githubusercontent.com/nicktaobo/solana_demo_asserts/main/src/fishing_nft.json',
        sellerFeeBasisPoints: percentAmount(5.5),
    }).sendAndConfirm(umi)
    const asset = await fetchDigitalAsset(umi, mint.publicKey)
    console.info(asset)

}

// mintNFT()
