import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import * as web3 from "@solana/web3.js";
import {createSignerFromKeypair, signerIdentity} from "@metaplex-foundation/umi";
import {fromWeb3JsKeypair} from "@metaplex-foundation/umi-web3js-adapters";
import {mplTokenMetadata} from "@metaplex-foundation/mpl-token-metadata";
import {KeypairSigner} from "@metaplex-foundation/umi/src/Keypair";
import fs from "fs";

export function loadWalletKey(keypairFile): web3.Keypair {
    const wallet =  web3.Keypair.fromSecretKey(
        new Uint8Array(JSON.parse(fs.readFileSync(keypairFile).toString()))
    );
    console.log(wallet.publicKey.toBase58())
    return wallet
}

export async function ConnectUmi(){
    const umi = createUmi("https://api.devnet.solana.com");
    // const umi = createUmi("https://api.mainnet-beta.solana.com");
    const myKeypair = loadWalletKey("/Users/tim/.config/solana/TimMVWPtXAAgnZpSVG2oQkznfknRtMiXJdcqhFfLXWd.json");
    const signer = createSignerFromKeypair(umi, fromWeb3JsKeypair(myKeypair))
    umi.use(signerIdentity(signer, true))
    umi.use(mplTokenMetadata())
    return umi
}

export async function connectMainUmi(){
    const umi = createUmi("https://api.mainnet-beta.solana.com");
    const myKeypair = loadWalletKey("/Users/tim/.config/solana/TimMVWPtXAAgnZpSVG2oQkznfknRtMiXJdcqhFfLXWd.json");
    const signer = createSignerFromKeypair(umi, fromWeb3JsKeypair(myKeypair))
    umi.use(signerIdentity(signer, true))
    return umi
}


export function getRooter(): web3.Keypair {
    return  loadWalletKey("/Users/tim/.config/solana/TimMVWPtXAAgnZpSVG2oQkznfknRtMiXJdcqhFfLXWd.json");
}

export function loadFromKey(key: string): web3.Keypair {
    return  loadWalletKey("/Users/tim/.config/solana/" + key + ".json")
}

loadWalletKey("/Users/tim/.config/solana/TimMVWPtXAAgnZpSVG2oQkznfknRtMiXJdcqhFfLXWd.json")