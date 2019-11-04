import $ from 'jquery';
import './css/index.scss';


$(function(){
    $('li:odd').css('backgroundColor','pink');
    $('li:even').css('backgroundColor','red');
});

class Person {
    static info = {name: 'keja'}
}
console.log(Person.info)