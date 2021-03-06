/*

undefined
Request schema for profile-favoriteLocations-delete

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
  'http://maasglobal.com/maas-backend/profile/profile-favoriteLocations-delete/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: {
      name?: string;
    } & {
      name: Defined;
    };
    headers?: {
      Accept?: ApiCommon_.AcceptHeader;
      'X-Whim-User-Agent'?: ApiCommon_.UserAgentHeader;
    };
  },
  RequestBrand
>;
export const Request = t.brand(
  t.partial({
    identityId: Units_.IdentityId,
    payload: t.intersection([
      t.partial({
        name: t.string,
      }),
      t.type({
        name: Defined,
      }),
    ]),
    headers: t.partial({
      Accept: ApiCommon_.AcceptHeader,
      'X-Whim-User-Agent': ApiCommon_.UserAgentHeader,
    }),
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: {
        name?: string;
      } & {
        name: Defined;
      };
      headers?: {
        Accept?: ApiCommon_.AcceptHeader;
        'X-Whim-User-Agent'?: ApiCommon_.UserAgentHeader;
      };
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
