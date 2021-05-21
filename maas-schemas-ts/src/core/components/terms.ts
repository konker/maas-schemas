/*

undefined
MaaS booking terms and condition for its business engine

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Cost_ from './cost';
import * as Fare_ from './fare';
import * as Units_ from './units';

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

export const schemaId = 'http://maasglobal.com/core/components/terms.json';

// Seat
// Ticket's seat information for long distance trains, coaches or flights
export type Seat = t.Branded<
  {
    route?: string;
    number?: string | number;
    coach?: string | number;
  },
  SeatBrand
>;
export type SeatC = t.BrandC<
  t.PartialC<{
    route: t.StringC;
    number: t.UnionC<[t.StringC, t.NumberC]>;
    coach: t.UnionC<[t.StringC, t.NumberC]>;
  }>,
  SeatBrand
>;
export const Seat: SeatC = t.brand(
  t.partial({
    route: t.string,
    number: t.union([t.string, t.number]),
    coach: t.union([t.string, t.number]),
  }),
  (
    x,
  ): x is t.Branded<
    {
      route?: string;
      number?: string | number;
      coach?: string | number;
    },
    SeatBrand
  > => true,
  'Seat',
);
export interface SeatBrand {
  readonly Seat: unique symbol;
}

// Cancellation
// The purpose of this remains a mystery
export type Cancellation = t.Branded<
  {
    cancellable?: boolean;
    cost?: Cost_.Cost;
    fare?: Fare_.Fare;
    refunded?: boolean;
    validity?: {
      startTime?: Units_.Time;
      endTime?: Units_.Time;
    } & {
      startTime: Defined;
      endTime: Defined;
    };
  } & {
    cancellable: Defined;
    refunded: Defined;
  },
  CancellationBrand
>;
export type CancellationC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        cancellable: t.BooleanC;
        cost: typeof Cost_.Cost;
        fare: typeof Fare_.Fare;
        refunded: t.BooleanC;
        validity: t.IntersectionC<
          [
            t.PartialC<{
              startTime: typeof Units_.Time;
              endTime: typeof Units_.Time;
            }>,
            t.TypeC<{
              startTime: typeof Defined;
              endTime: typeof Defined;
            }>,
          ]
        >;
      }>,
      t.TypeC<{
        cancellable: typeof Defined;
        refunded: typeof Defined;
      }>,
    ]
  >,
  CancellationBrand
>;
export const Cancellation: CancellationC = t.brand(
  t.intersection([
    t.partial({
      cancellable: t.boolean,
      cost: Cost_.Cost,
      fare: Fare_.Fare,
      refunded: t.boolean,
      validity: t.intersection([
        t.partial({
          startTime: Units_.Time,
          endTime: Units_.Time,
        }),
        t.type({
          startTime: Defined,
          endTime: Defined,
        }),
      ]),
    }),
    t.type({
      cancellable: Defined,
      refunded: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      cancellable?: boolean;
      cost?: Cost_.Cost;
      fare?: Fare_.Fare;
      refunded?: boolean;
      validity?: {
        startTime?: Units_.Time;
        endTime?: Units_.Time;
      } & {
        startTime: Defined;
        endTime: Defined;
      };
    } & {
      cancellable: Defined;
      refunded: Defined;
    },
    CancellationBrand
  > => true,
  'Cancellation',
);
export interface CancellationBrand {
  readonly Cancellation: unique symbol;
}

// Amendment
// The purpose of this remains a mystery
export type Amendment = t.Branded<
  {
    amendable?: boolean;
    cost?: Cost_.Cost;
    fare?: Fare_.Fare;
  } & {
    amendable: Defined;
  },
  AmendmentBrand
>;
export type AmendmentC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        amendable: t.BooleanC;
        cost: typeof Cost_.Cost;
        fare: typeof Fare_.Fare;
      }>,
      t.TypeC<{
        amendable: typeof Defined;
      }>,
    ]
  >,
  AmendmentBrand
>;
export const Amendment: AmendmentC = t.brand(
  t.intersection([
    t.partial({
      amendable: t.boolean,
      cost: Cost_.Cost,
      fare: Fare_.Fare,
    }),
    t.type({
      amendable: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      amendable?: boolean;
      cost?: Cost_.Cost;
      fare?: Fare_.Fare;
    } & {
      amendable: Defined;
    },
    AmendmentBrand
  > => true,
  'Amendment',
);
export interface AmendmentBrand {
  readonly Amendment: unique symbol;
}

// Surcharge
// The additional fee that will be added if booking is in night time
export type Surcharge = t.Branded<
  {
    isChargedUpfront?: boolean;
    amount?: number;
    currency?: Units_.Currency;
    percentage?: number;
    minAmount?: number;
    maxAmount?: number;
  },
  SurchargeBrand
>;
export type SurchargeC = t.BrandC<
  t.PartialC<{
    isChargedUpfront: t.BooleanC;
    amount: t.NumberC;
    currency: typeof Units_.Currency;
    percentage: t.NumberC;
    minAmount: t.NumberC;
    maxAmount: t.NumberC;
  }>,
  SurchargeBrand
>;
export const Surcharge: SurchargeC = t.brand(
  t.partial({
    isChargedUpfront: t.boolean,
    amount: t.number,
    currency: Units_.Currency,
    percentage: t.number,
    minAmount: t.number,
    maxAmount: t.number,
  }),
  (
    x,
  ): x is t.Branded<
    {
      isChargedUpfront?: boolean;
      amount?: number;
      currency?: Units_.Currency;
      percentage?: number;
      minAmount?: number;
      maxAmount?: number;
    },
    SurchargeBrand
  > => true,
  'Surcharge',
);
export interface SurchargeBrand {
  readonly Surcharge: unique symbol;
}

// Terms
// The default export. More information at the top.
export type Terms = t.Branded<
  {
    type?: string;
    seatings?: Array<Seat>;
    validity?: {
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      startTimeReturn?: Units_.Time;
      endTimeReturn?: Units_.Time;
    } & {
      startTime: Defined;
      endTime: Defined;
    };
    reusable?: boolean;
    reconcilable?: boolean;
    restrictions?: {
      singleDevice?: boolean;
      skipRestrictionCheck?: boolean;
      freeTicket?: Record<string, unknown>;
    };
    surcharges?: {
      midnight?: Surcharge;
      pickup?: Surcharge;
    };
    cancellation?: {
      cancellationFormActionUrl?: Units_.Url;
      outward?: Cancellation;
      return?: Cancellation;
    };
    amendment?: {
      outward?: Amendment;
      return?: Amendment;
    };
    prePurchaseGuidanceUrl?: Units_.Url;
    fareRates?: Array<
      {
        amount?: number;
        currency?: Units_.CurrencyOrToken;
        timeInterval?: number;
        startAt?: number;
        type?:
          | 'maxRate'
          | 'missedReturnPenalty'
          | 'extra'
          | 'perKilometer'
          | 'perParkMinute';
      } & {
        amount: Defined;
        currency: Defined;
      }
    >;
  } & Record<string, unknown>,
  TermsBrand
>;
export type TermsC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        type: t.StringC;
        seatings: t.ArrayC<typeof Seat>;
        validity: t.IntersectionC<
          [
            t.PartialC<{
              startTime: typeof Units_.Time;
              endTime: typeof Units_.Time;
              startTimeReturn: typeof Units_.Time;
              endTimeReturn: typeof Units_.Time;
            }>,
            t.TypeC<{
              startTime: typeof Defined;
              endTime: typeof Defined;
            }>,
          ]
        >;
        reusable: t.BooleanC;
        reconcilable: t.BooleanC;
        restrictions: t.PartialC<{
          singleDevice: t.BooleanC;
          skipRestrictionCheck: t.BooleanC;
          freeTicket: t.UnknownRecordC;
        }>;
        surcharges: t.PartialC<{
          midnight: typeof Surcharge;
          pickup: typeof Surcharge;
        }>;
        cancellation: t.PartialC<{
          cancellationFormActionUrl: typeof Units_.Url;
          outward: typeof Cancellation;
          return: typeof Cancellation;
        }>;
        amendment: t.PartialC<{
          outward: typeof Amendment;
          return: typeof Amendment;
        }>;
        prePurchaseGuidanceUrl: typeof Units_.Url;
        fareRates: t.ArrayC<
          t.IntersectionC<
            [
              t.PartialC<{
                amount: t.NumberC;
                currency: typeof Units_.CurrencyOrToken;
                timeInterval: t.NumberC;
                startAt: t.NumberC;
                type: t.UnionC<
                  [
                    t.LiteralC<'maxRate'>,
                    t.LiteralC<'missedReturnPenalty'>,
                    t.LiteralC<'extra'>,
                    t.LiteralC<'perKilometer'>,
                    t.LiteralC<'perParkMinute'>,
                  ]
                >;
              }>,
              t.TypeC<{
                amount: typeof Defined;
                currency: typeof Defined;
              }>,
            ]
          >
        >;
      }>,
      t.RecordC<t.StringC, t.UnknownC>,
    ]
  >,
  TermsBrand
>;
export const Terms: TermsC = t.brand(
  t.intersection([
    t.partial({
      type: t.string,
      seatings: t.array(Seat),
      validity: t.intersection([
        t.partial({
          startTime: Units_.Time,
          endTime: Units_.Time,
          startTimeReturn: Units_.Time,
          endTimeReturn: Units_.Time,
        }),
        t.type({
          startTime: Defined,
          endTime: Defined,
        }),
      ]),
      reusable: t.boolean,
      reconcilable: t.boolean,
      restrictions: t.partial({
        singleDevice: t.boolean,
        skipRestrictionCheck: t.boolean,
        freeTicket: t.UnknownRecord,
      }),
      surcharges: t.partial({
        midnight: Surcharge,
        pickup: Surcharge,
      }),
      cancellation: t.partial({
        cancellationFormActionUrl: Units_.Url,
        outward: Cancellation,
        return: Cancellation,
      }),
      amendment: t.partial({
        outward: Amendment,
        return: Amendment,
      }),
      prePurchaseGuidanceUrl: Units_.Url,
      fareRates: t.array(
        t.intersection([
          t.partial({
            amount: t.number,
            currency: Units_.CurrencyOrToken,
            timeInterval: t.number,
            startAt: t.number,
            type: t.union([
              t.literal('maxRate'),
              t.literal('missedReturnPenalty'),
              t.literal('extra'),
              t.literal('perKilometer'),
              t.literal('perParkMinute'),
            ]),
          }),
          t.type({
            amount: Defined,
            currency: Defined,
          }),
        ]),
      ),
    }),
    t.record(t.string, t.unknown),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: string;
      seatings?: Array<Seat>;
      validity?: {
        startTime?: Units_.Time;
        endTime?: Units_.Time;
        startTimeReturn?: Units_.Time;
        endTimeReturn?: Units_.Time;
      } & {
        startTime: Defined;
        endTime: Defined;
      };
      reusable?: boolean;
      reconcilable?: boolean;
      restrictions?: {
        singleDevice?: boolean;
        skipRestrictionCheck?: boolean;
        freeTicket?: Record<string, unknown>;
      };
      surcharges?: {
        midnight?: Surcharge;
        pickup?: Surcharge;
      };
      cancellation?: {
        cancellationFormActionUrl?: Units_.Url;
        outward?: Cancellation;
        return?: Cancellation;
      };
      amendment?: {
        outward?: Amendment;
        return?: Amendment;
      };
      prePurchaseGuidanceUrl?: Units_.Url;
      fareRates?: Array<
        {
          amount?: number;
          currency?: Units_.CurrencyOrToken;
          timeInterval?: number;
          startAt?: number;
          type?:
            | 'maxRate'
            | 'missedReturnPenalty'
            | 'extra'
            | 'perKilometer'
            | 'perParkMinute';
        } & {
          amount: Defined;
          currency: Defined;
        }
      >;
    } & Record<string, unknown>,
    TermsBrand
  > => true,
  'Terms',
);
export interface TermsBrand {
  readonly Terms: unique symbol;
}

export default Terms;

// Success
