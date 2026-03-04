import { PERMISSIONS } from './src/constants';
const entryPointUriPath = process.env.ENTRY_POINT_URI_PATH;
const derivedUrl = `https://mc.${cloudIdentifier}.commercetools.com/${entryPointUriPath}`;

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Ct Reporting Tool',
  entryPointUriPath,
  cloudIdentifier: 'gcp-eu',
  env: {
    development: {
      initialProjectKey: process.env.CLOUD_IDENTIFIER || 'gcp-eu',
    },
    production: {
      applicationId: process.env.CUSTOM_APPLICATION_ID,
      url: process.env.PREVIEW_URL || derivedUrl,
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
