import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';
import '../assets/holberton-logo.jpg';


let count = 0;
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
    count++;
    $('#count').html(`${count} clicks on the button`);
}
const debounced = _.debounce(updateCounter, 500);
$('button').on('click', debounced);
