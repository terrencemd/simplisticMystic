import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('chakras');
  this.route('home');
  this.route('tools');
  this.route('masters');
  this.route('archangels');
  this.route('gaia');
});

export default Router;
