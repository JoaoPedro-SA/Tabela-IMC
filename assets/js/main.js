//alert("Fim do mundo 1");
//prompt("fim do mundo 2");
//confirm("fim do mundo 3")

// ENTRADA DOS DADOS DO HTML PARA O JS 
const form = document.querySelector('#form');
const resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que o formulário seja enviado normalmente

        const peso = document.querySelector('#peso').value;
        const altura = document.querySelector('#altura').value;
        if (peso === '' || peso === NaN || peso === undefined || peso === null) {
            alert('O campo peso esta vazio')
            return
        }
        if (altura === '' || altura === NaN || altura === undefined || altura === null) {
            alert('O campo altura esta vazio')
            return
        }



        // Aqui você pode fazer o que quiser com os valores, para exibir na página
        console.log("Peso:", peso);
        console.log("Altura:", altura);

        if (!peso === peso) {     // isso só coloquei no codigo para me lembra de uma forma como apresentar erro caso o dado do form vem errado 
            peso = "erro";
        }


        if (!altura === altura) {
            altura = "erro";
        }



        // PROCESSO DOS DADOS 
        // aqui estar funcionando normal 👇

        // This JavaScript code defines two functions, imc and levelimc, which calculate the Body Mass Index (BMI) and provide a classification based on the BMI value.

        function imc(y, z) {
            z = z / 100
            x = y / (z * z);
            return x;
        }
        function levelimc(x) {
            if (x > 0 && x <= 19) {
                x = ` Magreza`;
                resultado.style.backgroundColor = 'yellow';
                resultado.style.color = 'black';
            }
            else if (x > 19 && x <= 25) {
                x = "Normal";
                resultado.style.backgroundColor = 'green';
                resultado.style.color = 'white';
            }
            else if (x > 25 && x <= 30) {
                x = "sobrepeso";
                resultado.style.backgroundColor = 'yellow';
                resultado.style.color = 'black';
            }
            else if (x > 30 && x <= 35) {
                x = "obesidade 1";
                resultado.style.backgroundColor = 'orange';
                resultado.style.color = 'black';
            }
            else if (x > 35 && x <= 40) {
                x = 'obesidade 2'
                resultado.style.backgroundColor = 'red';
                resultado.style.color = 'black';
            }
            else if (x > 40) {
                x = "obesidade 3 (grave ⚠🛑)";
                resultado.style.backgroundColor = 'black';
                resultado.style.color = 'white';
            }
            else {
                x = 'erro';
            }
            return x;
        }

        /// SAIDA DO DADOS

        console.log(imc(peso, altura));

        let r = imc(peso, altura);
        let r1 = levelimc(r);
        console.log(r1);


        function result(msg) {
            resultado.innerHTML = `seu IMC = ${parseInt(r)}`;

            let p = document.createElement('p'); // estar criando um elemento paragrafo 
            p.innerHTML = (`<p class ="resultado">${msg}</p>`); // estar adicionando um texto(valor) no paragrafo
            resultado.appendChild(p); // estar atribuindo o paragrafo p para fica dentro da div resultado

        }

        result(`seu peso estar ${r1}`);

        let r3 = parseInt(r);
        let i = 1;




        document.getElementById('console').innerHTML += (` ${peso} / (${altura} * ${altura}) = IMC = ${r3} status ${r1}`);
        document.getElementById('console').innerHTML += (`<br>`);

    });
});




// OBRIGADO POR VER MEU PROJETO 