import {base58} from "@metaplex-foundation/umi";


export function covertUint8arrayToString(uint8array: Uint8Array): string {
  let [hex, number] = base58.deserialize(Uint8Array.from(uint8array));
  return hex;
}


function testConvert(){
  const uint8array = new Uint8Array([
    123,45,89,116,195,197,168,104,237,184,152,47,108,110,237,225,107,14,134,215,208,110,230,164,201,82,156,210,43,105,0,130,6,216,83,21,122,62,178,191,187,160,66,150,85,103,65,234,208,90,96,64,228,159,176,105,12,85,219,101,157,220,66,6
  ]);
  console.log(covertUint8arrayToString(uint8array));
}


testConvert();