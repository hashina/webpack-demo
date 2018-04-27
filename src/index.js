import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import {cube} from './math.js'

function component() {
    var element = document.createElement('pre');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n');

    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
