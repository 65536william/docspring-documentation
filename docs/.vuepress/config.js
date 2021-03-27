module.exports = {
    head: [
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=https://fonts.googleapis.com/css2?family=Epilogue:wght@700&display=swap' }],
    ],
    themeConfig: {
        displayAllHeaders: true,
        sidebarDepth: 0,
        sidebar: 'auto',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guides', link: '/guides/' },
            { text: 'API', link: '/api/' },
            { text: 'DocSpring', link: 'https://docspring.com' }
        ],
        sidebar: {
            '/api/': [
                {
                    title: 'Install API Client',
                    path: '/api/install-api-client/',
                    children: [
                        '/api/install-api-client/authentication',
                        '/api/install-api-client/openapi',
                    ]
                },
                {
                    title: 'Generate a PDF',
                    path: '/api/generate-a-pdf/',
                    children: [
                        '/api/generate-a-pdf/customize-filename',
                        '/api/generate-a-pdf/truncated-text',
                        '/api/generate-a-pdf/special-newline-characters',
                        '/api/generate-a-pdf/batch-generate',
                        '/api/generate-a-pdf/get-submission',
                        '/api/generate-a-pdf/expire-submission',
                    ]
                },
                {
                    title: 'Combine PDFs',
                    path: '/api/combine-pdfs/',
                    children: [
                        '/api/combine-pdfs/create-custom-file',
                    ]
                },
                {
                    title: 'Templates',
                    path: '/api/templates/',
                    children: [
                        '/api/templates/create',
                        '/api/templates/update',
                        '/api/templates/copy',
                        '/api/templates/add-fields',
                        '/api/templates/field-schema',
                        '/api/templates/field-defaults',
                        '/api/templates/list',
                        '/api/templates/get-template',
                        '/api/templates/move-to-folder',
                        '/api/templates/get-schema',
                    ]
                },
                {
                    title: 'Create Data Request',
                    path: '/api/create-data-request/',
                    children: [
                        '/api/create-data-request/create',
                        '/api/create-data-request/update',
                        '/api/create-data-request/auth-token',
                        '/api/create-data-request/get',
                    ]
                },
                {
                    title: 'Create Folder',
                    path: '/api/create-folder/',
                    children: [
                        '/api/create-folder/list',
                        '/api/create-folder/rename',
                        '/api/create-folder/move-folder-to-folder',
                        '/api/create-folder/delete',
                    ]
                }
            ],
            '/guides/': [
                {
                    title: 'Template Editor',
                    path: '/guides/template-editor/',
                    children: [
                        '/guides/template-editor/getting-started',
                        '/guides/template-editor/field-names',
                        '/guides/template-editor/field-data-types',
                        '/guides/template-editor/field-display-types',
                        '/guides/template-editor/radio-buttons',
                        '/guides/template-editor/ssn-fields',
                        '/guides/template-editor/formulas',
                        '/guides/template-editor/settings',
                        '/guides/template-editor/keyboard-shortcuts',
                        '/guides/template-editor/locked-templates',
                    ]
                },
                {
                    title: 'HTML CSS Templates',
                    path: '/guides/html-css-templates/',
                    children: [
                        '/guides/html-css-templates/liquid-filters',
                        '/guides/html-css-templates/liquid-timezones',
                    ]
                },
                {
                    title: 'Web Forms',
                    path: '/guides/web-forms/',
                    children: [
                        '/guides/web-forms/embedded-forms',
                    ]
                },
                {
                    title: 'Integrations',
                    path: '/guides/integrations/',
                    children: [
                        '/guides/integrations/aws-s3',
                    ]
                },
                {
                    title: 'Embedded Library Releases',
                    path: '/guides/embedded-library-releases/data-requests/',
                    children: [
                        '/guides/embedded-library-releases/visual-forms',
                        '/guides/embedded-library-releases/simple-forms',
                    ]
                }
            ],

            '/': [
                '',
            ]
        }
    }
}