function mawer(){

    let ganho_anual = 0;
    let gasto_anual = 0;
    let saldo_anual = 0;

    for (let i = 1; i<=3; i++){
        let ganho = Number(prompt("Ganho do mês" + i));
        let gasto = Number(prompt("Gaato do mês" + i));

        ganho_anual += ganho;
        gasto_anual += gasto;
    }

    saldo_anual = ganho_anual - gasto_anual;
    console.log("Ganho anual:" + ganho_anual);
    console.log("Gasto anual:" + gasto_anual);
    console.log("Saldo anual:" + saldo_anual);

    if (saldo_anual < 0){
        console.log("prejuizo");
    }else{
        console.log("lucro")
    }
}