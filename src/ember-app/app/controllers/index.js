import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.кадры.caption'),
          title: i18n.t('forms.application.sitemap.кадры.title'),
          children: [{
            link: 'i-i-s-tabel-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-tabel-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-tabel-сотрудник-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-tabel-бригада-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-tabel-бригада-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-tabel-бригада-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-tabel-невыходы-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-tabel-невыходы-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-tabel-невыходы-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-tabel-должность-l',
            caption: i18n.t('forms.application.sitemap.кадры.i-i-s-tabel-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.кадры.i-i-s-tabel-должность-l.title'),
            icon: 'address card',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.учет-времени.caption'),
          title: i18n.t('forms.application.sitemap.учет-времени.title'),
          children: [{
            link: 'i-i-s-tabel-табель-l',
            caption: i18n.t('forms.application.sitemap.учет-времени.i-i-s-tabel-табель-l.caption'),
            title: i18n.t('forms.application.sitemap.учет-времени.i-i-s-tabel-табель-l.title'),
            icon: 'file',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.выбрать.caption'),
          title: i18n.t('forms.application.sitemap.выбрать.title'),
          children: null
        }
      ]
    };
  }),
})