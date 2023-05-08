function obtenerDatos() {
    let url='https://api.thecatapi.com/v1/images/search';
    fetch(url)
        .then(response =>response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    }
    const mostrarData=(data)=>{
        console.log(data)
        let body=""
        for (var i=0; i<data.length; i++)
        {
            body+=`<tr>                      
                <td>${data[i].id}</td>       
                <td><img class="img-responsive" src="${data[i].url}"></td>
                </tr>`
        }
        document.getElementById('data').innerHTML=body
    }