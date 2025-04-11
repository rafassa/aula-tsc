interface MathFunc{
    (x:number, y:number): number; 
}

const sun: MathFunc = ((x:number, y:number):number =>{
    return x+y;
});


const value = sun(2, 3);


const log = ((mensagem:string ): void =>{
    console.log(mensagem);
});

const sub: MathFunc = (x: number , y:number) =>{
    return x-y
};
