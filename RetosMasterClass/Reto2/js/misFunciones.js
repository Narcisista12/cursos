function traerInformacion() {
  $.ajax({
    url: "https://g8cd960471ae503-wfrpksbozawiofrs.adb.mx-queretaro-1.oraclecloudapps.com/ords/admin/skate/skate",
    type: "GET",
    datatype: "JSON",
    succeess: function (respuesta) {
      console.log(respuesta);
      pintarRespuesta(respuesta.items);
    },
  });
}

function pintarRespuesta(items) {
  let myTable = "<table>";
  for (i = 0; i < items.length; i++) {
    myTable += "<tr>";
    myTable += "<td>" + items[i].id + "</dt";
    myTable += "<td>" + items[i].brand + "</dt";
    myTable += "<td>" + items[i].model + "</dt";
    myTable += "<td>" + items[i].category_id + "</dt";
    myTable += "<td>" + items[i].name + "</dt";
    myTable = "</tr>";
  }
  myTable += "</table>";
  $("#resultado").append(myTable);
}
