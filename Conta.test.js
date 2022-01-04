const Cliente = require('./Cliente');
const Conta = require('./Conta');

/*
test('teste saque valor igual ao saldo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(100.0);
    contaDoCliente01.sacar(100.0);
    expect(contaDoCliente01.saldo).toBe(0.0);
});

test('teste saque valor maior que o saldo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(100.0);
    contaDoCliente01.sacar(200.0);
    expect(contaDoCliente01.saldo).toBe(100.0);
});

test('teste deposito valor maior que o saldo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(200.0);
    expect(contaDoCliente01.saldo).toBe(200.0);
});

test('teste deposito valor negativo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(-200.0);
    expect(contaDoCliente01.saldo).toBe(0);
});
*/

test('teste transfere 50.0 de A para B', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;
    contaDoCliente01._saldo = 100.0;
    contaDoCliente01.cliente = cliente01;

    var cliente02 = new Cliente();
    cliente02.nome = 'Maria das Graças';
    cliente02.cpf = '11100099954';
    var contaDoCliente02 = new Conta();
    contaDoCliente02.agencia = 1102;
    contaDoCliente02.numero = 2002;  
    contaDoCliente02._saldo = 50.0;  
    contaDoCliente02.cliente = cliente02;

    contaDoCliente01.transferir(50.0, contaDoCliente02);
    expect(contaDoCliente01.saldo).toEqual(50.0);
    expect(contaDoCliente02.saldo).toEqual(100.0)
});

test('teste transfere 50.0 de B para A', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;
    contaDoCliente01._saldo = 100.0;
    contaDoCliente01.cliente = cliente01;

    var cliente02 = new Cliente();
    cliente02.nome = 'Maria das Graças';
    cliente02.cpf = '11100099954';
    var contaDoCliente02 = new Conta();
    contaDoCliente02.agencia = 1102;
    contaDoCliente02.numero = 2002;  
    contaDoCliente02._saldo = 50.0;  
    contaDoCliente02.cliente = cliente02;

    contaDoCliente02.transferir(50.0, contaDoCliente01);
    expect(contaDoCliente01.saldo).toEqual(150.0);
    expect(contaDoCliente02.saldo).toEqual(0.0)
});

test('teste transfere -100.0 de A para B', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;
    contaDoCliente01._saldo = 100.0;
    contaDoCliente01.cliente = cliente01;

    var cliente02 = new Cliente();
    cliente02.nome = 'Maria das Graças';
    cliente02.cpf = '11100099954';
    var contaDoCliente02 = new Conta();
    contaDoCliente02.agencia = 1102;
    contaDoCliente02.numero = 2002;  
    contaDoCliente02._saldo = 50.0;  
    contaDoCliente02.cliente = cliente02;

    contaDoCliente01.transferir(-100.0, contaDoCliente02);
    expect(contaDoCliente01.saldo).toEqual(100.0);
    expect(contaDoCliente02.saldo).toEqual(50.0);
});

test('teste transfere 500.0 de B para A', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;
    contaDoCliente01._saldo = 100.0;
    contaDoCliente01.cliente = cliente01;

    var cliente02 = new Cliente();
    cliente02.nome = 'Maria das Graças';
    cliente02.cpf = '11100099954';
    var contaDoCliente02 = new Conta();
    contaDoCliente02.agencia = 1102;
    contaDoCliente02.numero = 2002;  
    contaDoCliente02._saldo = 50.0;  
    contaDoCliente02.cliente = cliente02;

    contaDoCliente02.transferir(500.0, contaDoCliente01);
    expect(contaDoCliente01.saldo).toEqual(100.0);
    expect(contaDoCliente02.saldo).toEqual(50.0)
});

test('teste transfere 100.0 de A para A', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;
    contaDoCliente01._saldo = 100.0;
    contaDoCliente01.cliente = cliente01;

    var cliente02 = new Cliente();
    cliente02.nome = 'Maria das Graças';
    cliente02.cpf = '11100099954';
    var contaDoCliente02 = new Conta();
    contaDoCliente02.agencia = 1102;
    contaDoCliente02.numero = 2002;  
    contaDoCliente02._saldo = 50.0;  
    contaDoCliente02.cliente = cliente02;

    contaDoCliente01.transferir(100.0, contaDoCliente01);
    expect(contaDoCliente01.saldo).toEqual(100.0);
    expect(contaDoCliente02.saldo).toEqual(50.0)
});
