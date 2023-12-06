import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tabel-невыходы', 'Unit | Serializer | i-i-s-tabel-невыходы', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-tabel-невыходы',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-tabel-причины',

    'model:i-i-s-tabel-бригада',
    'model:i-i-s-tabel-график',
    'model:i-i-s-tabel-должность',
    'model:i-i-s-tabel-невыходы',
    'model:i-i-s-tabel-состав-бриг',
    'model:i-i-s-tabel-сотрудник',
    'model:i-i-s-tabel-табель',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
