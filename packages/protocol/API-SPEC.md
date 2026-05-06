**@tonconnect/protocol**

***

# @tonconnect/protocol

## Enumerations

### CHAIN

Defined in: [models/CHAIN.ts:1](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/CHAIN.ts#L1)

#### Enumeration Members

##### MAINNET

> **MAINNET**: `"-239"`

Defined in: [models/CHAIN.ts:2](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/CHAIN.ts#L2)

##### TESTNET

> **TESTNET**: `"-3"`

Defined in: [models/CHAIN.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/CHAIN.ts#L3)

***

### CONNECT\_EVENT\_ERROR\_CODES

Defined in: [models/wallet-message/wallet-event/connect-event.ts:32](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L32)

#### Enumeration Members

##### BAD\_REQUEST\_ERROR

> **BAD\_REQUEST\_ERROR**: `1`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:34](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L34)

##### MANIFEST\_CONTENT\_ERROR

> **MANIFEST\_CONTENT\_ERROR**: `3`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:36](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L36)

##### MANIFEST\_NOT\_FOUND\_ERROR

> **MANIFEST\_NOT\_FOUND\_ERROR**: `2`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:35](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L35)

##### METHOD\_NOT\_SUPPORTED

> **METHOD\_NOT\_SUPPORTED**: `400`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:39](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L39)

##### UNKNOWN\_APP\_ERROR

> **UNKNOWN\_APP\_ERROR**: `100`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:37](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L37)

##### UNKNOWN\_ERROR

> **UNKNOWN\_ERROR**: `0`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:33](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L33)

##### USER\_REJECTS\_ERROR

> **USER\_REJECTS\_ERROR**: `300`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:38](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L38)

***

### CONNECT\_ITEM\_ERROR\_CODES

Defined in: [models/wallet-message/wallet-event/connect-event.ts:69](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L69)

#### Enumeration Members

##### METHOD\_NOT\_SUPPORTED

> **METHOD\_NOT\_SUPPORTED**: `400`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:71](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L71)

##### UNKNOWN\_ERROR

> **UNKNOWN\_ERROR**: `0`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:70](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L70)

***

### DISCONNECT\_ERROR\_CODES

Defined in: [models/wallet-message/wallet-response/disconnect-rpc-response.ts:15](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/disconnect-rpc-response.ts#L15)

#### Enumeration Members

##### BAD\_REQUEST\_ERROR

> **BAD\_REQUEST\_ERROR**: `1`

Defined in: [models/wallet-message/wallet-response/disconnect-rpc-response.ts:17](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/disconnect-rpc-response.ts#L17)

##### METHOD\_NOT\_SUPPORTED

> **METHOD\_NOT\_SUPPORTED**: `400`

Defined in: [models/wallet-message/wallet-response/disconnect-rpc-response.ts:19](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/disconnect-rpc-response.ts#L19)

##### UNKNOWN\_APP\_ERROR

> **UNKNOWN\_APP\_ERROR**: `100`

Defined in: [models/wallet-message/wallet-response/disconnect-rpc-response.ts:18](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/disconnect-rpc-response.ts#L18)

##### UNKNOWN\_ERROR

> **UNKNOWN\_ERROR**: `0`

Defined in: [models/wallet-message/wallet-response/disconnect-rpc-response.ts:16](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/disconnect-rpc-response.ts#L16)

***

### SEND\_TRANSACTION\_ERROR\_CODES

Defined in: [models/wallet-message/wallet-response/send-transaction-rpc-response.ts:17](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/send-transaction-rpc-response.ts#L17)

#### Enumeration Members

##### BAD\_REQUEST\_ERROR

> **BAD\_REQUEST\_ERROR**: `1`

Defined in: [models/wallet-message/wallet-response/send-transaction-rpc-response.ts:19](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/send-transaction-rpc-response.ts#L19)

##### METHOD\_NOT\_SUPPORTED

> **METHOD\_NOT\_SUPPORTED**: `400`

Defined in: [models/wallet-message/wallet-response/send-transaction-rpc-response.ts:22](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/send-transaction-rpc-response.ts#L22)

##### UNKNOWN\_APP\_ERROR

> **UNKNOWN\_APP\_ERROR**: `100`

Defined in: [models/wallet-message/wallet-response/send-transaction-rpc-response.ts:20](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/send-transaction-rpc-response.ts#L20)

##### UNKNOWN\_ERROR

> **UNKNOWN\_ERROR**: `0`

Defined in: [models/wallet-message/wallet-response/send-transaction-rpc-response.ts:18](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/send-transaction-rpc-response.ts#L18)

##### USER\_REJECTS\_ERROR

> **USER\_REJECTS\_ERROR**: `300`

Defined in: [models/wallet-message/wallet-response/send-transaction-rpc-response.ts:21](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/send-transaction-rpc-response.ts#L21)

***

### SIGN\_DATA\_ERROR\_CODES

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:43](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L43)

#### Enumeration Members

##### BAD\_REQUEST\_ERROR

> **BAD\_REQUEST\_ERROR**: `1`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:45](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L45)

##### METHOD\_NOT\_SUPPORTED

> **METHOD\_NOT\_SUPPORTED**: `400`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:48](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L48)

##### UNKNOWN\_APP\_ERROR

> **UNKNOWN\_APP\_ERROR**: `100`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:46](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L46)

##### UNKNOWN\_ERROR

> **UNKNOWN\_ERROR**: `0`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:44](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L44)

##### USER\_REJECTS\_ERROR

> **USER\_REJECTS\_ERROR**: `300`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:47](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L47)

***

### SIGN\_MESSAGE\_ERROR\_CODES

Defined in: [models/wallet-message/wallet-response/sign-message-rpc-response.ts:20](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-message-rpc-response.ts#L20)

#### Enumeration Members

##### BAD\_REQUEST\_ERROR

> **BAD\_REQUEST\_ERROR**: `1`

Defined in: [models/wallet-message/wallet-response/sign-message-rpc-response.ts:22](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-message-rpc-response.ts#L22)

##### METHOD\_NOT\_SUPPORTED

> **METHOD\_NOT\_SUPPORTED**: `400`

Defined in: [models/wallet-message/wallet-response/sign-message-rpc-response.ts:25](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-message-rpc-response.ts#L25)

##### UNKNOWN\_APP\_ERROR

> **UNKNOWN\_APP\_ERROR**: `100`

Defined in: [models/wallet-message/wallet-response/sign-message-rpc-response.ts:23](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-message-rpc-response.ts#L23)

##### UNKNOWN\_ERROR

> **UNKNOWN\_ERROR**: `0`

Defined in: [models/wallet-message/wallet-response/sign-message-rpc-response.ts:21](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-message-rpc-response.ts#L21)

##### USER\_REJECTS\_ERROR

> **USER\_REJECTS\_ERROR**: `300`

Defined in: [models/wallet-message/wallet-response/sign-message-rpc-response.ts:24](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-message-rpc-response.ts#L24)

## Classes

### SessionCrypto

Defined in: [crypto/session-crypto.ts:5](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/crypto/session-crypto.ts#L5)

#### Constructors

##### Constructor

> **new SessionCrypto**(`keyPair?`): [`SessionCrypto`](#sessioncrypto)

Defined in: [crypto/session-crypto.ts:12](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/crypto/session-crypto.ts#L12)

###### Parameters

###### keyPair?

[`KeyPair`](#keypair)

###### Returns

[`SessionCrypto`](#sessioncrypto)

#### Properties

##### sessionId

> `readonly` **sessionId**: `string`

Defined in: [crypto/session-crypto.ts:10](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/crypto/session-crypto.ts#L10)

#### Methods

##### decrypt()

> **decrypt**(`message`, `senderPublicKey`): `string`

Defined in: [crypto/session-crypto.ts:44](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/crypto/session-crypto.ts#L44)

###### Parameters

###### message

`Uint8Array`

###### senderPublicKey

`Uint8Array`

###### Returns

`string`

##### encrypt()

> **encrypt**(`message`, `receiverPublicKey`): `Uint8Array`

Defined in: [crypto/session-crypto.ts:32](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/crypto/session-crypto.ts#L32)

###### Parameters

###### message

`string`

###### receiverPublicKey

`Uint8Array`

###### Returns

`Uint8Array`

##### stringifyKeypair()

> **stringifyKeypair**(): [`KeyPair`](#keypair)

Defined in: [crypto/session-crypto.ts:63](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/crypto/session-crypto.ts#L63)

###### Returns

[`KeyPair`](#keypair)

## Interfaces

### ConnectEventError

Defined in: [models/wallet-message/wallet-event/connect-event.ts:23](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L23)

#### Properties

##### event

> **event**: `"connect_error"`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:24](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L24)

##### id

> **id**: `number`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:25](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L25)

##### payload

> **payload**: `object`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:26](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L26)

###### code

> **code**: [`CONNECT_EVENT_ERROR_CODES`](#connect_event_error_codes)

###### message

> **message**: `string`

***

### ConnectEventSuccess

Defined in: [models/wallet-message/wallet-event/connect-event.ts:8](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L8)

#### Properties

##### event

> **event**: `"connect"`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:9](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L9)

##### id

> **id**: `number`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:10](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L10)

##### payload

> **payload**: `object`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:11](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L11)

###### device

> **device**: [`DeviceInfo`](#deviceinfo)

###### items

> **items**: [`ConnectItemReply`](#connectitemreply)[]

##### response?

> `optional` **response**: [`WalletResponse`](#walletresponse)\<[`RpcMethod`](#rpcmethod)\>

Defined in: [models/wallet-message/wallet-event/connect-event.ts:20](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L20)

Response to the embedded app request (deep link request).
Present only if the wallet processed an `e` parameter from the connect URL.

***

### ConnectRequest

Defined in: [models/app-message/connect-request/connect-request.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/connect-request/connect-request.ts#L3)

#### Properties

##### items

> **items**: [`ConnectItem`](#connectitem)[]

Defined in: [models/app-message/connect-request/connect-request.ts:5](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/connect-request/connect-request.ts#L5)

##### manifestUrl

> **manifestUrl**: `string`

Defined in: [models/app-message/connect-request/connect-request.ts:4](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/connect-request/connect-request.ts#L4)

***

### DeviceInfo

Defined in: [models/device-info.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/device-info.ts#L3)

#### Properties

##### appName

> **appName**: `string`

Defined in: [models/device-info.ts:5](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/device-info.ts#L5)

##### appVersion

> **appVersion**: `string`

Defined in: [models/device-info.ts:6](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/device-info.ts#L6)

##### features

> **features**: [`Feature`](#feature)[]

Defined in: [models/device-info.ts:8](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/device-info.ts#L8)

##### maxProtocolVersion

> **maxProtocolVersion**: `number`

Defined in: [models/device-info.ts:7](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/device-info.ts#L7)

##### platform

> **platform**: `"iphone"` \| `"ipad"` \| `"android"` \| `"windows"` \| `"mac"` \| `"linux"` \| `"browser"`

Defined in: [models/device-info.ts:4](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/device-info.ts#L4)

***

### DisconnectEvent

Defined in: [models/wallet-message/wallet-event/disconnect-event.ts:1](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/disconnect-event.ts#L1)

#### Properties

##### event

> **event**: `"disconnect"`

Defined in: [models/wallet-message/wallet-event/disconnect-event.ts:2](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/disconnect-event.ts#L2)

##### id

> **id**: `number`

Defined in: [models/wallet-message/wallet-event/disconnect-event.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/disconnect-event.ts#L3)

##### payload

> **payload**: `object`

Defined in: [models/wallet-message/wallet-event/disconnect-event.ts:4](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/disconnect-event.ts#L4)

***

### DisconnectRpcRequest

Defined in: [models/app-message/request/disconnect-rpc-request.ts:1](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/disconnect-rpc-request.ts#L1)

#### Properties

##### id

> **id**: `string`

Defined in: [models/app-message/request/disconnect-rpc-request.ts:4](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/disconnect-rpc-request.ts#L4)

##### method

> **method**: `"disconnect"`

Defined in: [models/app-message/request/disconnect-rpc-request.ts:2](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/disconnect-rpc-request.ts#L2)

##### params

> **params**: \[\]

Defined in: [models/app-message/request/disconnect-rpc-request.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/disconnect-rpc-request.ts#L3)

***

### DisconnectRpcResponseError

Defined in: [models/wallet-message/wallet-response/disconnect-rpc-response.ts:10](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/disconnect-rpc-response.ts#L10)

#### Extends

- [`WalletResponseTemplateError`](#walletresponsetemplateerror)

#### Properties

##### error

> **error**: `object`

Defined in: [models/wallet-message/wallet-response/disconnect-rpc-response.ts:11](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/disconnect-rpc-response.ts#L11)

###### code

> **code**: [`DISCONNECT_ERROR_CODES`](#disconnect_error_codes)

###### data?

> `optional` **data**: `unknown`

###### message

> **message**: `string`

###### Overrides

[`WalletResponseTemplateError`](#walletresponsetemplateerror).[`error`](#error-4)

##### id

> **id**: `string`

Defined in: [models/wallet-message/wallet-response/disconnect-rpc-response.ts:12](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/disconnect-rpc-response.ts#L12)

###### Overrides

[`WalletResponseTemplateError`](#walletresponsetemplateerror).[`id`](#id-15)

***

### DisconnectRpcResponseSuccess

Defined in: [models/wallet-message/wallet-response/disconnect-rpc-response.ts:5](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/disconnect-rpc-response.ts#L5)

#### Properties

##### id

> **id**: `string`

Defined in: [models/wallet-message/wallet-response/disconnect-rpc-response.ts:6](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/disconnect-rpc-response.ts#L6)

##### result

> **result**: `object`

Defined in: [models/wallet-message/wallet-response/disconnect-rpc-response.ts:7](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/disconnect-rpc-response.ts#L7)

***

### KeyPair

Defined in: [crypto/key-pair.ts:1](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/crypto/key-pair.ts#L1)

#### Properties

##### publicKey

> **publicKey**: `string`

Defined in: [crypto/key-pair.ts:2](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/crypto/key-pair.ts#L2)

##### secretKey

> **secretKey**: `string`

Defined in: [crypto/key-pair.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/crypto/key-pair.ts#L3)

***

### RpcJettonItem

Defined in: [models/structured-item.ts:18](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L18)

#### Properties

##### amount

> **amount**: `string`

Defined in: [models/structured-item.ts:22](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L22)

##### attachAmount?

> `optional` **attachAmount**: `string`

Defined in: [models/structured-item.ts:23](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L23)

##### customPayload?

> `optional` **customPayload**: `string`

Defined in: [models/structured-item.ts:25](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L25)

##### destination

> **destination**: `string`

Defined in: [models/structured-item.ts:21](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L21)

##### forwardAmount?

> `optional` **forwardAmount**: `string`

Defined in: [models/structured-item.ts:26](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L26)

##### forwardPayload?

> `optional` **forwardPayload**: `string`

Defined in: [models/structured-item.ts:27](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L27)

##### master

> **master**: `string`

Defined in: [models/structured-item.ts:20](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L20)

##### queryId?

> `optional` **queryId**: `string`

Defined in: [models/structured-item.ts:28](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L28)

##### responseDestination?

> `optional` **responseDestination**: `string`

Defined in: [models/structured-item.ts:24](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L24)

##### type

> **type**: `"jetton"`

Defined in: [models/structured-item.ts:19](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L19)

***

### RpcNftItem

Defined in: [models/structured-item.ts:31](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L31)

#### Properties

##### attachAmount?

> `optional` **attachAmount**: `string`

Defined in: [models/structured-item.ts:35](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L35)

##### customPayload?

> `optional` **customPayload**: `string`

Defined in: [models/structured-item.ts:37](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L37)

##### forwardAmount?

> `optional` **forwardAmount**: `string`

Defined in: [models/structured-item.ts:38](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L38)

##### forwardPayload?

> `optional` **forwardPayload**: `string`

Defined in: [models/structured-item.ts:39](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L39)

##### newOwner

> **newOwner**: `string`

Defined in: [models/structured-item.ts:34](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L34)

##### nftAddress

> **nftAddress**: `string`

Defined in: [models/structured-item.ts:33](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L33)

##### queryId?

> `optional` **queryId**: `string`

Defined in: [models/structured-item.ts:40](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L40)

##### responseDestination?

> `optional` **responseDestination**: `string`

Defined in: [models/structured-item.ts:36](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L36)

##### type

> **type**: `"nft"`

Defined in: [models/structured-item.ts:32](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L32)

***

### RpcTonItem

Defined in: [models/structured-item.ts:9](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L9)

Wire-format structured items used inside JSON-RPC payloads and embedded-request
expansion. These match the shape that travels over the bridge / URL — field
casing follows the protocol (e.g. `extra_currency` snake_case).

The rich, user-facing counterparts (with camelCase fields) live in the SDK.

#### Properties

##### address

> **address**: `string`

Defined in: [models/structured-item.ts:11](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L11)

##### amount

> **amount**: `string`

Defined in: [models/structured-item.ts:12](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L12)

##### extra\_currency?

> `optional` **extra\_currency**: `object`

Defined in: [models/structured-item.ts:15](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L15)

###### Index Signature

\[`k`: `number`\]: `string`

##### payload?

> `optional` **payload**: `string`

Defined in: [models/structured-item.ts:13](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L13)

##### stateInit?

> `optional` **stateInit**: `string`

Defined in: [models/structured-item.ts:14](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L14)

##### type

> **type**: `"ton"`

Defined in: [models/structured-item.ts:10](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L10)

***

### SendTransactionRpcRequest

Defined in: [models/app-message/request/send-transaction-rpc-request.ts:8](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/send-transaction-rpc-request.ts#L8)

RPC request to submit and broadcast a transaction.

`params[0]` is a JSON-stringified payload that mirrors the SDK's
`SendTransactionRequest` (either raw `messages` OR structured `items`,
plus `valid_until`, `network`, and `from`).

#### Properties

##### id

> **id**: `string`

Defined in: [models/app-message/request/send-transaction-rpc-request.ts:14](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/send-transaction-rpc-request.ts#L14)

dApp-assigned request id; used to match the wallet response

##### method

> **method**: `"sendTransaction"`

Defined in: [models/app-message/request/send-transaction-rpc-request.ts:10](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/send-transaction-rpc-request.ts#L10)

method discriminator

##### params

> **params**: \[`string`\]

Defined in: [models/app-message/request/send-transaction-rpc-request.ts:12](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/send-transaction-rpc-request.ts#L12)

single-element tuple: the JSON-stringified transaction payload

***

### SendTransactionRpcResponseError

Defined in: [models/wallet-message/wallet-response/send-transaction-rpc-response.ts:12](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/send-transaction-rpc-response.ts#L12)

#### Extends

- [`WalletResponseTemplateError`](#walletresponsetemplateerror)

#### Properties

##### error

> **error**: `object`

Defined in: [models/wallet-message/wallet-response/send-transaction-rpc-response.ts:13](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/send-transaction-rpc-response.ts#L13)

###### code

> **code**: [`SEND_TRANSACTION_ERROR_CODES`](#send_transaction_error_codes)

###### data?

> `optional` **data**: `unknown`

###### message

> **message**: `string`

###### Overrides

[`WalletResponseTemplateError`](#walletresponsetemplateerror).[`error`](#error-4)

##### id

> **id**: `string`

Defined in: [models/wallet-message/wallet-response/send-transaction-rpc-response.ts:14](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/send-transaction-rpc-response.ts#L14)

###### Overrides

[`WalletResponseTemplateError`](#walletresponsetemplateerror).[`id`](#id-15)

***

### SendTransactionRpcResponseSuccess

Defined in: [models/wallet-message/wallet-response/send-transaction-rpc-response.ts:10](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/send-transaction-rpc-response.ts#L10)

#### Extends

- [`WalletResponseTemplateSuccess`](#walletresponsetemplatesuccess)

#### Properties

##### id

> **id**: `string`

Defined in: [models/wallet-message/wallet-response/wallet-response-template.ts:5](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response-template.ts#L5)

###### Inherited from

[`WalletResponseTemplateSuccess`](#walletresponsetemplatesuccess).[`id`](#id-16)

##### result

> **result**: `string`

Defined in: [models/wallet-message/wallet-response/wallet-response-template.ts:4](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response-template.ts#L4)

###### Inherited from

[`WalletResponseTemplateSuccess`](#walletresponsetemplatesuccess).[`result`](#result-4)

***

### SignDataRpcRequest

Defined in: [models/app-message/request/sign-data-rpc-request.ts:8](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/sign-data-rpc-request.ts#L8)

RPC request to sign arbitrary application data and return a wallet-provided
signature.

`params[0]` is a JSON-stringified [SignDataPayload](#signdatapayload) — one of three
discriminated shapes (`text`, `binary`, `cell`).

#### Properties

##### id

> **id**: `string`

Defined in: [models/app-message/request/sign-data-rpc-request.ts:14](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/sign-data-rpc-request.ts#L14)

dApp-assigned request id; used to match the wallet response

##### method

> **method**: `"signData"`

Defined in: [models/app-message/request/sign-data-rpc-request.ts:10](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/sign-data-rpc-request.ts#L10)

method discriminator

##### params

> **params**: \[`string`\]

Defined in: [models/app-message/request/sign-data-rpc-request.ts:12](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/sign-data-rpc-request.ts#L12)

single-element tuple: the JSON-stringified sign-data payload

***

### SignDataRpcResponseError

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:38](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L38)

#### Extends

- [`WalletResponseTemplateError`](#walletresponsetemplateerror)

#### Properties

##### error

> **error**: `object`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:39](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L39)

###### code

> **code**: [`SIGN_DATA_ERROR_CODES`](#sign_data_error_codes)

###### message

> **message**: `string`

###### Overrides

[`WalletResponseTemplateError`](#walletresponsetemplateerror).[`error`](#error-4)

##### id

> **id**: `string`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:40](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L40)

###### Overrides

[`WalletResponseTemplateError`](#walletresponsetemplateerror).[`id`](#id-15)

***

### SignDataRpcResponseSuccess

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:6](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L6)

#### Properties

##### id

> **id**: `string`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:14](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L14)

##### result

> **result**: `object`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:7](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L7)

###### address

> **address**: `string`

###### domain

> **domain**: `string`

###### payload

> **payload**: [`SignDataPayload`](#signdatapayload)

###### signature

> **signature**: `string`

###### timestamp

> **timestamp**: `number`

***

### SignMessageRpcRequest

Defined in: [models/app-message/request/sign-message-rpc-request.ts:1](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/sign-message-rpc-request.ts#L1)

#### Properties

##### id

> **id**: `string`

Defined in: [models/app-message/request/sign-message-rpc-request.ts:4](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/sign-message-rpc-request.ts#L4)

##### method

> **method**: `"signMessage"`

Defined in: [models/app-message/request/sign-message-rpc-request.ts:2](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/sign-message-rpc-request.ts#L2)

##### params

> **params**: \[`string`\]

Defined in: [models/app-message/request/sign-message-rpc-request.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/sign-message-rpc-request.ts#L3)

***

### SignMessageRpcResponseError

Defined in: [models/wallet-message/wallet-response/sign-message-rpc-response.ts:15](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-message-rpc-response.ts#L15)

#### Extends

- [`WalletResponseTemplateError`](#walletresponsetemplateerror)

#### Properties

##### error

> **error**: `object`

Defined in: [models/wallet-message/wallet-response/sign-message-rpc-response.ts:16](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-message-rpc-response.ts#L16)

###### code

> **code**: [`SIGN_MESSAGE_ERROR_CODES`](#sign_message_error_codes)

###### data?

> `optional` **data**: `unknown`

###### message

> **message**: `string`

###### Overrides

[`WalletResponseTemplateError`](#walletresponsetemplateerror).[`error`](#error-4)

##### id

> **id**: `string`

Defined in: [models/wallet-message/wallet-response/sign-message-rpc-response.ts:17](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-message-rpc-response.ts#L17)

###### Overrides

[`WalletResponseTemplateError`](#walletresponsetemplateerror).[`id`](#id-15)

***

### SignMessageRpcResponseSuccess

Defined in: [models/wallet-message/wallet-response/sign-message-rpc-response.ts:5](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-message-rpc-response.ts#L5)

#### Properties

##### id

> **id**: `string`

Defined in: [models/wallet-message/wallet-response/sign-message-rpc-response.ts:12](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-message-rpc-response.ts#L12)

##### result

> **result**: `object`

Defined in: [models/wallet-message/wallet-response/sign-message-rpc-response.ts:6](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-message-rpc-response.ts#L6)

###### internalBoc

> **internalBoc**: `string`

Signed internal message BoC (base64).

***

### TonAddressItem

Defined in: [models/app-message/connect-request/connect-item.ts:5](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/connect-request/connect-item.ts#L5)

#### Properties

##### name

> **name**: `"ton_addr"`

Defined in: [models/app-message/connect-request/connect-item.ts:6](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/connect-request/connect-item.ts#L6)

##### network?

> `optional` **network**: `string`

Defined in: [models/app-message/connect-request/connect-item.ts:10](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/connect-request/connect-item.ts#L10)

Desired network global_id. If provided, wallet should connect on this network.

***

### TonAddressItemReply

Defined in: [models/wallet-message/wallet-event/connect-event.ts:44](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L44)

#### Properties

##### address

> **address**: `string`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:46](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L46)

##### name

> **name**: `"ton_addr"`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:45](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L45)

##### network

> **network**: `string`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:47](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L47)

##### publicKey

> **publicKey**: `string`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:49](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L49)

##### walletStateInit

> **walletStateInit**: `string`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:48](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L48)

***

### TonProofItem

Defined in: [models/app-message/connect-request/connect-item.ts:13](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/connect-request/connect-item.ts#L13)

#### Properties

##### name

> **name**: `"ton_proof"`

Defined in: [models/app-message/connect-request/connect-item.ts:14](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/connect-request/connect-item.ts#L14)

##### payload

> **payload**: `string`

Defined in: [models/app-message/connect-request/connect-item.ts:15](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/connect-request/connect-item.ts#L15)

***

### TonProofItemReplySuccess

Defined in: [models/wallet-message/wallet-event/connect-event.ts:54](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L54)

#### Properties

##### name

> **name**: `"ton_proof"`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:55](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L55)

##### proof

> **proof**: `object`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:56](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L56)

###### domain

> **domain**: `object`

###### domain.lengthBytes

> **lengthBytes**: `number`

###### domain.value

> **value**: `string`

###### payload

> **payload**: `string`

###### signature

> **signature**: `string`

###### timestamp

> **timestamp**: `number`

***

### WalletResponseTemplateError

Defined in: [models/wallet-message/wallet-response/wallet-response-template.ts:8](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response-template.ts#L8)

#### Extended by

- [`SendTransactionRpcResponseError`](#sendtransactionrpcresponseerror)
- [`SignDataRpcResponseError`](#signdatarpcresponseerror)
- [`DisconnectRpcResponseError`](#disconnectrpcresponseerror)
- [`SignMessageRpcResponseError`](#signmessagerpcresponseerror)

#### Properties

##### error

> **error**: `object`

Defined in: [models/wallet-message/wallet-response/wallet-response-template.ts:9](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response-template.ts#L9)

###### code

> **code**: `number`

###### data?

> `optional` **data**: `unknown`

###### message

> **message**: `string`

##### id

> **id**: `string`

Defined in: [models/wallet-message/wallet-response/wallet-response-template.ts:10](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response-template.ts#L10)

***

### WalletResponseTemplateSuccess

Defined in: [models/wallet-message/wallet-response/wallet-response-template.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response-template.ts#L3)

#### Extended by

- [`SendTransactionRpcResponseSuccess`](#sendtransactionrpcresponsesuccess)

#### Properties

##### id

> **id**: `string`

Defined in: [models/wallet-message/wallet-response/wallet-response-template.ts:5](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response-template.ts#L5)

##### result

> **result**: `string`

Defined in: [models/wallet-message/wallet-response/wallet-response-template.ts:4](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response-template.ts#L4)

***

### WireJettonItem

Defined in: [models/embedded-request.ts:141](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L141)

Structured item: jetton (TEP-74) transfer.

#### Properties

##### aa?

> `optional` **aa**: `string`

Defined in: [models/embedded-request.ts:151](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L151)

TON to attach for fees (wallet estimates if omitted)

##### am

> **am**: `string`

Defined in: [models/embedded-request.ts:149](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L149)

jetton amount in elementary units

##### cp?

> `optional` **cp**: `string`

Defined in: [models/embedded-request.ts:155](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L155)

optional custom_payload cell BoC, base64

##### d

> **d**: `string`

Defined in: [models/embedded-request.ts:147](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L147)

jetton recipient address

##### fa?

> `optional` **fa**: `string`

Defined in: [models/embedded-request.ts:157](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L157)

forward_ton_amount in nanocoins

##### fp?

> `optional` **fp**: `string`

Defined in: [models/embedded-request.ts:159](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L159)

optional forward_payload cell BoC, base64

##### ma

> **ma**: `string`

Defined in: [models/embedded-request.ts:145](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L145)

jetton master contract address

##### qi?

> `optional` **qi**: `string`

Defined in: [models/embedded-request.ts:161](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L161)

optional query_id

##### rd?

> `optional` **rd**: `string`

Defined in: [models/embedded-request.ts:153](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L153)

where to send excess TON (defaults to sender)

##### t

> **t**: `"jetton"`

Defined in: [models/embedded-request.ts:143](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L143)

item type discriminator

***

### WireMessage

Defined in: [models/embedded-request.ts:105](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L105)

Wire form of a raw transaction message (non-structured — the caller is
responsible for the BoC). Counterpart of the standard `SendTransaction`
`messages[]` element.

#### Properties

##### a

> **a**: `string`

Defined in: [models/embedded-request.ts:107](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L107)

destination address

##### am

> **am**: `string`

Defined in: [models/embedded-request.ts:109](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L109)

amount in nanocoins (decimal string)

##### ec?

> `optional` **ec**: `object`

Defined in: [models/embedded-request.ts:115](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L115)

extra currencies map

###### Index Signature

\[`k`: `number`\]: `string`

##### p?

> `optional` **p**: `string`

Defined in: [models/embedded-request.ts:111](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L111)

optional one-cell BoC body, base64

##### si?

> `optional` **si**: `string`

Defined in: [models/embedded-request.ts:113](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L113)

optional state init, base64

***

### WireNftItem

Defined in: [models/embedded-request.ts:165](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L165)

Structured item: NFT (TEP-62) transfer.

#### Properties

##### aa?

> `optional` **aa**: `string`

Defined in: [models/embedded-request.ts:173](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L173)

TON to attach for fees

##### cp?

> `optional` **cp**: `string`

Defined in: [models/embedded-request.ts:177](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L177)

optional custom_payload cell BoC, base64

##### fa?

> `optional` **fa**: `string`

Defined in: [models/embedded-request.ts:179](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L179)

forward_ton_amount in nanocoins

##### fp?

> `optional` **fp**: `string`

Defined in: [models/embedded-request.ts:181](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L181)

optional forward_payload cell BoC, base64

##### na

> **na**: `string`

Defined in: [models/embedded-request.ts:169](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L169)

NFT item contract address

##### no

> **no**: `string`

Defined in: [models/embedded-request.ts:171](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L171)

new owner address

##### qi?

> `optional` **qi**: `string`

Defined in: [models/embedded-request.ts:183](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L183)

optional query_id

##### rd?

> `optional` **rd**: `string`

Defined in: [models/embedded-request.ts:175](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L175)

where to send excess TON (defaults to sender)

##### t

> **t**: `"nft"`

Defined in: [models/embedded-request.ts:167](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L167)

item type discriminator

***

### WireSendTransaction

Defined in: [models/embedded-request.ts:27](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L27)

Compact wire form of `AppRequest<'sendTransaction'>`.
The payload carries EITHER `ms` (raw messages) OR `i` (structured items),
never both.

#### Properties

##### f?

> `optional` **f**: `string`

Defined in: [models/embedded-request.ts:31](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L31)

from — sender address (optional; defaults to connected account)

##### i?

> `optional` **i**: [`WireItem`](#wireitem)[]

Defined in: [models/embedded-request.ts:39](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L39)

structured items (mutually exclusive with `ms`)

##### m

> **m**: `"st"`

Defined in: [models/embedded-request.ts:29](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L29)

method discriminator: `sendTransaction`

##### ms?

> `optional` **ms**: [`WireMessage`](#wiremessage)[]

Defined in: [models/embedded-request.ts:37](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L37)

raw messages (mutually exclusive with `i`)

##### n?

> `optional` **n**: `string`

Defined in: [models/embedded-request.ts:33](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L33)

network — TON chain id (e.g. `"-239"` for mainnet)

##### vu?

> `optional` **vu**: `number`

Defined in: [models/embedded-request.ts:35](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L35)

valid_until — unix epoch seconds

***

### WireSignDataBinary

Defined in: [models/embedded-request.ts:83](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L83)

Sign-data payload: arbitrary binary blob, base64-encoded.

#### Properties

##### b

> **b**: `string`

Defined in: [models/embedded-request.ts:87](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L87)

base64-encoded bytes

##### t

> **t**: `"binary"`

Defined in: [models/embedded-request.ts:85](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L85)

payload type discriminator

***

### WireSignDataCell

Defined in: [models/embedded-request.ts:91](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L91)

Sign-data payload: a TVM cell with a TL-B schema.

#### Properties

##### c

> **c**: `string`

Defined in: [models/embedded-request.ts:97](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L97)

base64-encoded cell BoC

##### s

> **s**: `string`

Defined in: [models/embedded-request.ts:95](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L95)

TL-B schema describing the cell layout

##### t

> **t**: `"cell"`

Defined in: [models/embedded-request.ts:93](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L93)

payload type discriminator

***

### WireSignDataText

Defined in: [models/embedded-request.ts:75](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L75)

Sign-data payload: plain UTF-8 text.

#### Properties

##### t

> **t**: `"text"`

Defined in: [models/embedded-request.ts:77](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L77)

payload type discriminator

##### tx

> **tx**: `string`

Defined in: [models/embedded-request.ts:79](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L79)

text to sign

***

### WireSignMessage

Defined in: [models/embedded-request.ts:46](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L46)

Compact wire form of `AppRequest<'signMessage'>`.
Same shape as [WireSendTransaction](#wiresendtransaction); only the method discriminator differs.

#### Properties

##### f?

> `optional` **f**: `string`

Defined in: [models/embedded-request.ts:50](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L50)

from — sender address

##### i?

> `optional` **i**: [`WireItem`](#wireitem)[]

Defined in: [models/embedded-request.ts:58](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L58)

structured items (mutually exclusive with `ms`)

##### m

> **m**: `"sm"`

Defined in: [models/embedded-request.ts:48](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L48)

method discriminator: `signMessage`

##### ms?

> `optional` **ms**: [`WireMessage`](#wiremessage)[]

Defined in: [models/embedded-request.ts:56](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L56)

raw messages (mutually exclusive with `i`)

##### n?

> `optional` **n**: `string`

Defined in: [models/embedded-request.ts:52](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L52)

network — TON chain id

##### vu?

> `optional` **vu**: `number`

Defined in: [models/embedded-request.ts:54](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L54)

valid_until — unix epoch seconds

***

### WireTonItem

Defined in: [models/embedded-request.ts:125](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L125)

Structured item: native TON transfer.

#### Properties

##### a

> **a**: `string`

Defined in: [models/embedded-request.ts:129](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L129)

destination address

##### am

> **am**: `string`

Defined in: [models/embedded-request.ts:131](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L131)

amount in nanocoins (decimal string)

##### ec?

> `optional` **ec**: `object`

Defined in: [models/embedded-request.ts:137](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L137)

extra currencies map

###### Index Signature

\[`k`: `number`\]: `string`

##### p?

> `optional` **p**: `string`

Defined in: [models/embedded-request.ts:133](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L133)

optional one-cell BoC body, base64

##### si?

> `optional` **si**: `string`

Defined in: [models/embedded-request.ts:135](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L135)

optional state init, base64

##### t

> **t**: `"ton"`

Defined in: [models/embedded-request.ts:127](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L127)

item type discriminator

## Type Aliases

### AppMessage

> **AppMessage** = [`ConnectRequest`](#connectrequest) \| [`AppRequest`](#apprequest)\<keyof [`RpcRequests`](#rpcrequests)\>

Defined in: [models/app-message/app-message.ts:4](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/app-message.ts#L4)

***

### AppRequest\<T\>

> **AppRequest**\<`T`\> = [`RpcRequests`](#rpcrequests)\[`T`\]

Defined in: [models/app-message/request/app-request.ts:14](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/app-request.ts#L14)

#### Type Parameters

##### T

`T` *extends* [`RpcMethod`](#rpcmethod)

***

### ChainId

> **ChainId** = [`CHAIN`](#chain) \| `string`

Defined in: [models/CHAIN.ts:7](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/CHAIN.ts#L7)

***

### ConnectEvent

> **ConnectEvent** = [`ConnectEventSuccess`](#connecteventsuccess) \| [`ConnectEventError`](#connecteventerror)

Defined in: [models/wallet-message/wallet-event/connect-event.ts:6](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L6)

***

### ConnectItem

> **ConnectItem** = [`TonAddressItem`](#tonaddressitem) \| [`TonProofItem`](#tonproofitem)

Defined in: [models/app-message/connect-request/connect-item.ts:1](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/connect-request/connect-item.ts#L1)

***

### ConnectItemReply

> **ConnectItemReply** = [`TonAddressItemReply`](#tonaddressitemreply) \| [`TonProofItemReply`](#tonproofitemreply)

Defined in: [models/wallet-message/wallet-event/connect-event.ts:42](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L42)

***

### ConnectItemReplyError\<T\>

> **ConnectItemReplyError**\<`T`\> = `object`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:74](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L74)

#### Type Parameters

##### T

`T`

#### Properties

##### error

> **error**: `object`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:76](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L76)

###### code

> **code**: [`CONNECT_ITEM_ERROR_CODES`](#connect_item_error_codes)

###### message?

> `optional` **message**: `string`

##### name

> **name**: `T`

Defined in: [models/wallet-message/wallet-event/connect-event.ts:75](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L75)

***

### decode()

> **decode** = (`value`, `urlSafe`) => `object`

Defined in: [utils/base64.ts:36](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/utils/base64.ts#L36)

#### Parameters

##### value

`string`

##### urlSafe

`boolean` = `false`

#### Returns

`object`

##### toObject()

> **toObject**\<`T`\>(): `null` \| `T`

###### Type Parameters

###### T

`T`

###### Returns

`null` \| `T`

##### toString()

> **toString**(): `string`

###### Returns

`string`

##### toUint8Array()

> **toUint8Array**(): `Uint8Array`

###### Returns

`Uint8Array`

***

### DisconnectRpcResponse

> **DisconnectRpcResponse** = [`DisconnectRpcResponseSuccess`](#disconnectrpcresponsesuccess) \| [`DisconnectRpcResponseError`](#disconnectrpcresponseerror)

Defined in: [models/wallet-message/wallet-response/disconnect-rpc-response.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/disconnect-rpc-response.ts#L3)

***

### EmbeddedRequestFeature

> **EmbeddedRequestFeature** = `object`

Defined in: [models/feature.ts:32](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L32)

#### Properties

##### name

> **name**: `"EmbeddedRequest"`

Defined in: [models/feature.ts:32](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L32)

***

### encode()

> **encode** = (`value`, `urlSafe`) => `string`

Defined in: [utils/base64.ts:20](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/utils/base64.ts#L20)

#### Parameters

##### value

`string` | `object` | `Uint8Array`\<`ArrayBufferLike`\>

##### urlSafe

`boolean` = `false`

#### Returns

`string`

***

### Feature

> **Feature** = [`SendTransactionFeatureDeprecated`](#sendtransactionfeaturedeprecated) \| [`SendTransactionFeature`](#sendtransactionfeature) \| [`SignDataFeature`](#signdatafeature) \| [`SignMessageFeature`](#signmessagefeature) \| [`EmbeddedRequestFeature`](#embeddedrequestfeature)

Defined in: [models/feature.ts:1](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L1)

***

### FeatureName

> **FeatureName** = `Exclude`\<[`Feature`](#feature), `"SendTransaction"`\>\[`"name"`\]

Defined in: [models/feature.ts:8](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L8)

***

### RpcMethod

> **RpcMethod** = `"disconnect"` \| `"sendTransaction"` \| `"signData"` \| `"signMessage"`

Defined in: [models/rpc-method.ts:1](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/rpc-method.ts#L1)

***

### RpcRequests

> **RpcRequests** = `object`

Defined in: [models/app-message/request/app-request.ts:7](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/app-request.ts#L7)

#### Properties

##### disconnect

> **disconnect**: [`DisconnectRpcRequest`](#disconnectrpcrequest)

Defined in: [models/app-message/request/app-request.ts:11](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/app-request.ts#L11)

##### sendTransaction

> **sendTransaction**: [`SendTransactionRpcRequest`](#sendtransactionrpcrequest)

Defined in: [models/app-message/request/app-request.ts:8](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/app-request.ts#L8)

##### signData

> **signData**: [`SignDataRpcRequest`](#signdatarpcrequest)

Defined in: [models/app-message/request/app-request.ts:9](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/app-request.ts#L9)

##### signMessage

> **signMessage**: [`SignMessageRpcRequest`](#signmessagerpcrequest)

Defined in: [models/app-message/request/app-request.ts:10](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/app-message/request/app-request.ts#L10)

***

### RpcResponses

> **RpcResponses** = `object`

Defined in: [models/wallet-message/wallet-response/wallet-response.ts:16](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response.ts#L16)

#### Properties

##### disconnect

> **disconnect**: `object`

Defined in: [models/wallet-message/wallet-response/wallet-response.ts:32](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response.ts#L32)

###### error

> **error**: [`DisconnectRpcResponseError`](#disconnectrpcresponseerror)

###### success

> **success**: [`DisconnectRpcResponseSuccess`](#disconnectrpcresponsesuccess)

##### sendTransaction

> **sendTransaction**: `object`

Defined in: [models/wallet-message/wallet-response/wallet-response.ts:17](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response.ts#L17)

###### error

> **error**: [`SendTransactionRpcResponseError`](#sendtransactionrpcresponseerror)

###### success

> **success**: [`SendTransactionRpcResponseSuccess`](#sendtransactionrpcresponsesuccess)

##### signData

> **signData**: `object`

Defined in: [models/wallet-message/wallet-response/wallet-response.ts:22](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response.ts#L22)

###### error

> **error**: [`SignDataRpcResponseError`](#signdatarpcresponseerror)

###### success

> **success**: [`SignDataRpcResponseSuccess`](#signdatarpcresponsesuccess)

##### signMessage

> **signMessage**: `object`

Defined in: [models/wallet-message/wallet-response/wallet-response.ts:27](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response.ts#L27)

###### error

> **error**: [`SignMessageRpcResponseError`](#signmessagerpcresponseerror)

###### success

> **success**: [`SignMessageRpcResponseSuccess`](#signmessagerpcresponsesuccess)

***

### RpcStructuredItem

> **RpcStructuredItem** = [`RpcTonItem`](#rpctonitem) \| [`RpcJettonItem`](#rpcjettonitem) \| [`RpcNftItem`](#rpcnftitem)

Defined in: [models/structured-item.ts:43](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/structured-item.ts#L43)

***

### SendTransactionFeature

> **SendTransactionFeature** = `object`

Defined in: [models/feature.ts:14](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L14)

#### Properties

##### extraCurrencySupported?

> `optional` **extraCurrencySupported**: `boolean`

Defined in: [models/feature.ts:17](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L17)

##### itemTypes?

> `optional` **itemTypes**: [`StructuredItemType`](#structureditemtype)[]

Defined in: [models/feature.ts:18](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L18)

##### maxMessages

> **maxMessages**: `number`

Defined in: [models/feature.ts:16](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L16)

##### name

> **name**: `"SendTransaction"`

Defined in: [models/feature.ts:15](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L15)

***

### SendTransactionFeatureDeprecated

> **SendTransactionFeatureDeprecated** = `"SendTransaction"`

Defined in: [models/feature.ts:10](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L10)

***

### SendTransactionRpcResponse

> **SendTransactionRpcResponse** = [`SendTransactionRpcResponseSuccess`](#sendtransactionrpcresponsesuccess) \| [`SendTransactionRpcResponseError`](#sendtransactionrpcresponseerror)

Defined in: [models/wallet-message/wallet-response/send-transaction-rpc-response.ts:6](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/send-transaction-rpc-response.ts#L6)

***

### SignDataFeature

> **SignDataFeature** = `object`

Defined in: [models/feature.ts:23](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L23)

#### Properties

##### name

> **name**: `"SignData"`

Defined in: [models/feature.ts:23](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L23)

##### types

> **types**: [`SignDataType`](#signdatatype)[]

Defined in: [models/feature.ts:23](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L23)

***

### SignDataPayload

> **SignDataPayload** = `object` & [`SignDataPayloadText`](#signdatapayloadtext) \| [`SignDataPayloadBinary`](#signdatapayloadbinary) \| [`SignDataPayloadCell`](#signdatapayloadcell)

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:17](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L17)

#### Type declaration

##### from?

> `optional` **from**: `string`

##### network?

> `optional` **network**: [`ChainId`](#chainid)

***

### SignDataPayloadBinary

> **SignDataPayloadBinary** = `object`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:27](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L27)

#### Properties

##### bytes

> **bytes**: `string`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:29](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L29)

##### type

> **type**: `"binary"`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:28](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L28)

***

### SignDataPayloadCell

> **SignDataPayloadCell** = `object`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:32](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L32)

#### Properties

##### cell

> **cell**: `string`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:35](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L35)

##### schema

> **schema**: `string`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:34](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L34)

##### type

> **type**: `"cell"`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:33](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L33)

***

### SignDataPayloadText

> **SignDataPayloadText** = `object`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:22](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L22)

#### Properties

##### text

> **text**: `string`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:24](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L24)

##### type

> **type**: `"text"`

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:23](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L23)

***

### SignDataRpcResponse

> **SignDataRpcResponse** = [`SignDataRpcResponseSuccess`](#signdatarpcresponsesuccess) \| [`SignDataRpcResponseError`](#signdatarpcresponseerror)

Defined in: [models/wallet-message/wallet-response/sign-data-rpc-response.ts:4](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-data-rpc-response.ts#L4)

***

### SignDataType

> **SignDataType** = `"text"` \| `"binary"` \| `"cell"`

Defined in: [models/feature.ts:21](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L21)

***

### SignMessageFeature

> **SignMessageFeature** = `object`

Defined in: [models/feature.ts:25](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L25)

#### Properties

##### extraCurrencySupported?

> `optional` **extraCurrencySupported**: `boolean`

Defined in: [models/feature.ts:28](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L28)

##### itemTypes?

> `optional` **itemTypes**: [`StructuredItemType`](#structureditemtype)[]

Defined in: [models/feature.ts:29](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L29)

##### maxMessages

> **maxMessages**: `number`

Defined in: [models/feature.ts:27](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L27)

##### name

> **name**: `"SignMessage"`

Defined in: [models/feature.ts:26](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L26)

***

### SignMessageRpcResponse

> **SignMessageRpcResponse** = [`SignMessageRpcResponseSuccess`](#signmessagerpcresponsesuccess) \| [`SignMessageRpcResponseError`](#signmessagerpcresponseerror)

Defined in: [models/wallet-message/wallet-response/sign-message-rpc-response.ts:3](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/sign-message-rpc-response.ts#L3)

***

### StructuredItemType

> **StructuredItemType** = `"ton"` \| `"jetton"` \| `"nft"`

Defined in: [models/feature.ts:12](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/feature.ts#L12)

***

### TonProofItemReply

> **TonProofItemReply** = [`TonProofItemReplySuccess`](#tonproofitemreplysuccess) \| [`TonProofItemReplyError`](#tonproofitemreplyerror)

Defined in: [models/wallet-message/wallet-event/connect-event.ts:52](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L52)

***

### TonProofItemReplyError

> **TonProofItemReplyError** = [`ConnectItemReplyError`](#connectitemreplyerror)\<[`TonProofItemReplySuccess`](#tonproofitemreplysuccess)\[`"name"`\]\>

Defined in: [models/wallet-message/wallet-event/connect-event.ts:67](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/connect-event.ts#L67)

***

### WalletEvent

> **WalletEvent** = [`ConnectEvent`](#connectevent) \| [`DisconnectEvent`](#disconnectevent)

Defined in: [models/wallet-message/wallet-event/wallet-event.ts:4](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-event/wallet-event.ts#L4)

***

### WalletMessage

> **WalletMessage** = [`WalletEvent`](#walletevent) \| [`WalletResponse`](#walletresponse)\<[`RpcMethod`](#rpcmethod)\>

Defined in: [models/wallet-message/wallet-message.ts:5](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-message.ts#L5)

***

### WalletResponse\<T\>

> **WalletResponse**\<`T`\> = [`WalletResponseSuccess`](#walletresponsesuccess)\<`T`\> \| [`WalletResponseError`](#walletresponseerror)\<`T`\>

Defined in: [models/wallet-message/wallet-response/wallet-response.ts:42](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response.ts#L42)

#### Type Parameters

##### T

`T` *extends* [`RpcMethod`](#rpcmethod)

***

### WalletResponseError\<T\>

> **WalletResponseError**\<`T`\> = [`RpcResponses`](#rpcresponses)\[`T`\]\[`"error"`\]

Defined in: [models/wallet-message/wallet-response/wallet-response.ts:40](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response.ts#L40)

#### Type Parameters

##### T

`T` *extends* [`RpcMethod`](#rpcmethod)

***

### WalletResponseSuccess\<T\>

> **WalletResponseSuccess**\<`T`\> = [`RpcResponses`](#rpcresponses)\[`T`\]\[`"success"`\]

Defined in: [models/wallet-message/wallet-response/wallet-response.ts:38](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response.ts#L38)

#### Type Parameters

##### T

`T` *extends* [`RpcMethod`](#rpcmethod)

***

### WalletResponseTemplate

> **WalletResponseTemplate** = [`WalletResponseTemplateSuccess`](#walletresponsetemplatesuccess) \| [`WalletResponseTemplateError`](#walletresponsetemplateerror)

Defined in: [models/wallet-message/wallet-response/wallet-response-template.ts:1](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/wallet-message/wallet-response/wallet-response-template.ts#L1)

***

### WireEmbeddedRequest

> **WireEmbeddedRequest** = [`WireSendTransaction`](#wiresendtransaction) \| [`WireSignMessage`](#wiresignmessage) \| [`WireSignData`](#wiresigndata)

Defined in: [models/embedded-request.ts:20](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L20)

Top-level wire shape of an embedded app-request. Discriminated on `m` (method).
One of:
 - [WireSendTransaction](#wiresendtransaction) (`m: 'st'`)
 - [WireSignMessage](#wiresignmessage)     (`m: 'sm'`)
 - [WireSignData](#wiresigndata)        (`m: 'sd'`)

***

### WireItem

> **WireItem** = [`WireTonItem`](#wiretonitem) \| [`WireJettonItem`](#wirejettonitem) \| [`WireNftItem`](#wirenftitem)

Defined in: [models/embedded-request.ts:122](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L122)

Wire form of a single structured item. Discriminated on `t`.
Counterpart of the user-facing `StructuredItem` (SDK).

***

### WireSignData

> **WireSignData** = `object` & [`WireSignDataText`](#wiresigndatatext) \| [`WireSignDataBinary`](#wiresigndatabinary) \| [`WireSignDataCell`](#wiresigndatacell)

Defined in: [models/embedded-request.ts:65](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L65)

Compact wire form of `AppRequest<'signData'>`.
Discriminated on `t` (payload type): `text` | `binary` | `cell`.

#### Type declaration

##### f?

> `optional` **f**: `string`

from — sender address

##### m

> **m**: `"sd"`

method discriminator: `signData`

##### n?

> `optional` **n**: `string`

network — TON chain id

## Variables

### Base64

> `const` **Base64**: `object`

Defined in: [utils/base64.ts:63](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/utils/base64.ts#L63)

#### Type declaration

##### decode()

> **decode**: (`value`, `urlSafe`) => `object`

###### Parameters

###### value

`string`

###### urlSafe

`boolean` = `false`

###### Returns

`object`

###### toObject()

> **toObject**\<`T`\>(): `null` \| `T`

###### Type Parameters

###### T

`T`

###### Returns

`null` \| `T`

###### toString()

> **toString**(): `string`

###### Returns

`string`

###### toUint8Array()

> **toUint8Array**(): `Uint8Array`

###### Returns

`Uint8Array`

##### encode()

> **encode**: (`value`, `urlSafe`) => `string`

###### Parameters

###### value

`string` | `object` | `Uint8Array`\<`ArrayBufferLike`\>

###### urlSafe

`boolean` = `false`

###### Returns

`string`

## Functions

### concatUint8Arrays()

> **concatUint8Arrays**(`buffer1`, `buffer2`): `Uint8Array`

Defined in: [utils/binary.ts:1](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/utils/binary.ts#L1)

#### Parameters

##### buffer1

`Uint8Array`

##### buffer2

`Uint8Array`

#### Returns

`Uint8Array`

***

### decodeEmbeddedRequestParam()

> **decodeEmbeddedRequestParam**(`reqParam`): `Omit`\<[`AppRequest`](#apprequest)\<`"sendTransaction"` \| `"signMessage"` \| `"signData"`\>, `"id"`\>

Defined in: [models/embedded-request.ts:370](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L370)

Decode the `e` URL parameter and return `{ method, params: [string] }` —
the same shape as a bridge `AppRequest` (without `id`).

The `e` value is `base64url(JSON.stringify(WireEmbeddedRequest))`.

#### Parameters

##### reqParam

`string`

#### Returns

`Omit`\<[`AppRequest`](#apprequest)\<`"sendTransaction"` \| `"signMessage"` \| `"signData"`\>, `"id"`\>

***

### decodeWireEmbeddedRequest()

> **decodeWireEmbeddedRequest**(`wire`): `Omit`\<[`AppRequest`](#apprequest)\<`"sendTransaction"` \| `"signMessage"` \| `"signData"`\>, `"id"`\>

Defined in: [models/embedded-request.ts:342](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/models/embedded-request.ts#L342)

Decode a compact [WireEmbeddedRequest](#wireembeddedrequest) back to the standard JSON-RPC
`AppRequest`-shaped `{ method, params: [JSON-string] }`.

#### Parameters

##### wire

[`WireEmbeddedRequest`](#wireembeddedrequest)

#### Returns

`Omit`\<[`AppRequest`](#apprequest)\<`"sendTransaction"` \| `"signMessage"` \| `"signData"`\>, `"id"`\>

***

### hexToByteArray()

> **hexToByteArray**(`hexString`): `Uint8Array`

Defined in: [utils/binary.ts:25](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/utils/binary.ts#L25)

#### Parameters

##### hexString

`string`

#### Returns

`Uint8Array`

***

### isNode()

> **isNode**(): `boolean`

Defined in: [utils/web-api.ts:1](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/utils/web-api.ts#L1)

#### Returns

`boolean`

***

### splitToUint8Arrays()

> **splitToUint8Arrays**(`array`, `index`): \[`Uint8Array`\<`ArrayBufferLike`\>, `Uint8Array`\<`ArrayBufferLike`\>\]

Defined in: [utils/binary.ts:8](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/utils/binary.ts#L8)

#### Parameters

##### array

`Uint8Array`

##### index

`number`

#### Returns

\[`Uint8Array`\<`ArrayBufferLike`\>, `Uint8Array`\<`ArrayBufferLike`\>\]

***

### toHexString()

> **toHexString**(`byteArray`): `string`

Defined in: [utils/binary.ts:18](https://github.com/ArkadiyStena/sdk/blob/ccec7065d5771fe610a022fa6c79e4173cf44106/packages/protocol/src/utils/binary.ts#L18)

#### Parameters

##### byteArray

`Uint8Array`

#### Returns

`string`
