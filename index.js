'use strict';

const hurufVokal = ['a', 'e', 'i', 'o', 'u'];
const polaSukukata = [
    'V',
    'VK',
    'KV',
    'KVV',
    'KVK',
    'KKV',
    'KKVK',
    'KVKK',
    'KKKV',
    'KKKVK',
    'KKVKK',
    'KVKKK',
];
// const gabunganDibenarkan = [
//     'pl',
//     'bl',
//     'kl',
//     'gl',
//     'fl',
//     'sl',
//     'pr',
//     'br',
//     'tr',
//     'dr',
//     'kr',
//     'gr',
//     'fr',
//     'sr',
//     'ps',
//     'ks',
//     'dw',
//     'sw',
//     'kw',
//     'sp',
//     'sm',
//     'sn',
//     'sk',
//     'str',
//     'spr',
//     'skr',
// ];
const gabunganSalah = [
    'pk',
    'lb',
    'tk',
    'dk',
    'db',
    'nn',
    'nl',
    'lk',
    'bk',
    'kn',
    'hn',
    'ln',
    'bn',
    'tn',
    'kl',
    'rp',
    'rf',
    'tl',
    'bj',
    'ys',
    'mp',
    'mb',
    'nt',
    'nd',
    'nc',
    'nj',
    'ŋk',
    'ŋg',
    'ns',
    'ŋs',
    'rb',
    'rd',
    'rg',
    'rj',
    'rm',
    'rn',
    'rl',
    'rt',
    'rk',
    'rs',
    'rc',
    'st',
    'sl',
    'kt',
    'ks',
    'pt',
    'ht',
    'hk',
    'hs',
    'hb',
    'hl',
    'hy',
    'hw',
    'sh',
    'mr',
    'ml',
    'lm',
    'gn',
    'np',
    'rh',
    'sb',
    'sp',
    'sm',
    'km',
    'ls',
    'lj',
    'lt',
    'bd',
    'gm',
    'hd',
];

module.exports.toArray = function (input) {
    const inputPola = constructPola(input.toLowerCase())
    return findRule(input, inputPola);; //rule not found, return empty array
}

function constructPola(input) {
    // construct rule from input
    let constructType = '';
    for (let chr of input) {
        (hurufVokal.indexOf(chr) >= 0) ? constructType += 'V' : constructType += 'K';
    }
    return constructType;
}

// function checkGabunganDibenarkan(input) {
//     let result = false;
//     for (const item of gabunganDibenarkan) {
//         if (item.indexOf(input) > -1) {
//             return true;
//         }
//     }
//     return gabunganDibenarkan.indexOf(input) > -1;
// }

function checkGabunganSalah(input) {
    return gabunganSalah.includes(input.substring(0,2));
}

function checkPolaSukukata(input) {
    return polaSukukata.indexOf(input) > -1;
}

function findRule(input, polaType) {
    let result = [];
    if (polaType.length > 0) {
        let teruskan = true;
        let ptr = 0;
        let length = polaType.length;
        while(teruskan) {
            const checkPola = polaType.substring(ptr, length);
            const checkInput = input.substring(ptr, length);
            if (checkPolaSukukata(checkPola)) {
                if(!checkGabunganSalah(checkInput)) {
                    result.push(checkInput);
                    length = length - checkInput.length;
                    ptr = 0;
                } else {
                    ptr += 1;
                }
            } else {
                ptr += 1;
            }
            if (length === 0) {
                result.reverse();
                teruskan = false;
            }
        }
    }
    return result;
}
