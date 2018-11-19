# mbank-api

NodeJs library to interact with mBank internet banking api. Very basic functionality.

Example:

```
const Mbank = require('mbank-api)

const mbankSession = new Mbank('sk', 'johndoe', 'superstrongpwd')
await mbankSession.login()

console.log(mbankSession.getAccountByIban('myiban'))
/*
outputs something like this: 
{ cID: 'SK8483600556293256363563',
  cProductName: 'mKonto',
  cSubTitle: '',
  cAccountNumberForDisp: 'SK84 8360 0556 2932 5636 3563',
  mBalance: 218234.32,
  mAvailableBalance: 218231.93,
  mOwnBalance: 218231.93,
  cCurrency: 'EUR',
  isAuxiliary: false,
  actions:
   [ { url: 'GetTransferOwn', name: 'transfer.own' },
     { url: 'GetTransferDomestic', name: 'transfer.domestic' },
     { url: 'GetAccountHistory', name: 'history' } ],
  cProductCode: '42',
  cSubproductCode: '0202' }
*/
```