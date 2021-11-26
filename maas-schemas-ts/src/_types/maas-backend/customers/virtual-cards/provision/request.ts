/*

undefined
MaaS customer virtual cards provision request

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../../../core/components/units';
import * as ApiCommon_ from '../../../../core/components/api-common';

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
  'https://schemas.maas.global/maas-backend/customers/virtual-cards/provision/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    customerId?: Units_.IdentityId;
    virtualCardId?: number;
    payload?: {
      certificate?: string;
      nonce?: string;
      nonceSignature?: string;
    } & Record<string, unknown>;
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    customerId: Defined;
    virtualCardId: Defined;
    payload: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_.IdentityId;
        customerId: typeof Units_.IdentityId;
        virtualCardId: t.NumberC;
        payload: t.IntersectionC<
          [
            t.PartialC<{
              certificate: t.StringC;
              nonce: t.StringC;
              nonceSignature: t.StringC;
            }>,
            t.RecordC<t.StringC, t.UnknownC>,
          ]
        >;
        headers: typeof ApiCommon_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        customerId: typeof Defined;
        virtualCardId: typeof Defined;
        payload: typeof Defined;
        headers: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      customerId: Units_.IdentityId,
      virtualCardId: t.number,
      payload: t.intersection([
        t.partial({
          certificate: t.string,
          nonce: t.string,
          nonceSignature: t.string,
        }),
        t.record(t.string, t.unknown),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      customerId: Defined,
      virtualCardId: Defined,
      payload: Defined,
      headers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      customerId?: Units_.IdentityId;
      virtualCardId?: number;
      payload?: {
        certificate?: string;
        nonce?: string;
        nonceSignature?: string;
      } & Record<string, unknown>;
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      customerId: Defined;
      virtualCardId: Defined;
      payload: Defined;
      headers: Defined;
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
