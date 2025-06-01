import type { Schema, Struct } from '@strapi/strapi';

export interface InfoBlockButton extends Struct.ComponentSchema {
  collectionName: 'components_info_block_buttons';
  info: {
    description: '';
    displayName: 'button';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['turquoise', 'orange', 'beige']> &
      Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'info-block.button': InfoBlockButton;
    }
  }
}
