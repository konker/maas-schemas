/*

undefined
Response schema for bookings-retrieve

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'maas-schemas-ts/core/booking';

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
  'http://maasglobal.com/maas-backend/bookings/bookings-retrieve/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    booking?: Booking_.Default;
    debug?: {};
  } & {
    booking: Defined;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      booking: Booking_.Default,
      debug: t.type({}),
    }),
    t.type({
      booking: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      booking?: Booking_.Default;
      debug?: {};
    } & {
      booking: Defined;
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
