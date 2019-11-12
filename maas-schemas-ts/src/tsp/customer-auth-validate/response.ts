/*

undefined
Response schema for completing customer authorization for TSP

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Error_ from 'maas-schemas-ts/core/error';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId = 'http://maasglobal.com/tsp/customer-auth-validate/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    authToken?: Common_.EncodedQueryParam;
    validTo?: Units_.Time;
    nonce?: Common_.EncodedQueryParam;
    error?: Error_.Default;
  } & (
    | {
        authToken: Defined;
        nonce: Defined;
        validTo: Defined;
      }
    | {
        error: Defined;
        nonce: Defined;
      }),
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      authToken: Common_.EncodedQueryParam,
      validTo: Units_.Time,
      nonce: Common_.EncodedQueryParam,
      error: Error_.Default,
    }),
    t.union([
      t.type({
        authToken: Defined,
        nonce: Defined,
        validTo: Defined,
      }),
      t.type({
        error: Defined,
        nonce: Defined,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      authToken?: Common_.EncodedQueryParam;
      validTo?: Units_.Time;
      nonce?: Common_.EncodedQueryParam;
      error?: Error_.Default;
    } & (
      | {
          authToken: Defined;
          nonce: Defined;
          validTo: Defined;
        }
      | {
          error: Defined;
          nonce: Defined;
        }),
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
