import {
  defineNamespace,
  defineProjections,
  Model as ТабельMixin
} from '../mixins/regenerated/models/i-i-s-tabel-табель';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТабельMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
