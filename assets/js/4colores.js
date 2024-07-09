let globalColor;

        document.addEventListener('keydown', function(event) {
            if (event.key === 'a') {
                globalColor = 'pink';
                document.getElementById('key').style.backgroundColor = globalColor;
            } else if (event.key === 's') {
                globalColor = 'orange';
                document.getElementById('key').style.backgroundColor = globalColor;
            } else if (event.key === 'd') {
                globalColor = 'lightblue';
                document.getElementById('key').style.backgroundColor = globalColor;
            } else if (event.key === 'q') {
                createColorBox('purple');
            } else if (event.key === 'w') {
                createColorBox('gray');
            } else if (event.key === 'e') {
                createColorBox('brown');
            }
        });

        function createColorBox(color) {
            const newDiv = document.createElement('div');
            newDiv.className = 'color-box';
            newDiv.style.backgroundColor = color;
            document.body.appendChild(newDiv);
        }