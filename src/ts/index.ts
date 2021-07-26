import '../scss/index.scss';
import { getElement, getContent, getElements, sleep } from './utils';
import dateformat from 'dateformat';
import config from './config.json';

// Links
let output = "";
config.links.map(x => output += `<div><a href="${x.link}" onclick="location.href='${x.link}'"> <span class="mdi mdi-${x.icon}"></span> ${x.name} </a></div>`);
getElement('#buttons').innerHTML = output;

// Background
getElement('#card > div:first-child').style.backgroundImage = `url(${config.backdrop})`;

// Clock
const updateTime = () => getElement('#timeBackground > span').innerText = dateformat("HH:MM");
updateTime();
setInterval(updateTime, 5000);

// Header
getElement("#title").innerText = `Welcome, ${config.name}`;
getElement("#subtitle").innerText = `Today is ${dateformat("dddd")}, the ${dateformat("dS")} of ${dateformat("mmmm")}`;