import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tabel-должность', 'Unit | Model | i-i-s-tabel-должность', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
