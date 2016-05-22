import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ['col-md-8, pageHeader'],

	firstArray: ["K","e","e","p"," ","T","h","o","s","e"," ","C","h","a","k","r","a","s"," ","C","l","e","a","r","!"],

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
