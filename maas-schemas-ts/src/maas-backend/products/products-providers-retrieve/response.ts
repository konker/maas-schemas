/*

undefined
Response schema for products-providers-retrieve

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Provider_ from '../provider';

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

export const schemaId =
  'http://maasglobal.com/maas-backend/products/products-providers-retrieve/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    provider?: Provider_.Provider;
  } & {
    provider: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      provider: Provider_.Provider,
    }),
    t.type({
      provider: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      provider?: Provider_.Provider;
    } & {
      provider: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
