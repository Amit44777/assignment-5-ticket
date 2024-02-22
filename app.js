function add(addColor){
    addColor.classList.remove('bg-gray-200');
    addColor.classList.add('bg-green-500'); 
    addColor.style.color = 'white';
}


const minusTicket = document.getElementsByClassName("btn");
let counts = 40;
for(const minus of minusTicket){
    minus.addEventListener('click', function(e){
        counts = counts - 1;
        document.getElementById('minusTickets').innerText = counts;
    });
};


const addSit = document.getElementsByClassName("btn");
let count = 0;
 for(const add of addSit){
    add.addEventListener('click', function(e){
        count = count + 1;
       document.getElementById('total-sit').innerText = count;
    });
 };

