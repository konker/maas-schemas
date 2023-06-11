/*

undefined
ACRISS classification of the car, see https://en.wikipedia.org/wiki/ACRISS_Car_Classification_Code

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId = 'https://schemas.maas.global/core/components/ACRISS.json';

// ACRISS
// The default export. More information at the top.
export type ACRISS = t.Branded<string, ACRISSBrand>;
export type ACRISSC = t.BrandC<t.StringC, ACRISSBrand>;
export const ACRISS: ACRISSC = t.brand(
  t.string,
  (x): x is t.Branded<string, ACRISSBrand> =>
    typeof x !== 'string' ||
    x.match(
      RegExp(
        '[MNEHCDIJSRFGPULWOX][BCDWVLSTFJXPQZEMRHYNGK][MNCABD][RNDQHIECLSABMFVZUX]',
        'u',
      ),
    ) !== null,
  'ACRISS',
);
export type ACRISSBrand = {
  readonly ACRISS: unique symbol;
};

export default ACRISS;

// Success