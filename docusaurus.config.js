// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// /** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Otterize',
    url: 'https://docs.otterize.com',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.svg',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'otterize', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    plugins: [
        [
            'docusaurus-plugin-includes',
            {},
        ],
        [
            'docusaurus-plugin-hotjar',
            {}
        ],
        [
            '@docusaurus/plugin-google-gtag',
            {
                trackingID: 'G-2EG876ZREF',
                anonymizeIP: false,
            },
        ]
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/otterize/docs/edit/main/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            algolia: {
                apiKey: '126a90612c37712ff44925fff5ac44b6',
                indexName: 'docs.otterize.com',
                appId: 'GP6YEIC49H', // Optional, if you run the DocSearch crawler on your own
                algoliaOptions: {} // Optional, if provided by Algolia
            },
            hotjar: {
                applicationId: '3152141',
            },
            navbar: {
                logo: {
                    alt: 'Otterize',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'documentation/introduction',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        href: 'https://github.com/otterize',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Join us on Slack',
                                href: '...',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Otterize',
                                to: 'https://otterize.com',
                            },
                            {
                                label: 'Blog',
                                to: 'https://otterize.com/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/otterize',
                            },
                        ],
                    },
                ],
                copyright: `Built with Docusaurus`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;