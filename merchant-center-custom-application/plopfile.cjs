module.exports = function (plop) {
    plop.setGenerator('create', {
        description: 'Create a screen or component',
        prompts: [
            {
                type: 'list',
                name: 'type',
                message: 'What do you want to create?',
                choices: ['screen', 'component'],
            },
            {
                type: 'input',
                name: 'name',
                message: 'Name:',
                validate: value => value ? true : 'Name is required',
            },
        ],

        actions: function (data) {
            const isScreen = data.type === 'screen';

            const finalName = isScreen
                ? '{{upperCase name}}Screen'
                : '{{pascalCase name}}';

            const basePath = isScreen
                ? `src/screens/${finalName}`
                : `src/components/${finalName}`;

            const actions = [
                {
                    type: 'add',
                    path: `${basePath}/${finalName}.tsx`,
                    templateFile: `plop-templates/${data.type}.tsx.hbs`,
                },
                {
                    type: 'add',
                    path: `${basePath}/index.ts`,
                    templateFile: `plop-templates/index.ts.hbs`,
                },
            ];

            // 👇 Only modify routes if it's a screen
            if (isScreen) {
                actions.push(
                    // 1️⃣ Add import after last screen import
                    {
                        type: 'modify',
                        path: 'src/routes.tsx',
                        pattern: /(import .* from "\.\/screens\/.*";?\n)/g,
                        template:
                            '$1import {{pascalCase name}}Screen from "./screens/{{camelCase name}}Screen";\n',
                    },

                    // 2️⃣ Add Route before </Switch>
                    {
                        type: 'modify',
                        path: 'src/routes.tsx',
                        pattern: /(<\/Switch>)/g,
                        template: `
        <Route path={\`\${match.path}/{{kebabCase name}}\`}>
          <{{pascalCase name}}Screen />
        </Route>
        $1`,
                    },

                    {
                        type: 'modify',
                        path: 'custom-application-config.js', // ⚠️ adjust if different path
                        pattern: /(submenuLinks:\s*\[[\s\S]*?)(\]\s*,)/,
                        template: `$1  {
    uriPath: '{{kebabCase name}}',
    defaultLabel: '{{pascalCase name}}',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  $2`,
                    }
                );
            }

            return actions;
        },
    });
};