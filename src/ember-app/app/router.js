import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tabel-бригада-l');
  this.route('i-i-s-tabel-бригада-e',
  { path: 'i-i-s-tabel-бригада-e/:id' });
  this.route('i-i-s-tabel-бригада-e.new',
  { path: 'i-i-s-tabel-бригада-e/new' });
  this.route('i-i-s-tabel-должность-l');
  this.route('i-i-s-tabel-должность-e',
  { path: 'i-i-s-tabel-должность-e/:id' });
  this.route('i-i-s-tabel-должность-e.new',
  { path: 'i-i-s-tabel-должность-e/new' });
  this.route('i-i-s-tabel-невыходы-l');
  this.route('i-i-s-tabel-невыходы-e',
  { path: 'i-i-s-tabel-невыходы-e/:id' });
  this.route('i-i-s-tabel-невыходы-e.new',
  { path: 'i-i-s-tabel-невыходы-e/new' });
  this.route('i-i-s-tabel-сотрудник-l');
  this.route('i-i-s-tabel-сотрудник-e',
  { path: 'i-i-s-tabel-сотрудник-e/:id' });
  this.route('i-i-s-tabel-сотрудник-e.new',
  { path: 'i-i-s-tabel-сотрудник-e/new' });
  this.route('i-i-s-tabel-табель-l');
  this.route('i-i-s-tabel-табель-e',
  { path: 'i-i-s-tabel-табель-e/:id' });
  this.route('i-i-s-tabel-табель-e.new',
  { path: 'i-i-s-tabel-табель-e/new' });
});

export default Router;
