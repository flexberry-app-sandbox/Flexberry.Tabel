import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-tabel-сотрудник.validations.код.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-tabel-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-tabel-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    код: attr('Код', { index: 1 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-tabel-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    код: attr('Код', { index: 1 })
  });
};
