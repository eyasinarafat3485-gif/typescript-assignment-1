function multiplyValue(value: number, multiplier?: number): number {
    if(multiplier === undefined){
        multiplier = 2;
    }
    return value * multiplier;
}


function processInput(value: string | number | boolean) : string | number {
    if(typeof value === "string"){
        return value.trim().toLocaleUpperCase();
    }
    else if(typeof value === "number") {
        return value * 10;
    }
    else {
        return value ? "Active" : "Inactive"
    }
}



