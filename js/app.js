var $radios = jQuery('input[type=radio]');
$radios.change(function() {
    $radios.parent('.form-check').parent('.survey-image').removeClass('survey-image-clicked');
    $radios.filter(':checked').parent('.form-check').parent('.survey-image').addClass('survey-image-clicked');
    console.log('hey yo');
});


var $radiosInline = jQuery('input[type=radio]');
$radiosInline.change(function() {
    $radiosInline.parent('.input-div').removeClass('radio-inline-active');
    $radiosInline.filter(':checked').parent('.input-div').addClass('radio-inline-active');
    console.log('hey yo');
});