
// Escuchar al botón de "Método de búsqueda"

document.getElementById("method").addEventListener('change', (e)=>{

    e.preventDefault()

    let methodValue = document.getElementById("method").value    

    let dateContainer= document.getElementById("dateContainer")

        
    if (methodValue === "Total facturas"){

        dateContainer.style.display='none'

    }
    
    if (methodValue === "Facturas por fechas") {

       dateContainer.style.display='inherit'

    }

})

//Escuchar al botón de búsqueda 

let startDateSearch=""
let endDateSearch=""

document.getElementById('btn-search').addEventListener('click', (e)=>{

    e.preventDefault();

    document.getElementById("selectMethod").style.display='none'


    let methodValue = document.getElementById("method").value
    let containerTotalBills= document.getElementById("containerTotalBills")
    let containerDateBills= document.getElementById('containerDateBills')


    if(methodValue === "Total facturas"){

        containerTotalBills.style.display='inherit'
        containerDateBills.style.display='none'

    }

    if(methodValue === "Facturas por fechas"){

        containerTotalBills.style.display='none'
        containerDateBills.style.display='inherit'

        startDateSearch = document.getElementById("start").value
        endDateSearch = document.getElementById("end").value

    }

})












