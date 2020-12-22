let name = prompt("Как Вас зовут?");
let age = prompt("Сколько Вам лет?");
console.log(age);
if ( age > 0 && age < 17 ) {
    alert (`Привет, ${name}! Вы подросток!`);
} else if  (  age > 16 && age < 40 ) {
    alert (`Привет, ${name}! Вы молодой человек`);
} else if ( age > 41 ) {
    alert (`Привет, name! Вы старичок`);
} else if ( age < 0 ) {
    alert ("error");
}