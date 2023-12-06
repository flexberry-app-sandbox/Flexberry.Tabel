import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СоставБригMixin
} from '../mixins/regenerated/models/i-i-s-tabel-состав-бриг';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СоставБригMixin, Validations, {
});

defineProjections(Model);

export default Model;
