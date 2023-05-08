
//función que valida un formulario
 $(function(){
    $("#mi-formulario").validate({
        rules:{
            nom:{
                required:true
            },
            correo:{
                required:true,
                email:true
            },
            fono:{
                required:true,
                number:true
            },
            genero:{
                required:true
            },
            fecha:{
                required:true
            }
        },//rules
        messages:{
            nom:{
                required:'Ingrese nombre de usuario',
                minlength:'Formato incorrecto de nombre (3)'
            },
            correo:{
                required:'Ingrese correo de usuario',
                email: 'Formato de correo inválido'
            },
            fono:{
                required:'Ingrese teléfono',
                minlength:'Cantidad de digitos insuficientes(9)'
            },
            genero:{
                required:'seleccione un genero'
            },
            fecha:{
                required:'Seleccione una fecha válida',
                min:'Fecha incorrecta'
            },
        },//messages                
    })
});

