// Uma revendedora de carros usados paga a seus vendedores um salário fixo de R$2000,00 por mês. Os vendedores recebem uma comissão para cada carro vendido, no valor de R$100 + 5% do valor do carro.

// Crie uma função que leia o número de carros vendidos por uma pessoa (qtdeCarrosVendidos, um número inteiro) e o valor total de suas vendas do mês (valorTotalVendas, também um número, correspondente ao valor total recebido por todas as vendas efetuadas).

// Retorne o salário final do mês do funcionário com base nesses valores.

const salarioMes = 2000 
const valorCarro = 5500
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas){
    const bonusSalario = ((qtdeCarrosVendidos * 100) + valorCarro/100 * qtdeCarrosVendidos)
    const salarioFinal = salarioMes + bonusSalario

}

calculaSalario(3, 13000)