$(document).ready(function () {
  $("#btn1").click(function () {
    $(".Team1 li:last-child").after(`<li>${$("#name").val()}</li>`);
    $("#name").val("");
  });

  $("#btn2").click(function () {
    $(".Team2 li:last-child").after(`<li>${$("#name").val()}</li>`);
    $("#name").val("");
  });
});
