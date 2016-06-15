import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ['col-md-10 col-md-offset-1 pageHeader'],

	firstArray: [],

	delay: 0,

	didInsertElement: function() {
		for (var i = 0; i < this.firstArray.length; i++) {
			this.delayTimeout( i, this.delay);
			this.delay += 60;
		}
	},

	delayTimeout: function( obj, time) {
		var _this = this;
		setTimeout(function(){
			_this.$().append( _this.firstArray[obj] );
			
		}, time );
	}
});