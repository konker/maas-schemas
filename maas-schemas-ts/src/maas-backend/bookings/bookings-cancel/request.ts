/*

undefined
Request schema for bookings-cancel

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from '../../../core/components/units';
import * as ApiCommon_ from '../../../core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/bookings/bookings-cancel/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    bookingId?: Units_.Uuid;
    headers?: ApiCommon_.Headers;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.partial({
    identityId: Units_.IdentityId,
    bookingId: Units_.Uuid,
    headers: ApiCommon_.Headers,
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      bookingId?: Units_.Uuid;
      headers?: ApiCommon_.Headers;
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
