/*

undefined
Request schema for getting options from a TSP adapter.

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as TravelMode_ from '../../core/components/travel-mode';
import * as Units_ from '../../core/components/units';
import * as UnitsGeo_ from '../../core/components/units-geo';
import * as Address_ from '../../core/components/address';
import * as Booking_ from '../../core/booking';
import * as Common_ from '../../core/components/common';

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
  'https://schemas.maas.global/tsp/booking-options-list/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  ({
    mode?: TravelMode_.TravelMode;
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    from?: UnitsGeo_.ShortLocationString;
    fromName?: Address_.PlaceName | string;
    fromAddress?: Address_.ComponentAddress | string;
    fromRadius?: UnitsGeo_.Distance;
    to?: UnitsGeo_.ShortLocationString | string;
    toName?: Address_.PlaceName | string;
    toAddress?: Address_.ComponentAddress | string;
    toRadius?: UnitsGeo_.Distance;
    distance?: UnitsGeo_.Distance;
    extraOptions?: string;
    tspProductIds?: string;
    tspIdToExtend?: Booking_.TspId;
    purchasingAppInstanceId?: Common_.AppInstanceId;
  } & Record<
    string,
    | TravelMode_.TravelMode
    | Units_.Time
    | Units_.Time
    | UnitsGeo_.ShortLocationString
    | (Address_.PlaceName | string)
    | (Address_.ComponentAddress | string)
    | UnitsGeo_.Distance
    | (UnitsGeo_.ShortLocationString | string)
    | (Address_.PlaceName | string)
    | (Address_.ComponentAddress | string)
    | UnitsGeo_.Distance
    | UnitsGeo_.Distance
    | string
    | string
    | Booking_.TspId
    | Common_.AppInstanceId
    | (string | number | boolean)
  > &
    Record<string, unknown>) & {
    startTime: Defined;
    from: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            mode: typeof TravelMode_.TravelMode;
            startTime: typeof Units_.Time;
            endTime: typeof Units_.Time;
            from: typeof UnitsGeo_.ShortLocationString;
            fromName: t.UnionC<[typeof Address_.PlaceName, t.StringC]>;
            fromAddress: t.UnionC<[typeof Address_.ComponentAddress, t.StringC]>;
            fromRadius: typeof UnitsGeo_.Distance;
            to: t.UnionC<[typeof UnitsGeo_.ShortLocationString, t.StringC]>;
            toName: t.UnionC<[typeof Address_.PlaceName, t.StringC]>;
            toAddress: t.UnionC<[typeof Address_.ComponentAddress, t.StringC]>;
            toRadius: typeof UnitsGeo_.Distance;
            distance: typeof UnitsGeo_.Distance;
            extraOptions: t.StringC;
            tspProductIds: t.StringC;
            tspIdToExtend: typeof Booking_.TspId;
            purchasingAppInstanceId: typeof Common_.AppInstanceId;
          }>,
          t.RecordC<
            t.StringC,
            t.UnionC<
              [
                typeof TravelMode_.TravelMode,
                typeof Units_.Time,
                typeof Units_.Time,
                typeof UnitsGeo_.ShortLocationString,
                t.UnionC<[typeof Address_.PlaceName, t.StringC]>,
                t.UnionC<[typeof Address_.ComponentAddress, t.StringC]>,
                typeof UnitsGeo_.Distance,
                t.UnionC<[typeof UnitsGeo_.ShortLocationString, t.StringC]>,
                t.UnionC<[typeof Address_.PlaceName, t.StringC]>,
                t.UnionC<[typeof Address_.ComponentAddress, t.StringC]>,
                typeof UnitsGeo_.Distance,
                typeof UnitsGeo_.Distance,
                t.StringC,
                t.StringC,
                typeof Booking_.TspId,
                typeof Common_.AppInstanceId,
                t.UnionC<[t.StringC, t.NumberC, t.BooleanC]>,
              ]
            >
          >,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        startTime: typeof Defined;
        from: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        mode: TravelMode_.TravelMode,
        startTime: Units_.Time,
        endTime: Units_.Time,
        from: UnitsGeo_.ShortLocationString,
        fromName: t.union([Address_.PlaceName, t.string]),
        fromAddress: t.union([Address_.ComponentAddress, t.string]),
        fromRadius: UnitsGeo_.Distance,
        to: t.union([UnitsGeo_.ShortLocationString, t.string]),
        toName: t.union([Address_.PlaceName, t.string]),
        toAddress: t.union([Address_.ComponentAddress, t.string]),
        toRadius: UnitsGeo_.Distance,
        distance: UnitsGeo_.Distance,
        extraOptions: t.string,
        tspProductIds: t.string,
        tspIdToExtend: Booking_.TspId,
        purchasingAppInstanceId: Common_.AppInstanceId,
      }),
      t.record(
        t.string,
        t.union([
          TravelMode_.TravelMode,
          Units_.Time,
          Units_.Time,
          UnitsGeo_.ShortLocationString,
          t.union([Address_.PlaceName, t.string]),
          t.union([Address_.ComponentAddress, t.string]),
          UnitsGeo_.Distance,
          t.union([UnitsGeo_.ShortLocationString, t.string]),
          t.union([Address_.PlaceName, t.string]),
          t.union([Address_.ComponentAddress, t.string]),
          UnitsGeo_.Distance,
          UnitsGeo_.Distance,
          t.string,
          t.string,
          Booking_.TspId,
          Common_.AppInstanceId,
          t.union([t.string, t.number, t.boolean]),
        ]),
      ),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      startTime: Defined,
      from: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      mode?: TravelMode_.TravelMode;
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      from?: UnitsGeo_.ShortLocationString;
      fromName?: Address_.PlaceName | string;
      fromAddress?: Address_.ComponentAddress | string;
      fromRadius?: UnitsGeo_.Distance;
      to?: UnitsGeo_.ShortLocationString | string;
      toName?: Address_.PlaceName | string;
      toAddress?: Address_.ComponentAddress | string;
      toRadius?: UnitsGeo_.Distance;
      distance?: UnitsGeo_.Distance;
      extraOptions?: string;
      tspProductIds?: string;
      tspIdToExtend?: Booking_.TspId;
      purchasingAppInstanceId?: Common_.AppInstanceId;
    } & Record<
      string,
      | TravelMode_.TravelMode
      | Units_.Time
      | Units_.Time
      | UnitsGeo_.ShortLocationString
      | (Address_.PlaceName | string)
      | (Address_.ComponentAddress | string)
      | UnitsGeo_.Distance
      | (UnitsGeo_.ShortLocationString | string)
      | (Address_.PlaceName | string)
      | (Address_.ComponentAddress | string)
      | UnitsGeo_.Distance
      | UnitsGeo_.Distance
      | string
      | string
      | Booking_.TspId
      | Common_.AppInstanceId
      | (string | number | boolean)
    > &
      Record<string, unknown>) & {
      startTime: Defined;
      from: Defined;
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
