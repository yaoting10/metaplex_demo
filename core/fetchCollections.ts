import {fetchCollection, fetchCollectionV1} from '@metaplex-foundation/mpl-core'
import { publicKey } from '@metaplex-foundation/umi'
import {ConnectUmi} from "../createUmi";


async function fetchCollections(){
    const umi = await ConnectUmi()
    // const collectionId = publicKey('STTosGsaqN1WwNY15xkZReyh9tg8hmoVX7AR8tvAQSz')
    const collectionId = publicKey('METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m')

    const collection = await fetchCollection(umi, collectionId)

    console.log(collection)
}

fetchCollections()