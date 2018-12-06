$(document).ready(function(){
  $("#boton").click(function(){
    $("#resultado").find("tr[id='datos']").each(function(index, value){
      value.remove()
    })
    console.log($("#form1").serialize())
    $.ajax({
      url: "http://localhost:5000/clases",
      data: $("#form1").serialize(),
      type: "POST",
      success: function(resp){
        console.log(resp)
        mostrar_resultados(resp)
      },
      error: function(resp){
        console.log(resp)
      }
    })
  })
})

function mostrar_resultados(respuesta){
  $.each(respuesta, function(index, value){
    var row = "<tr id='datos'>"
    row += '<td>' + value['materia'] + '</td>'
    row += '<td>' + value['seccion'] + '</td>'
    row += '<td>' + value['nrc'] + '</td>'
    row += '</tr>'
    $('#resultado').append(row)
  })
}