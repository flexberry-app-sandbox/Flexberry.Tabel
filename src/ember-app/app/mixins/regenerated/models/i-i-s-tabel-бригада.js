import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  конец: DS.attr('string'),
  назначение: DS.attr('string'),
  начало: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-tabel-сотрудник', { inverse: null, async: false }),
  составБриг: DS.hasMany('i-i-s-tabel-состав-бриг', { inverse: 'бригада', async: false })
});

export let ValidationRules = {
  конец: {
    descriptionKey: 'models.i-i-s-tabel-бригада.validations.конец.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  назначение: {
    descriptionKey: 'models.i-i-s-tabel-бригада.validations.назначение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  начало: {
    descriptionKey: 'models.i-i-s-tabel-бригада.validations.начало.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-tabel-бригада.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составБриг: {
    descriptionKey: 'models.i-i-s-tabel-бригада.validations.составБриг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БригадаE', 'i-i-s-tabel-бригада', {
    начало: attr('Сформирована с:', { index: 0 }),
    конец: attr('по:', { index: 1 }),
    назначение: attr('Назначение', { index: 2 }),
    сотрудник: belongsTo('i-i-s-tabel-сотрудник', 'Бригадир', {

    }, { index: 3, displayMemberPath: 'фИО' }),
    составБриг: hasMany('i-i-s-tabel-состав-бриг', 'Состав бригады', {
      должность: belongsTo('i-i-s-tabel-должность', 'Должность', {
        наименование: attr('Должность', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'наименование' }),
      сотрудник: belongsTo('i-i-s-tabel-сотрудник', 'Сотрудник', {
        фИО: attr('ФИО', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('БригадаL', 'i-i-s-tabel-бригада', {
    начало: attr('Начало', { index: 0 }),
    конец: attr('Конец', { index: 1 }),
    назначение: attr('Назначение', { index: 2 })
  });
};
