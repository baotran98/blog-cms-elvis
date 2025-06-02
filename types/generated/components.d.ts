import type { Schema, Struct } from '@strapi/strapi';

export interface BlogArticleHeadLine extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_head_lines';
  info: {
    displayName: 'headLine';
  };
  attributes: {
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogArticleLandScapeImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_land_scape_images';
  info: {
    displayName: 'landScapeImage';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageCaption: Schema.Attribute.String;
  };
}

export interface BlogArticleParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_paragraphs';
  info: {
    displayName: 'paragraph';
  };
  attributes: {
    paragraph: Schema.Attribute.Blocks;
  };
}

export interface BlogArticleParagraphAndImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_paragraph_and_images';
  info: {
    description: '';
    displayName: 'paragraphAndImage';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageCaption: Schema.Attribute.String;
    imageRight: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    landScape: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    paragraph: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

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
      'blog-article.head-line': BlogArticleHeadLine;
      'blog-article.land-scape-image': BlogArticleLandScapeImage;
      'blog-article.paragraph': BlogArticleParagraph;
      'blog-article.paragraph-and-image': BlogArticleParagraphAndImage;
      'info-block.button': InfoBlockButton;
    }
  }
}
