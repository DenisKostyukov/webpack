/*const Component = require('./Component');
const lodash = require('lodash');
require('./style.css');
*/
import lodash from 'lodash'
import useles, * as MyMath from './MyMath' ;
import Component from'./Component';

import './style.css';

const test = 10;
const component = new Component()
component.render()
console.log(test);
console.log(useles())
console.log("sum: "+ MyMath.sum(2,3))
console.log(lodash.random(0,100));

