let Soma = function(Number1 , Number2){
   let  total = Number1 + Number2
    return total
}

let Number1 = 21
let  Number2 = 34
  let nome = 'Henriques'

console.log(Number1)
console.log(Number2)
console.log(`O seu Valor total e de ${Soma(Number1 , Number2)}`)
console.log(`
                ja benvindo ao mundo dos devs ${nome }

`)

console.log(13.54 / 'asd')
console.log(false == false)

//Objecto

console.log({
    noma: 'Faustino', 
    idade: 23 , 
    andar: function(){
        
    }
})

//arays


const anima = [
    'lion' ,
   123 ,
   'Henriques', 
   {
    A: 123.180
   }
    

]

console.log(anima[2])
console.log(anima[0 , 2, 1])


console.log(anima[2].A)

const Imetro = [
    'Curso' , 
    'Departamento', 
    'Bibilioteca' ,
    {
        Decato: 'Faustino Henriques'
    }
]

console.log(Imetro[3].Decato)

let weigth; 
console.log(typeof weigth  == undefined)

let nome1 , age , stars , isCSubcribe 
nome = 'Henriques '
stars = 12.5
age = 24
isCSubcribe = true


let student = {
    name: 'Faustino', 
    age:22, 
    stars: 34 ,
    isCSubcribe: true
}


let africa = function(bits , bit1 , bit4){
    interpolacao = bits + bit1 + bit4
    return interpolacao


}

let bits = { 
     mp3: '24meg', 
     mov:'45'
}

let bit4 = 'films'
let  bit1 = '4k'
console.log(bits)
console.log(bit1)
console.log(` o valor validdade  e ${bit4}`)
console.log(`aplication using interpolcao  ${africa(bits.mp3 , bit1 , bit4)}`)



