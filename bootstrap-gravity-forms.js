(function($){
    var gform = $(document).find('.gform_wrapper').attr('class');
    if(typeof gform !== 'undefined' && gform !== 'false'){
        $(document).on('gform_post_render',function(){
            var form = $('.gform_wrapper');
            var required = $('.gfield_contains_required');
            var controlGroup = $('.gfield');
            required.each(function(){
                $(this).find('input, textarea, select').not('input[type="checkbox"], input[type="radio"]').attr('required', 'true');
            });
            $('.gform_fields').each(function(){
                $(this).addClass('row');
            });
            controlGroup.each(function(){
                $(this).addClass('form-group').find('input, textarea, select').not('input[type="checkbox"], input[type="radio"]').after('<span class="help-block"></span>').addClass('form-control');
            });
            form.find("input[type='submit'], input[type='button']").addClass('btn btn-primary').end().find('.gfield_error').removeClass('gfield_error').addClass('has-error');
            $('.gfield_checkbox, .gfield_radio').find('input[type="checkbox"], input[type="radio"]').each(function(){
                var sib = $(this).siblings('label');
                $(this).prependTo(sib);
            }).end().each(function(){
                $(this).after('<span class="help-block"></span>');
                if($(this).is('.gfield_checkbox')){
                    $(this).addClass('checkbox');
                } else {
                    $(this).addClass('radio');
                }
            });
            $('.validation_message').each(function(){
                var sib = $(this).prev().find('.help-block');
                $(this).appendTo(sib);
            });
            $('.validation_error').addClass('alert alert-danger');
            $('.gf_progressbar').addClass('progress progress-striped active').children('.gf_progressbar_percentage').addClass('progress-bar progress-bar-success');
        });
    } else {
        console.log('no forms were found');
        return false;
    }
})(jQuery);