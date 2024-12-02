class Temperatura {
    private valor: number; 

    constructor(valor: number) {
        this.valor = valor;
    }

    public paraFahrenheit(): number {
        return (this.valor * 9/5) + 32; 
    }

    public paraKelvin(): number {
        return this.valor + 273.15; 
    }

    public consultarTemperatura(): void {
        console.log(`Temperatura em Celsius: ${this.valor}°C`);
        console.log(`Temperatura em Fahrenheit: ${this.paraFahrenheit().toFixed(2)}°F`);
        console.log(`Temperatura em Kelvin: ${this.paraKelvin().toFixed(2)}K`);
    }
}


const temperatura = new Temperatura(25);
temperatura.consultarTemperatura();