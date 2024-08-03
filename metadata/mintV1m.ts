import {mintV1, TokenStandard} from "@metaplex-foundation/mpl-token-metadata";
import {ConnectUmi, getRooter, loadFromKey} from "../createUmi";
import {createSignerFromKeypair} from "@metaplex-foundation/umi";
import {fromWeb3JsKeypair} from "@metaplex-foundation/umi-web3js-adapters";

async function mintV1m(){
    const umi = await ConnectUmi()
    const mint =  createSignerFromKeypair(umi, fromWeb3JsKeypair(loadFromKey("CPM1v3n6NMnkbm3mbEsT8DBNM46CwaKmZ3EngRuYWnPD")))
    const tokenOwner = createSignerFromKeypair(umi, fromWeb3JsKeypair(getRooter()))

    let sign= await mintV1(umi, {
        mint: mint.publicKey,
        authority: tokenOwner,
        tokenOwner: tokenOwner.publicKey,
        tokenStandard: TokenStandard.NonFungible,
    }).sendAndConfirm(umi)

    console.log(sign)
}

mintV1m()