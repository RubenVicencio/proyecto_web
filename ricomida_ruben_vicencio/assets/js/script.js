$(function () {
  $(".carousel").carousel();

  $("#enviar_correo").click(function () {
    alert("El correo fue enviado correctamente.");
  });

  $("#favoritos").click(function () {
    alert("Añadido a favoritos correctamente...");
  });

  $(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });

  $("h3").dblclick(function () {
    $(this).css("color", "red");
  });

  $(".card-body").click(function () {
    $(".card-text").toggle();
  });
});
