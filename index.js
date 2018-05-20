'use strict';
const polaSukukata = require('./polaSukukata');
const pembetulan = require('./pembetulan');

const hurufVokal = ['a', 'e', 'i', 'o', 'u'];

module.exports.toArray = function (input) {
    const result = getMatchedRule(input.toLowerCase());
    if (result !== undefined) {
        return disassembler(input, result.disassemble);
    }
    return []; //rule not found, return empty array
}

function getMatchedRule(input) {
    // construct rule from input
    let constructType = '';
    for (let chr of input) {
        (hurufVokal.indexOf(chr) >= 0) ? constructType += 'V' : constructType += 'K';
    }
    return findRule(input, constructType);
}

function findRule(input, type) {
    const results = polaSukukata.filter((rule) => { return rule.type === type; });
    if (results.length > 1) {
        
        if (input.slice(-2) === 'ui') {
            return results[1];
        }
        // ny ng sy sh
        if (input.indexOf('ny') > -1 || input.indexOf('ng') > -1 || input.indexOf('sy') > -1 || input.indexOf('sh') > -1) {
            return results[1];
        }

        // check for false combination when result is more than 1
        for (let result of results) {
            if (!checkPembetulan(disassembler(input, result.disassemble))) {
                // if don't have false combination then return the result
                return result;
            }
        }
    } else {
        return results[0];
    }
}

function checkPembetulan(checkDisassembler) {
    for (let item of checkDisassembler) {
        // get two character and check for false combination
        for (let i = 0; i < item.length-1; i++) {
            const twoChrs = item.substring(i, 2);
            if (pembetulan.includes(twoChrs)) return true;
        }
    }
}

function disassembler(input, disassemble) {
    // substitute input string into disassemble format, easier to split to array by +
    let index = 0;
    let substitute = '';
    for (let chr of disassemble) {
        if (chr !== '+'){
            substitute += input[index];
            index += 1;
        } else {
            substitute += chr;
        }
    }
    if (substitute.indexOf('+') >= 0) {
        return substitute.split('+');
    } else {
        return [substitute];
    }
}
