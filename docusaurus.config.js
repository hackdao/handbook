module.exports = {
    // 主页配置
    title: "BitFuture DAO",
    tagline: "在区块链上建立的去中心化流民主国家，如果你怀揣梦想，欢迎加入我们一起来改变世界。",
    url: "https://handbook.raidguild.org",
    baseUrl: "/",
    favicon: "img/rg-icon.png",
    organizationName: "raid-guild", // Usually your GitHub org/user name.
    projectName: "Handbook", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "BitFuture",
            logo: {
                alt: "RaidGuild Logo",
                src: "img/rg-icon.png",
            },
            links: [
                // { to: "docs/raidCentral", label: "Handbook", position: "left" },
                // {
                //   to: "docs/raidCentral#member-registry",
                //   label: "Member Registry",
                //   position: "left"
                // },
                {
                    href: "https://raidguild.org",
                    label: "Dot Org",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            // links: [
            //   {}, // keep this empty object in so the footer objects are "centered" in desktop view
            //   {
            //     title: "Our Presence",
            //     items: [
            //       {
            //         label: "Homepage",
            //         href: "https://raidguild.org"
            //       },
            //       {
            //         label: "DAO",
            //         href: "https://twitter.com/RaidGuild"
            //       },
            //       {
            //         label: "Twitter",
            //         href: "https://twitter.com/RaidGuild"
            //       },
            //       {
            //         label: "GitHub",
            //         href: "https://github.com/raid-guild"
            //       }
            //     ]
            //   }
            // ],
            copyright: `Copyright © ${new Date().getFullYear()} BitFuture, DAO`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/raid-guild/handbook/edit/master/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
