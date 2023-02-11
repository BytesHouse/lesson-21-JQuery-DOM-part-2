"use strict"
let count = 1;
$(document).ready(function() {
	$("#add").click(function () {
		let item = $("#text_item").val();
		//$("#todoList").append(`<li id="Item Item${count}" onclick="changeStatus(${count})">${item}</li>`);
		$("#todoList").append(`<li class="Item Item${count}">${item}</li>`);
		$("#text_item").val('');
	})
	$("html").on('click', '.Item', function () {
		$(this).fadeOut(1000);
		setTimeout(() => $(this).remove(), 1000);
	})
});