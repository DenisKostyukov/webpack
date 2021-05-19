/*const Component = require('./Component');
const lodash = require('lodash');
require('./style.css');
*/
import lodash from 'lodash'
import useles, {sum} from './MyMath' ;
import Component from './Component';
import userRender from './userCard';
import './style.css';
const container = document.querySelector('.cardContainer');
const test = 10;
const component = new Component()
component.render()
console.log(test);
console.log(useles())
console.log("sum: "+ sum(2,3))
console.log(lodash.random(0,100));
container.append(userRender('Denis', 'Kostyukov'))

