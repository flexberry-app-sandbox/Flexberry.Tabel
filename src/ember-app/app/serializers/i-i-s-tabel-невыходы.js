import { Serializer as НевыходыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tabel-невыходы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НевыходыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
