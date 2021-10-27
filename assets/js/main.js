(function($) {

	"use strict";


  // Form
	var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					phone: "required",
					email: {
						required: true,
						email: true
					},
					address: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					phone: "Please enter your phone",
					email: "Please enter a valid email address",
					address: "Please enter a address"
				},
				/* submit via ajax */

			});
		}
	};
	contactForm();

	var editForm = function() {
		if ($('#editForm').length > 0 ) {
			$( "#editForm" ).validate( {
				rules: {
					name: "required",
					phone: "required",
					email: {
						required: true,
						email: true
					},
					address: "required",
				},
				messages: {
					name: "Please enter your name",
					phone: "Please enter your phone",
					email: "Please enter a valid email address",
					address: "Please enter a address"
				},
				/* submit via ajax */

			});
		}
	};
	editForm();
})(jQuery);
