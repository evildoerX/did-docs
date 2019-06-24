(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{211:function(t,e,a){"use strict";a.r(e);var r=a(4),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_4-分布式身份标识符-dids"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-分布式身份标识符-dids","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 分布式身份标识符 (DIDs)")]),t._v(" "),a("p",[t._v("全球唯一的分布式身份标识符(decentralized identifier)的概念并不新鲜; 通用唯一标识符（UUID）最初是在20世纪80年代开发的，后来成为开放软件基金会分布式计算环境的标准功能 。通过使用生成具有足够熵的128位值的算法，UUID在没有集中式注册服务的情况下实现全局唯一性，以使碰撞的机会极小。UUID在"),a("router-link",{attrs:{to:"/dids/References.html#rfc4122"}},[t._v(" RFC4122 ")]),t._v(" 中正式指定为特定类型的统一资源名称（URN）。")],1),t._v(" "),a("p",[t._v("DID类似于UUID，除了：（a）像URL一样，它可以被解析或解引用到描述主体(subject)的标准资源（"),a("a",{attrs:{href:""}},[t._v("DID Document")]),t._v("- 参见章节"),a("a",{attrs:{href:""}},[t._v("§ 5。 DID文档")]),t._v(" ），以及（b）与URL不同，DID文档通常包含能够验证DID subject的加密材料。")]),t._v(" "),a("h2",{attrs:{id:"_4-1-通用did语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-通用did语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.1 通用DID语法")]),t._v(" "),a("p",[t._v("通用"),a("a",{attrs:{href:""}},[t._v(" DID scheme ")]),t._v("是符合"),a("router-link",{attrs:{to:"/dids/References.html#rfc3986"}},[t._v("RFC3986")]),t._v("的URI scheme。DID scheme专门仅scheme和权威部件(uthority components)而言与DID URI-path-abempty， query和fragment组件是相同的，都是"),a("router-link",{attrs:{to:"/dids/References.html#rfc3986"}},[t._v("RFC3986")]),t._v("定义的ABNF规则。")],1),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("术语DID仅指符合did下面ABNF中规则的URI 。DID始终标识DID subject。由did-url规则定义的术语DID URL是指URL以DID开头，后跟一个或多个附加组件的。DID URL始终标识要定位的资源。")])]),t._v(" "),a("p",[t._v("以下是使用"),a("a",{attrs:{href:""}},[t._v("RFC5234")]),t._v("中定义"),a("code",[t._v("ALPHA")]),t._v("和"),a("code",[t._v("DIGIT")]),t._v("的ABNF语法的规范 。此"),a("code",[t._v("ABNF")]),t._v("中未定义的所有其他规则名称在"),a("router-link",{attrs:{to:"/dids/References.html#rfc3986"}},[t._v("RFC3986")]),t._v("中定义。")],1),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("did                = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"did:"')]),t._v(" method-name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v(" method-specific-id\nmethod-name        = "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("*method-char\nmethod-char        = %x"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("61")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("-7")]),t._v("A / DIGIT\nmethod-specific-id = *idchar *( "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v(" *idchar )\nidchar             = ALPHA / DIGIT / "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v(" / "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),t._v(" / "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_"')]),t._v("\ndid-url            = did *( "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('";"')]),t._v(" param ) path-abempty "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"?"')]),t._v(" query "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#"')]),t._v(" fragment "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nparam              = param-name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"="')]),t._v(" param-value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nparam-name         = "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("*param-char\nparam-value        = *param-char\nparam-char         = ALPHA / DIGIT / "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v(" / "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),t._v(" / "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_"')]),t._v(" / "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v(" /\n                     pct-encoded\n")])])]),a("div",{staticClass:"danger custom-block"},[a("p",[t._v("语法目前允许一个为空method-specific-id，例如did:example:将是一个有效的DID，可以识别"),a("router-link",{attrs:{to:"/dids/Terminology.html#did-method"}},[t._v("DID method")]),t._v("本身")],1)]),t._v(" "),a("h2",{attrs:{id:"_4-2-特定的方法的语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-特定的方法的语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.2 特定的方法的语法")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/dids/Terminology.html#did-method"}},[t._v("DID method")]),t._v("规范必须通过定义自己的method-name和自己的method-specific-id语法来进一步限制泛型DID语法。见章节"),a("a",{attrs:{href:""}},[t._v("§ 7。 DID方法")]),t._v(" 。")],1),t._v(" "),a("h2",{attrs:{id:"_4-3-通用did参数名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-通用did参数名称","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.3 通用DID参数名称")]),t._v(" "),a("p",[t._v("DID URL语法支持基于矩阵参数语法（"),a("a",{attrs:{href:""}},[t._v("MATRIX-URIS")]),t._v("）的参数的简单通用格式。上面的ABNF没有指定任何参数名称（param-name规则）。")]),t._v(" "),a("p",[t._v("一些通用DID参数名称（例如，用于服务选择）完全独立于任何特定"),a("router-link",{attrs:{to:"/dids/Terminology.html#did-method"}},[t._v("DID method")]),t._v("，并且必须始终以相同方式对所有DIDs起作用。其他（例如，用于版本控制）可能由某些DID方法支持。但必须在那些支持它们的DID方法上统一运行")],1),t._v(" "),a("p",[t._v("第4.4节“特定方法的DID参数名称”("),a("a",{attrs:{href:""}},[t._v("§ 4.4 Method-Specific DID Parameter Names .")]),t._v(")中介绍了完全特定于方法的参数名称。")]),t._v(" "),a("p",[t._v("下表定义了一组通用DID参数名称:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"right"}},[t._v("通用DID参数名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"right"}},[a("code",[t._v("service")])]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("从DID Document中以service id标识服务")])])])]),t._v(" "),a("p",[t._v("DID决议(DID Resolution)中规范指定了这些参数的确切处理规则")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("请注意，可能有其他参数或选项不属于DID URL，而是传递给“out of band(带外)”的DID解析程序，例如：使用一个解决方案或一些其他机制。这些选项可以控制高速缓存或一个解决方案所需的格式。这类似于HTTP，其中缓存或结果格式以HTTP Header表达，而不是HTTP URL的一部分。重要的区别是DID参数(DID parameters)作为DID URL一部分的指定了正在识别的资源。然而 不属于DID URL的DID解析程序 控制如何取消引用该资源。")])]),t._v(" "),a("h2",{attrs:{id:"_4-4-特定方法的-did-参数名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-特定方法的-did-参数名称","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.4 特定方法的 DID 参数名称")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/dids/Terminology.html#did-method"}},[t._v("DID method")]),t._v("规范可以指定其他的method-specific参数名称。method-specific 的参数名称必须以"),a("code",[t._v("method-name")]),t._v("规则定义的方法名称作为前缀。")],1),t._v(" "),a("p",[t._v("例如，如果方法"),a("code",[t._v("did:foo:")]),t._v("定义了参数栏，则参数名必须是"),a("code",[t._v("foo:bar")]),t._v("。使用此方法和"),a("code",[t._v("method-specific")]),t._v("的参数的DID URL示例将是：")]),t._v(" "),a("p",[a("code",[t._v("did:foo:21tDAKCERh95uGgKbJNHYp;foo:bar=high")])]),t._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",[t._v("考虑使用"),a("code",[t._v("kebab-case")]),t._v("样式而不是冒号分隔符，例如"),a("code",[t._v("foo-bar")]),t._v("而不是"),a("code",[t._v("foo：bar")]),t._v("。")])]),t._v(" "),a("p",[t._v("由一个"),a("router-link",{attrs:{to:"/dids/Terminology.html#did-method"}},[t._v("DID method")]),t._v("定义的"),a("code",[t._v("method-specific")]),t._v("的参数名称可以由其他DID方法使用。例如：")],1),t._v(" "),a("p",[a("code",[t._v("did:example:21tDAKCERh95uGgKbJNHYp;foo:bar=low")])]),t._v(" "),a("p",[a("code",[t._v("Method-specific")]),t._v("的参数名称可以按任何顺序与通用参数名称组合。")]),t._v(" "),a("p",[a("code",[t._v("did:example:21tDAKCERh95uGgKbJNHYp;service=agent;foo:bar=high")])]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/dids/Terminology.html#did-method"}},[t._v("DID method")]),t._v(" namespaces和method-specific parameter namespaces都可以包括冒号，因此它们可以按照"),a("router-link",{attrs:{to:"/dids/Terminology.html#did-method"}},[t._v("DID method")]),t._v("规范的定义进行分层分区。这是一个示例DID URL，它说明了：")],1),t._v(" "),a("p",[a("code",[t._v("did:foo:baz:21tDAKCERh95uGgKbJNHYp;foo:baz:hex=b612")])]),t._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",[t._v("查看我们想要说明的一个方法定义的"),a("code",[t._v("method-specific")]),t._v("的参数，但在具有不同方法的DID URL中使用。还讨论DID参数名称中的分层方法的命名空间。")])]),t._v(" "),a("h2",{attrs:{id:"_4-5-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-path","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.5 Path")]),t._v(" "),a("p",[t._v("通用"),a("code",[t._v("DID path")]),t._v("与U"),a("code",[t._v("URI path")]),t._v("相同，并且必须符合"),a("router-link",{attrs:{to:"/dids/References.html#rfc3986"}},[t._v("RFC3986")]),t._v("中的"),a("code",[t._v("path-abempty````ABNF")]),t._v("规则。 "),a("code",[t._v("DID path")]),t._v("应该用于解决通过"),a("code",[t._v("DID service endpoint")]),t._v("可用的资源。请参见第5.6节"),a("a",{attrs:{href:""}},[t._v("Service Endpoints")]),t._v("。")],1),t._v(" "),a("p",[t._v("特定的"),a("code",[t._v("DID scheme")]),t._v("可以为"),a("code",[t._v("DID paths")]),t._v("指定"),a("code",[t._v("ABNF")]),t._v("规则，这些规则比本节中的通用规则更具限制性。")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("EXAMPLE 3")]),t._v(" "),a("p",[t._v("did:example:123456/path")])]),t._v(" "),a("h2",{attrs:{id:"_4-6-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-query","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.6 Query")]),t._v(" "),a("p",[t._v("通用"),a("code",[t._v("DID query")]),t._v("与"),a("code",[t._v("URI query")]),t._v("相同，并且必须符合"),a("router-link",{attrs:{to:"/dids/References.html#rfc3986"}},[t._v("RFC3986")]),t._v("中的"),a("code",[t._v("query")]),t._v("ABNF规则。"),a("code",[t._v("DID query")]),t._v("应该用于解决通过"),a("code",[t._v("DID service endpoint")]),t._v("可用的资源。请参见第5.6节"),a("a",{attrs:{href:""}},[t._v("Service Endpoints")]),t._v("。")],1),t._v(" "),a("p",[t._v("特定的"),a("code",[t._v("DID scheme")]),t._v("可以为"),a("code",[t._v("DID queries")]),t._v("指定ABNF规则，这些规则比本节中的通用规则更具限制性。")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("EXAMPLE 4")]),t._v(" "),a("p",[t._v("did:example:123456?query=true")])]),t._v(" "),a("h2",{attrs:{id:"_4-7-fragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-fragment","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.7 Fragment")]),t._v(" "),a("p",[t._v("通用"),a("code",[t._v("DID fragment")]),t._v("与"),a("code",[t._v("URI fragment")]),t._v("相同，必须符合"),a("router-link",{attrs:{to:"/dids/References.html#rfc3986"}},[t._v("RFC3986")]),t._v("中的片段ABNF规则。"),a("code",[t._v("DID fragment")]),t._v("必须仅用作"),a("code",[t._v("DID Document")]),t._v("中与方法无关的引用，以识别DID文档的组件（例如，唯一的密钥描述）。要解决此参考，包含"),a("code",[t._v("DID fragment")]),t._v("的完整"),a("code",[t._v("DID URL")]),t._v("必须用作DID Document对象中目标组件的键值。")],1),t._v(" "),a("p",[t._v("特定的"),a("code",[t._v("DID scheme")]),t._v("可以为"),a("code",[t._v("DID fragments")]),t._v("指定ABNF规则，这些规则比本节中的通用规则更具限制性。")]),t._v(" "),a("p",[t._v("我们希望我们启用包含"),a("code",[t._v("DID fragment")]),t._v("（直接在"),a("code",[t._v("DID document")]),t._v("中解析）的DIDs的"),a("code",[t._v("tree-based")]),t._v("的处理，以定位直接包含在"),a("code",[t._v("DID document")]),t._v("中的元数据。或目标URL提供的服务资源，而不需要依赖"),a("code",[t._v("graph-based")]),t._v("的处理。")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("EXAMPLE 5")]),t._v(" "),a("p",[t._v("did:example:123456#oidc")])]),t._v(" "),a("h2",{attrs:{id:"_4-8-normalization-正常化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-normalization-正常化","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.8 Normalization 正常化")]),t._v(" "),a("p",[t._v("对于最广泛的互操作性，DID规范化应该尽可能简单和通用。因此：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("did：scheme name")]),t._v("必须是小写的。")]),t._v(" "),a("li",[a("code",[t._v("method name")]),t._v(" 必须是小写的。")]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("第4.1节"),a("code",[t._v("Generic DID Syntax")]),t._v("(通用DID语法)")]),t._v(" 中的"),a("code",[t._v("method-specific-i")]),t._v("规则的区分大小写和规范化必须由管理"),a("router-link",{attrs:{to:"/dids/Terminology.html#did-method"}},[t._v("DID method")]),t._v("规范定义。")],1)]),t._v(" "),a("h2",{attrs:{id:"_4-9-persistence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-9-persistence","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.9 Persistence")]),t._v(" "),a("p",[t._v("DID必须是持久的和不可变的，即一次绑定到subject并永远不会改变（永远）。")]),t._v(" "),a("p",[t._v("理想情况下，DID将是一个完全抽象的分布式身份标识符（如UUID），可以随着时间的推移绑定到多个底层的"),a("code",[t._v("Decentralized Identifier Registries")]),t._v("，从而保持其持久性独立于任何特定系统。但是，在多个"),a("code",[t._v("Decentralized Identifier Registries")]),t._v("相同的标识符会 引入极其困难的实体和 "),a("code",[t._v("start-of-authority (权限启动)")]),t._v(" （SOA）问题。它还大大增加了开发人员的实现复杂性。")]),t._v(" "),a("p",[t._v("为了避免这些问题，建议"),a("code",[t._v("DID method")]),t._v("规范只产生绑定到强大的DID和"),a("code",[t._v("DID method")]),t._v("，稳定分散标识注册(Decentralized Identifier Registries )管理机构随着时间的推移，对DID和"),a("code",[t._v("DID method")]),t._v("的持久性做出最高水平的承诺。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("虽然未包含在此版本中，但此规范的未来版本可能支持DID Document  的 equivID属性，以在多个"),a("a",{attrs:{href:"https://w3c-ccg.github.io/did-spec/#dfn-dir",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Decentralized Identifier Registry -分布式身份标识符注册表"),a("OutboundLink")],1),t._v("上表示同一主题的DID之间建立可验证的等效关系。这种等价关系可以产生单个持久抽象DID的实际等价物。见未来工作（第§节） 11。 未来的工作 ）")])])])},[],!1,null,null,null);e.default=s.exports}}]);