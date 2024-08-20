const apikey= 'Ingrese su API-KEY'

async function Criptomonedas() {

    const res = await fetch(`https://rest.coinapi.io/v1/exchanges/`, {
        "method": "GET",
        "headers": {
            "X-coinHOST": "rest.coinapi.io",
            "X-coinAPI-KEY": apikey
        }
    });

    const data = await res.json();
    const lista= document.getElementById('lista-exchanges')

    data.slice(0,16).forEach(element => {
        const listItem=document.createElement('li')
        listItem.innerHTML=`
        <strong>Nombre: </strong>${element.name}<br>
        <strong>cotizacion por hora: </strong>${element.volume_1hrs_usd} USD <br> 
        <strong>cotizacion del dia: </strong>${element.volume_1day_usd} USD`;
        lista.appendChild(listItem);
    });
}

Criptomonedas()
    
