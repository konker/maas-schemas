/*

undefined
Request schema for auth-sms-login

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Common_ from '../../../core/components/common';
import * as ApiCommon_ from '../../../core/components/api-common';

export type Defined = {} | null;
export class DefinedType extends t.Type<Defined> {
  readonly _tag: 'DefinedType' = 'DefinedType';
  constructor() {
    super(
      'defined',
      (u): u is Defined => typeof u !== 'undefined',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
  }
}
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId =
  'https://schemas.maas.global/maas-backend/auth/auth-sms-login/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    payload?: {
      phone?: Common_.RawPhone;
      code?: string;
    } & {
      phone: Defined;
      code: Defined;
    };
    headers?: ApiCommon_.Headers;
  } & {
    payload: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        payload: t.IntersectionC<
          [
            t.PartialC<{
              phone: typeof Common_.RawPhone;
              code: t.StringC;
            }>,
            t.TypeC<{
              phone: typeof Defined;
              code: typeof Defined;
            }>,
          ]
        >;
        headers: typeof ApiCommon_.Headers;
      }>,
      t.TypeC<{
        payload: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      payload: t.intersection([
        t.partial({
          phone: Common_.RawPhone,
          code: t.string,
        }),
        t.type({
          phone: Defined,
          code: Defined,
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      payload?: {
        phone?: Common_.RawPhone;
        code?: string;
      } & {
        phone: Defined;
        code: Defined;
      };
      headers?: ApiCommon_.Headers;
    } & {
      payload: Defined;
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
