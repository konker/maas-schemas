/*

undefined
Configurator schema to customize a booking option

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Cost_ from 'maas-schemas-ts/core/components/cost';
import * as Fare_ from 'maas-schemas-ts/core/components/fare';
import * as Terms_ from 'maas-schemas-ts/core/components/terms';

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

export const schemaId = 'http://maasglobal.com/core/components/configurator.json';

// Choice
// A choice for one customization
export type Choice = t.Branded<
  {
    id?: string;
    name?: string;
    description?: string;
    default?: boolean;
    cost?: Cost_.Cost;
    fares?: Array<Fare_.Fare>;
    terms?: Terms_.Terms;
    meta?: {};
  } & {
    id: Defined;
    name: Defined;
    default: Defined;
  },
  ChoiceBrand
>;
export const Choice = t.brand(
  t.intersection([
    t.partial({
      id: t.string,
      name: t.string,
      description: t.string,
      default: t.boolean,
      cost: Cost_.Cost,
      fares: t.array(Fare_.Fare),
      terms: Terms_.Terms,
      meta: t.type({}),
    }),
    t.type({
      id: Defined,
      name: Defined,
      default: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
      name?: string;
      description?: string;
      default?: boolean;
      cost?: Cost_.Cost;
      fares?: Array<Fare_.Fare>;
      terms?: Terms_.Terms;
      meta?: {};
    } & {
      id: Defined;
      name: Defined;
      default: Defined;
    },
    ChoiceBrand
  > => true,
  'Choice',
);
export interface ChoiceBrand {
  readonly Choice: unique symbol;
}

// Config
// A customization to the booking option
export type Config = t.Branded<
  {
    type?: 'oneOf' | 'someOf' | 'allOf' | 'oneOrNoneOf' | 'someOrNoneOf';
    name?: string;
    description?: string;
    choices?: Array<Choice>;
  } & {
    type: Defined;
    name: Defined;
    choices: Defined;
  },
  ConfigBrand
>;
export const Config = t.brand(
  t.intersection([
    t.partial({
      type: t.union([
        t.literal('oneOf'),
        t.literal('someOf'),
        t.literal('allOf'),
        t.literal('oneOrNoneOf'),
        t.literal('someOrNoneOf'),
      ]),
      name: t.string,
      description: t.string,
      choices: t.array(Choice),
    }),
    t.type({
      type: Defined,
      name: Defined,
      choices: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'oneOf' | 'someOf' | 'allOf' | 'oneOrNoneOf' | 'someOrNoneOf';
      name?: string;
      description?: string;
      choices?: Array<Choice>;
    } & {
      type: Defined;
      name: Defined;
      choices: Defined;
    },
    ConfigBrand
  > => true,
  'Config',
);
export interface ConfigBrand {
  readonly Config: unique symbol;
}

// Text
// Generic text field to pass information from user
export type Text = t.Branded<
  {
    type?: 'text';
    name?: string;
    description?: string;
    input?: string;
  } & {
    type: Defined;
    name: Defined;
  },
  TextBrand
>;
export const Text = t.brand(
  t.intersection([
    t.partial({
      type: t.literal('text'),
      name: t.string,
      description: t.string,
      input: t.string,
    }),
    t.type({
      type: Defined,
      name: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'text';
      name?: string;
      description?: string;
      input?: string;
    } & {
      type: Defined;
      name: Defined;
    },
    TextBrand
  > => true,
  'Text',
);
export interface TextBrand {
  readonly Text: unique symbol;
}

// Configurator
// The default export. More information at the top.
export type Configurator = t.Branded<
  {
    seatDirection?: Config;
    seatPosition?: Config;
    seatType?: Config;
    seatFeatures?: Config;
    outboundSingle?: Config;
    inboundSingle?: Config;
    openReturn?: Config;
    freeReturn?: Config;
    ticketCollectionPoint?: Text;
  },
  ConfiguratorBrand
>;
export const Configurator = t.brand(
  t.partial({
    seatDirection: Config,
    seatPosition: Config,
    seatType: Config,
    seatFeatures: Config,
    outboundSingle: Config,
    inboundSingle: Config,
    openReturn: Config,
    freeReturn: Config,
    ticketCollectionPoint: Text,
  }),
  (
    x,
  ): x is t.Branded<
    {
      seatDirection?: Config;
      seatPosition?: Config;
      seatType?: Config;
      seatFeatures?: Config;
      outboundSingle?: Config;
      inboundSingle?: Config;
      openReturn?: Config;
      freeReturn?: Config;
      ticketCollectionPoint?: Text;
    },
    ConfiguratorBrand
  > => true,
  'Configurator',
);
export interface ConfiguratorBrand {
  readonly Configurator: unique symbol;
}

export default Configurator;

// Success
