const { fs, path } = require("@vuepress/shared-utils");

module.exports = ctx => ({
  dest: "../../vuepress",
  lang: "en-US",
  title: "DIDs - Docs",
  description: "Vue-powered Static Site Generator",
  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  // theme: '@vuepress/vue',
  themeConfig: {
    repo: "vuejs/vuepress",
    editLinks: true,
    docsDir: "packages/docs/docs",
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    nav: require("./nav/en"),
    sidebar: {
      "/api/": getApiSidebar(),
      "/guide/": getGuideSidebar("指南", "深入"),
      "/plugin/": getPluginSidebar(
        "Plugin",
        "Introduction",
        "Official Plugins"
      ),
      "/theme/": getThemeSidebar("Theme", "Introduction")
    }
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ["@vuepress/medium-zoom", true],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-128189152-1"
      }
    ],
    [
      "container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>"
      }
    ],
    [
      "container",
      {
        type: "upgrade",
        before: info => `<UpgradePath title="${info}">`,
        after: "</UpgradePath>"
      }
    ]
  ],
  extraWatchFiles: [".vuepress/nav/en.js", ".vuepress/nav/zh.js"]
});

function getApiSidebar() {
  return ["cli", "node"];
}

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ["Guide"]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        "",
        "Terminology",
        "DataModel",
        "DecentralizedIdentifiers",
        "DIDDocuments",
        "DIDDocumentSyntax",
        "DIDMethods",
        "Resolvers",
        "SecurityConsiderations",
        "PrivacyConsiderations",
        "FutureWork",
        "Registries",
        "RealWorldExample",
        "References"
      ]
    }
  ];
}

const officalPlugins = fs
  .readdirSync(path.resolve(__dirname, "../plugin/official"))
  .map(filename => "official/" + filename.slice(0, -3))
  .sort();

function getPluginSidebar(pluginTitle, pluginIntro, officialPluginTitle) {
  return [
    {
      title: pluginTitle,
      collapsable: false,
      children: [
        ["", pluginIntro],
        "using-a-plugin",
        "writing-a-plugin",
        "life-cycle",
        "option-api",
        "context-api"
      ]
    },
    {
      title: officialPluginTitle,
      collapsable: false,
      children: officalPlugins
    }
  ];
}

function getThemeSidebar(groupA, introductionA) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ["", introductionA],
        "using-a-theme",
        "writing-a-theme",
        "option-api",
        "default-theme-config",
        "inheritance"
      ]
    }
  ];
}
