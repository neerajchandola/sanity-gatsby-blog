export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6045b9086b86ed10270bcf24',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-b8f1kuqp',
                  apiId: '573d8cb6-7bc2-4a02-9a86-7e40a1b5087c'
                },
                {
                  buildHookId: '6045b908ad3d944adb0fb933',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-12x55ac9',
                  apiId: '3460c295-5771-4b73-b30f-d8cc6e888575'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/neerajchandola/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-12x55ac9.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
