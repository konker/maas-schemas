/*

undefined
Personal document object

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from './components/units';
import * as Common_ from './components/common';

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

export const schemaId = 'http://maasglobal.com/core/personal-document.json';

// DocumentType
// The purpose of this remains a mystery
export type DocumentType = t.Branded<string, DocumentTypeBrand>;
export type DocumentTypeC = t.BrandC<t.StringC, DocumentTypeBrand>;
export const DocumentType: DocumentTypeC = t.brand(
  t.string,
  (x): x is t.Branded<string, DocumentTypeBrand> => true,
  'DocumentType',
);
export interface DocumentTypeBrand {
  readonly DocumentType: unique symbol;
}

// DocumentStatus
// The purpose of this remains a mystery
export type DocumentStatus = t.Branded<
  string &
    (
      | 'PENDING'
      | 'APPROVED'
      | 'DECLINED'
      | 'EXPIRED'
      | 'RESUBMISSION_REQUESTED'
      | 'ABANDONED'
    ),
  DocumentStatusBrand
>;
export type DocumentStatusC = t.BrandC<
  t.IntersectionC<
    [
      t.StringC,
      t.UnionC<
        [
          t.LiteralC<'PENDING'>,
          t.LiteralC<'APPROVED'>,
          t.LiteralC<'DECLINED'>,
          t.LiteralC<'EXPIRED'>,
          t.LiteralC<'RESUBMISSION_REQUESTED'>,
          t.LiteralC<'ABANDONED'>,
        ]
      >,
    ]
  >,
  DocumentStatusBrand
>;
export const DocumentStatus: DocumentStatusC = t.brand(
  t.intersection([
    t.string,
    t.union([
      t.literal('PENDING'),
      t.literal('APPROVED'),
      t.literal('DECLINED'),
      t.literal('EXPIRED'),
      t.literal('RESUBMISSION_REQUESTED'),
      t.literal('ABANDONED'),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    string &
      (
        | 'PENDING'
        | 'APPROVED'
        | 'DECLINED'
        | 'EXPIRED'
        | 'RESUBMISSION_REQUESTED'
        | 'ABANDONED'
      ),
    DocumentStatusBrand
  > => true,
  'DocumentStatus',
);
export interface DocumentStatusBrand {
  readonly DocumentStatus: unique symbol;
}

// PartyId
// The purpose of this remains a mystery
export type PartyId = t.Branded<string, PartyIdBrand>;
export type PartyIdC = t.BrandC<t.StringC, PartyIdBrand>;
export const PartyId: PartyIdC = t.brand(
  t.string,
  (x): x is t.Branded<string, PartyIdBrand> =>
    (typeof x !== 'string' || x.length >= 1) && (typeof x !== 'string' || x.length <= 64),
  'PartyId',
);
export interface PartyIdBrand {
  readonly PartyId: unique symbol;
}

// PartyType
// The purpose of this remains a mystery
export type PartyType = t.Branded<string, PartyTypeBrand>;
export type PartyTypeC = t.BrandC<t.StringC, PartyTypeBrand>;
export const PartyType: PartyTypeC = t.brand(
  t.string,
  (x): x is t.Branded<string, PartyTypeBrand> =>
    (typeof x !== 'string' || x.length >= 1) && (typeof x !== 'string' || x.length <= 64),
  'PartyType',
);
export interface PartyTypeBrand {
  readonly PartyType: unique symbol;
}

// PersonalDocument
// The default export. More information at the top.
export type PersonalDocument = t.Branded<
  {
    id?: Units_.Uuid;
    identityId?: Units_.IdentityId;
    type?: DocumentType;
    documentNumber?: string;
    nameOnDocument?: string;
    issuingCountry?: string;
    status?: DocumentStatus;
    validFrom?: Units_.IsoDate;
    validTo?: Units_.IsoDate;
    details?: {
      category?: string;
    };
    media?: Array<
      {
        content?: string;
        context?: string;
      } & {
        content: Defined;
        context: Defined;
      }
    >;
    kycServiceId?: string;
    firstName?: Common_.PersonalName | null;
    lastName?: Common_.PersonalName | null;
  } & {
    type: Defined;
    documentNumber: Defined;
    issuingCountry: Defined;
    status: Defined;
    validFrom: Defined;
    validTo: Defined;
  },
  PersonalDocumentBrand
>;
export type PersonalDocumentC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: typeof Units_.Uuid;
        identityId: typeof Units_.IdentityId;
        type: typeof DocumentType;
        documentNumber: t.StringC;
        nameOnDocument: t.StringC;
        issuingCountry: t.StringC;
        status: typeof DocumentStatus;
        validFrom: typeof Units_.IsoDate;
        validTo: typeof Units_.IsoDate;
        details: t.PartialC<{
          category: t.StringC;
        }>;
        media: t.ArrayC<
          t.IntersectionC<
            [
              t.PartialC<{
                content: t.StringC;
                context: t.StringC;
              }>,
              t.TypeC<{
                content: typeof Defined;
                context: typeof Defined;
              }>,
            ]
          >
        >;
        kycServiceId: t.StringC;
        firstName: t.UnionC<[typeof Common_.PersonalName, t.NullC]>;
        lastName: t.UnionC<[typeof Common_.PersonalName, t.NullC]>;
      }>,
      t.TypeC<{
        type: typeof Defined;
        documentNumber: typeof Defined;
        issuingCountry: typeof Defined;
        status: typeof Defined;
        validFrom: typeof Defined;
        validTo: typeof Defined;
      }>,
    ]
  >,
  PersonalDocumentBrand
>;
export const PersonalDocument: PersonalDocumentC = t.brand(
  t.intersection([
    t.partial({
      id: Units_.Uuid,
      identityId: Units_.IdentityId,
      type: DocumentType,
      documentNumber: t.string,
      nameOnDocument: t.string,
      issuingCountry: t.string,
      status: DocumentStatus,
      validFrom: Units_.IsoDate,
      validTo: Units_.IsoDate,
      details: t.partial({
        category: t.string,
      }),
      media: t.array(
        t.intersection([
          t.partial({
            content: t.string,
            context: t.string,
          }),
          t.type({
            content: Defined,
            context: Defined,
          }),
        ]),
      ),
      kycServiceId: t.string,
      firstName: t.union([Common_.PersonalName, t.null]),
      lastName: t.union([Common_.PersonalName, t.null]),
    }),
    t.type({
      type: Defined,
      documentNumber: Defined,
      issuingCountry: Defined,
      status: Defined,
      validFrom: Defined,
      validTo: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: Units_.Uuid;
      identityId?: Units_.IdentityId;
      type?: DocumentType;
      documentNumber?: string;
      nameOnDocument?: string;
      issuingCountry?: string;
      status?: DocumentStatus;
      validFrom?: Units_.IsoDate;
      validTo?: Units_.IsoDate;
      details?: {
        category?: string;
      };
      media?: Array<
        {
          content?: string;
          context?: string;
        } & {
          content: Defined;
          context: Defined;
        }
      >;
      kycServiceId?: string;
      firstName?: Common_.PersonalName | null;
      lastName?: Common_.PersonalName | null;
    } & {
      type: Defined;
      documentNumber: Defined;
      issuingCountry: Defined;
      status: Defined;
      validFrom: Defined;
      validTo: Defined;
    },
    PersonalDocumentBrand
  > => true,
  'PersonalDocument',
);
export interface PersonalDocumentBrand {
  readonly PersonalDocument: unique symbol;
}

export default PersonalDocument;

// Success
