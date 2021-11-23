/*

undefined
Request to vehicle

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Product_ from '../../../core/product';

export const schemaId =
  'https://schemas.maas.global/maas-backend/vehicle/vehicle-alert/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    vehicleId?: string;
    productId?: Product_.Id;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.PartialC<{
    vehicleId: t.StringC;
    productId: typeof Product_.Id;
  }>,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.partial({
    vehicleId: t.string,
    productId: Product_.Id,
  }),
  (
    x,
  ): x is t.Branded<
    {
      vehicleId?: string;
      productId?: Product_.Id;
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
