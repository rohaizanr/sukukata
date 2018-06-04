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
Projek ini masih di dalam pembangunan.
<br />

### Langkah-langkah
1. *Fork* projek ini
2. Buat *branch* baru (`git checkout -b my-new-feature`)
3. *Commit* code baru anda (`git commit -m 'Tambahan rules'`)
4. *Push* (`git push origin my-new-feature`)
5. Buat ***Pull Request*** baru

## sukukata-trainer
Untuk memudahkan kerja penambahan aturan [index.test.js](https://github.com/izandotnet/sukukata/blob/master/__tests__/index.test.js)(Unit test), anda boleh gunakan aplikasi ini [sukukata-trainer](https://github.com/izandotnet/sukukata-trainer)

## Masalah
Berikut adalah contoh sukukata yang belum dapat dileraikan.
```javascript
expect(sukukata.toArray('abstrak')).toEqual(['ab','strak']);
expect(sukukata.toArray('dialami')).toEqual(['di','a','la','mi']);
expect(sukukata.toArray('iaitu')).toEqual(['ia','i','tu']);
expect(sukukata.toArray('bererti')).toEqual(['ber','er','ti']);        
expect(sukukata.toArray('linguistik')).toEqual(['lin','guis','tik']);
expect(sukukata.toArray('linguistiknya')).toEqual(['lin','guis','tik','nya']);
expect(sukukata.toArray('ditegaskan')).toEqual(['di','te','gas','kan']);
expect(sukukata.toArray('menghasilkan')).toEqual(['meng','ha','sil','kan']);
expect(sukukata.toArray('menghuraikan')).toEqual(['meng','hu','rai','kan']);
expect(sukukata.toArray('psikolinguistik')).toEqual(['psi','ko','lin','guis','tik']);
expect(sukukata.toArray('sosiolinguistik')).toEqual(['so','sio','lin','guis','tik']);
```

## Bugs
Jika anda terjumpa sebarang masalah, sila laporkan [di sini](https://github.com/izandotnet/sukukata/issues/new)

## Rujukan
Slideshare - [Pola suku kata](https://www.slideshare.net/bingguts/senarai-gabungan-bunyi-kata-pola-suku-kata)

## Penulis
[izandotnet](https://github.com/izandotnet)
