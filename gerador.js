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
        const upperchars = [65, 90];
        const numbers = [48, 57];
        const especialchars = [33, 35, 36, 37, 38, 40, 41, 42, 45, 46, 47, 63, 64, 91, 93, 94, 95, 123, 124, 125, 126];

        let senha='';
        
        if(tamanho<=20 && tamanho>0){
            if(e_maiuscula === 'true'){ //letras minusculas e maiusculas
                const ascii = [lowerchars, upperchars];
                if(e_numero === 'true'){ //letras minusculas, maiusculas e numeros
                    const ascii = [lowerchars, upperchars,  numbers];
                    if(e_simbolo === 'true'){ //letras minusculas, maiusculas, numeros e simbolos
                        const ascii = [lowerchars, upperchars, numbers, especialchars];
                        for(let i=0; i<tamanho; i++){
                            let type = parseInt(Math.random() * ascii.length);
                            
                            if(type === 3){
                                senha += String.fromCharCode(especialchars[parseInt(Math.random() * especialchars.length)]);
                            }else{
                                senha += String.fromCharCode(Math.floor(Math.random() * (ascii[type][1] - ascii[type][0])) + ascii[type][0]);
                            }
                        }
                    }else{ //letras minusculas, maiusculas e numeros
                        const ascii = [lowerchars, upperchars, numbers];
                        for(let i=0; i<tamanho; i++){
                        
                            let type = parseInt(Math.random() * ascii.length);
                            
                            senha += String.fromCharCode(Math.floor(Math.random() * (ascii[type][1] - ascii[type][0])) + ascii[type][0]);
                        }    
                    }
                }else{ //letras minusculas, maiusculas
                    if(e_simbolo==='true'){ // letras minusculas, maiusculas e simbolos
                        const ascii = [lowerchars, upperchars, especialchars];
                        for(let i=0; i<tamanho; i++){
                            let type = parseInt(Math.random() * ascii.length);

                            if(type === 2){
                                senha += String.fromCharCode(especialchars[parseInt(Math.random() * especialchars.length)]);
                            }else{
                                senha += String.fromCharCode(Math.floor(Math.random() * (ascii[type][1] - ascii[type][0])) + ascii[type][0]);
                            }
                        }
                    }else{ //letras minusculas e maiusculas
                        const ascii = [lowerchars, upperchars];
                        for(let i=0; i<tamanho; i++){
                            let type = parseInt(Math.random() * ascii.length);
                            senha += String.fromCharCode(Math.floor(Math.random() * (ascii[type][1] - ascii[type][0])) + ascii[type][0]);
                        }
                    }
                }
            }else{ //letras minusculas
                const ascii = [lowerchars];
                if(e_numero==='true'){ //letras minusculas e numeros
                    const ascii = [lowerchars, numbers];
                    if(e_simbolo==='true'){ //letras minusculas, numeros e simbolos
                        const ascii = [lowerchars, numbers, especialchars];
                        
                        for(let i=0; i<tamanho; i++){
                            let type = parseInt(Math.random() * ascii.length);

                            if(type === 2){
                                senha += String.fromCharCode(especialchars[parseInt(Math.random() * especialchars.length)]);
                            }else{
                                senha += String.fromCharCode(Math.floor(Math.random() * (ascii[type][1] - ascii[type][0])) + ascii[type][0]);
                            }
                        }
                    }else{ //letras minusculas e numeros
                        const ascii = [lowerchars, numbers];
                        for(let i=0; i<tamanho; i++){        

                            let type = parseInt(Math.random() * ascii.length);
                        
                            senha += String.fromCharCode(Math.floor(Math.random() * (ascii[type][1] - ascii[type][0])) + ascii[type][0]);
                        }
                    }
                }else{ //letras minusculas e simbolos
                    if(e_simbolo==='true'){
                        const ascii = [lowerchars, especialchars];
                            
                        for(let i=0; i<tamanho; i++){
                            let type = parseInt(Math.random() * ascii.length);

                            if(type === 1){
                                senha += String.fromCharCode(especialchars[parseInt(Math.random() * especialchars.length)]);
                            }else{
                                senha += String.fromCharCode(Math.floor(Math.random() * (ascii[type][1] - ascii[type][0])) + ascii[type][0]);
                            }
                        }
                    }else{ //letras minusculas
                        const ascii = [lowerchars];

                        for(let i=0; i<tamanho; i++){
                            let type = parseInt(Math.random() * ascii.length);
                            senha += String.fromCharCode(Math.floor(Math.random() * (ascii[type][1] - ascii[type][0])) + ascii[type][0]);
                        }
                    }
                }
            }
    }else{
        if(tamanho<=0){
            senha = "TAMANHO MÍNIMO É 1, POR FAVOR, INFORME UM TAMANHO MAIOR";
        }else{
            senha = "TAMANHO MÁXIMO É 20, POR FAVOR, INFORME UM TAMANHO MENOR"
        }
    }

        senha = "Senha: " + senha;

        return senha;
    }

}   )