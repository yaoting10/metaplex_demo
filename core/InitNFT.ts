import { create } from '@metaplex-foundation/mpl-core'
import {
    createGenericFile, createSignerFromKeypair,
    generateSigner,
    signerIdentity,
    sol,
} from '@metaplex-foundation/umi'
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { base58 } from '@metaplex-foundation/umi/serializers'
import { irysUploader } from '@metaplex-foundation/umi-uploader-irys'
import * as fs from "fs";
import * as path from 'path'
import {fromWeb3JsKeypair} from "@metaplex-foundation/umi-web3js-adapters";
import {loadWalletKey} from "../createUmi";

const createNft = async () => {
    //
    // ** Setting Up Umi **
    //

    const umi = createUmi('https://api.devnet.solana.com')

    // const signer = generateSigner(umi)
    const myKeypair = loadWalletKey("/Users/tim/.config/solana/TimMVWPtXAAgnZpSVG2oQkznfknRtMiXJdcqhFfLXWd.json");
    const signer = createSignerFromKeypair(umi, fromWeb3JsKeypair(myKeypair))

    umi.use(signerIdentity(signer))
        .use(irysUploader())

    // Airdrop 1 SOL to the identity
    // if you end up with a 429 too many requests error, you may have to use
    // the filesystem wallet method or change rpcs.
    // await umi.rpc.airdrop(umi.identity.publicKey, sol(1))


    console.log('identity: ' + umi.identity.publicKey.toString())
    //
    // ** Upload an image to Arweave **
    //

    // use `fs` to read file via a string path.
    // You will need to understand the concept of pathing from a computing perspective.

    const imageFile = fs.readFileSync(
        path.join(__dirname, '../assets/images/0.png')
    )

    // Use `createGenericFile` to transform the file into a `GenericFile` type
    // that umi can understand. Make sure you set the mimi tag type correctly
    // otherwise Arweave will not know how to display your image.

    const umiImageFile = createGenericFile(imageFile, '0.png', {
        tags: [{ name: 'Content-Type', value: 'image/jpeg' }],
    })



    // Here we upload the image to Arweave via Irys and we get returned a uri
    // address where the file is located. You can log this out but as the
    // uploader can takes an array of files it also returns an array of uris.
    // To get the uri we want we can call index [0] in the array.

    const imageUri = await umi.uploader.upload([umiImageFile]).catch((err) => {
        throw new Error(err)
    })

    console.log('imageUri: ' + imageUri[0])

    //
    // ** Upload Metadata to Arweave **
    //

    const metadata = {
        name: 'My NFT',
        description: 'This is an NFT on Solana',
        image: imageUri[0],
        external_url: 'https://example.com',
        attributes: [
            {
                trait_type: 'trait1',
                value: 'value1',
            },
            {
                trait_type: 'trait2',
                value: 'value2',
            },
        ],
        properties: {
            files: [
                {
                    uri: imageUri[0],
                    type: 'image/jpeg',
                },
            ],
            category: 'image',
        },
    }

    // Call upon umi's `uploadJson` function to upload our metadata to Arweave via Irys.

    const metadataUri = await umi.uploader.uploadJson(metadata).catch((err) => {
        throw new Error(err)
    })

    //
    // ** Creating the NFT **
    //

    // We generate a signer for the NFT
    const nftSigner = generateSigner(umi)

    const tx = await create(umi, {
        asset: nftSigner,
        name: 'My NFT',
        uri: metadataUri,
    }).sendAndConfirm(umi)

    // finally we can deserialize the signature that we can check on chain.
    const signature = base58.deserialize(tx.signature)
    console.log(signature)
}

createNft()