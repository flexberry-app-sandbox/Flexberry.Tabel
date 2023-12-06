import { Serializer as СоставБригSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tabel-состав-бриг';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СоставБригSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
