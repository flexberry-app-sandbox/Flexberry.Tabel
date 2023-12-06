import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  конец: DS.attr('string'),
  начало: DS.attr('string'),
  состояние: DS.attr('i-i-s-tabel-причины'),
  сотрудник: DS.belongsTo('i-i-s-tabel-сотрудник', { inverse: null, async: false }),
  табель: DS.belongsTo('i-i-s-tabel-табель', { inverse: 'график', async: false })
});

export let ValidationRules = {
  конец: {
    descriptionKey: 'models.i-i-s-tabel-график.validations.конец.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  начало: {
    descriptionKey: 'models.i-i-s-tabel-график.validations.начало.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-tabel-график.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-tabel-график.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  табель: {
    descriptionKey: 'models.i-i-s-tabel-график.validations.табель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикE', 'i-i-s-tabel-график', {
    сотрудник: belongsTo('i-i-s-tabel-сотрудник', 'Сотрудник', {
      фИО: attr('', { index: 1, hidden: true })
    }, { index: 0 }),
    начало: attr('Начало смены с', { index: 2 }),
    конец: attr('по', { index: 3 }),
    состояние: attr('Состояние ', { index: 4 })
  });
};
