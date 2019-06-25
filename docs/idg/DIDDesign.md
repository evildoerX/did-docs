# DID 程序设计
## 1. 依赖库
> 参考abt以及其他did methods的依赖库调研准备对应的加密算法的go依赖库

1. crypto/rand  // 密码安全的伪随机数生成器
2. crypto/sha256 // 实现 FIPS 180-4 中定义的 SHA224 和 SHA256 哈希算法。
3. crypto/ecdsa // 使用 FIPS 186-3 中定义的椭圆曲线数字签名算法
4. crypto/elliptic // 椭圆包实现了在素数域上的几个标准椭圆曲线
5. golang.org/x/crypto/ed25519  //ed25519签名算法
6. github.com/btcsuite/btcutil/base58 //base58编码
7. encoding/hex // 实现十六进制编码和解码

## 2. deeplink 设计
``` url
https://wallet.io/i?appPk=zBdZEnbDJTijVVCx4Nx68bzDPPMFwVizSRorvzSS3SGG2&appDid=did:abt:zNK7PeUtemp5oAhJ4zNmGJ8rUoFnB1CtKfoU&action=requestAuth&url=https://example-application.io/auth/
```
### linkPath
1. link path是指上述url中的``https://wallet.io/i``
2. 应用域，允许应用自己申请配置。其作用：
- 未安装应用时使用第三方应用扫码或者点击url时引导到对应的应用安装界面
- 已安装时，使用应用进行扫码