import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTabelБригадаLForm from './forms/i-i-s-tabel-бригада-l';
import IISTabelДолжностьLForm from './forms/i-i-s-tabel-должность-l';
import IISTabelНевыходыLForm from './forms/i-i-s-tabel-невыходы-l';
import IISTabelСотрудникLForm from './forms/i-i-s-tabel-сотрудник-l';
import IISTabelТабельLForm from './forms/i-i-s-tabel-табель-l';
import IISTabelБригадаEForm from './forms/i-i-s-tabel-бригада-e';
import IISTabelДолжностьEForm from './forms/i-i-s-tabel-должность-e';
import IISTabelНевыходыEForm from './forms/i-i-s-tabel-невыходы-e';
import IISTabelСотрудникEForm from './forms/i-i-s-tabel-сотрудник-e';
import IISTabelТабельEForm from './forms/i-i-s-tabel-табель-e';
import IISTabelБригадаModel from './models/i-i-s-tabel-бригада';
import IISTabelГрафикModel from './models/i-i-s-tabel-график';
import IISTabelДолжностьModel from './models/i-i-s-tabel-должность';
import IISTabelНевыходыModel from './models/i-i-s-tabel-невыходы';
import IISTabelСоставБригModel from './models/i-i-s-tabel-состав-бриг';
import IISTabelСотрудникModel from './models/i-i-s-tabel-сотрудник';
import IISTabelТабельModel from './models/i-i-s-tabel-табель';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tabel-бригада': IISTabelБригадаModel,
    'i-i-s-tabel-график': IISTabelГрафикModel,
    'i-i-s-tabel-должность': IISTabelДолжностьModel,
    'i-i-s-tabel-невыходы': IISTabelНевыходыModel,
    'i-i-s-tabel-состав-бриг': IISTabelСоставБригModel,
    'i-i-s-tabel-сотрудник': IISTabelСотрудникModel,
    'i-i-s-tabel-табель': IISTabelТабельModel
  },

  'application-name': 'Tabel',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Tabel',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tabel',
          title: 'Tabel'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        кадры: {
          caption: 'Кадры',
          title: 'Кадры',
          'i-i-s-tabel-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-tabel-бригада-l': {
            caption: 'Бригада',
            title: ''
          },
          'i-i-s-tabel-невыходы-l': {
            caption: 'Невыходы',
            title: ''
          },
          'i-i-s-tabel-должность-l': {
            caption: 'Должность',
            title: ''
          }
        },
        'учет-времени': {
          caption: 'Учет времени',
          title: 'Учет времени',
          'i-i-s-tabel-табель-l': {
            caption: 'Табель',
            title: ''
          }
        },
        tabel: {
          caption: 'Tabel',
          title: 'Tabel',
          'i-i-s-tabel-табель-l': {
            caption: 'Табель',
            title: ''
          },
          'i-i-s-tabel-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-tabel-бригада-l': {
            caption: 'Бригада',
            title: ''
          },
          'i-i-s-tabel-невыходы-l': {
            caption: 'Невыходы',
            title: ''
          },
          'i-i-s-tabel-должность-l': {
            caption: 'Должность',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-tabel-бригада-l': IISTabelБригадаLForm,
    'i-i-s-tabel-должность-l': IISTabelДолжностьLForm,
    'i-i-s-tabel-невыходы-l': IISTabelНевыходыLForm,
    'i-i-s-tabel-сотрудник-l': IISTabelСотрудникLForm,
    'i-i-s-tabel-табель-l': IISTabelТабельLForm,
    'i-i-s-tabel-бригада-e': IISTabelБригадаEForm,
    'i-i-s-tabel-должность-e': IISTabelДолжностьEForm,
    'i-i-s-tabel-невыходы-e': IISTabelНевыходыEForm,
    'i-i-s-tabel-сотрудник-e': IISTabelСотрудникEForm,
    'i-i-s-tabel-табель-e': IISTabelТабельEForm
  },

});

export default translations;
