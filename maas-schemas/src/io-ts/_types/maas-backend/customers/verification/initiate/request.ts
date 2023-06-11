/*

undefined
MaaS customer verification initiate

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_16a4_ from '../../../../core/components/api-common';
import * as Common_ffba_ from '../../../../core/components/common';
import * as Units_c404_ from '../../../../core/components/units';
import * as UnitsGeo_3e31_ from '../../../../core/components/units-geo';

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
export type DefinedC = {} & DefinedType;
export const Defined: DefinedC = new DefinedType();

export const schemaId =
  'https://schemas.maas.global/maas-backend/customers/verification/initiate/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    customerId?: Units_c404_.IdentityId;
    headers?: ApiCommon_16a4_.Headers;
    identityId?: Units_c404_.IdentityId;
    payload?: ({
      location?: UnitsGeo_3e31_.ShortLocationString;
      metadata?: ({
        agencyId?: Common_ffba_.AgencyId;
        planId?: string;
      } & Record<string, unknown>) &
        (
          | {
              planId: Defined;
            }
          | {
              agencyId: Defined;
            }
        );
    } & Record<string, unknown>) & {
      location: Defined;
    };
  } & {
    identityId: Defined;
    customerId: Defined;
    payload: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        customerId: typeof Units_c404_.IdentityId;
        headers: typeof ApiCommon_16a4_.Headers;
        identityId: typeof Units_c404_.IdentityId;
        payload: t.IntersectionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  location: typeof UnitsGeo_3e31_.ShortLocationString;
                  metadata: t.IntersectionC<
                    [
                      t.IntersectionC<
                        [
                          t.PartialC<{
                            agencyId: typeof Common_ffba_.AgencyId;
                            planId: t.StringC;
                          }>,
                          t.RecordC<t.StringC, t.UnknownC>,
                        ]
                      >,
                      t.UnionC<
                        [
                          t.TypeC<{
                            planId: typeof Defined;
                          }>,
                          t.TypeC<{
                            agencyId: typeof Defined;
                          }>,
                        ]
                      >,
                    ]
                  >;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >,
            t.TypeC<{
              location: typeof Defined;
            }>,
          ]
        >;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        customerId: typeof Defined;
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
      customerId: Units_c404_.IdentityId,
      headers: ApiCommon_16a4_.Headers,
      identityId: Units_c404_.IdentityId,
      payload: t.intersection([
        t.intersection([
          t.partial({
            location: UnitsGeo_3e31_.ShortLocationString,
            metadata: t.intersection([
              t.intersection([
                t.partial({
                  agencyId: Common_ffba_.AgencyId,
                  planId: t.string,
                }),
                t.record(t.string, t.unknown),
              ]),
              t.union([
                t.type({
                  planId: Defined,
                }),
                t.type({
                  agencyId: Defined,
                }),
              ]),
            ]),
          }),
          t.record(t.string, t.unknown),
        ]),
        t.type({
          location: Defined,
        }),
      ]),
    }),
    t.type({
      identityId: Defined,
      customerId: Defined,
      payload: Defined,
      headers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customerId?: Units_c404_.IdentityId;
      headers?: ApiCommon_16a4_.Headers;
      identityId?: Units_c404_.IdentityId;
      payload?: ({
        location?: UnitsGeo_3e31_.ShortLocationString;
        metadata?: ({
          agencyId?: Common_ffba_.AgencyId;
          planId?: string;
        } & Record<string, unknown>) &
          (
            | {
                planId: Defined;
              }
            | {
                agencyId: Defined;
              }
          );
      } & Record<string, unknown>) & {
        location: Defined;
      };
    } & {
      identityId: Defined;
      customerId: Defined;
      payload: Defined;
      headers: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export type RequestBrand = {
  readonly Request: unique symbol;
};

export default Request;

// Success