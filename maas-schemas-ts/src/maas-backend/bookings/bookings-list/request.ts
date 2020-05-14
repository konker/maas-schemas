/*

undefined
Request schema for bookings-list

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from '../../../core/components/units';
import * as ApiCommon_ from '../../../core/components/api-common';

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
  'http://maasglobal.com/maas-backend/bookings/bookings-list/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: {
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      states?: string;
      modes?: string;
    };
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      payload: t.partial({
        startTime: Units_.Time,
        endTime: Units_.Time,
        states: t.string,
        modes: t.string,
      }),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: {
        startTime?: Units_.Time;
        endTime?: Units_.Time;
        states?: string;
        modes?: string;
      };
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
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
