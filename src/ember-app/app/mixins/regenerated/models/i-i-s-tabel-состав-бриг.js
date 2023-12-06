import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.belongsTo('i-i-s-tabel-должность', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-tabel-сотрудник', { inverse: null, async: false }),
  бригада: DS.belongsTo('i-i-s-tabel-бригада', { inverse: 'составБриг', async: false })
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-tabel-состав-бриг.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-tabel-состав-бриг.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  бригада: {
    descriptionKey: 'models.i-i-s-tabel-состав-бриг.validations.бригада.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставБригE', 'i-i-s-tabel-состав-бриг', {
    должность: belongsTo('i-i-s-tabel-должность', 'Должность', {
      наименование: attr('Должность', { index: 1, hidden: true })
    }, { index: 0 }),
    сотрудник: belongsTo('i-i-s-tabel-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2 })
  });
};
