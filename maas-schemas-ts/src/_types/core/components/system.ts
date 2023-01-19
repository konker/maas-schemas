/*

undefined
MaaS system level definitions

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import * as t from 'io-ts';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

export const schemaId = 'https://schemas.maas.global/core/components/system.json';

// AwsRegion
// The purpose of this remains a mystery
export type AwsRegion = t.Branded<string, AwsRegionBrand>;
export type AwsRegionC = t.BrandC<t.StringC, AwsRegionBrand>;
export const AwsRegion: AwsRegionC = t.brand(
  t.string,
  (x): x is t.Branded<string, AwsRegionBrand> =>
    typeof x !== 'string' ||
    x.match(
      RegExp('(us(-gov)?|ap|ca|cn|eu|sa)-(central|(north|south)?(east|west)?)-\\d', 'u'),
    ) !== null,
  'AwsRegion',
);
export type AwsRegionBrand = {
  readonly AwsRegion: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(AwsRegion)).decodeSync(examplesAwsRegion) // => examplesAwsRegion */
export const examplesAwsRegion: NonEmptyArray<AwsRegion> = [
  'us-east-2',
  'us-east-1',
  'us-west-1',
  'us-west-2',
  'ap-east-1',
  'ap-south-1',
  'ap-northeast-2',
  'ap-southeast-1',
  'ca-central-1',
  'cn-north-1',
  'cn-northwest-1',
  'eu-central-1',
  'eu-west-1',
  'eu-north-1',
  'sa-east-1',
  'us-gov-east-1',
] as unknown as NonEmptyArray<AwsRegion>;

// System
// The default export. More information at the top.
export type System = t.Branded<unknown, SystemBrand>;
export type SystemC = t.BrandC<t.UnknownC, SystemBrand>;
export const System: SystemC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, SystemBrand> => true,
  'System',
);
export type SystemBrand = {
  readonly System: unique symbol;
};

export default System;

// Success