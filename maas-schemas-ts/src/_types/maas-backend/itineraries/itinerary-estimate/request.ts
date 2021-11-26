/*

undefined
Maas Itinerary estimate request

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../../core/components/units';
import * as ApiCommon_ from '../../../core/components/api-common';
import * as Itinerary_ from '../../../core/itinerary';
import * as ProductOption_ from '../../../core/product-option';
import * as CustomerSelection_ from '../../../core/components/customerSelection';

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
  'https://schemas.maas.global/maas-backend/itineraries/itinerary-estimate/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    headers?: ApiCommon_.Headers;
    payload?: {
      itinerary?: Itinerary_.Itinerary;
      customerSelections?: Array<{
        ref?: ProductOption_.Ref;
        customerSelection?: CustomerSelection_.CustomerSelection;
      }>;
    } & {
      itinerary: Defined;
      customerSelections: Defined;
    };
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.PartialC<{
    identityId: typeof Units_.IdentityId;
    headers: typeof ApiCommon_.Headers;
    payload: t.IntersectionC<
      [
        t.PartialC<{
          itinerary: typeof Itinerary_.Itinerary;
          customerSelections: t.ArrayC<
            t.PartialC<{
              ref: typeof ProductOption_.Ref;
              customerSelection: typeof CustomerSelection_.CustomerSelection;
            }>
          >;
        }>,
        t.TypeC<{
          itinerary: typeof Defined;
          customerSelections: typeof Defined;
        }>,
      ]
    >;
  }>,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.partial({
    identityId: Units_.IdentityId,
    headers: ApiCommon_.Headers,
    payload: t.intersection([
      t.partial({
        itinerary: Itinerary_.Itinerary,
        customerSelections: t.array(
          t.partial({
            ref: ProductOption_.Ref,
            customerSelection: CustomerSelection_.CustomerSelection,
          }),
        ),
      }),
      t.type({
        itinerary: Defined,
        customerSelections: Defined,
      }),
    ]),
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      headers?: ApiCommon_.Headers;
      payload?: {
        itinerary?: Itinerary_.Itinerary;
        customerSelections?: Array<{
          ref?: ProductOption_.Ref;
          customerSelection?: CustomerSelection_.CustomerSelection;
        }>;
      } & {
        itinerary: Defined;
        customerSelections: Defined;
      };
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
