const form = document.querySelector('.form');
const nome = form.querySelector('#nomeCliente');
const sobre = form.querySelector('#sobreCliente');
const peso = form.querySelector('#pesoCliente');
const altura = form.querySelector('#alturaCliente');

const resultado = document.querySelector('table');

const pessoas = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // pessoas.push({
    //     nome: nome.value,
    //     sobrenome: sobre.value,
    //     peso: peso.value,
    //     altura:altura.value
    // });

    // console.log(pessoas);

    resultado.innerHTML += `<tbody>
                                <tr>
                                    <td class="tdata">${nome.value} ${sobre.value}</td>
                                    <td class="tdata">${peso.value}kg</td>
                                    <td class="tdata">${altura.value}mt</td>
                                </tr>
                            </tbody>`
});
