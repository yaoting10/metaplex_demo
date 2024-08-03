### 1.install dependencies
```shell
npm i
```

### 2.run unit tests
```shell
ts-node ./metadata/createCollectionm.ts
```


### other client commands
```shell
spl-token create-token
```
Creating token AAQcgKB3JzszSnMH2BXxTiHkyxS19coCA7G3LRXG4wg9 under program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
Address:  AAQcgKB3JzszSnMH2BXxTiHkyxS19coCA7G3LRXG4wg9
Decimals:  9

```shell
spl-token create-account AAQcgKB3JzszSnMH2BXxTiHkyxS19coCA7G3LRXG4wg9
```
Creating account 9794D2hASw6iy6c54sEap6G623ZB9EZs11tDk6v8SRHw
Signature: 44NGJteSdUsKtFyXm3xwNe7qu4dvbEzq8PuZfgPkcJ93MJoxXFic6Ha7A5q2cxKWcBuhkpoBXfz91kbY3oHePcDZ


```shell
spl-token mint AAQcgKB3JzszSnMH2BXxTiHkyxS19coCA7G3LRXG4wg9 100
```

```shell
spl-token transfer AAQcgKB3JzszSnMH2BXxTiHkyxS19coCA7G3LRXG4wg9 100 AfNVVRpGYFzKcwuGVxQEydU8WoJ2ZoB39fbEu2YvFohF
```



```shell
spl-token create-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb --enable-metadata
```
Creating token 68jhDWYaSMwZoz7uPze3dSckvWQFU9zzCArokLESd2nn under program TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
To initialize metadata inside the mint, please run `spl-token initialize-metadata 68jhDWYaSMwZoz7uPze3dSckvWQFU9zzCArokLESd2nn <YOUR_TOKEN_NAME> <YOUR_TOKEN_SYMBOL> <YOUR_TOKEN_URI>`, and sign with the mint authority.

```shell
spl-token create-account 68jhDWYaSMwZoz7uPze3dSckvWQFU9zzCArokLESd2nn
```
Creating account 8gLWvnr7ae52dU6Fo4SYZjVwPxcdfbwaGXAshWyrN16Z
Signature: 56QfiKV5EP2W7KoQXzZZJMsKRW2ijTyHdyyMerHRbEJqPHmqmU58DpGVQS7ftoUX7NpjSF6PCdeVSd5kucCuMT2m

```shell
spl-token mint 68jhDWYaSMwZoz7uPze3dSckvWQFU9zzCArokLESd2nn 1000000
```
Minting 1000000 tokens
Token: 68jhDWYaSMwZoz7uPze3dSckvWQFU9zzCArokLESd2nn
Recipient: 8gLWvnr7ae52dU6Fo4SYZjVwPxcdfbwaGXAshWyrN16Z

Signature: 3L9mrmLMR2UE4iZ2kV6fMciMkJ1NfdLpQHAew2b2GVVabEmoN5tauusU87ABy3uBMsGzqofVaLYEPTDNmzyaZzjt

```shell
spl-token initialize-metadata 68jhDWYaSMwZoz7uPze3dSckvWQFU9zzCArokLESd2nn "TTT" "TestToken" "https://raw.githubusercontent.com/solana-developers/opos-asset/main/assets/DeveloperPortal/metadata.json"
```

```shell
solana-keygen grind --starts-with  TMT:1
```
