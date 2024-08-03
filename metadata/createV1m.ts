import {createSignerFromKeypair, generateSigner, percentAmount} from '@metaplex-foundation/umi'
import {
    createV1,
    TokenStandard,
} from '@metaplex-foundation/mpl-token-metadata'
import {ConnectUmi, getRooter, loadFromKey} from "../createUmi";
import {fromWeb3JsKeypair} from "@metaplex-foundation/umi-web3js-adapters";

async function createV1m() {
    const umi = await ConnectUmi()
    const mint = createSignerFromKeypair(umi, fromWeb3JsKeypair(loadFromKey("CPM3QvPUB3sSX3k4CiXMjw8VyVPRXuhpAQi6gQDz6Nqw")))
    // const mint = generateSigner(umi)
    // const mint =  createSignerFromKeypair(umi, fromWeb3JsKeypair(getRooter()))
    // Mint: The Mint account of the asset. If it doesn't exist, it must be provided as a Signer as it will be initialized. Typically, we generate a new keypair for this purpose.
    // Mint：资产的 Mint 账户。如果它不存在，则必须将其作为签名者提供，因为它将被初始化。通常，我们会为此生成一个新的密钥对。


    // Authority: The authority of the Mint account. This is the account that is or will be allowed to mint tokens from the Mint account. This will default to the "Identity" wallet — i.e. the connected wallet — if supported by the SDK.
    // 权限：铸币厂账户的权限。这是被允许或将被允许从 Mint 账户铸造代币的账户。如果 SDK 支持，这将默认为“身份”钱包，即连接的钱包。
    const authority = createSignerFromKeypair(umi, fromWeb3JsKeypair(getRooter()))
    // const collection = createSignerFromKeypair(umi, fromWeb3JsKeypair(loadFromKey("CPTzWd8yFBD1ZrcH97FoCGT7Q4n9XzVwNACFbByZmGvs")))
    let sign = await createV1(umi, {
        mint,
        authority,
        name: 'CPT NFT 2',
        uri: "https://raw.githubusercontent.com/nicktaobo/solana_demo_asserts/main/src/nft_3.json",
        symbol: "CPT",
        sellerFeeBasisPoints: percentAmount(5.5),
        tokenStandard: TokenStandard.NonFungible,
    }).sendAndConfirm(umi)
    console.log(sign)
}

createV1m()
