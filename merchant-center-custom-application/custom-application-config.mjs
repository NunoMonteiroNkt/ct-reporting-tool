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
      initialProjectKey: 'my-project-key',
    },
    production: {
      applicationId: 'cmlfevbsn000801v25qebfuak',
      url: '',
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
    {
      uriPath: 'all-products',
      defaultLabel: 'All Products with Attributes',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    }
  ],
};

export default config;
