/*

undefined
Request schema for routes query

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from "io-ts";
import * as UnitsGeo_ from "../../../core/components/units-geo";
import * as Address_ from "../../../core/components/address";
import * as Station_ from "../../../core/components/station";
import * as Units_ from "../../../core/components/units";
import * as ApiCommon_ from "../../../core/components/api-common";

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
  "http://maasglobal.com/maas-backend/routes/routes-query/request.json";

// Payload
// The purpose of this remains a mystery
export type Payload = t.Branded<
  {
    from?: UnitsGeo_.ShortLocationString;
    fromName?: Address_.PlaceName;
    fromAddress?: Address_.ComponentAddress;
    fromStationId?: Station_.Id;
    to?: UnitsGeo_.ShortLocationString;
    toName?: Address_.PlaceName;
    toAddress?: Address_.ComponentAddress;
    toStationId?: Station_.Id;
    leaveAt?: Units_.Time;
    arriveBy?: Units_.Time;
    leaveAtReturn?: Units_.Time;
    arriveByReturn?: Units_.Time;
    modes?: TravelMode_.SuperMode;
    transitMode?: string & ("TRAIN" | "BUS" | "SUBWAY" | "TRAM" | "RAIL");
    options?: {};
    bookingIdToExtend?: Units_.Uuid;
    requestId?: Common_.RequestId;
  } & Record<
    string,
    | UnitsGeo_.ShortLocationString
    | Address_.PlaceName
    | Address_.ComponentAddress
    | Station_.Id
    | UnitsGeo_.ShortLocationString
    | Address_.PlaceName
    | Address_.ComponentAddress
    | Station_.Id
    | Units_.Time
    | Units_.Time
    | Units_.Time
    | Units_.Time
    | TravelMode_.SuperMode
    | (string & ("TRAIN" | "BUS" | "SUBWAY" | "TRAM" | "RAIL"))
    | {}
    | Units_.Uuid
    | Common_.RequestId
    | (string | number | boolean)
  >,
  PayloadBrand
>;
export const Payload = t.brand(
  t.intersection([
    t.partial({
      from: UnitsGeo_.ShortLocationString,
      fromName: Address_.PlaceName,
      fromAddress: Address_.ComponentAddress,
      fromStationId: Station_.Id,
      to: UnitsGeo_.ShortLocationString,
      toName: Address_.PlaceName,
      toAddress: Address_.ComponentAddress,
      toStationId: Station_.Id,
      leaveAt: Units_.Time,
      arriveBy: Units_.Time,
      leaveAtReturn: Units_.Time,
      arriveByReturn: Units_.Time,
      modes: TravelMode_.SuperMode,
      transitMode: t.intersection([
        t.string,
        t.union([
          t.literal("TRAIN"),
          t.literal("BUS"),
          t.literal("SUBWAY"),
          t.literal("TRAM"),
          t.literal("RAIL"),
        ]),
      ]),
      options: t.type({}),
      bookingIdToExtend: Units_.Uuid,
      requestId: Common_.RequestId,
    }),
    t.record(
      t.string,
      t.union([
        UnitsGeo_.ShortLocationString,
        Address_.PlaceName,
        Address_.ComponentAddress,
        Station_.Id,
        UnitsGeo_.ShortLocationString,
        Address_.PlaceName,
        Address_.ComponentAddress,
        Station_.Id,
        Units_.Time,
        Units_.Time,
        Units_.Time,
        Units_.Time,
        TravelMode_.SuperMode,
        t.intersection([
          t.string,
          t.union([
            t.literal("TRAIN"),
            t.literal("BUS"),
            t.literal("SUBWAY"),
            t.literal("TRAM"),
            t.literal("RAIL"),
          ]),
        ]),
        t.type({}),
        Units_.Uuid,
        Common_.RequestId,
        t.union([t.string, t.number, t.boolean]),
      ])
    ),
  ]),
  (
    x
  ): x is t.Branded<
    {
      from?: UnitsGeo_.ShortLocationString;
      fromName?: Address_.PlaceName;
      fromAddress?: Address_.ComponentAddress;
      fromStationId?: Station_.Id;
      to?: UnitsGeo_.ShortLocationString;
      toName?: Address_.PlaceName;
      toAddress?: Address_.ComponentAddress;
      toStationId?: Station_.Id;
      leaveAt?: Units_.Time;
      arriveBy?: Units_.Time;
      leaveAtReturn?: Units_.Time;
      arriveByReturn?: Units_.Time;
      modes?: TravelMode_.SuperMode;
      transitMode?: string & ("TRAIN" | "BUS" | "SUBWAY" | "TRAM" | "RAIL");
      options?: {};
      bookingIdToExtend?: Units_.Uuid;
      requestId?: Common_.RequestId;
    } & Record<
      string,
      | UnitsGeo_.ShortLocationString
      | Address_.PlaceName
      | Address_.ComponentAddress
      | Station_.Id
      | UnitsGeo_.ShortLocationString
      | Address_.PlaceName
      | Address_.ComponentAddress
      | Station_.Id
      | Units_.Time
      | Units_.Time
      | Units_.Time
      | Units_.Time
      | TravelMode_.SuperMode
      | (string & ("TRAIN" | "BUS" | "SUBWAY" | "TRAM" | "RAIL"))
      | {}
      | Units_.Uuid
      | Common_.RequestId
      | (string | number | boolean)
    >,
    PayloadBrand
  > => true,
  "Payload"
);
export interface PayloadBrand {
  readonly Payload: unique symbol;
}

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: Payload;
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    payload: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      payload: Payload,
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      payload: Defined,
    }),
  ]),
  (
    x
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: Payload;
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      payload: Defined;
    },
    RequestBrand
  > => true,
  "Request"
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success
