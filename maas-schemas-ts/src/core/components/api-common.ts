/*

undefined
Common definitions for API schemas

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId = 'https://schemas.maas.global/core/components/api-common.json';

// AcceptHeader
// SemVer versioning schemas for versioning our resources
export type AcceptHeader = t.Branded<string, AcceptHeaderBrand>;
export type AcceptHeaderC = t.BrandC<t.StringC, AcceptHeaderBrand>;
export const AcceptHeader: AcceptHeaderC = t.brand(
  t.string,
  (x): x is t.Branded<string, AcceptHeaderBrand> =>
    typeof x !== 'string' ||
    x.match(
      RegExp(
        '\\bapplication/json[;,]\\s*version=((0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(-[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?(?:\\+[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?)\\b',
      ),
    ) !== null,
  'AcceptHeader',
);
export interface AcceptHeaderBrand {
  readonly AcceptHeader: unique symbol;
}

// UserAgentHeader
// The purpose of this remains a mystery
export type UserAgentHeader = t.Branded<string, UserAgentHeaderBrand>;
export type UserAgentHeaderC = t.BrandC<t.StringC, UserAgentHeaderBrand>;
export const UserAgentHeader: UserAgentHeaderC = t.brand(
  t.string,
  (x): x is t.Branded<string, UserAgentHeaderBrand> =>
    typeof x !== 'string' || x.length >= 1,
  'UserAgentHeader',
);
export interface UserAgentHeaderBrand {
  readonly UserAgentHeader: unique symbol;
}

// Headers
// The purpose of this remains a mystery
export type Headers = t.Branded<
  {
    Accept?: AcceptHeader;
    'X-Whim-User-Agent'?: UserAgentHeader;
  } & Record<string, unknown>,
  HeadersBrand
>;
export type HeadersC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        Accept: typeof AcceptHeader;
        'X-Whim-User-Agent': typeof UserAgentHeader;
      }>,
      t.RecordC<t.StringC, t.UnknownC>,
    ]
  >,
  HeadersBrand
>;
export const Headers: HeadersC = t.brand(
  t.intersection([
    t.partial({
      Accept: AcceptHeader,
      'X-Whim-User-Agent': UserAgentHeader,
    }),
    t.record(t.string, t.unknown),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      Accept?: AcceptHeader;
      'X-Whim-User-Agent'?: UserAgentHeader;
    } & Record<string, unknown>,
    HeadersBrand
  > => true,
  'Headers',
);
export interface HeadersBrand {
  readonly Headers: unique symbol;
}

// ApiCommon
// The default export. More information at the top.
export type ApiCommon = t.Branded<unknown, ApiCommonBrand>;
export type ApiCommonC = t.BrandC<t.UnknownC, ApiCommonBrand>;
export const ApiCommon: ApiCommonC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, ApiCommonBrand> => true,
  'ApiCommon',
);
export interface ApiCommonBrand {
  readonly ApiCommon: unique symbol;
}

export default ApiCommon;

// Success
