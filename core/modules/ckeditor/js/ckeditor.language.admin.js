/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.ckeditorLanguageSettingsSummary = {
    attach: function attach() {
      $('#edit-editor-settings-plugins-language').drupalSetSummary(function (context) {
        return $('#edit-editor-settings-plugins-language-language-list-type option:selected').text();
      });
    }
  };
})(jQuery, Drupal);