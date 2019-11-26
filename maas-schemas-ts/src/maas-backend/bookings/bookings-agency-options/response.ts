/*

undefined
Response schema for bookings-agency-options

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'maas-schemas-ts/core/booking';
import * as BookingMeta_ from 'maas-schemas-ts/core/booking-meta';
import * as BikeStation_ from 'maas-schemas-ts/core/components/bike-station';

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
  'http://maasglobal.com/maas-backend/bookings/bookings-agency-options/response.json';
// Option
// The purpose of this remains a mystery
export type Option = t.Branded<
  {
    fares?: Booking_.Fares;
    cost?: Booking_.Cost;
    leg?: Booking_.Leg;
    meta?: BookingMeta_.Default;
    terms?: Booking_.Terms;
    tspProduct?: {
      id?: string;
    };
    configurator?: Booking_.Configurator;
  } & (
    | {
        leg: Defined;
        terms: Defined;
        product: Defined;
        fares: Defined;
      }
    | {
        leg: Defined;
        terms: Defined;
        product: Defined;
        configurator: Defined;
      }),
  OptionBrand
>;
export const Option = t.brand(
  t.intersection([
    t.partial({
      fares: Booking_.Fares,
      cost: Booking_.Cost,
      leg: Booking_.Leg,
      meta: BookingMeta_.Default,
      terms: Booking_.Terms,
      tspProduct: t.partial({
        id: t.string,
      }),
      configurator: Booking_.Configurator,
    }),
    t.union([
      t.type({
        leg: Defined,
        terms: Defined,
        product: Defined,
        fares: Defined,
      }),
      t.type({
        leg: Defined,
        terms: Defined,
        product: Defined,
        configurator: Defined,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      fares?: Booking_.Fares;
      cost?: Booking_.Cost;
      leg?: Booking_.Leg;
      meta?: BookingMeta_.Default;
      terms?: Booking_.Terms;
      tspProduct?: {
        id?: string;
      };
      configurator?: Booking_.Configurator;
    } & (
      | {
          leg: Defined;
          terms: Defined;
          product: Defined;
          fares: Defined;
        }
      | {
          leg: Defined;
          terms: Defined;
          product: Defined;
          configurator: Defined;
        }),
    OptionBrand
  > => true,
  'Option',
);
export interface OptionBrand {
  readonly Option: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    options?: Array<Option>;
    additional?: {
      bikeStations?: Array<BikeStation_.Default>;
    };
    debug?: {};
  } & {
    options: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      options: t.array(Option),
      additional: t.partial({
        bikeStations: t.array(BikeStation_.Default),
      }),
      debug: t.type({}),
    }),
    t.type({
      options: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      options?: Array<Option>;
      additional?: {
        bikeStations?: Array<BikeStation_.Default>;
      };
      debug?: {};
    } & {
      options: Defined;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success