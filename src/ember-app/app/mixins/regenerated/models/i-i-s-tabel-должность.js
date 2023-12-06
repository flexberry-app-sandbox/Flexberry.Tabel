import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('string'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-tabel-должность.validations.код.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-tabel-должность.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностьE', 'i-i-s-tabel-должность', {
    наименование: attr('Наименование', { index: 0 }),
    код: attr('Код', { index: 1 })
  });

  modelClass.defineProjection('ДолжностьL', 'i-i-s-tabel-должность', {
    наименование: attr('Наименование', { index: 0 }),
    код: attr('Код', { index: 1 })
  });
};
