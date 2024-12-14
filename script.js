const keypress = new Audio('./keyboard_sound.mp3')
const keys = document.getElementsByClassName('key');



document.body.addEventListener('keydown', (event) => {
    console.log(event.key);
    keypress.play();
      for (let i=0; i<keys.length; i++) {
       if(event.key == 'a')
        {
        document.getElementById('a').style.backgroundColor = 'white'
        document.getElementById('a').style.color = 'black';
       }
       if(event.key == 'b')
        {
        document.getElementById('b').style.backgroundColor = 'white'
        document.getElementById('b').style.color = 'black';
       }
       if(event.key == 'c')
        {
        document.getElementById('c').style.backgroundColor = 'white'
        document.getElementById('c').style.color = 'black';
       }
       if(event.key == 'd')
        {
        document.getElementById('d').style.backgroundColor = 'white'
        document.getElementById('d').style.color = 'black';
       }
       if(event.key == 'e')
        {
        document.getElementById('e').style.backgroundColor = 'white'
        document.getElementById('e').style.color = 'black';
       }
       if(event.key == 'f')
        {
        document.getElementById('f').style.backgroundColor = 'white'
        document.getElementById('f').style.color = 'black';
       }
       if(event.key == 'g')
        {
        document.getElementById('g').style.backgroundColor = 'white'
        document.getElementById('g').style.color = 'black';
       }
       if(event.key == 'h')
        {
        document.getElementById('h').style.backgroundColor = 'white'
        document.getElementById('h').style.color = 'black';
       }
       if(event.key == 'i')
        {
        document.getElementById('i').style.backgroundColor = 'white'
        document.getElementById('i').style.color = 'black';
       }
       if(event.key == 'j')
        {
        document.getElementById('j').style.backgroundColor = 'white'
        document.getElementById('j').style.color = 'black';
       }
       if(event.key == 'k')
        {
        document.getElementById('k').style.backgroundColor = 'white'
        document.getElementById('k').style.color = 'black';
       }
       if(event.key == 'l')
        {
        document.getElementById('l').style.backgroundColor = 'white'
        document.getElementById('l').style.color = 'black';
       }
       if(event.key == 'm')
        {
        document.getElementById('m').style.backgroundColor = 'white'
        document.getElementById('m').style.color = 'black';
       }
       if(event.key == 'n')
        {
        document.getElementById('n').style.backgroundColor = 'white'
        document.getElementById('n').style.color = 'black';
       }
       if(event.key == 'o')
        {
        document.getElementById('o').style.backgroundColor = 'white'
        document.getElementById('o').style.color = 'black';
       }
       if(event.key == 'p')
        {
        document.getElementById('p').style.backgroundColor = 'white'
        document.getElementById('p').style.color = 'black';
       }
       if(event.key == 'q')
        {
        document.getElementById('q').style.backgroundColor = 'white'
        document.getElementById('q').style.color = 'black';
       }
       if(event.key == 'r')
        {
        document.getElementById('r').style.backgroundColor = 'white'
        document.getElementById('r').style.color = 'black';
       }
       if(event.key == 's')
        {
        document.getElementById('s').style.backgroundColor = 'white'
        document.getElementById('s').style.color = 'black';
       }
       if(event.key == 't')
        {
        document.getElementById('t').style.backgroundColor = 'white'
        document.getElementById('t').style.color = 'black';
       }
       if(event.key == 'u')
        {
        document.getElementById('u').style.backgroundColor = 'white'
        document.getElementById('u').style.color = 'black';
       }
       if(event.key == 'v')
        {
        document.getElementById('v').style.backgroundColor = 'white'
        document.getElementById('v').style.color = 'black';
       }
       if(event.key == 'w')
        {
        document.getElementById('w').style.backgroundColor = 'white'
        document.getElementById('w').style.color = 'black';
       }
       if(event.key == 'x')
        {
        document.getElementById('x').style.backgroundColor = 'white'
        document.getElementById('x').style.color = 'black';
       }
       if(event.key == 'y')
        {
        document.getElementById('y').style.backgroundColor = 'white'
        document.getElementById('y').style.color = 'black';
       }
       if(event.key == 'z')
        {
        document.getElementById('z').style.backgroundColor = 'white'
        document.getElementById('z').style.color = 'black';
       }
    }
});
document.body.addEventListener('keyup', (event) => 
    {
    console.log(event.key);
    for (let i = 0; i < keys.length; i++) 
        {
       if(event.key == 'a')
        {
        document.getElementById('a').style.backgroundColor = 'black';
        document.getElementById('a').style.color = 'white';
       }
       if(event.key == 'b')
        {
        document.getElementById('b').style.backgroundColor = 'black';
        document.getElementById('b').style.color = 'white';
       }
       if(event.key == 'c')
        {
        document.getElementById('c').style.backgroundColor = 'black';
        document.getElementById('c').style.color = 'white';
       }
       if(event.key == 'd')
        {
        document.getElementById('d').style.backgroundColor = 'black';
        document.getElementById('d').style.color = 'white';
       }
       if(event.key == 'e')
        {
        document.getElementById('e').style.backgroundColor = 'black';
        document.getElementById('e').style.color = 'white';
       }
       if(event.key == 'f')
        {
        document.getElementById('f').style.backgroundColor = 'black';
        document.getElementById('f').style.color = 'white';
       }
       if(event.key == 'g')
        {
        document.getElementById('g').style.backgroundColor = 'black';
        document.getElementById('g').style.color = 'white';
       }
       if(event.key == 'h')
        {
        document.getElementById('h').style.backgroundColor = 'black';
        document.getElementById('h').style.color = 'white';
       }
       if(event.key == 'i')
        {
        document.getElementById('i').style.backgroundColor = 'black';
        document.getElementById('i').style.color = 'white';
       }
       if(event.key == 'j')
        {
        document.getElementById('j').style.backgroundColor = 'black';
        document.getElementById('j').style.color = 'white';
       }
       if(event.key == 'k')
        {
        document.getElementById('k').style.backgroundColor = 'black';
        document.getElementById('k').style.color = 'white';
       }
       if(event.key == 'l')
        {
        document.getElementById('l').style.backgroundColor = 'black';
        document.getElementById('l').style.color = 'white';
       }
       if(event.key == 'm')
        {
        document.getElementById('m').style.backgroundColor = 'black';
        document.getElementById('m').style.color = 'white';
       }
       if(event.key == 'n')
        {
        document.getElementById('n').style.backgroundColor = 'black';
        document.getElementById('n').style.color = 'white';
       }
       if(event.key == 'o')
        {
        document.getElementById('o').style.backgroundColor = 'black';
        document.getElementById('o').style.color = 'white';
       }
       if(event.key == 'p')
        {
        document.getElementById('p').style.backgroundColor = 'black';
        document.getElementById('p').style.color = 'white';
       }
       if(event.key == 'q')
        {
        document.getElementById('q').style.backgroundColor = 'black';
        document.getElementById('q').style.color = 'white';
       }
       if(event.key == 'r')
        {
        document.getElementById('r').style.backgroundColor = 'black';
        document.getElementById('r').style.color = 'white';
       }
       if(event.key == 's')
        {
        document.getElementById('s').style.backgroundColor = 'black';
        document.getElementById('s').style.color = 'white';
       }
       if(event.key == 't')
        {
        document.getElementById('t').style.backgroundColor = 'black';
        document.getElementById('t').style.color = 'white';
       }
       if(event.key == 'u')
        {
        document.getElementById('u').style.backgroundColor = 'black';
        document.getElementById('u').style.color = 'white';
       }
       if(event.key == 'v')
        {
        document.getElementById('v').style.backgroundColor = 'black';
        document.getElementById('v').style.color = 'white';
       }
       if(event.key == 'w')
        {
        document.getElementById('w').style.backgroundColor = 'black';
        document.getElementById('w').style.color = 'white';
       }
       if(event.key == 'x')
        {
        document.getElementById('x').style.backgroundColor = 'black';
        document.getElementById('x').style.color = 'white';
       }
       if(event.key == 'y')
        {
        document.getElementById('y').style.backgroundColor = 'black';
        document.getElementById('y').style.color = 'white';
       }
       if(event.key == 'z')
        {
        document.getElementById('z').style.backgroundColor = 'black';
        document.getElementById('z').style.color = 'white';
       }
       
    }
});
    for (let i=0; i<keys.length; i++) {
   keys[i].addEventListener('mousedown', (event)=> {
    keypress.play();
        if(event.target.id == 'a')
        {
        document.getElementById('a').style.backgroundColor = 'white'
        document.getElementById('a').style.color = 'black';
        }
        if(event.target.id == 'b')
            {
            document.getElementById('b').style.backgroundColor = 'white'
            document.getElementById('b').style.color = 'black';
           }
           if(event.target.id == 'c')
            {
            document.getElementById('c').style.backgroundColor = 'white'
            document.getElementById('c').style.color = 'black';
           }
           if(event.target.id == 'd')
            {
            document.getElementById('d').style.backgroundColor = 'white'
            document.getElementById('d').style.color = 'black';
           }
           if(event.target.id == 'e')
            {
            document.getElementById('e').style.backgroundColor = 'white'
            document.getElementById('e').style.color = 'black';
           }
           if(event.target.id == 'f')
            {
            document.getElementById('f').style.backgroundColor = 'white'
            document.getElementById('f').style.color = 'black';
           }
           if(event.target.id == 'g')
            {
            document.getElementById('g').style.backgroundColor = 'white'
            document.getElementById('g').style.color = 'black';
           }
           if(event.target.id == 'h')
            {
            document.getElementById('h').style.backgroundColor = 'white'
            document.getElementById('h').style.color = 'black';
           }
           if(event.target.id == 'i')
            {
            document.getElementById('i').style.backgroundColor = 'white'
            document.getElementById('i').style.color = 'black';
           }
           if(event.target.id == 'j')
            {
            document.getElementById('j').style.backgroundColor = 'white'
            document.getElementById('j').style.color = 'black';
           }
           if(event.target.id == 'k')
            {
            document.getElementById('k').style.backgroundColor = 'white'
            document.getElementById('k').style.color = 'black';
           }
           if(event.target.id == 'l')
            {
            document.getElementById('l').style.backgroundColor = 'white'
            document.getElementById('l').style.color = 'black';
           }
           if(event.target.id == 'm')
            {
            document.getElementById('m').style.backgroundColor = 'white'
            document.getElementById('m').style.color = 'black';
           }
           if(event.target.id == 'n')
            {
            document.getElementById('n').style.backgroundColor = 'white'
            document.getElementById('n').style.color = 'black';
           }
           if(event.target.id == 'o')
            {
            document.getElementById('o').style.backgroundColor = 'white'
            document.getElementById('o').style.color = 'black';
           }
           if(event.target.id == 'p')
            {
            document.getElementById('p').style.backgroundColor = 'white'
            document.getElementById('p').style.color = 'black';
           }
           if(event.target.id == 'q')
            {
            document.getElementById('q').style.backgroundColor = 'white'
            document.getElementById('q').style.color = 'black';
           }
           if(event.target.id == 'r')
            {
            document.getElementById('r').style.backgroundColor = 'white'
            document.getElementById('r').style.color = 'black';
           }
           if(event.target.id == 's')
            {
            document.getElementById('s').style.backgroundColor = 'white'
            document.getElementById('s').style.color = 'black';
           }
           if(event.target.id == 't')
            {
            document.getElementById('t').style.backgroundColor = 'white'
            document.getElementById('t').style.color = 'black';
           }
           if(event.target.id == 'u')
            {
            document.getElementById('u').style.backgroundColor = 'white'
            document.getElementById('u').style.color = 'black';
           }
           if(event.target.id == 'v')
            {
            document.getElementById('v').style.backgroundColor = 'white'
            document.getElementById('v').style.color = 'black';
           }
           if(event.target.id == 'w')
            {
            document.getElementById('w').style.backgroundColor = 'white'
            document.getElementById('w').style.color = 'black';
           }
           if(event.target.id == 'x')
            {
            document.getElementById('x').style.backgroundColor = 'white'
            document.getElementById('x').style.color = 'black';
           }
           if(event.target.id == 'y')
            {
            document.getElementById('y').style.backgroundColor = 'white'
            document.getElementById('y').style.color = 'black';
           }
           if(event.target.id == 'z')
            {
            document.getElementById('z').style.backgroundColor = 'white'
            document.getElementById('z').style.color = 'black';
           }
   })
}
for (let i=0; i<keys.length; i++) {
    keys[i].addEventListener('mouseup', (event)=> {
         if(event.target.id == 'a')
         {
         document.getElementById('a').style.backgroundColor = 'black'
         document.getElementById('a').style.color = 'white';
         }
         if(event.target.id == 'b')
            {
            document.getElementById('b').style.backgroundColor = 'black';
            document.getElementById('b').style.color = 'white';
           }
           if(event.target.id == 'c')
            {
            document.getElementById('c').style.backgroundColor = 'black';
            document.getElementById('c').style.color = 'white';
           }
           if(event.target.id == 'd')
            {
            document.getElementById('d').style.backgroundColor = 'black';
            document.getElementById('d').style.color = 'white';
           }
           if(event.target.id == 'e')
            {
            document.getElementById('e').style.backgroundColor = 'black';
            document.getElementById('e').style.color = 'white';
           }
           if(event.target.id == 'f')
            {
            document.getElementById('f').style.backgroundColor = 'black';
            document.getElementById('f').style.color = 'white';
           }
           if(event.target.id == 'g')
            {
            document.getElementById('g').style.backgroundColor = 'black';
            document.getElementById('g').style.color = 'white';
           }
           if(event.target.id == 'h')
            {
            document.getElementById('h').style.backgroundColor = 'black';
            document.getElementById('h').style.color = 'white';
           }
           if(event.target.id == 'i')
            {
            document.getElementById('i').style.backgroundColor = 'black';
            document.getElementById('i').style.color = 'white';
           }
           if(event.target.id == 'j')
            {
            document.getElementById('j').style.backgroundColor = 'black';
            document.getElementById('j').style.color = 'white';
           }
           if(event.target.id == 'k')
            {
            document.getElementById('k').style.backgroundColor = 'black';
            document.getElementById('k').style.color = 'white';
           }
           if(event.target.id == 'l')
            {
            document.getElementById('l').style.backgroundColor = 'black';
            document.getElementById('l').style.color = 'white';
           }
           if(event.target.id == 'm')
            {
            document.getElementById('m').style.backgroundColor = 'black';
            document.getElementById('m').style.color = 'white';
           }
           if(event.target.id == 'n')
            {
            document.getElementById('n').style.backgroundColor = 'black';
            document.getElementById('n').style.color = 'white';
           }
           if(event.target.id == 'o')
            {
            document.getElementById('o').style.backgroundColor = 'black';
            document.getElementById('o').style.color = 'white';
           }
           if(event.target.id == 'p')
            {
            document.getElementById('p').style.backgroundColor = 'black';
            document.getElementById('p').style.color = 'white';
           }
           if(event.target.id == 'q')
            {
            document.getElementById('q').style.backgroundColor = 'black';
            document.getElementById('q').style.color = 'white';
           }
           if(event.target.id == 'r')
            {
            document.getElementById('r').style.backgroundColor = 'black';
            document.getElementById('r').style.color = 'white';
           }
           if(event.target.id == 's')
            {
            document.getElementById('s').style.backgroundColor = 'black';
            document.getElementById('s').style.color = 'white';
           }
           if(event.target.id == 't')
            {
            document.getElementById('t').style.backgroundColor = 'black';
            document.getElementById('t').style.color = 'white';
           }
           if(event.target.id == 'u')
            {
            document.getElementById('u').style.backgroundColor = 'black';
            document.getElementById('u').style.color = 'white';
           }
           if(event.target.id == 'v')
            {
            document.getElementById('v').style.backgroundColor = 'black';
            document.getElementById('v').style.color = 'white';
           }
           if(event.target.id == 'w')
            {
            document.getElementById('w').style.backgroundColor = 'black';
            document.getElementById('w').style.color = 'white';
           }
           if(event.target.id == 'x')
            {
            document.getElementById('x').style.backgroundColor = 'black';
            document.getElementById('x').style.color = 'white';
           }
           if(event.target.id == 'y')
            {
            document.getElementById('y').style.backgroundColor = 'black';
            document.getElementById('y').style.color = 'white';
           }
           if(event.target.id == 'z')
            {
            document.getElementById('z').style.backgroundColor = 'black';
            document.getElementById('z').style.color = 'white';
           }
        })
    }

const outputElement = document.getElementById('output');
let pressedKeys = [];

function updateOutput() {
    outputElement.textContent = `${pressedKeys}`;
}

window.addEventListener('keydown', (event)=> {
    const keyPressed = event.key;

    if (!pressedKeys.includes(keyPressed)) {
        pressedKeys.push(keyPressed);
    }

    updateOutput();
});

const keys1 = document.querySelectorAll('.key');

keys1.forEach(key => {
    key.addEventListener('click', function() {
        const keyValue = this.getAttribute('data-key');

        if (!pressedKeys.includes(keyValue)) {
            pressedKeys.push(keyValue);
        }

        updateOutput();
    });
});