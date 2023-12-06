import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('string'),
  состояние: DS.attr('i-i-s-tabel-причины'),
  сотрудник: DS.belongsTo('i-i-s-tabel-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-tabel-невыходы.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-tabel-невыходы.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-tabel-невыходы.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НевыходыE', 'i-i-s-tabel-невыходы', {
    дата: attr('Дата', { index: 0 }),
    состояние: attr('Состояние', { index: 1 })
  });

  modelClass.defineProjection('НевыходыL', 'i-i-s-tabel-невыходы', {
    дата: attr('Дата', { index: 0 }),
    состояние: attr('Состояние', { index: 1 })
  });
};
