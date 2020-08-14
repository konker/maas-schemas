/*

undefined
Request schema for tsp-auth validate. Leaving as much flexibility as possible to be resilient for different TSPs

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Common_ from '../../../core/components/common';

export const schemaId =
  'http://maasglobal.com/maas-backend/tsp-auth/validate/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    agencyId?: Common_.AgencyId;
    payload?: {
      token?: Common_.EncodedQueryParam;
      encodedData?: Common_.EncodedQueryParam;
      state?: Common_.EncodedQueryParam;
      error?: Common_.ErrorKey;
    };
    headers?: {};
  },
  RequestBrand
>;
export const Request = t.brand(
  t.partial({
    agencyId: Common_.AgencyId,
    payload: t.partial({
      token: Common_.EncodedQueryParam,
      encodedData: Common_.EncodedQueryParam,
      state: Common_.EncodedQueryParam,
      error: Common_.ErrorKey,
    }),
    headers: t.type({}),
  }),
  (
    x,
  ): x is t.Branded<
    {
      agencyId?: Common_.AgencyId;
      payload?: {
        token?: Common_.EncodedQueryParam;
        encodedData?: Common_.EncodedQueryParam;
        state?: Common_.EncodedQueryParam;
        error?: Common_.ErrorKey;
      };
      headers?: {};
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
