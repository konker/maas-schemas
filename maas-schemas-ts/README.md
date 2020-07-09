# MaaS Schemas TypeScript Support

This repostory contains [io-ts](https://github.com/gcanti/io-ts) codecs that match the [JSON Schema](https://json-schema.org/) definitions from the [maas-schemas](../maas-schemas) package. The validators work with any JavaScript compatible language. However, the main benefit of io-ts validators is their compatibility with TypeScript's static type system.

Beware! The validators defined in this package are a bit looser than the corresponding JSON schema definitions. The definitions in this package may also be incomplete or out of date because of the manual work involved. 

## Basic Usage

In this basic use example we show how to use the codecs together with the [io-ts-validator](https://github.com/maasglobal/io-ts-validator).

```javascript
import { validator } from 'io-ts-validator';
import Booking from 'maas-schemas-ts/lib/core/booking';

validator(Booking).decodeSync(json);     // returns Booking, throws on errors
validator(Booking).decodePromise(json);  // returns Promise<Booking>, rejects on errors
validator(Booking).decodeEither(json);   // returns Either<Array<string>, Booking>
validator(Booking).decodeAsync(json, (errors, booking) => { ... });  // returns void
```

## JSDoc Usage

```javascript
const { validator } = require('io-ts-validator');
const { IdentityId } = require('maas-schemas-ts/lib/core/components/units');
/** @typedef {import('maas-schemas-ts/lib/core/components/units').IdentityId} IdentityId */

/** Ignores an identity id
 *
 * @param {IdentityId} id
 * @returns {void}
 */
function ignore(id) {
  // Nothing to do
}

const raw = '916715ef-2e04-47e0-b1a5-feece4861c66';
const valid = validator(IdentityId).decodeSync(raw);

ignore(raw);    // type error: string !== IdentityId
ignore(valid);  // no error
```
