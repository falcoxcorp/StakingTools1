export const parseNumber = (number: string | null, defaultValue: number = 0) => {
    try {
        return Math.floor(Number(number || defaultValue));
    } catch (e) {
        return defaultValue
    }
}

export function countZero(numero: number): number {
    // Convertir el número a una cadena
    const numeroStr = numero.toString();
    // Encontrar la posición del punto decimal
    const puntoDecimalIndex = numeroStr.indexOf('.');
    if (puntoDecimalIndex !== -1) {
        // Contar los ceros después del punto decimal
        let cerosDespuésDeLaComa = 0;
        for (let i = puntoDecimalIndex + 1; i < numeroStr.length; i++) {
            if (numeroStr[i] === '0') {
                cerosDespuésDeLaComa++;
            } else {
                break; // Salir del bucle cuando encontramos un dígito diferente de cero
            }
        }
        return cerosDespuésDeLaComa;
    }
    return 0; // Devolver 0 si no hay punto decimal
}