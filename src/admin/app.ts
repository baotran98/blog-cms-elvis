import type { StrapiApp } from '@strapi/strapi/admin';
import { Plugin, ButtonView } from 'ckeditor5';
import { setPluginConfig, defaultHtmlPreset } from '@_sh/strapi-plugin-ckeditor';

class Timestamp extends Plugin {
  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add('timestamp', () => {
      const button = new ButtonView();
      button.set({
        label: 'timestamp',
        withText: true,
      });
      button.on('execute', () => {
        const now = new Date();
        editor.model.change(writer => {
          editor.model.insertContent(writer.createText(now.toString()));
        });
      });
      return button;
    });
  }
}

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  // register() {
  //   defaultHtmlPreset.editorConfig.plugins.push(Timestamp);
  //   defaultHtmlPreset.editorConfig.toolbar.unshift('timestamp');
  //   setPluginConfig({ presets: [defaultHtmlPreset] });
  // },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
