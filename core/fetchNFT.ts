import {fetchAsset, fetchAssetsByCollection, fetchAssetsByOwner} from '@metaplex-foundation/mpl-core'
import {connectMainUmi, ConnectUmi} from "../createUmi";
import {publicKey} from "@metaplex-foundation/umi";


async function fetchAssets() {
    const umi = await ConnectUmi()
    const assetsKey = publicKey('METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m')
    const asset = await fetchAsset(umi, assetsKey, {
        skipDerivePlugins: false,
    })
    console.log(asset)
}


fetchAssets()