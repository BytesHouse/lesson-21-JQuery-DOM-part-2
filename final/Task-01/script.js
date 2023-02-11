$(document).ready(function () {
  $("#btn1").click(function () {
    $("ol").append(" <li>Appended item</li>");
  });

  $("#btn2").click(function () {
    $("ol").prepend("<li>Prepended item</li>");
  });
});
