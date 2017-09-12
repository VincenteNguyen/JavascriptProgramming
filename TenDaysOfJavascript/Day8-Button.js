var button = document.createElement('button');
button.id = 'btn';
button.innerHTML = '0';

button.addEventListener("click", (function(){
    let count = 0;
    var a = function() { 
                        button.innerHTML = (++count).toString();
                        return;
    };
    return a;
})());

document.body.appendChild(button);


/* Button grids
*/
var buttonDivs = document.createElement('div');
buttonDivs.id = 'btns';
var buttons = '123456789'.split('');
buttons.forEach(x => {
    var subBtn = document.createElement('button');
    subBtn.id = `btn${x}`;
    subBtn.innerHTML = x;
   buttonDivs.appendChild(subBtn); 
});

document.body.appendChild(buttonDivs);

var btn5 = document.getElementById('btn5');
btn5.addEventListener('click', (function(){
    var btnIndex = '12369874'.split('');
    var btnValue = '12369874'.split('');
    var rotate = function() {
	console.log(btnValue);
        btnIndex.unshift(btnIndex.pop());
        btnValue.forEach((value, index) =>{
            var btn = document.getElementById(`btn${value}`);
            btn.innerHTML = btnIndex[index];
        });
    };
    return rotate;
})());