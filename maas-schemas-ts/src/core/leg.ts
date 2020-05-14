/*

undefined
The base leg object with all fields, to be inherited

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as State_ from './components/state';
import * as Place_ from './components/place';
import * as Units_ from './components/units';
import * as t from 'io-ts';
import * as TravelMode_ from './components/travel-mode';
import * as Stop_ from './stop';
import * as UnitsGeo_ from './components/units-geo';
import * as Common_ from './components/common';
import * as BookingOption_ from './booking-option';

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

export const schemaId = 'http://maasglobal.com/core/leg.json';

// State
// The purpose of this remains a mystery
export type State = State_.LegState;
export const State = State_.LegState;

// From
// The purpose of this remains a mystery
export type From = Place_.Place;
export const From = Place_.Place;

// To
// The purpose of this remains a mystery
export type To = Place_.Place;
export const To = Place_.Place;

// StartTime
// The purpose of this remains a mystery
export type StartTime = Units_.Time;
export const StartTime = Units_.Time;

// EndTime
// The purpose of this remains a mystery
export type EndTime = Units_.Time;
export const EndTime = Units_.Time;

// Mode
// The purpose of this remains a mystery
export type Mode = t.Branded<
  | TravelMode_.PersonalMode
  | TravelMode_.PublicTransitMode
  | TravelMode_.PrivateTransitMode,
  ModeBrand
>;
export const Mode = t.brand(
  t.union([
    TravelMode_.PersonalMode,
    TravelMode_.PublicTransitMode,
    TravelMode_.PrivateTransitMode,
  ]),
  (
    x,
  ): x is t.Branded<
    | TravelMode_.PersonalMode
    | TravelMode_.PublicTransitMode
    | TravelMode_.PrivateTransitMode,
    ModeBrand
  > => true,
  'Mode',
);
export interface ModeBrand {
  readonly Mode: unique symbol;
}

// Stops
// The purpose of this remains a mystery
export type Stops = t.Branded<Array<Stop_.Stop>, StopsBrand>;
export const Stops = t.brand(
  t.array(Stop_.Stop),
  (x): x is t.Branded<Array<Stop_.Stop>, StopsBrand> => true,
  'Stops',
);
export interface StopsBrand {
  readonly Stops: unique symbol;
}

// DepartureDelay
// The purpose of this remains a mystery
export type DepartureDelay = Units_.Duration;
export const DepartureDelay = Units_.Duration;

// ArrivalDelay
// The purpose of this remains a mystery
export type ArrivalDelay = Units_.Duration;
export const ArrivalDelay = Units_.Duration;

// Distance
// The purpose of this remains a mystery
export type Distance = UnitsGeo_.Distance;
export const Distance = UnitsGeo_.Distance;

// Route
// The purpose of this remains a mystery
export type Route = t.Branded<string, RouteBrand>;
export const Route = t.brand(
  t.string,
  (x): x is t.Branded<string, RouteBrand> =>
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 255),
  'Route',
);
export interface RouteBrand {
  readonly Route: unique symbol;
}

// RouteShortName
// The purpose of this remains a mystery
export type RouteShortName = t.Branded<string, RouteShortNameBrand>;
export const RouteShortName = t.brand(
  t.string,
  (x): x is t.Branded<string, RouteShortNameBrand> =>
    (typeof x !== 'string' || x.length >= 1) && (typeof x !== 'string' || x.length <= 64),
  'RouteShortName',
);
export interface RouteShortNameBrand {
  readonly RouteShortName: unique symbol;
}

// RouteLongName
// The purpose of this remains a mystery
export type RouteLongName = t.Branded<string, RouteLongNameBrand>;
export const RouteLongName = t.brand(
  t.string,
  (x): x is t.Branded<string, RouteLongNameBrand> =>
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 255),
  'RouteLongName',
);
export interface RouteLongNameBrand {
  readonly RouteLongName: unique symbol;
}

// AgencyId
// The purpose of this remains a mystery
export type AgencyId = Common_.AgencyId;
export const AgencyId = Common_.AgencyId;

// LegGeometry
// The purpose of this remains a mystery
export type LegGeometry = t.Branded<
  {
    points?: UnitsGeo_.Polyline;
  },
  LegGeometryBrand
>;
export const LegGeometry = t.brand(
  t.partial({
    points: UnitsGeo_.Polyline,
  }),
  (
    x,
  ): x is t.Branded<
    {
      points?: UnitsGeo_.Polyline;
    },
    LegGeometryBrand
  > => true,
  'LegGeometry',
);
export interface LegGeometryBrand {
  readonly LegGeometry: unique symbol;
}

// TspProduct
// The purpose of this remains a mystery
export type TspProduct = BookingOption_.TspProduct;
export const TspProduct = BookingOption_.TspProduct;

// ProductOption
// Index of the productOption used in the itinerary's productOptions
export type ProductOption = t.Branded<number, ProductOptionBrand>;
export const ProductOption = t.brand(
  t.number,
  (x): x is t.Branded<number, ProductOptionBrand> => Number.isInteger(x),
  'ProductOption',
);
export interface ProductOptionBrand {
  readonly ProductOption: unique symbol;
}

// LegExtensions
// MaaS specific leg extensions
export type LegExtensions = t.Branded<
  {
    id?: Units_.Uuid;
    signature?: Common_.Signature;
  },
  LegExtensionsBrand
>;
export const LegExtensions = t.brand(
  t.partial({
    id: Units_.Uuid,
    signature: Common_.Signature,
  }),
  (
    x,
  ): x is t.Branded<
    {
      id?: Units_.Uuid;
      signature?: Common_.Signature;
    },
    LegExtensionsBrand
  > => true,
  'LegExtensions',
);
export interface LegExtensionsBrand {
  readonly LegExtensions: unique symbol;
}

// LegCore
// The purpose of this remains a mystery
export type LegCore = t.Branded<
  {
    state?: State;
    from?: From;
    to?: To;
    startTime?: StartTime;
    endTime?: EndTime;
    mode?: Mode;
    stops?: Stops;
    departureDelay?: DepartureDelay;
    arrivalDelay?: ArrivalDelay;
    distance?: Distance;
    route?: Route;
    routeShortName?: RouteShortName;
    routeLongName?: RouteLongName;
    agencyId?: AgencyId;
    legGeometry?: LegGeometry;
    tspProduct?: TspProduct;
    productOption?: ProductOption;
  } & {
    from: Defined;
    to: Defined;
    mode: Defined;
    startTime: Defined;
    endTime: Defined;
    legGeometry: Defined;
  },
  LegCoreBrand
>;
export const LegCore = t.brand(
  t.intersection([
    t.partial({
      state: State,
      from: From,
      to: To,
      startTime: StartTime,
      endTime: EndTime,
      mode: Mode,
      stops: Stops,
      departureDelay: DepartureDelay,
      arrivalDelay: ArrivalDelay,
      distance: Distance,
      route: Route,
      routeShortName: RouteShortName,
      routeLongName: RouteLongName,
      agencyId: AgencyId,
      legGeometry: LegGeometry,
      tspProduct: TspProduct,
      productOption: ProductOption,
    }),
    t.type({
      from: Defined,
      to: Defined,
      mode: Defined,
      startTime: Defined,
      endTime: Defined,
      legGeometry: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      state?: State;
      from?: From;
      to?: To;
      startTime?: StartTime;
      endTime?: EndTime;
      mode?: Mode;
      stops?: Stops;
      departureDelay?: DepartureDelay;
      arrivalDelay?: ArrivalDelay;
      distance?: Distance;
      route?: Route;
      routeShortName?: RouteShortName;
      routeLongName?: RouteLongName;
      agencyId?: AgencyId;
      legGeometry?: LegGeometry;
      tspProduct?: TspProduct;
      productOption?: ProductOption;
    } & {
      from: Defined;
      to: Defined;
      mode: Defined;
      startTime: Defined;
      endTime: Defined;
      legGeometry: Defined;
    },
    LegCoreBrand
  > => true,
  'LegCore',
);
export interface LegCoreBrand {
  readonly LegCore: unique symbol;
}

// WaitingLeg
// The purpose of this remains a mystery
export type WaitingLeg = t.Branded<
  {
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    mode?: TravelMode_.WaitingMode;
  } & {
    mode: Defined;
    startTime: Defined;
    endTime: Defined;
  },
  WaitingLegBrand
>;
export const WaitingLeg = t.brand(
  t.intersection([
    t.partial({
      startTime: Units_.Time,
      endTime: Units_.Time,
      mode: TravelMode_.WaitingMode,
    }),
    t.type({
      mode: Defined,
      startTime: Defined,
      endTime: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      mode?: TravelMode_.WaitingMode;
    } & {
      mode: Defined;
      startTime: Defined;
      endTime: Defined;
    },
    WaitingLegBrand
  > => true,
  'WaitingLeg',
);
export interface WaitingLegBrand {
  readonly WaitingLeg: unique symbol;
}

// TransferLeg
// The purpose of this remains a mystery
export type TransferLeg = t.Branded<
  {
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    mode?: TravelMode_.TransferMode;
  } & {
    mode: Defined;
    startTime: Defined;
    endTime: Defined;
  },
  TransferLegBrand
>;
export const TransferLeg = t.brand(
  t.intersection([
    t.partial({
      startTime: Units_.Time,
      endTime: Units_.Time,
      mode: TravelMode_.TransferMode,
    }),
    t.type({
      mode: Defined,
      startTime: Defined,
      endTime: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      mode?: TravelMode_.TransferMode;
    } & {
      mode: Defined;
      startTime: Defined;
      endTime: Defined;
    },
    TransferLegBrand
  > => true,
  'TransferLeg',
);
export interface TransferLegBrand {
  readonly TransferLeg: unique symbol;
}

// Leg
// The default export. More information at the top.
export type Leg = t.Branded<
  {} & (LegExtensions & (LegCore | WaitingLeg | TransferLeg)),
  LegBrand
>;
export const Leg = t.brand(
  t.intersection([
    t.type({}),
    t.intersection([LegExtensions, t.union([LegCore, WaitingLeg, TransferLeg])]),
  ]),
  (
    x,
  ): x is t.Branded<
    {} & (LegExtensions & (LegCore | WaitingLeg | TransferLeg)),
    LegBrand
  > => true,
  'Leg',
);
export interface LegBrand {
  readonly Leg: unique symbol;
}

export default Leg;

// Success
