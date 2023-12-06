import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НевыходыMixin
} from '../mixins/regenerated/models/i-i-s-tabel-невыходы';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НевыходыMixin, Validations, {
});

defineProjections(Model);

export default Model;
