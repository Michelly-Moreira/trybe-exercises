/*1.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers)

2.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for(i=0;i<numbers.length;i+=1){
    resultado = (numbers[i]+resultado)
    console.log(resultado)
}
 
3.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for(i=0;i<numbers.length;i+=1){
    resultado = (numbers[i]+resultado);
    if(i==numbers.length-1){
    resultado = resultado/numbers.length;
    console.log(resultado);
    }
}

4.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for(i=0;i<numbers.length;i+=1){
    resultado = (numbers[i]+resultado);

    if(i==numbers.length-1){
    resultado = resultado/numbers.length;
    
    if (resultado>20){
        console.log("valor maior que 20");
    }else{
        console.log("valor menor que 20");
    }
}

}
*/
5. ------------ERRADO!!!
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let firstnumber;

for(i=1;i<numbers.length;i+=1){
   numbers[i]
    if(numbers[0]>numbers[i]){
        firstnumber=numbers[0];
    } else {firstnumber=numbers[i];
    }
    console.log(firstnumber)
}

6.   --------ERRADO!!!
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i=0;i<numbers.length;i+=1){
    if (numbers[i] %2 != 0){
        console.log(numbers[i]);
    }else{
        console.log("nenhum valor ímpar encontrado");
    }
}

7.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let firstnumber;

for(i=1;i<numbers.length;i+=1){
   numbers[i]
    if(numbers[0]<numbers[i]){
        firstnumber=numbers[0];
    } else {firstnumber=numbers[i];
    }
    console.log(firstnumber)
}
/*
8.
let meuArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

for(i = 0;i<meuArray.length;i+=1){
    console.log(meuArray[i]);
}

9.
let meuArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
for(i = 0;i<meuArray.length;i+=1){
     console.log(meuArray[i]/2);
}
*/