# DID 程序设计
## 1. 依赖库
> 参考abt以及其他did methods的依赖库调研准备对应的加密算法的go依赖库
```json
1. crypto/rand  // 密码安全的伪随机数生成器
3. crypto/ecdsa // 使用 FIPS 186-3 中定义的椭圆曲线数字签名算法
4. crypto/elliptic // 椭圆包实现了在素数域上的几个标准椭圆曲线
5. golang.org/x/crypto/ed25519  //ed25519签名算法
6. github.com/btcsuite/btcutil/base58 
7. encoding/hex // 实现十六进制编码和解码
8. encoding/binary // 二进制编码和解码
9. golang.org/x/crypto/sha3 // sha3
10. github.com/mr-tron/base58 //base58编码
```

## 2. deeplink 设计
``` url
https://wallet.io/i?appPk=zBdZEnbDJTijVVCx4Nx68bzDPPMFwVizSRorvzSS3SGG2&appDid=did:idg:idgNK7PeUtemp5oAhJ4zNmGJ8rUoFnB1CtKfoU&action=requestAuth&url=https://example-application.io/auth/
```

### linkPath
1. link path是指上述url中的``https://wallet.io/i``
2. 应用域，允许应用自己申请配置。其作用：
- 未安装应用时使用第三方应用扫码或者点击url时引导到对应的应用安装界面
- 已安装时，使用应用进行扫码获取其后边的参数


### apppk

应用的publick key，使用base58编码

### appid
应用在中台的appid

### appDid
应用的DID

### action
告诉实体的下一步动作，目前的动作类型有：
requestAuth：请求验证
### url
传统URL，用于处理action的流程。

## 3. DID String (DIDs)
> DIDs Create分为两种方式在生成sercret key过程有不同
### 3.1 Create DIDs
#### 1. 生成sercret key
1. 直接选择一个
- 随机选择一个secret key（基于实体已有的）

2. 使用应用的pk创建(使用bip44来计算did)
- 使用sh3处理appdid
- 获取前64位hash
- 将64位hash 拆分为两个32的位s1，s2
- 使用 ``m/44'/ABT'/S1'/S2'/address_index`` 来生成 HD sercret key

#### 2. 选择DID type
选择``RoleType``,``KeyType``,``HashType``,DID是 DID string的二进制格式的前两位bytes
DID Type 由如下三部分组成：

1. RoleType：前6位bits
> 后期按需扩展

- account = 0
- node = 1
- device = 2
- application = 3
- smart_contract = 4
- bot = 5
- asset = 6
- stake = 7
- validator = 8
- group = 9
- any = 63

2. KeyType：中间5位bits
> 用于指定secret key 转换 public key 的 算法

- ED25519 = 0
- SECP256K1 = 1

3. Hash：最5位bits
> 用于计算公钥哈希的Hash函数

- keccak = 0
- sha3 = 1
- keccak_384 = 2
- sha3_384 = 3
- keccak_512 = 4
- sha3_512 = 5


例如：DID Type ：``0x0C01`` 可以做如下解析
```
+-------------+-----------+------------+
| 000011      | 00000     | 00001      |
+-------------+-----------+------------+
| application | ed25519   | sha3       |
+-------------+-----------+------------+
```

#### 3. 获得public key
使用KeyType对应的方式来讲secret key 转换为 publick key。

例如：``E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7``

#### 4. 获取public key 的Hash
``EC8E681514753FE5955D3E8B57DAEC9D123E3DB146BDDFC3787163F77F057C27``

#### 5. 获取public key hash 的前20 bytes
``EC8E681514753FE5955D3E8B57DAEC9D123E3DB1``

#### 6. 在5中获得hash前添加DID Type：``0x0C01 ``
``0C01EC8E681514753FE5955D3E8B57DAEC9D123E3DB1``

#### 7. 获取6中hash的扩展hash
``42CD815145538F8003586C880AF94418341F9C4B8FA0394876553F8A952C7D03``

#### 8. 取7中前4个bytes
``42CD8151``


#### 9. 生成二进制的 DID String
将8得到的4个bytes放到6中得到hash的后边。得到DID String的二进制格式
``0C01EC8E681514753FE5955D3E8B57DAEC9D123E3DB142CD8151``

#### 10. 加密二进制的DID String
使用 Base58 方法进行二进制的文件编码。完成之后再起前边添加``idg`` 得到DID String
``idgNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr``

#### 11 完整的DID String如下
did:idg:idgNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr

### 3.2 Request DID Authentication


### 3.3 Response DID Authentication

## 4. DID Document （DIDd）
### 4.1. 创建DIDd
创建DIDs成功之后创建与之对应的DIDd，基础的DIDd格式如下

```json
{
  "@context": "https://w3id.org/future-method/v1",
  "id": "did:example:123456789abcdefghi",
  "publicKey": [],
  "authentication": [],
  "service": []
}
```
### 4.2. Declare DIDd
创建完成之后会将DIDd 发布到链上


### 4.3 Read DIDd


### 4.4 Update DIDd
