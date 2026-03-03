import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Ct Reporting Tool',
  entryPointUriPath,
  cloudIdentifier: 'gcp-eu',
  env: {
    development: {
      initialProjectKey: 'PROJECT_KEY',
    },
    production: {
      applicationId: 'TODO',
      url: 'https://your_app_hostname.com',
    },
  },
  oAuthScopes: {
    view: ['view_products', 'view_product_selections'],
    manage: ['manage_products'],
  },
  icon: '',
  mainMenuLink: {
    defaultLabel: 'Template starter',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    /* {
      uriPath: 'channels',
      defaultLabel: 'Channels',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    }, */
    /*  {
       uriPath: 'materials',
       defaultLabel: 'Materials',
       labelAllLocales: [],
       permissions: [PERMISSIONS.View],
     },
     {
       uriPath: 'product-types',
       defaultLabel: 'ProductTypes',
       labelAllLocales: [],
       permissions: [PERMISSIONS.View],
     }, */
    {
      uriPath: 'all-products',
      defaultLabel: 'All Products with Attributes',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    }
  ],
};

export default config;
