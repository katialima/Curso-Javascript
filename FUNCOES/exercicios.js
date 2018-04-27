(function(){
    function calcularIMC(){                    
        
        var total = 0;
        //var qtd = arguments.length;
        var altura = 0;
        var peso = 0;
        var sit = "";

        peso = prompt('Digite o peso');
        altura = prompt('Digite a altura (NÃO USE VIRGULA)');

        peso = parseFloat(peso);
        altura = parseFloat(altura);

        total = peso/(altura*altura);

        switch(true){
        	case (total < 17):
            	sit = "Muito abaixo do peso";
            	break;
            case (total < 18.5):
            	sit = "Abaixo do peso";
            	break;
            case (total < 25):
            	sit = "Peso normal";
            	break;
            case (total < 30):
            	sit = "Acima do peso";
            	break;
            case (total < 35):
            	sit = "Obesidade grau I";
            	break;
            case (total < 40):
            	sit = "Obesidade grau II";
            	break;
            case (total >= 40):
            	sit = "Obesidade grau III";
                break;
            default:
                alert('Erro');
                sit = "Inválido";            
        }                   
        

       	console.log(total, sit);
        alert('IMC: ' + Math.round(total) + '  Situação: ' + sit);
        
    }
        calcularIMC();
     
  
})()