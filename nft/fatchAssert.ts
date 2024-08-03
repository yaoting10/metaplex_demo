
import {
    fetchMetadataFromSeeds, mplTokenMetadata,
} from '@metaplex-foundation/mpl-token-metadata'
import * as web3 from "@solana/web3.js";
import {fromWeb3JsPublicKey} from "@metaplex-foundation/umi-web3js-adapters";
import {createUmi} from "@metaplex-foundation/umi-bundle-defaults";
import {createSignerFromKeypair} from "@metaplex-foundation/umi";

async function fatchAssert(){

    const umi = createUmi('https://api.devnet.solana.com', 'processed')
        .use(mplTokenMetadata())

    let mint = fromWeb3JsPublicKey(new web3.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"));
    // let mint = fromWeb3JsPublicKey(new web3.PublicKey("NickoZYX5egJMrPtgrQKm1Cxb7vv7sc4iqDqVoK5xak"));
    const initialMetadata = await fetchMetadataFromSeeds(umi, { mint })

    console.log(initialMetadata)
}

fatchAssert()