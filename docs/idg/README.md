# DID 设计
## 术语
### did
去中心化身份标识符
### did-url
基于去中心化身份标识符的去中心化资源标识
### did-appid
中台的App_id，以"|"分割，自定义字段
### did-service
中台service_key，以";"分割，自定义字段
### did-path
DID标准："/"分割
### did-query
DID标准："?"分割
### did-fragment 
DID标准："#" 分割， 

## DIDs
``` json
Idg-id = "did:idg:" idg-specific-idstring
idg-specific-idstring = idg-identifier ["|" did-appid][ ";" did-service ] [ "/" did-path ]
												[ "?" did-query ] [ "#" did-fragment ]
idg-identifier = 32(base58char)
base58char     = "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" / "A" / "B" / "C"
               / "D" / "E" / "F" / "G" / "H" / "J" / "K" / "L" / "M" / "N" / "P" / "Q"
               / "R" / "S" / "T" / "U" / "V" / "W" / "X" / "Y" / "Z" / "a" / "b" / "c"
               / "d" / "e" / "f" / "g" / "h" / "i" / "j" / "k" / "m" / "n" / "o" / "p"
               / "q" / "r" / "s" / "t" / "u" / "v" / "w" / "x" / "y" / "z"
```

## DID Document
```json
{
  "@context": "https://w3id.org/future-method/v1",
  "id": "did:idg:123456789abcdefghi",

  "publicKey": [{
    "id": "did:idg:123456789abcdefghi#keys-1",
    "type": "RsaVerificationKey2018",
    "controller": "did:idg:123456789abcdefghi",
    "publicKeyPem": "-----BEGIN PUBLIC KEY...END PUBLIC KEY-----\r\n"
  }, {
    "id": "did:idg:123456789abcdefghi#keys-3",
    "type": "Ieee2410VerificationKey2018",
    "controller": "did:example:123456789abcdefghi",
    "publicKeyPem": "-----BEGIN PUBLIC KEY...END PUBLIC KEY-----\r\n"
  }],

  "authentication": [
    // this mechanism can be used to authenticate as did:...fghi
    "did:idg:123456789abcdefghi#keys-1",
    // this mechanism can be used to biometrically authenticate as did:...fghi
    "did:idg:123456789abcdefghi#keys-3",
    // this mechanism is *only* authorized for authentication, it may not
    // be used for any other proof purpose, so its full description is
    // embedded here rather than using only a reference
    {
      "id": "did:idg:123456789abcdefghi#keys-2",
      "type": "Ed25519VerificationKey2018",
      "controller": "did:example:123456789abcdefghi",
      "publicKeyBase58": "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
    }
  ],

  "service": [{
    "id": "did:example:123456789abcdefghi#oidc",
    "type": "OpenIdConnectVersion1.0Service",
    "serviceEndpoint": "https://openid.example.com/"
  }, {
    "id": "did:example:123456789abcdefghi#vcStore",
    "type": "CredentialRepositoryService",
    "serviceEndpoint": "https://repository.example.com/service/8377464"
  }, {
    "id": "did:example:123456789abcdefghi#xdi？ddd=xxx",
    "type": "XdiService",
    "serviceEndpoint": "https://xdi.example.com/8377464"
  }, {
    "id": "did:example:123456789abcdefghi#hub",
    "type": "HubService",
    "serviceEndpoint": "https://hub.example.com/.identity/did:example:0123456789abcdef/"
  }, {
    "id": "did:example:123456789abcdefghi#messaging",
    "type": "MessagingService",
    "serviceEndpoint": "https://example.com/messages/8377464"
  }, {
    "type": "SocialWebInboxService",
    "id": "did:example:123456789abcdefghi#inbox",
    "serviceEndpoint": "https://social.example.com/83hfh37dj",
    "description": "My public social inbox",
    "spamCost": {
      "amount": "0.50",
      "currency": "USD"
    }
  }, {
    "type": "DidAuthPushModeVersion1",
    "id": "did:example:123456789abcdefghi#push",
    "serviceEndpoint": "http://auth.example.com/did:example:123456789abcdefghi"
  }, {
    "id": "did:example:123456789abcdefghi#bops",
    "type": "BopsService",
    "serviceEndpoint": "https://bops.example.com/enterprise/"
  }]
}
```