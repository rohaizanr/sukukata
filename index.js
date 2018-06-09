'use strict';

const hurufVokal = ['a', 'e', 'i', 'o', 'u'];
const polaSukukata = [
    'V',
    'VK',
    'KV',
    'KVK',
    'VKK',
    'KKV',
    'KVKK',
    'KKVK',
    'KKKV',
    'KKKVK',
    'KKVKK',
];
const imbuhan = [
    'me',
    'mem',
    'meng',
    'di',
];
const gabunganSalah = [
    'mk',
    'dn',
    'gk',
    'gs',
    'gg',
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
    'ns',
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

const gabunganDiftong = [
    'ia',
    'io',
    'oa',
    'ai',
    'au',
    'ae',
    'oi',
    'ui',
    'ua',
    'iu',
    'ea',
]

module.exports.toArray = function (input) {
    const inputPola = constructPola(input.toLowerCase())
    let result = findRule(input, inputPola);
    
    if (inputPola.includes('VV')) {
        result = checkDiftong(result, inputPola);
    }
    return result;
}

function constructPola(input) {
    let constructType = '';
    for (let chr of input) {
        (hurufVokal.indexOf(chr) >= 0) ? constructType += 'V' : constructType += 'K';
    }
    return constructType;
}

function checkGabunganSalah(input) {
    if (!gabunganSalah.includes(input.substring(0,2))){
        return gabunganSalah.includes(input.substring(1,3))
    } else {
        return true;
    }
}

function checkPolaSukukata(input) {
    return polaSukukata.indexOf(input) > -1;
}

function checkDiftong(inputArray, inputPola) {
    let result = [];
    let count = 0;
    for (let item of inputArray) {
        count += 1;
        if (hurufVokal.includes(item)) {
            if (result.length > 0) {
                let prevItem = result.pop();
                let isDiftong = `${prevItem.substring(prevItem.length - 1 , prevItem.length)}${item}`;
                if (gabunganDiftong.includes(isDiftong)) {
                    // check last word not diftong
                    if (count === inputArray.length) {
                        if(imbuhan.includes(result[0])) {
                            result.push(prevItem);
                            result.push(item);
                        } else {
                            result.push(`${prevItem}${item}`);
                        }
                    } else {
                        result.push(`${prevItem}${item}`);
                    }
                } else {
                    result.push(prevItem);
                    result.push(item);
                }
            } else {
                result.push(item);
            }
        } else {
            result.push(item);
        }
    }
    return result;
}

function findRule(input, polaType) {
    let result = [];
    if (polaType.length > 0) {
        let teruskan = true;
        let ptr = 0;
        let length = polaType.length;
        let hangControl = 0
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
            hangControl += 1;
            if (length === 0) {
                result.reverse();
                teruskan = false;
            }
            if (hangControl === 100) {
                console.log('hang control');
                teruskan = false;
            }
        }
    }
    return result;
}
