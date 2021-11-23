/*

undefined
MaaS stations query response schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Station_ from '../../core/components/station';

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

export const schemaId = 'https://schemas.maas.global/tsp/stations-list/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    stations?: Array<
      {
        id?: Station_.Id;
        code?: Station_.Code;
        name?: Station_.Name;
        location?: Station_.Location;
        agencyId?: Station_.AgencyId;
        services?: Station_.Services;
        address?: Station_.Address;
        city?: Station_.City;
        country?: Station_.Country;
        zone?: Station_.Zone;
        platformCode?: Station_.PlatformCode;
      } & {
        id: Defined;
        location: Defined;
        agencyId: Defined;
        services: Defined;
      }
    >;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.PartialC<{
    stations: t.ArrayC<
      t.IntersectionC<
        [
          t.PartialC<{
            id: typeof Station_.Id;
            code: typeof Station_.Code;
            name: typeof Station_.Name;
            location: typeof Station_.Location;
            agencyId: typeof Station_.AgencyId;
            services: typeof Station_.Services;
            address: typeof Station_.Address;
            city: typeof Station_.City;
            country: typeof Station_.Country;
            zone: typeof Station_.Zone;
            platformCode: typeof Station_.PlatformCode;
          }>,
          t.TypeC<{
            id: typeof Defined;
            location: typeof Defined;
            agencyId: typeof Defined;
            services: typeof Defined;
          }>,
        ]
      >
    >;
  }>,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.partial({
    stations: t.array(
      t.intersection([
        t.partial({
          id: Station_.Id,
          code: Station_.Code,
          name: Station_.Name,
          location: Station_.Location,
          agencyId: Station_.AgencyId,
          services: Station_.Services,
          address: Station_.Address,
          city: Station_.City,
          country: Station_.Country,
          zone: Station_.Zone,
          platformCode: Station_.PlatformCode,
        }),
        t.type({
          id: Defined,
          location: Defined,
          agencyId: Defined,
          services: Defined,
        }),
      ]),
    ),
  }),
  (
    x,
  ): x is t.Branded<
    {
      stations?: Array<
        {
          id?: Station_.Id;
          code?: Station_.Code;
          name?: Station_.Name;
          location?: Station_.Location;
          agencyId?: Station_.AgencyId;
          services?: Station_.Services;
          address?: Station_.Address;
          city?: Station_.City;
          country?: Station_.Country;
          zone?: Station_.Zone;
          platformCode?: Station_.PlatformCode;
        } & {
          id: Defined;
          location: Defined;
          agencyId: Defined;
          services: Defined;
        }
      >;
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
