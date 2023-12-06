import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Tabel',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tabel',
          title: 'Tabel'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
