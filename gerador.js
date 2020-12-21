document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#btn').addEventListener('click',function(){

        let tamanho = document.querySelector('#tamanho').value;
       
        var maiuscula = document.getElementsByName("maiuscula");
        var e_maiuscula = "";
        for (var i=0; i<maiuscula.length; i++){
            if (maiuscula[i].checked){
                e_maiuscula =  maiuscula[i].value;
            }
        }

        var numero = document.getElementsByName("numero");
        var e_numero = "";
        for (var i=0; i<numero.length; i++){
            if (numero[i].checked){
                e_numero =  numero[i].value;
            }
        }

        var simbolo = document.getElementsByName("simbolo");
        var e_simbolo = "";
        for (var i=0; i<simbolo.length; i++){
            if (simbolo[i].checked){
                e_simbolo =  simbolo[i].value;
            }
        }

        document.querySelector("#senha_gerada").innerHTML = gerar(tamanho, e_maiuscula, e_numero, e_simbolo);

    }   )

    function gerar(tamanho, e_maiuscula, e_numero, e_simbolo){
        
        const lowerchars = [97, 122];
       
        //if(e_maiuscula === true){
            const upperchars = [65, 90];
        //}
        //if(e_numero === true){
            const numbers = [48, 57];
        //}
        //if(e_simbolo === true){
            const especialchars = [33, 35, 36, 37, 38, 40, 41, 42, 45, 46, 47, 63, 64, 91, 93, 94, 95, 123, 124, 125, 126];
        //}

        const ascii = [numbers, upperchars, lowerchars, especialchars];

        let senha='';
        
        for(let i=0; i<tamanho; i++){

            let type = parseInt(Math.random() * ascii.length);
            
            if(type === 3){
                senha += String.fromCharCode(especialchars[parseInt(Math.random() * especialchars.length)]);
            }else{
                senha += String.fromCharCode(Math.floor(Math.random() * (ascii[type][1] - ascii[type][0])) + ascii[type][0]);
            }
        }
        
        senha = "Senha: " + senha;

        return senha;
    }

}   )