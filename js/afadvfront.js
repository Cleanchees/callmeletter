jQuery(document).ready(function($){ 
 $(".woocommerce .products").on("click", ".quantity input", function() {
		  return false;
 });
 $(".quantity .qty").each(function() {
	var add_to_cart_button = $(this).parents( ".product" ).find(".add_to_cart_button");
 
	// For AJAX add-to-cart actions
	add_to_cart_button.attr("data-quantity", $(this).val());
 
	 // For non-AJAX add-to-cart actions
	add_to_cart_button.attr("href", "?add-to-cart=" + add_to_cart_button.attr("data-product_id") + "&quantity=" + $(this).val());
 });
 $(".woocommerce .products").on("change input", ".quantity .qty", function() {
	var add_to_cart_button = $(this).parents( ".product" ).find(".add_to_cart_button");
 
	// For AJAX add-to-cart actions
	add_to_cart_button.attr("data-quantity", $(this).val());
 
	 // For non-AJAX add-to-cart actions
	add_to_cart_button.attr("href", "?add-to-cart=" + add_to_cart_button.attr("data-product_id") + "&quantity=" + $(this).val());
 });
 
	// Trigger on Enter press
	$(".woocommerce .products").on("keypress", ".quantity .qty", function(e) {
		if ((e.which||e.keyCode) === 13) {
			$( this ).parents(".product").find(".add_to_cart_button").trigger("click");
		}
	});

	$(document).ajaxComplete(function(){
		var pro_qty = $('.afadv_qnt_var_cart').prev();
		
		if (pro_qty.length > 0) {
			pro_qty.remove();
		}
	});

	var pro_qty = $('.afadv_qnt_var_cart').prev();
	
	if (pro_qty.length > 0) {
		pro_qty.remove();
	}
});
