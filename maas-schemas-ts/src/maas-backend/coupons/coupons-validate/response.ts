/*

undefined
MaaS coupon validation

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Code_ from '../code';

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
  'http://maasglobal.com/maas-backend/coupons/coupons-validate/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    code?: Code_.Code;
    valid?: boolean;
  } & {
    code: Defined;
    valid: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      code: Code_.Code,
      valid: t.boolean,
    }),
    t.type({
      code: Defined,
      valid: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      code?: Code_.Code;
      valid?: boolean;
    } & {
      code: Defined;
      valid: Defined;
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
