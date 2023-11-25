let fruits = ['apple', 'orange', 'fanta', 'grapes'];
item = document.getElementById('item');
tag = document.getElementsByTagName('td');

fruits.forEach(function(fruit,index){
    tag[index].innerHTML =fruit+'<i class="bi bi-x-lg"></i>';
    
});