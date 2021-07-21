/* global FCH */

(function ( $ ) {
  'use strict';

  /**
   * Display inline modal of helper text. This is the bread and butter of the plugin.
   * @private
   * @param {jQuery} $el - The object to display the text relative to
   */
  function showModal($el) {
    var top = $el.offset().top - FCH.$window.scrollTop();
    var left = $el.offset().left + 20;
    var $hint = $el.closest('label').siblings('.hint');
    var new_height = $hint.height() + 80;
    var width = 250;

    if ($hint.find('.youtube-hint').length) {
      width = 570;
      new_height -= 40;
    }

    $hint.modal({
      minHeight: new_height,
      minWidth: width,
      maxWidth: width,
      position: [top, left],
      overlayClose: true,
      opacity: 0,
      containerCss: { position: 'absolute' }
    });

  }

  /**
   * Private initialization of Hinter object.
   * @class
   */
  function Hinter($el, options) {
    /** Inherited settings from jQuery initialization */
    this.options = options;
    this._drawElements($el);
    this._clickListener();
    // this._hoverListener();

    return this
  }

  /**
   * Create jQuery object of the $icon and add it to the DOM
   * @protected
   */
  Hinter.prototype._drawElements = function($el) {
    var $label = $el.parent().find('.label_inner');

    //create the icon
    this.$icon = $('<span />', {
      class: this.options.icon_class + ' ' + this.options.style_class
    });

    this.$icon.appendTo($label);
  };

  /**
   * Show the modal on click
   * @protected
   */
  Hinter.prototype._clickListener = function() {
    this.$icon.click(function(){
      showModal( $(this) );
    });
  };

  /**
   * Allow hover to do the same as a clicking
   */
  Hinter.prototype._hoverListener = function(){
    var $clicker = $('.hinter-clicker');

    this.$icon.mouseenter(function() {
      $clicker.addClass('hovered');
      showModal( $(this) );
    });

    this.$icon.mouseleave(function() {
      $clicker.removeClass('hovered');
      $.modal.close();
    });
  };

  /**
   * Display helper text in a very small inline modal
   * @function external:'jQuery.fn'.hinter
   */
  $.fn.hinter = function( options ) {

    var defaults = {
      icon_class: 'icon-support',
      style_class: 'hinter-clicker'
    };

    // unite the default options with the passed-in ones
    var settings = $.extend( {}, defaults, options );

    return this.each(function() {
      var hint = new Hinter($(this), settings);
    });

  };

}( jQuery ));
