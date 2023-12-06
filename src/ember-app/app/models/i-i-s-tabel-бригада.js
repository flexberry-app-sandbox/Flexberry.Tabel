import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as БригадаMixin
} from '../mixins/regenerated/models/i-i-s-tabel-бригада';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(БригадаMixin, Validations, {
});

defineProjections(Model);

export default Model;
