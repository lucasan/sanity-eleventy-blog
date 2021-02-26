export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '603916decdd33efad54b33f7',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-o3qo75dq',
                  apiId: '1c66b758-3297-403d-9a19-e3ff23843ad1'
                },
                {
                  buildHookId: '603916dea3277f1b7cafacac',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-fpekamjb',
                  apiId: 'b6df8062-11bc-41de-9931-13feb38fd85d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lucasan/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-fpekamjb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
