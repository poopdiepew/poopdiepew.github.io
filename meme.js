//meme data base
const memearr = [];
for(var i = 128511; i<128592; i++){
  memearr.push(i);
}

//background
const body = document.querySelector('body');
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';

//container for the textArea
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

//Input area
const search = document.createElement('textArea');
search.style.overflowWrap = 'true';
search.style.textOverflow = 'false';
search.style.borderRadius = '16px';

//Submit button
const submit = document.createElement('button');
submit.textContent = "MEME-IFY HERE";
submit.style.padding = '16px';
submit.style.fontSize = '32px';
submit.style.margin = '32px';
submit.style.borderRadius = '16px';

//Output area
const output = document.createElement('textArea');
output.style.textOverflow = 'false';
output.readOnly = 'true';
output.style.borderRadius = '16px';

//function to meme-ify input string
submit.addEventListener('click',e=>{
  var arr = search.value.split(' ');
  for(var element = 0; element <arr.length; element++){
    arr[element] +=   String.fromCodePoint(memearr[Math.floor(Math.random()*memearr.length)]);
  }
  output.value = arr.join('');
})

//DOM mods
body.appendChild(container);
container.appendChild(search);
container.appendChild(submit);
container.appendChild(output);