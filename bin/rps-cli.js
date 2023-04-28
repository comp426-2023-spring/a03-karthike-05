#!/usr/bin/env node

import { rps } from "../lib/rpsls.js";
import minimist from "minimist";
const arg = minimist(process.argv.slice(2));

//Help Documentation
if(arg.help || arg.h)
{
    help();
}

if(arg.rules || arg.r)
{
    rules();
}

try{
    console.log(JSON.stringify(rps(arg._[0])));
    process.exit(0);
}
catch (error){
    if(error  instanceof RangeError)
    {
        console.error('${args._[0]} is out of range');
        rules();
        help();
    }
}


function help()
{
    console.log('Usage: node-rps [SHOT]' +
    'Play Rock Paper Scissors (RPS)' +
    '' +
    '  -h, --help      display this help message and exit' +
    '  -r, --rules     display the rules and exit ' +
    '' +
    'Examples:'+
    '  node-rps        Return JSON with single player RPS result.'+
    '                  e.g. {"player":"rock"}' + 
     ' node-rps rock   Return JSON with results for RPS played against a simulated opponent.'+
     '                 e.g {"player":"rock","opponent":"scissors","result":"win"}');
    process.exit(0);
}

function rules()
{
    console.log('Rules for Rock Paper Scissors:' + 
    '' +
    '- Scissors CUTS Paper' +
    '- Paper COVERS Rock' +
    '- Rock CRUSHES Scissors');
    process.exit(0);
}