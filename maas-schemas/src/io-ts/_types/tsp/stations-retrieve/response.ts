/*

undefined
MaaS stations query response schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Station_dfde_ from '../../core/components/station';

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

export const schemaId = 'https://schemas.maas.global/tsp/stations-retrieve/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    station?: {
      id?: Station_dfde_.Id;
      code?: Station_dfde_.Code;
      name?: Station_dfde_.Name;
      location?: Station_dfde_.Location;
      agencyId?: Station_dfde_.AgencyId;
      address?: Station_dfde_.Address;
      city?: Station_dfde_.City;
      country?: Station_dfde_.Country;
      openingHours?: Station_dfde_.OpeningHours;
      facilities?: Station_dfde_.Facilities;
      timetables?: Station_dfde_.Timetables;
      zone?: Station_dfde_.Zone;
      services?: Station_dfde_.Services;
      platformCode?: Station_dfde_.PlatformCode;
    } & {
      id: Defined;
      location: Defined;
      agencyId: Defined;
    };
  } & Record<string, unknown>,
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        station: t.IntersectionC<
          [
            t.PartialC<{
              id: typeof Station_dfde_.Id;
              code: typeof Station_dfde_.Code;
              name: typeof Station_dfde_.Name;
              location: typeof Station_dfde_.Location;
              agencyId: typeof Station_dfde_.AgencyId;
              address: typeof Station_dfde_.Address;
              city: typeof Station_dfde_.City;
              country: typeof Station_dfde_.Country;
              openingHours: typeof Station_dfde_.OpeningHours;
              facilities: typeof Station_dfde_.Facilities;
              timetables: typeof Station_dfde_.Timetables;
              zone: typeof Station_dfde_.Zone;
              services: typeof Station_dfde_.Services;
              platformCode: typeof Station_dfde_.PlatformCode;
            }>,
            t.TypeC<{
              id: typeof Defined;
              location: typeof Defined;
              agencyId: typeof Defined;
            }>,
          ]
        >;
      }>,
      t.RecordC<t.StringC, t.UnknownC>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      station: t.intersection([
        t.partial({
          id: Station_dfde_.Id,
          code: Station_dfde_.Code,
          name: Station_dfde_.Name,
          location: Station_dfde_.Location,
          agencyId: Station_dfde_.AgencyId,
          address: Station_dfde_.Address,
          city: Station_dfde_.City,
          country: Station_dfde_.Country,
          openingHours: Station_dfde_.OpeningHours,
          facilities: Station_dfde_.Facilities,
          timetables: Station_dfde_.Timetables,
          zone: Station_dfde_.Zone,
          services: Station_dfde_.Services,
          platformCode: Station_dfde_.PlatformCode,
        }),
        t.type({
          id: Defined,
          location: Defined,
          agencyId: Defined,
        }),
      ]),
    }),
    t.record(t.string, t.unknown),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      station?: {
        id?: Station_dfde_.Id;
        code?: Station_dfde_.Code;
        name?: Station_dfde_.Name;
        location?: Station_dfde_.Location;
        agencyId?: Station_dfde_.AgencyId;
        address?: Station_dfde_.Address;
        city?: Station_dfde_.City;
        country?: Station_dfde_.Country;
        openingHours?: Station_dfde_.OpeningHours;
        facilities?: Station_dfde_.Facilities;
        timetables?: Station_dfde_.Timetables;
        zone?: Station_dfde_.Zone;
        services?: Station_dfde_.Services;
        platformCode?: Station_dfde_.PlatformCode;
      } & {
        id: Defined;
        location: Defined;
        agencyId: Defined;
      };
    } & Record<string, unknown>,
    ResponseBrand
  > => true,
  'Response',
);
export type ResponseBrand = {
  readonly Response: unique symbol;
};

export default Response;

// Success
