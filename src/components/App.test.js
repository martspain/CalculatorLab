/* eslint-disable */
import React from 'react';
import { screen, render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
//import Calculator from './Calculator';

describe('Calculator App Testing', () =>{

    it('Validar que la calculadora exista y que el display no tenga contenido inicial.', () => {
        //Se renderiza el app
        render(<App />);
        
        //Se verifica que la calculadora exista
        expect(screen.getByTestId('calculadoraTest')).not.toBeNull();

        //Se verifica que el display este vacío
        expect(screen.getByDisplayValue('')).toBeDefined();
        
        //screen.debug();
    });

    it('Verificar que se agregen y borren números.', () => {
        //Se renderiza el app
        render(<App />);

        //Se hace click
        fireEvent.click(screen.getByText('5'));

        //Se verifica que el display tenga el numero 5
        expect(screen.getByDisplayValue('5')).toBeDefined();

        //Se hace otro click
        fireEvent.click(screen.getByText('0'));

        //Se verifica que el display tenga el numero 50
        expect(screen.getByDisplayValue('50')).toBeDefined();

        //Se da click al boton de borrar
        fireEvent.click(screen.getByText('←'));

        //Se verifica que se borró el número 0
        expect(screen.getByDisplayValue('5')).toBeDefined();

        //Se da click a los botones 3 y 2
        fireEvent.click(screen.getByText('3'));
        fireEvent.click(screen.getByText('2'));

        //Se verifica que el display tenga el número 532
        expect(screen.getByDisplayValue('532')).toBeDefined();

        //Se da click al boton AC para borrar todo
        fireEvent.click(screen.getByText('AC'));

        //Se verifica que el display este vacío
        expect(screen.getByDisplayValue('')).toBeDefined();

        //screen.debug();
    });

    it('Validar la suma.', () => {
        //Se renderiza el app
        render(<App />);
        
        //Se valida la suma a través de los comandos rudimentarios ( x + y = z )
        //Se ingresa un número (40)
        fireEvent.click(screen.getByText('4'));
        fireEvent.click(screen.getByText('0'));

        //Se da click al boton de suma (+)
        fireEvent.click(screen.getByText('+'));

        //Se ingresa otro numero (30)
        fireEvent.click(screen.getByText('3'));
        fireEvent.click(screen.getByText('0'));
        
        //Se da click al boton de igual (=)
        fireEvent.click(screen.getByText('='));

        //Se verifica que el display muestre el resultado (70)
        expect(screen.getByDisplayValue('70')).toBeDefined();

        //Se da click al boton de limpiar los resultados (AC)
        fireEvent.click(screen.getByText('AC'));

        //Se valida la suma a través de una cadena de operaciones ( x + y + z + ... )
        //Se ingresa un número (25)
        fireEvent.click(screen.getByText('2'));
        fireEvent.click(screen.getByText('5'));

        //Se da click al boton de suma (+)
        fireEvent.click(screen.getByText('+'));

        //Se ingresa otro número (7)
        fireEvent.click(screen.getByText('7'));

        //Se da click al boton de suma (+)
        fireEvent.click(screen.getByText('+'));

        //Se verifica que el display muestre el resultado de la suma anterior (32)
        expect(screen.getByDisplayValue('32')).toBeDefined();

        
        //Se ingresa otro número (12)
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('2'));

        //Se da click al boton de suma (+)
        fireEvent.click(screen.getByText('+'));

        //Se verifica que el display muestre el resultado de la suma anterior (44)
        expect(screen.getByDisplayValue('44')).toBeDefined();

        //Se ingresa otro número (50)
        fireEvent.click(screen.getByText('5'));
        fireEvent.click(screen.getByText('0'));

        //Se da click al boton de igual (=)
        fireEvent.click(screen.getByText('='));

        //Se verifica que el display muestre el resultado de la suma (94)
        expect(screen.getByDisplayValue('94')).toBeDefined();

        //screen.debug();
    });

    it('Validar la resta', () => {
        //Se renderiza el app
        render(<App />);

        //Se valida la resta a través de los comandos rudimentarios ( x − y = z )
        //Se ingresa un número (100)
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('0'));
        fireEvent.click(screen.getByText('0'));

        //Se da click al boton de resta (−)
        fireEvent.click(screen.getByText('−'));

        //Se ingresa otro numero (40)
        fireEvent.click(screen.getByText('4'));
        fireEvent.click(screen.getByText('5'));
        
        //Se da click al boton de igual (=)
        fireEvent.click(screen.getByText('='));

        //Se verifica que el display muestre el resultado (55)
        expect(screen.getByDisplayValue('55')).toBeDefined();

        //Se da click al boton de limpiar los resultados (AC)
        fireEvent.click(screen.getByText('AC'));

        //Se valida la resta a través de una cadena de operaciones ( x − y − z − ... )
        //Se ingresa un número (70)
        fireEvent.click(screen.getByText('7'));
        fireEvent.click(screen.getByText('0'));

        //Se da click al boton de resta (−)
        fireEvent.click(screen.getByText('−'));

        //Se ingresa otro número (7)
        fireEvent.click(screen.getByText('7'));

        //Se da click al boton de resta (−)
        fireEvent.click(screen.getByText('−'));

        //Se verifica que el display muestre el resultado de la resta anterior (63)
        expect(screen.getByDisplayValue('63')).toBeDefined();
        
        //Se ingresa otro número (35)
        fireEvent.click(screen.getByText('3'));
        fireEvent.click(screen.getByText('5'));

        //Se da click al boton de suma (−)
        fireEvent.click(screen.getByText('−'));

        //Se verifica que el display muestre el resultado de la resta anterior (28)
        expect(screen.getByDisplayValue('28')).toBeDefined();

        //Se ingresa otro número (10)
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('0'));

        //Se da click al boton de igual (=)
        fireEvent.click(screen.getByText('='));

        //Se verifica que el display muestre el resultado de la resta (18)
        expect(screen.getByDisplayValue('18')).toBeDefined();

        //screen.debug();
    });

    it('Validar la multiplicacion', () => {
        //Se renderiza el app
        render(<App />);

        //Se valida la multiplicacion a través de los comandos rudimentarios ( x × y = z )
        //Se ingresa un número (120)
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('2'));
        fireEvent.click(screen.getByText('0'));

        //Se da click al boton de multiplicacion (×)
        fireEvent.click(screen.getByText('×'));

        //Se ingresa otro numero (3)
        fireEvent.click(screen.getByText('3'));
        
        //Se da click al boton de igual (=)
        fireEvent.click(screen.getByText('='));

        //Se verifica que el display muestre el resultado (360)
        expect(screen.getByDisplayValue('360')).toBeDefined();

        //Se da click al boton de limpiar los resultados (AC)
        fireEvent.click(screen.getByText('AC'));

        //Se valida la multiplicacion a través de una cadena de operaciones ( x × y × z × ... )
        //Se ingresa un número (2)
        fireEvent.click(screen.getByText('2'));

        //Se da click al boton de multiplicacion (×)
        fireEvent.click(screen.getByText('×'));

        //Se ingresa otro número (3)
        fireEvent.click(screen.getByText('3'));

        //Se da click al boton de multiplicacion (×)
        fireEvent.click(screen.getByText('×'));

        //Se verifica que el display muestre el resultado de la multiplicacion anterior (6)
        expect(screen.getByDisplayValue('6')).toBeDefined();
        
        //Se ingresa otro número (4)
        fireEvent.click(screen.getByText('4'));

        //Se da click al boton de multiplicacion (×)
        fireEvent.click(screen.getByText('×'));

        //Se verifica que el display muestre el resultado de la multiplicacion anterior (28)
        expect(screen.getByDisplayValue('24')).toBeDefined();

        //Se ingresa otro número (5)
        fireEvent.click(screen.getByText('5'));

        //Se da click al boton de igual (=)
        fireEvent.click(screen.getByText('='));

        //Se verifica que el display muestre el resultado de la multiplicacion (120)
        expect(screen.getByDisplayValue('120')).toBeDefined();

        //screen.debug();
    });

    it('Validar la división', () => {
        //Se renderiza el app
        render(<App />);

        //Se valida la division a través de los comandos rudimentarios ( x ÷ y = z )
        //Se ingresa un número (100)
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('0'));
        fireEvent.click(screen.getByText('0'));

        //Se da click al boton de division (÷)
        fireEvent.click(screen.getByText('÷'));

        //Se ingresa otro numero (10)
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('0'));
        
        //Se da click al boton de igual (=)
        fireEvent.click(screen.getByText('='));

        //Se verifica que el display muestre el resultado (10)
        expect(screen.getByDisplayValue('10')).toBeDefined();

        //Se da click al boton de limpiar los resultados (AC)
        fireEvent.click(screen.getByText('AC'));

        //Se valida la division a través de una cadena de operaciones ( x ÷ y ÷ z ÷ ... )
        //Se ingresa un número (100)
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('0'));
        fireEvent.click(screen.getByText('0'));

        //Se da click al boton de division (÷)
        fireEvent.click(screen.getByText('÷'));

        //Se ingresa otro número (10)
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('0'));

        //Se da click al boton de division (÷)
        fireEvent.click(screen.getByText('÷'));

        //Se verifica que el display muestre el resultado de la division anterior (10)
        expect(screen.getByDisplayValue('10')).toBeDefined();
        
        //Se ingresa otro número (10)
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('0'));

        //Se da click al boton de division (÷)
        fireEvent.click(screen.getByText('÷'));

        //Se verifica que el display muestre el resultado de la division anterior (1)
        expect(screen.getByDisplayValue('1')).toBeDefined();

        //Se ingresa otro número (10)
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('0'));

        //Se da click al boton de igual (=)
        fireEvent.click(screen.getByText('='));

        //Se verifica que el display muestre el resultado de la division (0.1)
        expect(screen.getByDisplayValue('0.1')).toBeDefined();

        //screen.debug();
    });

    it('Validar la operación módulo', () => {
        //Se renderiza el app
        render(<App />);

        //Se ingresa un número (12)
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('2'));

        //Se da click al boton de operación módulo (%)
        fireEvent.click(screen.getByText('%'));

        //Se ingresa otro número (7)
        fireEvent.click(screen.getByText('7'));

        //Se da click al boton de igual (=)
        fireEvent.click(screen.getByText('='));

        //Se verifica que el display muestre el resultado de la operación módulo (5)
        expect(screen.getByDisplayValue('5')).toBeDefined();

        //screen.debug();
    });

    it('Validar el funcionamiento del botón +/-', () => {
        //Se renderiza el app
        render(<App />);

        //Primero se prueba que no se puedan obtener numeros negativos si el boton +/- no esta activo.
        //Se ingresa un número (3)
        fireEvent.click(screen.getByText('3'));

        //Se da click al boton de resta (−)
        fireEvent.click(screen.getByText('−'));

        //Se ingresa un número mayor al primero (5)
        fireEvent.click(screen.getByText('5'));

        //Se da click al boton de igual (=)
        fireEvent.click(screen.getByText('='));

        //Se verifica que el display muestre un error
        expect(screen.getByDisplayValue('ERROR')).toBeDefined();

        //Se da click al boton de limpiar los resultados (AC)
        fireEvent.click(screen.getByText('AC'));

        //Ahora se intenta lo mismo pero con el botón de +/- activado
        //Se da click al boton de ±
        fireEvent.click(screen.getByText('±'));

        //Se ingresa un número (3)
        fireEvent.click(screen.getByText('3'));

        //Se da click al boton de resta (−)
        fireEvent.click(screen.getByText('−'));

        //Se ingresa un número mayor al primero (5)
        fireEvent.click(screen.getByText('5'));

        //Se da click al boton de igual (=)
        fireEvent.click(screen.getByText('='));

        //Se verifica que el display muestre el resultado negativo (-2)
        expect(screen.getByDisplayValue('-2')).toBeDefined();

        //screen.debug();
    });

    afterAll(cleanup);
});
