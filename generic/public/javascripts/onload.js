/**
 * @author Gilson Varghese <gilsonvarghese7@gmail.com>
 * @fileoverview Primary page load for jquery
 * Rules
 * <li> id and class should use hyphen as seperator
 * <li> button should have btn sufix and textbox txt suffix
 * <li> 
*/


/**
 * Control document loading to avoid errors while loading css
*/
$(document).load(function() {
  /**
   *@note To be used for css optimizations
  */
});


/**
 * Control event handling and animations
*/
$(document).ready(function() {
  /**
   * Handle get button clicks
  */
  $(".get-btn").click(function() {
    handleRefresh(this.attr("id"));
  });

  /**
   * Handle post button clicks
  */
  $(".post-btn").click(function() {
    handleUpdate(this.attr("id"));
  });

  /**
   * animation goes here...
  */

});





