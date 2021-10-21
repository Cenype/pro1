LoadEventListeners();
function LoadEventListeners(){
document.getElementById('workout').addEventListener('submit', 
calculateWeight);

}
//

function calculateWeight(e){
    console.log('calculating...');
    e.preventDefault();
    
const benchmax=document.getElementById('BenchMax');
const squatmax=document.getElementById('SquatMax');
const deadmax=document.getElementById('DeadMax');
const repBtn = document.querySelector('.rep-btn1');
const message = document.querySelector('.message');
const squat1=document.getElementById('squat1');
const bench1=document.getElementById('bench1');
const dead1=document.getElementById('dead1');
const x = parseFloat(squat1.value * .90);
const x2 = parseFloat(bench1.value * .90);
const x3 = parseFloat(dead1.value * .90);
//
if(isFinite(x2)){
    benchmax.value = (x2).toFixed(2);
    squatmax.value = (x).toFixed(2);
    deadmax.value= (x3).toFixed(2);
    document.getElementById('results').style.display='block';
    return;
} else {
    console.log('Please input proper values'), 'red';
    e.preventDefault();
}}

function error(error){
    document.getElementById('results').style.display='none';
}

const testing = document.createElement('ul')
testing.className-'delay'
testing.id='delay2'
testing.setAttribute("name", "delay2");
testing.appendChild(document.createTextNode('testing'));
document.querySelector('ul.remove').appendChild;
console.log(testing);