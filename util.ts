import {base58} from "@metaplex-foundation/umi";


export function covertUint8arrayToString(uint8array: Uint8Array): string {
  let [hex, number] = base58.deserialize(Uint8Array.from(uint8array));
  return hex;
}


function testConvert(){
  const uint8array = new Uint8Array([
    152,  42, 114, 195,  31, 124, 133, 217,  11, 233,  36,
    35,  63, 187, 195, 208,  79, 182, 203, 214, 104, 136,
    36, 195,  71, 124,  50,  78,  33,  26, 106,  87, 250,
    101, 182,  48, 192,  87,   5, 203, 117, 153,  40, 157,
    146, 192, 249, 110,   2,  24,  66,  56, 145, 105,  10,
    117, 100,  91,  59, 181,  84,  82, 202,   1

  ]);
  console.log(covertUint8arrayToString(uint8array));
}

testConvert();