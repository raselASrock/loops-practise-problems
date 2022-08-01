var numbers = [45, 72, 68, 40, 78, 96]
for(var i = 0; i < numbers.length ; i++ ){
    var number = numbers[i];
    if( number > 50){
        continue;
    }
    console.log(number)
}