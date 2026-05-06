**@tonconnect/ui**

***

# @tonconnect/ui

## Enumerations

### THEME

Defined in: [packages/ui/src/models/THEME.ts:1](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/THEME.ts#L1)

#### Enumeration Members

##### DARK

> **DARK**: `"DARK"`

Defined in: [packages/ui/src/models/THEME.ts:2](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/THEME.ts#L2)

##### LIGHT

> **LIGHT**: `"LIGHT"`

Defined in: [packages/ui/src/models/THEME.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/THEME.ts#L3)

## Classes

### TonConnectUI

Defined in: [packages/ui/src/ton-connect-ui.ts:82](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L82)

#### Constructors

##### Constructor

> **new TonConnectUI**(`options?`): [`TonConnectUI`](#tonconnectui)

Defined in: [packages/ui/src/ton-connect-ui.ts:248](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L248)

###### Parameters

###### options?

[`TonConnectUiCreateOptions`](#tonconnectuicreateoptions)

###### Returns

[`TonConnectUI`](#tonconnectui)

#### Properties

##### connectionRestored

> `readonly` **connectionRestored**: `Promise`\<`boolean`\>

Defined in: [packages/ui/src/ton-connect-ui.ts:150](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L150)

Promise that resolves after end of th connection restoring process (promise will fire after `onStatusChange`,
so you can get actual information about wallet and session after when promise resolved).
Resolved value `true`/`false` indicates if the session was restored successfully.

##### connector

> `readonly` **connector**: `ITonConnect`

Defined in: [packages/ui/src/ton-connect-ui.ts:124](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L124)

TonConnect instance.

##### modal

> `readonly` **modal**: [`WalletsModal`](#walletsmodal)

Defined in: [packages/ui/src/ton-connect-ui.ts:129](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L129)

Manages the modal window state.

#### Accessors

##### account

###### Get Signature

> **get** **account**(): `null` \| `Account`

Defined in: [packages/ui/src/ton-connect-ui.ts:162](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L162)

Current connected account or null.

###### Returns

`null` \| `Account`

##### connected

###### Get Signature

> **get** **connected**(): `boolean`

Defined in: [packages/ui/src/ton-connect-ui.ts:155](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L155)

Current connection status.

###### Returns

`boolean`

##### modalState

###### Get Signature

> **get** **modalState**(): [`WalletsModalState`](#walletsmodalstate-1)

Defined in: [packages/ui/src/ton-connect-ui.ts:422](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L422)

Returns current modal window state.

###### Returns

[`WalletsModalState`](#walletsmodalstate-1)

##### singleWalletModalState

###### Get Signature

> **get** **singleWalletModalState**(): `SingleWalletModalState`

Defined in: [packages/ui/src/ton-connect-ui.ts:456](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L456)

**`Experimental`**

Returns current single wallet modal window state.

###### Returns

`SingleWalletModalState`

##### uiOptions

###### Set Signature

> **set** **uiOptions**(`options`): `void`

Defined in: [packages/ui/src/ton-connect-ui.ts:184](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L184)

Set and apply new UI options. Object with partial options should be passed. Passed options will be merged with current options.

###### Parameters

###### options

[`TonConnectUiOptions`](#tonconnectuioptions)

###### Returns

`void`

##### wallet

###### Get Signature

> **get** **wallet**(): `null` \| `Wallet` \| Wallet & WalletInfoWithOpenMethod

Defined in: [packages/ui/src/ton-connect-ui.ts:169](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L169)

Curren connected wallet app and its info or null.

###### Returns

`null` \| `Wallet` \| Wallet & WalletInfoWithOpenMethod

##### walletsPreferredFeatures

###### Get Signature

> **get** **walletsPreferredFeatures**(): `undefined` \| `RequiredFeatures`

Defined in: [packages/ui/src/ton-connect-ui.ts:113](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L113)

###### Returns

`undefined` \| `RequiredFeatures`

##### walletsRequiredFeatures

###### Get Signature

> **get** **walletsRequiredFeatures**(): `undefined` \| `RequiredFeatures`

Defined in: [packages/ui/src/ton-connect-ui.ts:107](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L107)

###### Returns

`undefined` \| `RequiredFeatures`

#### Methods

##### closeModal()

> **closeModal**(`reason?`): `void`

Defined in: [packages/ui/src/ton-connect-ui.ts:408](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L408)

Closes the modal window.

###### Parameters

###### reason?

[`WalletsModalCloseReason`](#walletsmodalclosereason)

###### Returns

`void`

##### closeSingleWalletModal()

> **closeSingleWalletModal**(`closeReason?`): `void`

Defined in: [packages/ui/src/ton-connect-ui.ts:438](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L438)

**`Experimental`**

Close the single wallet modal window.

###### Parameters

###### closeReason?

[`WalletsModalCloseReason`](#walletsmodalclosereason)

###### Returns

`void`

##### ~~connectWallet()~~

> **connectWallet**(`options?`): `Promise`\<[`ConnectedWallet`](#connectedwallet)\>

Defined in: [packages/ui/src/ton-connect-ui.ts:466](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L466)

###### Parameters

###### options?

###### traceId?

`string`

###### Returns

`Promise`\<[`ConnectedWallet`](#connectedwallet)\>

Connected wallet.

###### Deprecated

Use `tonConnectUI.openModal()` instead. Will be removed in the next major version.
Opens the modal window and handles a wallet connection.

###### Throws

TonConnectUIError if connection was aborted.

##### disconnect()

> **disconnect**(`options?`): `Promise`\<`void`\>

Defined in: [packages/ui/src/ton-connect-ui.ts:482](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L482)

Disconnect wallet and clean localstorage.

###### Parameters

###### options?

###### traceId?

`string`

###### Returns

`Promise`\<`void`\>

##### getWallets()

> **getWallets**(): `Promise`\<`WalletInfo`[]\>

Defined in: [packages/ui/src/ton-connect-ui.ts:362](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L362)

Returns available wallets list.

###### Returns

`Promise`\<`WalletInfo`[]\>

##### onModalStateChange()

> **onModalStateChange**(`onChange`): () => `void`

Defined in: [packages/ui/src/ton-connect-ui.ts:415](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L415)

Subscribe to the modal window state changes, returns a function which has to be called to unsubscribe.

###### Parameters

###### onChange

(`state`) => `void`

###### Returns

> (): `void`

###### Returns

`void`

##### onSingleWalletModalStateChange()

> **onSingleWalletModalStateChange**(`onChange`): () => `void`

Defined in: [packages/ui/src/ton-connect-ui.ts:446](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L446)

**`Experimental`**

Subscribe to the single wallet modal window state changes, returns a function which has to be called to unsubscribe.

###### Parameters

###### onChange

(`state`) => `void`

###### Returns

> (): `void`

###### Returns

`void`

##### onStatusChange()

> **onStatusChange**(`callback`, `errorsHandler?`): () => `void`

Defined in: [packages/ui/src/ton-connect-ui.ts:370](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L370)

Subscribe to connection status change.

###### Parameters

###### callback

(`wallet`) => `void`

###### errorsHandler?

(`err`) => `void`

###### Returns

function which has to be called to unsubscribe.

> (): `void`

###### Returns

`void`

##### openModal()

> **openModal**(`options?`): `Promise`\<`void`\>

Defined in: [packages/ui/src/ton-connect-ui.ts:391](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L391)

Opens the modal window, returns a promise that resolves after the modal window is opened.

###### Parameters

###### options?

###### traceId?

`string`

###### Returns

`Promise`\<`void`\>

##### openSingleWalletModal()

> **openSingleWalletModal**(`wallet`): `Promise`\<`void`\>

Defined in: [packages/ui/src/ton-connect-ui.ts:430](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L430)

**`Experimental`**

Opens the single wallet modal window, returns a promise that resolves after the modal window is opened.

###### Parameters

###### wallet

`string`

###### Returns

`Promise`\<`void`\>

##### sendTransaction()

> **sendTransaction**(`tx`, `options?`): `Promise`\<`OptionalTraceable`\<`SendTransactionResponse`\>\>

Defined in: [packages/ui/src/ton-connect-ui.ts:498](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L498)

Opens the modal window and handles the transaction sending.

###### Parameters

###### tx

`SendTransactionRequest`

transaction to send.

###### options?

`ActionOptions`\<`SendTransactionResponse`\>

modal and notifications behaviour settings. Default is show only 'before' modal and all notifications.

###### Returns

`Promise`\<`OptionalTraceable`\<`SendTransactionResponse`\>\>

##### setConnectionNetwork()

> **setConnectionNetwork**(`network?`): `void`

Defined in: [packages/ui/src/ton-connect-ui.ts:355](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L355)

Set desired network for the connection. Can only be set before connecting.
If wallet connects with a different chain, the SDK will throw an error and abort connection.

###### Parameters

###### network?

`string`

desired network id (e.g., '-239', '-3', or custom). Pass undefined to allow any network.

###### Returns

`void`

##### setConnectRequestParameters()

> **setConnectRequestParameters**(`connectRequestParameters`): `void`

Defined in: [packages/ui/src/ton-connect-ui.ts:341](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L341)

Use it to customize ConnectRequest and add `tonProof` payload.
You can call it multiply times to set updated tonProof payload if previous one is outdated.
If `connectRequestParameters.state === 'loading'` loader will appear instead of the qr code in the wallets modal.
If `connectRequestParameters.state` was changed to 'ready' or it's value has been changed, QR will be re-rendered.

###### Parameters

###### connectRequestParameters

`undefined` | `null` | [`Loadable`](#loadable)\<`ConnectAdditionalRequest`\>

###### Returns

`void`

##### signData()

> **signData**(`data`, `options?`): `Promise`\<`SignDataResponse`\>

Defined in: [packages/ui/src/ton-connect-ui.ts:545](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L545)

Signs the data and returns the signature.

###### Parameters

###### data

`SignDataPayload`

data to sign.

###### options?

`ActionOptions`\<`SignDataResponse`\>

###### Returns

`Promise`\<`SignDataResponse`\>

##### signMessage()

> **signMessage**(`message`, `options?`): `Promise`\<`OptionalTraceable`\<`SignMessageResponse`\>\>

Defined in: [packages/ui/src/ton-connect-ui.ts:589](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L589)

Signs a message built from a transaction request and returns the signed internal message BoC.

###### Parameters

###### message

`SendTransactionRequest`

transaction-like request describing the internal message to sign.

###### options?

`ActionOptions`\<`SignMessageResponse`\>

modal and notifications behaviour settings.

###### Returns

`Promise`\<`OptionalTraceable`\<`SignMessageResponse`\>\>

##### getWallets()

> `static` **getWallets**(): `Promise`\<`WalletInfo`[]\>

Defined in: [packages/ui/src/ton-connect-ui.ts:83](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/ton-connect-ui.ts#L83)

###### Returns

`Promise`\<`WalletInfo`[]\>

***

### TonConnectUIError

Defined in: [packages/ui/src/errors/ton-connect-ui.error.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/errors/ton-connect-ui.error.ts#L3)

#### Extends

- `TonConnectError`

#### Constructors

##### Constructor

> **new TonConnectUIError**(...`args`): [`TonConnectUIError`](#tonconnectuierror)

Defined in: [packages/ui/src/errors/ton-connect-ui.error.ts:4](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/errors/ton-connect-ui.error.ts#L4)

###### Parameters

###### args

...\[`string`, `ErrorOptions`\]

###### Returns

[`TonConnectUIError`](#tonconnectuierror)

###### Overrides

`TonConnectError.constructor`

#### Properties

##### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

###### Inherited from

`TonConnectError.cause`

##### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1077

###### Inherited from

`TonConnectError.message`

##### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1076

###### Inherited from

`TonConnectError.name`

##### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1078

###### Inherited from

`TonConnectError.stack`

##### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/.pnpm/@types+node@24.2.0/node\_modules/@types/node/globals.d.ts:162

The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured _after_ the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

###### Inherited from

`TonConnectError.stackTraceLimit`

#### Accessors

##### info

###### Get Signature

> **get** `protected` **info**(): `string`

Defined in: packages/sdk/lib/types/index.d.ts:1620

###### Returns

`string`

###### Inherited from

`TonConnectError.info`

#### Methods

##### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/.pnpm/@types+node@24.2.0/node\_modules/@types/node/globals.d.ts:146

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

###### Parameters

###### targetObject

`object`

###### constructorOpt?

`Function`

###### Returns

`void`

###### Inherited from

`TonConnectError.captureStackTrace`

##### isError()

> `static` **isError**(`error`): `error is Error`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.esnext.error.d.ts:23

Indicates whether the argument provided is a built-in Error instance or not.

###### Parameters

###### error

`unknown`

###### Returns

`error is Error`

###### Inherited from

`TonConnectError.isError`

##### prepareStackTrace()

> `static` **prepareStackTrace**(`err`, `stackTraces`): `any`

Defined in: node\_modules/.pnpm/@types+node@24.2.0/node\_modules/@types/node/globals.d.ts:150

###### Parameters

###### err

`Error`

###### stackTraces

`CallSite`[]

###### Returns

`any`

###### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Inherited from

`TonConnectError.prepareStackTrace`

## Interfaces

### ActionConfiguration

Defined in: [packages/ui/src/models/action-configuration.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/action-configuration.ts#L3)

#### Properties

##### modals?

> `optional` **modals**: (`"error"` \| `"before"` \| `"success"`)[] \| `"all"`

Defined in: [packages/ui/src/models/action-configuration.ts:8](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/action-configuration.ts#L8)

Configure action modals behavior.

###### Default

```ts
['before']
```

##### notifications?

> `optional` **notifications**: (`"error"` \| `"before"` \| `"success"`)[] \| `"all"`

Defined in: [packages/ui/src/models/action-configuration.ts:14](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/action-configuration.ts#L14)

Configure action notifications behavior.

###### Default

```ts
'all'
```

##### returnStrategy?

> `optional` **returnStrategy**: [`ReturnStrategy`](#returnstrategy-1)

Defined in: [packages/ui/src/models/action-configuration.ts:20](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/action-configuration.ts#L20)

Specifies return strategy for the deeplink when user signs/declines the request.

###### Default

```ts
'back'
```

##### ~~skipRedirectToWallet?~~

> `optional` **skipRedirectToWallet**: `"ios"` \| `"always"` \| `"never"`

Defined in: [packages/ui/src/models/action-configuration.ts:33](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/action-configuration.ts#L33)

###### Deprecated

Shouldn't be used anymore, SDK will automatically detect return strategy for TWA-TWA connections.
Specifies whether the method should redirect user to the connected wallet

###### Default

```ts
'ios'
```

##### twaReturnUrl?

> `optional` **twaReturnUrl**: `` `${string}://${string}` ``

Defined in: [packages/ui/src/models/action-configuration.ts:26](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/action-configuration.ts#L26)

Specifies return url for TWA-TWA connections.
This will be applied as a return strategy if dApp is opened as a TWA and user selects TWA wallet (overrides `returnStrategy` if).

***

### TonConnectUiCreateOptionsBase

Defined in: [packages/ui/src/models/ton-connect-ui-create-options.ts:24](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-create-options.ts#L24)

#### Extends

- [`TonConnectUiOptions`](#tonconnectuioptions)

#### Extended by

- [`TonConnectUiOptionsWithManifest`](#tonconnectuioptionswithmanifest)
- [`TonConnectUiOptionsWithConnector`](#tonconnectuioptionswithconnector)

#### Properties

##### actionsConfiguration?

> `optional` **actionsConfiguration**: [`ActionConfiguration`](#actionconfiguration)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:43](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L43)

Configuration for action-period (e.g. sendTransaction) UI elements: modals and notifications and wallet behaviour (return strategy).

###### Inherited from

[`TonConnectUiOptions`](#tonconnectuioptions).[`actionsConfiguration`](#actionsconfiguration-1)

##### analytics?

> `optional` **analytics**: `AnalyticsSettings`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:54](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L54)

Analytics configuration forwarded to the underlying TonConnect SDK instance.

###### Inherited from

[`TonConnectUiOptions`](#tonconnectuioptions).[`analytics`](#analytics-1)

##### buttonRootId?

> `optional` **buttonRootId**: `null` \| `string`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:17](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L17)

HTML element id to attach the wallet connect button. If not passed button won't appear.

###### Default

```ts
null.
```

###### Inherited from

[`TonConnectUiOptions`](#tonconnectuioptions).[`buttonRootId`](#buttonrootid-1)

##### enableAndroidBackHandler?

> `optional` **enableAndroidBackHandler**: `boolean`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:49](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L49)

Specifies whether the Android back button should be used to close modals and notifications on Android devices.

###### Default

```ts
true
```

###### Inherited from

[`TonConnectUiOptions`](#tonconnectuioptions).[`enableAndroidBackHandler`](#enableandroidbackhandler-1)

##### eventDispatcher?

> `optional` **eventDispatcher**: `EventDispatcher`\<`RequestVersionEvent` \| `ResponseVersionEvent` \| `ConnectionStartedEvent` \| `ConnectionCompletedEvent` \| `ConnectionErrorEvent` \| `ConnectionRestoringStartedEvent` \| `ConnectionRestoringCompletedEvent` \| `ConnectionRestoringErrorEvent` \| `DisconnectionEvent` \| `TransactionSentForSignatureEvent` \| `TransactionSignedEvent` \| `TransactionSigningFailedEvent` \| `DataSentForSignatureEvent` \| `DataSignedEvent` \| `DataSigningFailedEvent` \| `WalletModalOpenedEvent` \| `SelectedWalletEvent`\>

Defined in: [packages/ui/src/models/ton-connect-ui-create-options.ts:41](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-create-options.ts#L41)

Event dispatcher to track user actions. By default, it uses `window.dispatchEvent` for browser environment.

###### Default

```ts
BrowserEventDispatcher.
```

##### language?

> `optional` **language**: [`Locales`](#locales)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:23](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L23)

Language for the phrases it the UI elements.

###### Default

```ts
system
```

###### Inherited from

[`TonConnectUiOptions`](#tonconnectuioptions).[`language`](#language-1)

##### restoreConnection?

> `optional` **restoreConnection**: `boolean`

Defined in: [packages/ui/src/models/ton-connect-ui-create-options.ts:29](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-create-options.ts#L29)

Try to restore existing session and reconnect to the corresponding wallet.

###### Default

```ts
true.
```

##### uiPreferences?

> `optional` **uiPreferences**: [`UIPreferences`](#uipreferences-4)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:11](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L11)

UI elements configuration.

###### Inherited from

[`TonConnectUiOptions`](#tonconnectuioptions).[`uiPreferences`](#uipreferences-1)

##### walletsListConfiguration?

> `optional` **walletsListConfiguration**: [`WalletsListConfiguration`](#walletslistconfiguration-4)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:28](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L28)

Configuration for the wallets list in the connect wallet modal.

###### Inherited from

[`TonConnectUiOptions`](#tonconnectuioptions).[`walletsListConfiguration`](#walletslistconfiguration-1)

##### walletsPreferredFeatures?

> `optional` **walletsPreferredFeatures**: `RequiredFeatures`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:38](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L38)

Preferred features for wallets. If wallet doesn't support preferred features, it will be moved to the end of the list.

###### Inherited from

[`TonConnectUiOptions`](#tonconnectuioptions).[`walletsPreferredFeatures`](#walletspreferredfeatures-2)

##### walletsRequiredFeatures?

> `optional` **walletsRequiredFeatures**: `RequiredFeatures`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:33](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L33)

Required features for wallets. If wallet doesn't support required features, it will be disabled.

###### Inherited from

[`TonConnectUiOptions`](#tonconnectuioptions).[`walletsRequiredFeatures`](#walletsrequiredfeatures-2)

##### widgetRootId?

> `optional` **widgetRootId**: `string`

Defined in: [packages/ui/src/models/ton-connect-ui-create-options.ts:35](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-create-options.ts#L35)

HTML element id to attach the modal window element. If not passed, `div#tc-widget-root` in the end of the <body> will be added and used.

###### Default

`div#tc-widget-root`.

***

### TonConnectUiOptions

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:7](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L7)

#### Extended by

- [`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase)

#### Properties

##### actionsConfiguration?

> `optional` **actionsConfiguration**: [`ActionConfiguration`](#actionconfiguration)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:43](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L43)

Configuration for action-period (e.g. sendTransaction) UI elements: modals and notifications and wallet behaviour (return strategy).

##### analytics?

> `optional` **analytics**: `AnalyticsSettings`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:54](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L54)

Analytics configuration forwarded to the underlying TonConnect SDK instance.

##### buttonRootId?

> `optional` **buttonRootId**: `null` \| `string`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:17](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L17)

HTML element id to attach the wallet connect button. If not passed button won't appear.

###### Default

```ts
null.
```

##### enableAndroidBackHandler?

> `optional` **enableAndroidBackHandler**: `boolean`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:49](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L49)

Specifies whether the Android back button should be used to close modals and notifications on Android devices.

###### Default

```ts
true
```

##### language?

> `optional` **language**: [`Locales`](#locales)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:23](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L23)

Language for the phrases it the UI elements.

###### Default

```ts
system
```

##### uiPreferences?

> `optional` **uiPreferences**: [`UIPreferences`](#uipreferences-4)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:11](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L11)

UI elements configuration.

##### walletsListConfiguration?

> `optional` **walletsListConfiguration**: [`WalletsListConfiguration`](#walletslistconfiguration-4)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:28](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L28)

Configuration for the wallets list in the connect wallet modal.

##### walletsPreferredFeatures?

> `optional` **walletsPreferredFeatures**: `RequiredFeatures`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:38](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L38)

Preferred features for wallets. If wallet doesn't support preferred features, it will be moved to the end of the list.

##### walletsRequiredFeatures?

> `optional` **walletsRequiredFeatures**: `RequiredFeatures`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:33](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L33)

Required features for wallets. If wallet doesn't support required features, it will be disabled.

***

### TonConnectUiOptionsWithConnector

Defined in: [packages/ui/src/models/ton-connect-ui-create-options.ts:17](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-create-options.ts#L17)

#### Extends

- [`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase)

#### Properties

##### actionsConfiguration?

> `optional` **actionsConfiguration**: [`ActionConfiguration`](#actionconfiguration)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:43](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L43)

Configuration for action-period (e.g. sendTransaction) UI elements: modals and notifications and wallet behaviour (return strategy).

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`actionsConfiguration`](#actionsconfiguration)

##### analytics?

> `optional` **analytics**: `AnalyticsSettings`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:54](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L54)

Analytics configuration forwarded to the underlying TonConnect SDK instance.

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`analytics`](#analytics)

##### buttonRootId?

> `optional` **buttonRootId**: `null` \| `string`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:17](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L17)

HTML element id to attach the wallet connect button. If not passed button won't appear.

###### Default

```ts
null.
```

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`buttonRootId`](#buttonrootid)

##### connector?

> `optional` **connector**: `ITonConnect`

Defined in: [packages/ui/src/models/ton-connect-ui-create-options.ts:21](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-create-options.ts#L21)

TonConnect instance. Can be helpful if you use custom ITonConnect implementation, or use both of @tonconnect/sdk and @tonconnect/ui in your app.

##### enableAndroidBackHandler?

> `optional` **enableAndroidBackHandler**: `boolean`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:49](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L49)

Specifies whether the Android back button should be used to close modals and notifications on Android devices.

###### Default

```ts
true
```

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`enableAndroidBackHandler`](#enableandroidbackhandler)

##### eventDispatcher?

> `optional` **eventDispatcher**: `EventDispatcher`\<`RequestVersionEvent` \| `ResponseVersionEvent` \| `ConnectionStartedEvent` \| `ConnectionCompletedEvent` \| `ConnectionErrorEvent` \| `ConnectionRestoringStartedEvent` \| `ConnectionRestoringCompletedEvent` \| `ConnectionRestoringErrorEvent` \| `DisconnectionEvent` \| `TransactionSentForSignatureEvent` \| `TransactionSignedEvent` \| `TransactionSigningFailedEvent` \| `DataSentForSignatureEvent` \| `DataSignedEvent` \| `DataSigningFailedEvent` \| `WalletModalOpenedEvent` \| `SelectedWalletEvent`\>

Defined in: [packages/ui/src/models/ton-connect-ui-create-options.ts:41](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-create-options.ts#L41)

Event dispatcher to track user actions. By default, it uses `window.dispatchEvent` for browser environment.

###### Default

```ts
BrowserEventDispatcher.
```

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`eventDispatcher`](#eventdispatcher)

##### language?

> `optional` **language**: [`Locales`](#locales)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:23](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L23)

Language for the phrases it the UI elements.

###### Default

```ts
system
```

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`language`](#language)

##### restoreConnection?

> `optional` **restoreConnection**: `boolean`

Defined in: [packages/ui/src/models/ton-connect-ui-create-options.ts:29](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-create-options.ts#L29)

Try to restore existing session and reconnect to the corresponding wallet.

###### Default

```ts
true.
```

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`restoreConnection`](#restoreconnection)

##### uiPreferences?

> `optional` **uiPreferences**: [`UIPreferences`](#uipreferences-4)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:11](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L11)

UI elements configuration.

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`uiPreferences`](#uipreferences)

##### walletsListConfiguration?

> `optional` **walletsListConfiguration**: [`WalletsListConfiguration`](#walletslistconfiguration-4)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:28](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L28)

Configuration for the wallets list in the connect wallet modal.

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`walletsListConfiguration`](#walletslistconfiguration)

##### walletsPreferredFeatures?

> `optional` **walletsPreferredFeatures**: `RequiredFeatures`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:38](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L38)

Preferred features for wallets. If wallet doesn't support preferred features, it will be moved to the end of the list.

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`walletsPreferredFeatures`](#walletspreferredfeatures-1)

##### walletsRequiredFeatures?

> `optional` **walletsRequiredFeatures**: `RequiredFeatures`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:33](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L33)

Required features for wallets. If wallet doesn't support required features, it will be disabled.

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`walletsRequiredFeatures`](#walletsrequiredfeatures-1)

##### widgetRootId?

> `optional` **widgetRootId**: `string`

Defined in: [packages/ui/src/models/ton-connect-ui-create-options.ts:35](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-create-options.ts#L35)

HTML element id to attach the modal window element. If not passed, `div#tc-widget-root` in the end of the <body> will be added and used.

###### Default

`div#tc-widget-root`.

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`widgetRootId`](#widgetrootid)

***

### TonConnectUiOptionsWithManifest

Defined in: [packages/ui/src/models/ton-connect-ui-create-options.ts:9](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-create-options.ts#L9)

#### Extends

- [`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase)

#### Properties

##### actionsConfiguration?

> `optional` **actionsConfiguration**: [`ActionConfiguration`](#actionconfiguration)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:43](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L43)

Configuration for action-period (e.g. sendTransaction) UI elements: modals and notifications and wallet behaviour (return strategy).

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`actionsConfiguration`](#actionsconfiguration)

##### analytics?

> `optional` **analytics**: `AnalyticsSettings`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:54](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L54)

Analytics configuration forwarded to the underlying TonConnect SDK instance.

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`analytics`](#analytics)

##### buttonRootId?

> `optional` **buttonRootId**: `null` \| `string`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:17](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L17)

HTML element id to attach the wallet connect button. If not passed button won't appear.

###### Default

```ts
null.
```

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`buttonRootId`](#buttonrootid)

##### enableAndroidBackHandler?

> `optional` **enableAndroidBackHandler**: `boolean`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:49](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L49)

Specifies whether the Android back button should be used to close modals and notifications on Android devices.

###### Default

```ts
true
```

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`enableAndroidBackHandler`](#enableandroidbackhandler)

##### eventDispatcher?

> `optional` **eventDispatcher**: `EventDispatcher`\<`RequestVersionEvent` \| `ResponseVersionEvent` \| `ConnectionStartedEvent` \| `ConnectionCompletedEvent` \| `ConnectionErrorEvent` \| `ConnectionRestoringStartedEvent` \| `ConnectionRestoringCompletedEvent` \| `ConnectionRestoringErrorEvent` \| `DisconnectionEvent` \| `TransactionSentForSignatureEvent` \| `TransactionSignedEvent` \| `TransactionSigningFailedEvent` \| `DataSentForSignatureEvent` \| `DataSignedEvent` \| `DataSigningFailedEvent` \| `WalletModalOpenedEvent` \| `SelectedWalletEvent`\>

Defined in: [packages/ui/src/models/ton-connect-ui-create-options.ts:41](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-create-options.ts#L41)

Event dispatcher to track user actions. By default, it uses `window.dispatchEvent` for browser environment.

###### Default

```ts
BrowserEventDispatcher.
```

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`eventDispatcher`](#eventdispatcher)

##### language?

> `optional` **language**: [`Locales`](#locales)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:23](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L23)

Language for the phrases it the UI elements.

###### Default

```ts
system
```

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`language`](#language)

##### manifestUrl?

> `optional` **manifestUrl**: `string`

Defined in: [packages/ui/src/models/ton-connect-ui-create-options.ts:14](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-create-options.ts#L14)

Url to the [manifest][https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest](https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest) with the Dapp metadata that will be displayed in the user's wallet.
If not passed, manifest from `${window.location.origin}/tonconnect-manifest.json` will be taken.

##### restoreConnection?

> `optional` **restoreConnection**: `boolean`

Defined in: [packages/ui/src/models/ton-connect-ui-create-options.ts:29](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-create-options.ts#L29)

Try to restore existing session and reconnect to the corresponding wallet.

###### Default

```ts
true.
```

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`restoreConnection`](#restoreconnection)

##### uiPreferences?

> `optional` **uiPreferences**: [`UIPreferences`](#uipreferences-4)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:11](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L11)

UI elements configuration.

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`uiPreferences`](#uipreferences)

##### walletsListConfiguration?

> `optional` **walletsListConfiguration**: [`WalletsListConfiguration`](#walletslistconfiguration-4)

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:28](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L28)

Configuration for the wallets list in the connect wallet modal.

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`walletsListConfiguration`](#walletslistconfiguration)

##### walletsPreferredFeatures?

> `optional` **walletsPreferredFeatures**: `RequiredFeatures`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:38](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L38)

Preferred features for wallets. If wallet doesn't support preferred features, it will be moved to the end of the list.

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`walletsPreferredFeatures`](#walletspreferredfeatures-1)

##### walletsRequiredFeatures?

> `optional` **walletsRequiredFeatures**: `RequiredFeatures`

Defined in: [packages/ui/src/models/ton-connect-ui-options.ts:33](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-options.ts#L33)

Required features for wallets. If wallet doesn't support required features, it will be disabled.

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`walletsRequiredFeatures`](#walletsrequiredfeatures-1)

##### widgetRootId?

> `optional` **widgetRootId**: `string`

Defined in: [packages/ui/src/models/ton-connect-ui-create-options.ts:35](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-create-options.ts#L35)

HTML element id to attach the modal window element. If not passed, `div#tc-widget-root` in the end of the <body> will be added and used.

###### Default

`div#tc-widget-root`.

###### Inherited from

[`TonConnectUiCreateOptionsBase`](#tonconnectuicreateoptionsbase).[`widgetRootId`](#widgetrootid)

***

### UIPreferences

Defined in: [packages/ui/src/models/ui-preferences.ts:5](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ui-preferences.ts#L5)

#### Properties

##### borderRadius?

> `optional` **borderRadius**: [`BorderRadius`](#borderradius-1)

Defined in: [packages/ui/src/models/ui-preferences.ts:16](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ui-preferences.ts#L16)

Border radius for UI elements.

###### Default

```ts
'm'
```

##### colorsSet?

> `optional` **colorsSet**: `Partial`\<`Record`\<[`THEME`](#theme), [`PartialColorsSet`](#partialcolorsset)\>\>

Defined in: [packages/ui/src/models/ui-preferences.ts:21](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ui-preferences.ts#L21)

Configure colors scheme for different themes.

##### theme?

> `optional` **theme**: [`Theme`](#theme-2)

Defined in: [packages/ui/src/models/ui-preferences.ts:10](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ui-preferences.ts#L10)

Color theme for the UI elements.

###### Default

```ts
SYSTEM theme.
```

***

### WalletsModal

Defined in: [packages/ui/src/models/wallets-modal.ts:9](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-modal.ts#L9)

#### Properties

##### close()

> **close**: (`reason?`) => `void`

Defined in: [packages/ui/src/models/wallets-modal.ts:19](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-modal.ts#L19)

Close the modal.

###### Parameters

###### reason?

[`WalletsModalCloseReason`](#walletsmodalclosereason)

###### Returns

`void`

###### Default

```ts
'action-cancelled'
```

##### onStateChange()

> **onStateChange**: (`callback`) => () => `void`

Defined in: [packages/ui/src/models/wallets-modal.ts:24](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-modal.ts#L24)

Subscribe to the modal window status changes.

###### Parameters

###### callback

(`state`) => `void`

###### Returns

> (): `void`

###### Returns

`void`

##### open()

> **open**: (`options?`) => `void`

Defined in: [packages/ui/src/models/wallets-modal.ts:13](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-modal.ts#L13)

Open the modal.

###### Parameters

###### options?

###### traceId?

`string`

###### Returns

`void`

##### state

> **state**: [`WalletsModalState`](#walletsmodalstate-1)

Defined in: [packages/ui/src/models/wallets-modal.ts:29](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-modal.ts#L29)

Current modal window state.

## Type Aliases

### BorderRadius

> **BorderRadius** = `"m"` \| `"s"` \| `"none"`

Defined in: [packages/ui/src/models/border-radius.ts:1](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/border-radius.ts#L1)

***

### Color

> **Color** = `Property.Color`

Defined in: [packages/ui/src/models/index.ts:26](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/index.ts#L26)

***

### ColorsSet

> **ColorsSet** = `object`

Defined in: [packages/ui/src/models/colors-set.ts:4](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L4)

#### Properties

##### accent

> **accent**: `Color`

Defined in: [packages/ui/src/models/colors-set.ts:13](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L13)

##### background

> **background**: `object`

Defined in: [packages/ui/src/models/colors-set.ts:22](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L22)

###### primary

> **primary**: `Color`

###### qr

> **qr**: `Color`

###### secondary

> **secondary**: `Color`

###### segment

> **segment**: `Color`

###### tint

> **tint**: `Color`

##### connectButton

> **connectButton**: `object`

Defined in: [packages/ui/src/models/colors-set.ts:9](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L9)

###### background

> **background**: `Color`

###### foreground

> **foreground**: `Color`

##### constant

> **constant**: `object`

Defined in: [packages/ui/src/models/colors-set.ts:5](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L5)

###### black

> **black**: `Color`

###### white

> **white**: `Color`

##### icon

> **icon**: `object`

Defined in: [packages/ui/src/models/colors-set.ts:15](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L15)

###### error

> **error**: `Color`

###### primary

> **primary**: `Color`

###### secondary

> **secondary**: `Color`

###### success

> **success**: `Color`

###### tertiary

> **tertiary**: `Color`

##### telegramButton

> **telegramButton**: `Color`

Defined in: [packages/ui/src/models/colors-set.ts:14](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L14)

##### text

> **text**: `object`

Defined in: [packages/ui/src/models/colors-set.ts:29](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L29)

###### primary

> **primary**: `Color`

###### secondary

> **secondary**: `Color`

***

### ConnectedWallet

> **ConnectedWallet** = `Wallet` & [`WalletInfoWithOpenMethod`](#walletinfowithopenmethod)

Defined in: [packages/ui/src/models/connected-wallet.ts:19](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/connected-wallet.ts#L19)

***

### Loadable\<T\>

> **Loadable**\<`T`\> = [`LoadableLoading`](#loadableloading) \| [`LoadableReady`](#loadableready)\<`T`\>

Defined in: [packages/ui/src/models/loadable.ts:1](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/loadable.ts#L1)

#### Type Parameters

##### T

`T`

***

### LoadableLoading

> **LoadableLoading** = `object`

Defined in: [packages/ui/src/models/loadable.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/loadable.ts#L3)

#### Properties

##### state

> **state**: `"loading"`

Defined in: [packages/ui/src/models/loadable.ts:4](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/loadable.ts#L4)

***

### LoadableReady\<T\>

> **LoadableReady**\<`T`\> = `object`

Defined in: [packages/ui/src/models/loadable.ts:7](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/loadable.ts#L7)

#### Type Parameters

##### T

`T`

#### Properties

##### state

> **state**: `"ready"`

Defined in: [packages/ui/src/models/loadable.ts:8](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/loadable.ts#L8)

##### value

> **value**: `T`

Defined in: [packages/ui/src/models/loadable.ts:10](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/loadable.ts#L10)

***

### Locales

> **Locales** = `"en"` \| `"ru"`

Defined in: [packages/ui/src/models/locales.ts:1](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/locales.ts#L1)

***

### PartialColorsSet

> **PartialColorsSet** = `object`

Defined in: [packages/ui/src/models/colors-set.ts:35](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L35)

#### Properties

##### accent?

> `optional` **accent**: `Color`

Defined in: [packages/ui/src/models/colors-set.ts:44](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L44)

##### background?

> `optional` **background**: `object`

Defined in: [packages/ui/src/models/colors-set.ts:53](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L53)

###### primary?

> `optional` **primary**: `Color`

###### qr?

> `optional` **qr**: `Color`

###### secondary?

> `optional` **secondary**: `Color`

###### segment?

> `optional` **segment**: `Color`

###### tint?

> `optional` **tint**: `Color`

##### connectButton?

> `optional` **connectButton**: `object`

Defined in: [packages/ui/src/models/colors-set.ts:40](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L40)

###### background?

> `optional` **background**: `Color`

###### foreground?

> `optional` **foreground**: `Color`

##### constant?

> `optional` **constant**: `object`

Defined in: [packages/ui/src/models/colors-set.ts:36](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L36)

###### black?

> `optional` **black**: `Color`

###### white?

> `optional` **white**: `Color`

##### icon?

> `optional` **icon**: `object`

Defined in: [packages/ui/src/models/colors-set.ts:46](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L46)

###### error?

> `optional` **error**: `Color`

###### primary?

> `optional` **primary**: `Color`

###### secondary?

> `optional` **secondary**: `Color`

###### success?

> `optional` **success**: `Color`

###### tertiary?

> `optional` **tertiary**: `Color`

##### telegramButton?

> `optional` **telegramButton**: `Color`

Defined in: [packages/ui/src/models/colors-set.ts:45](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L45)

##### text?

> `optional` **text**: `object`

Defined in: [packages/ui/src/models/colors-set.ts:60](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/colors-set.ts#L60)

###### primary?

> `optional` **primary**: `Color`

###### secondary?

> `optional` **secondary**: `Color`

***

### ReturnStrategy

> **ReturnStrategy** = `"back"` \| `"none"` \| `` `${string}://${string}` ``

Defined in: [packages/ui/src/models/return-strategy.ts:5](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/return-strategy.ts#L5)

Specifies return strategy for the deeplink when user signs/declines the request.
[See details][https://github.com/ton-connect/docs/blob/main/bridge.md#universal-link](https://github.com/ton-connect/docs/blob/main/bridge.md#universal-link).

***

### Theme

> **Theme** = [`THEME`](#theme) \| `"SYSTEM"`

Defined in: [packages/ui/src/models/THEME.ts:6](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/THEME.ts#L6)

***

### TonConnectUiCreateOptions

> **TonConnectUiCreateOptions** = [`TonConnectUiOptionsWithConnector`](#tonconnectuioptionswithconnector) \| [`TonConnectUiOptionsWithManifest`](#tonconnectuioptionswithmanifest)

Defined in: [packages/ui/src/models/ton-connect-ui-create-options.ts:5](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ton-connect-ui-create-options.ts#L5)

***

### UIWallet

> **UIWallet** = `Omit`\<`WalletInfoInjectable`, `"injected"` \| `"embedded"`\> \| `WalletInfoRemote`

Defined in: [packages/ui/src/models/ui-wallet.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/ui-wallet.ts#L3)

***

### UserActionEvent

> **UserActionEvent** = `VersionEvent` \| `ConnectionEvent` \| `ConnectionRestoringEvent` \| `DisconnectionEvent` \| `TransactionSigningEvent` \| `DataSigningEvent` \| `WalletModalOpenedEvent` \| `SelectedWalletEvent`

Defined in: [packages/ui/src/tracker/types.ts:15](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/tracker/types.ts#L15)

User action events.

***

### WalletInfoRemoteWithOpenMethod

> **WalletInfoRemoteWithOpenMethod** = `WalletInfoRemote` & `object`

Defined in: [packages/ui/src/models/connected-wallet.ts:11](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/connected-wallet.ts#L11)

#### Type declaration

##### openMethod?

> `optional` **openMethod**: [`WalletOpenMethod`](#walletopenmethod)

***

### WalletInfoWalletConnect

> **WalletInfoWalletConnect** = `WalletInfoBase` & `object`

Defined in: [packages/ui/src/models/connected-wallet.ts:15](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/connected-wallet.ts#L15)

#### Type declaration

##### type

> **type**: `"wallet-connect"`

***

### WalletInfoWithOpenMethod

> **WalletInfoWithOpenMethod** = `WalletInfoInjectable` \| [`WalletInfoRemoteWithOpenMethod`](#walletinforemotewithopenmethod) \| [`WalletInfoWalletConnect`](#walletinfowalletconnect) \| `WalletInfoInjectable` & [`WalletInfoRemoteWithOpenMethod`](#walletinforemotewithopenmethod)

Defined in: [packages/ui/src/models/connected-wallet.ts:5](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/connected-wallet.ts#L5)

***

### WalletModalClosed

> **WalletModalClosed** = `object`

Defined in: [packages/ui/src/models/wallets-modal.ts:56](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-modal.ts#L56)

Closed modal window state.

#### Properties

##### closeReason

> **closeReason**: [`WalletsModalCloseReason`](#walletsmodalclosereason) \| `null`

Defined in: [packages/ui/src/models/wallets-modal.ts:65](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-modal.ts#L65)

Close reason, if the modal window was closed.

##### status

> **status**: `"closed"`

Defined in: [packages/ui/src/models/wallets-modal.ts:60](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-modal.ts#L60)

Modal window status.

***

### WalletModalOpened

> **WalletModalOpened** = `object`

Defined in: [packages/ui/src/models/wallets-modal.ts:35](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-modal.ts#L35)

Opened modal window state.

#### Properties

##### closeReason

> **closeReason**: `null`

Defined in: [packages/ui/src/models/wallets-modal.ts:44](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-modal.ts#L44)

Always `null` for opened modal window.

##### embeddedRequest?

> `optional` **embeddedRequest**: `Consumable`\<`EmbeddedRequest`\> \| `null`

Defined in: [packages/ui/src/models/wallets-modal.ts:50](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-modal.ts#L50)

Embedded request to include in the connect URL.
Present only when the modal was opened via `initiateEmbeddedRequestFlow`.

##### status

> **status**: `"opened"`

Defined in: [packages/ui/src/models/wallets-modal.ts:39](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-modal.ts#L39)

Modal window status.

***

### WalletOpenMethod

> **WalletOpenMethod** = `"qrcode"` \| `"universal-link"` \| `"custom-deeplink"`

Defined in: [packages/ui/src/models/connected-wallet.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/connected-wallet.ts#L3)

***

### WalletsListConfiguration

> **WalletsListConfiguration** = `object`

Defined in: [packages/ui/src/models/wallets-list-configuration.ts:6](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-list-configuration.ts#L6)

Add corrections to the default wallets list in the modal: add custom wallets and change wallets order.

#### Properties

##### includeWallets?

> `optional` **includeWallets**: [`UIWallet`](#uiwallet)[]

Defined in: [packages/ui/src/models/wallets-list-configuration.ts:10](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-list-configuration.ts#L10)

Allows to include extra wallets to the wallets list in the modal.

***

### WalletsModalCloseReason

> **WalletsModalCloseReason** = `"action-cancelled"` \| `"wallet-selected"`

Defined in: [packages/ui/src/models/wallets-modal.ts:95](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-modal.ts#L95)

Modal window close reason.

***

### WalletsModalState

> **WalletsModalState** = `OptionalTraceable`\<[`WalletModalOpened`](#walletmodalopened) \| [`WalletModalClosed`](#walletmodalclosed) \| `ChooseSupportedFeatureWalletsModal`\>

Defined in: [packages/ui/src/models/wallets-modal.ts:88](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/ui/src/models/wallets-modal.ts#L88)

Modal window state.

## References

### default

Renames and re-exports [TonConnectUI](#tonconnectui)
