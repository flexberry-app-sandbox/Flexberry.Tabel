import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  конецС: DS.attr('string'),
  началоС: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-tabel-сотрудник', { inverse: null, async: false }),
  график: DS.hasMany('i-i-s-tabel-график', { inverse: 'табель', async: false })
});

export let ValidationRules = {
  конецС: {
    descriptionKey: 'models.i-i-s-tabel-табель.validations.конецС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  началоС: {
    descriptionKey: 'models.i-i-s-tabel-табель.validations.началоС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-tabel-табель.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  график: {
    descriptionKey: 'models.i-i-s-tabel-табель.validations.график.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТабельE', 'i-i-s-tabel-табель', {
    началоС: attr('Начало смены', { index: 0 }),
    конецС: attr('Конец смены', { index: 1 }),
    сотрудник: belongsTo('i-i-s-tabel-сотрудник', 'Бригадир', {

    }, { index: 2, displayMemberPath: 'фИО' }),
    график: hasMany('i-i-s-tabel-график', 'График', {
      сотрудник: belongsTo('i-i-s-tabel-сотрудник', 'Сотрудник', {
        фИО: attr('', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' }),
      начало: attr('Начало смены с', { index: 2 }),
      конец: attr('по', { index: 3 }),
      состояние: attr('Состояние ', { index: 4 })
    })
  });

  modelClass.defineProjection('ТабельL', 'i-i-s-tabel-табель', {
    началоС: attr('Начало смены', { index: 0 }),
    конецС: attr('Конец смены', { index: 1 })
  });
};
