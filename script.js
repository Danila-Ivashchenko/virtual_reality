const triangle = document.querySelector('#entry');

let toggle = false;

triangle.addEventListener('click', function () {
    if (toggle) {
    triangle.setAttribute('animation__vertexa', 'property: vertex-a; to: 4.9 3 -4.9; dur: 1000');
    triangle.setAttribute('animation__vertexb', 'property: vertex-b; to: -4.9 3 -4.9; dur: 1000');
    triangle.setAttribute('animation__vertexc', 'property: vertex-c; to: 0 10 0; dur: 1000');
    } else {
    triangle.setAttribute('animation__vertexa', 'property: vertex-a; to: 7 0 -7; dur: 1000');
    triangle.setAttribute('animation__vertexb', 'property: vertex-b; to: -7 0 -7; dur: 1000');
    triangle.setAttribute('animation__vertexc', 'property: vertex-c; to: 0 10 0; dur: 1000');
    }
    toggle = !toggle;
});