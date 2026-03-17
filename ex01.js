function somarNumeros(){
    let soma = 0;
    let continuar = true;
     
    while (continuar){

        let numero = parseFloat(prompt("Digite um numero (ou digite 0 para finalizar):"));
        if(!isNaN(numero)) {
            soma += numero;
        }else{
            alert("Por favor, digite um numero válido");
        }
        continuar = confirm("deseja adicionar mais números?");
    }
    alert("A soma dos numeros é: " + soma);

}