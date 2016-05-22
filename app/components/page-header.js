import Ember from 'ember';

export default Ember.Component.extend({

	classNames: ['col-md-8, pageHeader'],

	firstArray: ["U","s","e","f","u","l"," ","S","p","i","r","i","t","u","a","l"," ","T","o","o","l","s"," ","F","o","r"," ","Y","o","u","r"," ","D","a","i","l","y"," ","L","i","f","e","!"],

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