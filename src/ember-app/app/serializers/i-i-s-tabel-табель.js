import { Serializer as ТабельSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tabel-табель';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТабельSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
