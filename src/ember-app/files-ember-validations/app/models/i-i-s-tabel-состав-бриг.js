import {
  defineNamespace,
  defineProjections,
  Model as СоставБригMixin
} from '../mixins/regenerated/models/i-i-s-tabel-состав-бриг';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставБригMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
