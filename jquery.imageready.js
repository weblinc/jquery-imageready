// jquery.imageready.js
// @weblinc, @jsantell, (c) 2012

;(function($) {
  $.fn.imageready = function ( callback, userSettings ) {
    var
      options = $.extend( {}, $.fn.imageready.defaults, userSettings ),
      $images = this.find( 'img' ).add( this.filter( 'img' ) ),
      unloadedImages  = $images.length;

    function loaded () {
      unloadedImages--;
      !unloadedImages && callback();
    }

    function bindLoad () {
      this.one( 'load', loaded );
      if ( $.browser.msie ) {
        var
          src   = this.attr( 'src' ),
          param = src.match( /\?/ ) ? '&' : '?';
        param  += options.cachePrefix + '=' + ( new Date() ).getTime();
        this.attr( 'src', src + param );
      }
    }

    return $images.each(function () {
      var $this = $( this );
      this.complete || this.readyState === 4 ?
        loaded() :
        bindLoad.call( $this );
    });
  };

  $.fn.imageready.defaults = {
    cachePrefix: 'random'
  };

})(jQuery);
