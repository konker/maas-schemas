/*

undefined
Request schema for subscriptions-scheduled-change-delete

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';

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
  'http://maasglobal.com/maas-backend/subscriptions/subscriptions-scheduled-change-delete/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    customerId?: Units_.IdentityId;
    userId?: Units_.IdentityId;
    headers?: ApiCommon_.Headers;
  } & {
    customerId: Defined;
    userId: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      customerId: Units_.IdentityId,
      userId: Units_.IdentityId,
      headers: ApiCommon_.Headers,
    }),
    t.type({
      customerId: Defined,
      userId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customerId?: Units_.IdentityId;
      userId?: Units_.IdentityId;
      headers?: ApiCommon_.Headers;
    } & {
      customerId: Defined;
      userId: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success
