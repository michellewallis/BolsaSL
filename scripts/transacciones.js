// Filtro las opciones mostradas al usuario

document.getElementById("typeCompany").onchange = changeListener;
  
  function changeListener(){

  let value = document.getElementById("typeCompany").value
     
    if (value == "Automoción"){

      document.getElementById('Google').style.display = 'none'
      document.getElementById('Facebook').style.display = 'none'      
      document.getElementById('Mercedes').style.display = 'inherit'
      document.getElementById('Ferrari').style.display = 'inherit'
      document.getElementById('Lamborghini').style.display = 'inherit'
    }

    if (value == "Tecnología y comunicación"){

      document.getElementById('Google').style.display = 'inherit'
      document.getElementById('Facebook').style.display = 'inherit'
      document.getElementById('Mercedes').style.display = 'none'
      document.getElementById('Ferrari').style.display = 'none'
      document.getElementById('Lamborghini').style.display = 'none'

    }    
    
  }


//Añadimos a localStore el objeto extraido del formulario

let buttonPurchase = document.getElementById('buttonPurchase')
let i = 0

buttonPurchase.addEventListener('click', function (e) { 

    let typeCompany = document.getElementById('typeCompany').value   

    let company = document.getElementById('company').value    

    let price = 100    

    let quantity = document.getElementById('quantity').value 

    let totalPrice = (price*quantity)
    console.log(totalPrice)   
        
    e.preventDefault();

        i++

        localStorage.setItem(`transaction${i}`, JSON.stringify({
            tipoEmpresa: typeCompany ,
            empresa: company,
            precio: price,
            cantidad: quantity,
            total: totalPrice,
            }));

    document.getElementById('buttonPurchase').style.display = 'none'     

    })

//Cuando hagamos click en siguiente compra reseteamos el formulario

let nextPurchase = document.getElementById('nextPurchase')

nextPurchase.addEventListener('click', function (e) { 
    e.preventDefault();    
    document.getElementById("formTransaction").reset();
    document.getElementById('buttonPurchase').style.display = 'inherit'
})
    
//Leemos localStorage y lo dibujamos

let arrTransactions= []

buttonPurchase.addEventListener('click', function (e) { 
        
        e.preventDefault();        

        for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        arrTransactions.push(JSON.parse(localStorage.getItem(key)))
        }
        console.log(arrTransactions)
        let transactions = arrTransactions.map(({tipoEmpresa, empresa, precio,cantidad,total}) => {
        return ` <ul class="containerObject">
                    <li class="item1">Tipo de empresa: ${tipoEmpresa}</li>
                    <li class="item2">Empresa: ${empresa}</li>
                    <li class="item3">Número de acciones: ${precio}</li>
                    <li class="item4">Precio unitario:${cantidad}</li>
                    <li class="item5">Total:${total}</li>  
            </ul> `
            
        
        }).join("")

        document.getElementById("transactionContainer").innerHTML = transactions         

     })

