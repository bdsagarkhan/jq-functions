$(document).ready( function() {
	// alert message
	$("#alert").click( function() {
		alert("Hello Friends! How are you?");
	});
	// hide
	$("#hide").click( function() {
		$("img").hide(1000);
	});
	// show
	$("#show").click( function() {
		$("img").show("fast");
	});
	// toggle
	$("#toggle").click( function() {
		$("img").toggle("slow");
	});
	// add
	$("#add").add("span").css( "background", "yellow" );
	// addclass
	$("#addClass").last().addClass( "selected highlight" );
	// after
	$("#after").click(function(){
    	$("#after_text").after("<p>Hello world!</p>");
	});
	// append
	$("#append_text_btn").click(function(){
	    $("#append_text").append(" <b>Appended text</b>.");
	});
	$("#append_list_btn").click(function(){
	    $("#append_list").append("<li>Appended item</li>");
  	});
	// prepend
	$("#prepend_text_btn").click(function(){
	    $("#prepend_text").prepend(" <b>Prepended text</b>.");
	});
	$("#prepend_list_btn").click(function(){
	    $("#prepend_list").prepend("<li>Prepended item</li>");
  	});
	// attr
	$("#attr").click(function(){
	    $("#attr_img").attr("width", "500");
	});
	// scrollbar
	$("#scrollbar").click(function(){
	    alert($("#scrollbar_text").scrollTop() + " px");
	});
	// val
	$("#val").click(function(){
	   $("input:text").val("bdsagarkhan");
	});
	// children
	$("#children").children().css({"color": "red", "border": "2px solid red"});
})