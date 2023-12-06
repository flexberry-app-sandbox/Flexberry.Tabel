import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПричиныEnum from '../enums/i-i-s-tabel-причины';

export default FlexberryEnum.extend({
  enum: ПричиныEnum,
  sourceType: 'IIS.Tabel.Причины'
});
