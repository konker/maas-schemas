/*

undefined
OpenTripPlanner itinerary, augmented with leg bookings per leg

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as Units_ from "./components/units";
import * as t from "io-ts";
import * as Common_ from "./components/common";
import * as State_ from "./components/state";
import * as Fare_ from "./components/fare";
import * as Leg_ from "./leg";
import * as ProductOption_ from "./product-option";
import * as Booking_ from "./booking";

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

export const schemaId = "http://maasglobal.com/core/itinerary.json";

// Id
// The purpose of this remains a mystery
export type Id = Units_.Uuid;
export const Id = Units_.Uuid;

// ItineraryProgress
// The purpose of this remains a mystery
export type ItineraryProgress = t.Branded<
  string & ("IN_PROGRESS" | "IN_PROGRESS_PURCHASABLE" | "FINISHED"),
  ItineraryProgressBrand
>;
export const ItineraryProgress = t.brand(
  t.intersection([
    t.string,
    t.union([
      t.literal("IN_PROGRESS"),
      t.literal("IN_PROGRESS_PURCHASABLE"),
      t.literal("FINISHED"),
    ]),
  ]),
  (
    x
  ): x is t.Branded<
    string & ("IN_PROGRESS" | "IN_PROGRESS_PURCHASABLE" | "FINISHED"),
    ItineraryProgressBrand
  > => true,
  "ItineraryProgress"
);
export interface ItineraryProgressBrand {
  readonly ItineraryProgress: unique symbol;
}

// Itinerary
// The default export. More information at the top.
export type Itinerary = t.Branded<
  {
    id?: Id;
    sourcePlanId?: Units_.Uuid;
    isOvertaken?: boolean;
    identityId?: Units_.IdentityId;
    signature?: Common_.Signature;
    state?: State_.ItineraryState;
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    co2?: number;
    fares?: Array<Fare_.Fare>;
    legs?: Array<Leg_.Leg>;
    productOptions?: Array<ProductOption_.ProductOption>;
    type?: "outward" | "return";
    bookings?: Array<Booking_.Booking>;
    progress?: ItineraryProgress;
    fingerprint?: string;
    explanation?: string;
    superMode?: TravelMode_.SuperMode;
    tags?: Array<string>;
    label?: string;
    isWhimRide?: boolean;
    provider?: string;
  } & {
    startTime: Defined;
    endTime: Defined;
    legs: Defined;
  },
  ItineraryBrand
>;
export const Itinerary = t.brand(
  t.intersection([
    t.partial({
      id: Id,
      sourcePlanId: Units_.Uuid,
      isOvertaken: t.boolean,
      identityId: Units_.IdentityId,
      signature: Common_.Signature,
      state: State_.ItineraryState,
      startTime: Units_.Time,
      endTime: Units_.Time,
      co2: t.number,
      fares: t.array(Fare_.Fare),
      legs: t.array(Leg_.Leg),
      productOptions: t.array(ProductOption_.ProductOption),
      type: t.union([t.literal("outward"), t.literal("return")]),
      bookings: t.array(Booking_.Booking),
      progress: ItineraryProgress,
      fingerprint: t.string,
      explanation: t.string,
      superMode: TravelMode_.SuperMode,
      tags: t.array(t.string),
      label: t.string,
      isWhimRide: t.boolean,
      provider: t.string,
    }),
    t.type({
      startTime: Defined,
      endTime: Defined,
      legs: Defined,
    }),
  ]),
  (
    x
  ): x is t.Branded<
    {
      id?: Id;
      sourcePlanId?: Units_.Uuid;
      isOvertaken?: boolean;
      identityId?: Units_.IdentityId;
      signature?: Common_.Signature;
      state?: State_.ItineraryState;
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      co2?: number;
      fares?: Array<Fare_.Fare>;
      legs?: Array<Leg_.Leg>;
      productOptions?: Array<ProductOption_.ProductOption>;
      type?: "outward" | "return";
      bookings?: Array<Booking_.Booking>;
      progress?: ItineraryProgress;
      fingerprint?: string;
      explanation?: string;
      superMode?: TravelMode_.SuperMode;
      tags?: Array<string>;
      label?: string;
      isWhimRide?: boolean;
      provider?: string;
    } & {
      startTime: Defined;
      endTime: Defined;
      legs: Defined;
    },
    ItineraryBrand
  > => true,
  "Itinerary"
);
export interface ItineraryBrand {
  readonly Itinerary: unique symbol;
}

export default Itinerary;

// Success
