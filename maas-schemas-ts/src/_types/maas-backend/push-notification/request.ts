/*

undefined
MaaS push notification request schema.

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../core/components/units';

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

export interface NullBrand {
  readonly Null: unique symbol;
}
export type NullC = t.BrandC<t.UnknownC, NullBrand>;
export const Null: NullC = t.brand(
  t.unknown,
  (n): n is t.Branded<unknown, NullBrand> => n === null,
  'Null',
);
export type Null = t.TypeOf<typeof Null>;

export const schemaId =
  'https://schemas.maas.global/maas-backend/push-notification/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    title?: string;
    message?: string;
    badge?: number;
    sound?: string;
    severity?: 'Alert' | 'Warning' | 'Information';
    type?:
      | 'ObjectChange'
      | 'TripActivate'
      | 'InfoMessage'
      | 'ZendeskReply'
      | 'VerificationUpdate'
      | 'AuthRequired';
    data?:
      | (({
          objectType?: 'Itinerary' | 'Booking';
          ids?: Array<Units_.Uuid>;
        } & Record<string, unknown>) & {
          objectType: Defined;
          ids: Defined;
        })
      | Null
      | string
      | (({
          objectType?: 'Profile' | 'Subscription';
          ids?: Array<Units_.IdentityId>;
        } & Record<string, unknown>) & {
          objectType: Defined;
          ids: Defined;
        })
      | (({
          objectType?: 'Reminder';
          authUrl?: Units_.Url;
        } & Record<string, unknown>) & {
          objectType: Defined;
          authUrl: Defined;
        });
  } & {
    identityId: Defined;
    severity: Defined;
    badge: Defined;
    type: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_.IdentityId;
        title: t.StringC;
        message: t.StringC;
        badge: t.NumberC;
        sound: t.StringC;
        severity: t.UnionC<
          [t.LiteralC<'Alert'>, t.LiteralC<'Warning'>, t.LiteralC<'Information'>]
        >;
        type: t.UnionC<
          [
            t.LiteralC<'ObjectChange'>,
            t.LiteralC<'TripActivate'>,
            t.LiteralC<'InfoMessage'>,
            t.LiteralC<'ZendeskReply'>,
            t.LiteralC<'VerificationUpdate'>,
            t.LiteralC<'AuthRequired'>,
          ]
        >;
        data: t.UnionC<
          [
            t.IntersectionC<
              [
                t.IntersectionC<
                  [
                    t.PartialC<{
                      objectType: t.UnionC<
                        [t.LiteralC<'Itinerary'>, t.LiteralC<'Booking'>]
                      >;
                      ids: t.ArrayC<typeof Units_.Uuid>;
                    }>,
                    t.RecordC<t.StringC, t.UnknownC>,
                  ]
                >,
                t.TypeC<{
                  objectType: typeof Defined;
                  ids: typeof Defined;
                }>,
              ]
            >,
            typeof Null,
            t.StringC,
            t.IntersectionC<
              [
                t.IntersectionC<
                  [
                    t.PartialC<{
                      objectType: t.UnionC<
                        [t.LiteralC<'Profile'>, t.LiteralC<'Subscription'>]
                      >;
                      ids: t.ArrayC<typeof Units_.IdentityId>;
                    }>,
                    t.RecordC<t.StringC, t.UnknownC>,
                  ]
                >,
                t.TypeC<{
                  objectType: typeof Defined;
                  ids: typeof Defined;
                }>,
              ]
            >,
            t.IntersectionC<
              [
                t.IntersectionC<
                  [
                    t.PartialC<{
                      objectType: t.LiteralC<'Reminder'>;
                      authUrl: typeof Units_.Url;
                    }>,
                    t.RecordC<t.StringC, t.UnknownC>,
                  ]
                >,
                t.TypeC<{
                  objectType: typeof Defined;
                  authUrl: typeof Defined;
                }>,
              ]
            >,
          ]
        >;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        severity: typeof Defined;
        badge: typeof Defined;
        type: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      title: t.string,
      message: t.string,
      badge: t.number,
      sound: t.string,
      severity: t.union([
        t.literal('Alert'),
        t.literal('Warning'),
        t.literal('Information'),
      ]),
      type: t.union([
        t.literal('ObjectChange'),
        t.literal('TripActivate'),
        t.literal('InfoMessage'),
        t.literal('ZendeskReply'),
        t.literal('VerificationUpdate'),
        t.literal('AuthRequired'),
      ]),
      data: t.union([
        t.intersection([
          t.intersection([
            t.partial({
              objectType: t.union([t.literal('Itinerary'), t.literal('Booking')]),
              ids: t.array(Units_.Uuid),
            }),
            t.record(t.string, t.unknown),
          ]),
          t.type({
            objectType: Defined,
            ids: Defined,
          }),
        ]),
        Null,
        t.string,
        t.intersection([
          t.intersection([
            t.partial({
              objectType: t.union([t.literal('Profile'), t.literal('Subscription')]),
              ids: t.array(Units_.IdentityId),
            }),
            t.record(t.string, t.unknown),
          ]),
          t.type({
            objectType: Defined,
            ids: Defined,
          }),
        ]),
        t.intersection([
          t.intersection([
            t.partial({
              objectType: t.literal('Reminder'),
              authUrl: Units_.Url,
            }),
            t.record(t.string, t.unknown),
          ]),
          t.type({
            objectType: Defined,
            authUrl: Defined,
          }),
        ]),
      ]),
    }),
    t.type({
      identityId: Defined,
      severity: Defined,
      badge: Defined,
      type: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      title?: string;
      message?: string;
      badge?: number;
      sound?: string;
      severity?: 'Alert' | 'Warning' | 'Information';
      type?:
        | 'ObjectChange'
        | 'TripActivate'
        | 'InfoMessage'
        | 'ZendeskReply'
        | 'VerificationUpdate'
        | 'AuthRequired';
      data?:
        | (({
            objectType?: 'Itinerary' | 'Booking';
            ids?: Array<Units_.Uuid>;
          } & Record<string, unknown>) & {
            objectType: Defined;
            ids: Defined;
          })
        | Null
        | string
        | (({
            objectType?: 'Profile' | 'Subscription';
            ids?: Array<Units_.IdentityId>;
          } & Record<string, unknown>) & {
            objectType: Defined;
            ids: Defined;
          })
        | (({
            objectType?: 'Reminder';
            authUrl?: Units_.Url;
          } & Record<string, unknown>) & {
            objectType: Defined;
            authUrl: Defined;
          });
    } & {
      identityId: Defined;
      severity: Defined;
      badge: Defined;
      type: Defined;
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
