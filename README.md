# jquery.inputReset

This plugin allows you to reset the default value for an input field.  This is
useful if you have form fields that your users would like to be able to reset.

## Usage

When your dom is ready, mark the input fields you would like to be resettable.

    $(function() {
      // this will remember the default value for #my-input-field
      $('#my-input-field').setDefaultText();
    });

Elsewhere on your page, you can call 'resetDefaultText' to restore the original
value.

    <!-- clicking this will reset the field back to it's original value -->
    <a onclick="$('#my-input-field).resetDefaultText()">Reset</a>

## Example

See demo.html

