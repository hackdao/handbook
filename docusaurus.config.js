module.exports = {
    // 主页配置
    title: "DAO，来自未来的组织",
    // tagline: "DAO，来自未来的组织  ",
    url: "https://hackdao.org",
    baseUrl: "/handbook/",
    favicon: "img/rg-icon.png",
    organizationName: "hackdao", // Usually your GitHub org/user name.
    projectName: "handbook", // Usually your repo name.
    themeConfig: {
        navbar: {
            // title: "HackDao",
            logo: {
                alt: "Hackdao Logo",
                src: "img/logo.png",
            },
            links: [
                {
                    href: "https://www.hackdao.org/",
                    label: "Website",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} HackDAO`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/hackdao/handbook/edit/master/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
