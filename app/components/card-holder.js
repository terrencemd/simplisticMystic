import Ember from 'ember';

export default Ember.Component.extend({

	openModal: false,

	classNames: ['cardHolder col-xs-10 col-sm-6 col-md-4 col-xs-offset-1'],

	actions: {

		modalToggle: function(){

			if(this.openModal === false){
				
				this.set('openModal', true);
			}

			else {
				
				this.set('openModal', false);
			}

		}
	}


});
