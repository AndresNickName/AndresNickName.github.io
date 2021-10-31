
//objeto de los tickets
var TICKETS = [
    { ticket: "SPD-001", titulo: "Spiderman - 3 Spiderman", duracion: "3:00 H", posicion: "1" },
];

//funcion para buscar tickets
function BuscarTickets(ticketBuscado) {

    const size = TICKETS.length;
    let index = 0;
    let asistio = false;
    let msjSalida = "";

    while (index < size) {
        let itemIterado = TICKETS[index].ticket;
        let butaca = TICKETS[index].posicion;
        if (itemIterado === ticketBuscado) {
            asistio = true;
            msjSalida = `El cliente con Ticket ${ticketBuscado} -> asisitio a ver la pelicula, se sentó en la butaca No. ${butaca}`;
        }
        index++;
    }

    if (asistio) {
        alert(asistio + "\n" + msjSalida);
        limpiar();
    } else {
        alert("No asistio o No existe el ticket");
    }

}

//funcion para crear un ticket
function CrearTickets(prefijoPelicula, tituloPelicula, timeEstimated, butaca) {
    
    let inc = butaca;
    let complementoTicket = '';
    
    if (inc >= 10 && inc < 100) {
        complementoTicket = '0';
    } else if (inc < 10) {
        complementoTicket = '00';
    }

    let t = prefijoPelicula + '-' + complementoTicket + (inc);
    let result = TICKETS.filter(x => x.posicion == inc && x.titulo == tituloPelicula);
    
    if (result.length) {
        // La propiedad existe
        alert("El ticket ya existe")
    } else {
        TICKETS.push({ ticket: t, titulo: tituloPelicula, duracion: timeEstimated, posicion: butaca })
        ObtenerTickets();
    }
    limpiar();
    console.log(TICKETS);
}

//funcion para mostrar los objetos en la tabla: imprimir tabla
function ObtenerTickets() {

    let tabla = document.getElementById("tablaContenido");
    tabla.innerHTML = "";
    for (let i = 0; i < TICKETS.length; i++) {
        var fila = "<tr><td>" + TICKETS[i].ticket + "</td><td>" + TICKETS[i].titulo + "</td><td>" + TICKETS[i].duracion + "</td><td>" + TICKETS[i].posicion + "</td></tr>";
        var tbl = document.createElement("TR");
        tbl.innerHTML = fila;
        tabla.appendChild(tbl);
    }
}

//funcion para eliminar un ticket y re-acomodar los index del resto
function DeleteTickets(ticket) {

    let index = 0;

    while (index < TICKETS.length) {
        let itemIterado = TICKETS[index].ticket;

        if (itemIterado === ticket) {

            for (let i = index; i < TICKETS.length; i++) {
                TICKETS[i] = TICKETS[i + 1];
            }
            TICKETS.pop();
            console.log(TICKETS)
            ObtenerTickets();
        }
        index++;
    }

    limpiar();
}

//funcion para vaciar los input
function limpiar() {
    document.getElementById("buscarTicket").value = "";
    document.getElementById("prefijo").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("duracion").value = "";
    document.getElementById("butaca").value = "";
    document.getElementById("TicketEliminar").value = "";


}

//crea eventos onclick en los botones
function eventoCrear() {
    let prefijo = document.getElementById("prefijo").value,
        titulo = document.getElementById("titulo").value,
        duracion = document.getElementById("duracion").value,
        posicion = document.getElementById("butaca").value;
    CrearTickets(prefijo, titulo, duracion, posicion);
}

function eventoBuscar() {
    let buscar = document.getElementById("buscarTicket").value;
    BuscarTickets(buscar);
}

function eventoEliminar() {
    let eliminar = document.getElementById("TicketEliminar").value;
    DeleteTickets(eliminar);
}


// ejecuta los modal
$('#exampleModal').on('show.bs.modal', function () {
    var modal = $(this)
    modal.find('.modal-title').text('Generar Ticket Nuevo')

});

$('#exampleModal2').on('show.bs.modal', function () {
    var modal = $(this)
    modal.find('.modal-title').text('Busqueda de Ticket')

});

$('#exampleModal3').on('show.bs.modal', function () {
    var modal = $(this)
    modal.find('.modal-title').text('Eliminar Ticket')

});