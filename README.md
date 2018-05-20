[![CircleCI](https://circleci.com/gh/izandotnet/sukukata.svg?style=svg)](https://circleci.com/gh/izandotnet/sukukata)

# <b>sukukata</b>
Sebuah perisian Javascript untuk mencari sukukata di dalam perkataan Bahasa Melayu.

## Cara guna
```
npm install sukukata
```
```javascript
const sukukata = require('sukukata');

console.log(`${sukukata.toArray('Malaysia')}`);
// ['Ma','lay','sia']

console.log(`${sukukata.toArray('Malaysia').length}`);
// 3
```
## Sumbangan
Projek ini masih di dalam pembangunan dan hanya boleh menampung sehingga <b>3 sukukata</b>.
<br />
Sukukata baru boleh diajar dengan menambahkan *rules* ke dalam fail [polaSukukata.js](https://github.com/izandotnet/sukukata/blob/master/polaSukukata.js) dan [pembetulan.js](https://github.com/izandotnet/sukukata/blob/master/pembetulan.js)

### Langkah-langkah
1. *Fork* projek ini
2. Buat *branch* baru (`git checkout -b my-new-feature`)
3. *Commit* code baru anda (`git commit -m 'Tambahan rules'`)
4. *Push* (`git push origin my-new-feature`)
5. Buat ***Pull Request*** baru

## sukukata-trainer
Untuk memudahkan kerja penambahan aturan [polaSukukata.js](https://github.com/izandotnet/sukukata/blob/master/polaSukukata.js) dan [index.test.js](https://github.com/izandotnet/sukukata/blob/master/__tests__/index.test.js)(Unit test), anda boleh gunakan aplikasi ini [sukukata-trainer](https://github.com/izandotnet/sukukata-trainer)

## Bugs
Jika anda terjumpa sebarang masalah, sila laporkan [di sini](https://github.com/izandotnet/sukukata/issues/new)

## Rujukan
Slideshare - [Pola suku kata](https://www.slideshare.net/bingguts/senarai-gabungan-bunyi-kata-pola-suku-kata)

## Penulis
[izandotnet](https://github.com/izandotnet)
