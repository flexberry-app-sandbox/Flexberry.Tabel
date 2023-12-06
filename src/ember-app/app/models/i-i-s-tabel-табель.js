import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТабельMixin
} from '../mixins/regenerated/models/i-i-s-tabel-табель';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТабельMixin, Validations, {
});

defineProjections(Model);

export default Model;
