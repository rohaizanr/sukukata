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
Projek ini masih di dalam pembangunan dan hanya boleh menampung sehingga.
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
Berikut adalah ayat-ayat yang belum dapat dileraikan dengan tepat.
```javascript
expect(sukukata.toArray('aaaaaaa')).toEqual([]);
expect(sukukata.toArray('dialami')).toEqual(['di','a','la','mi']);
expect(sukukata.toArray('penggunaan')).toEqual(['peng','gu','na','an']);
expect(sukukata.toArray('ialah')).toEqual(['ia','lah']);
expect(sukukata.toArray('iaitu')).toEqual(['ia','i','tu']);
expect(sukukata.toArray('bangsa')).toEqual(['bang','sa']);
expect(sukukata.toArray('tinggi')).toEqual(['ting','gi']);
expect(sukukata.toArray('hingga')).toEqual(['hing','ga']);
expect(sukukata.toArray('fungsi')).toEqual(['fung','si']);
expect(sukukata.toArray('bererti')).toEqual(['ber','er','ti']);
expect(sukukata.toArray('kreatif')).toEqual(['krea','tif']); //out of memory
expect(sukukata.toArray('asalnya')).toEqual(['a','sal','nya']);
expect(sukukata.toArray('melalui')).toEqual(['me','la','lu','i']);
expect(sukukata.toArray('lamanya')).toEqual(['la','ma','nya']);
expect(sukukata.toArray('abstrak')).toEqual(['ab','strak']); // lain macam reply
expect(sukukata.toArray('seorang')).toEqual(['se','o','rang']);
expect(sukukata.toArray('ringkas')).toEqual(['ring','kas']);
expect(sukukata.toArray('mengkaji')).toEqual(['meng','ka','ji']);
expect(sukukata.toArray('pengkaji')).toEqual(['peng','ka','ji']);
expect(sukukata.toArray('nilainya')).toEqual(['ni','lai','nya']);
expect(sukukata.toArray('Inggeris')).toEqual(['Ing','ge','ris']);
expect(sukukata.toArray('Thailand')).toEqual(['Thai','land']); // hang
expect(sukukata.toArray('fungsinya')).toEqual(['fung','si','nya']);
expect(sukukata.toArray('mempunyai')).toEqual(['mem','pu','nya','i']);
expect(sukukata.toArray('keupayaan')).toEqual(['ke','u','pa','ya','an']);
expect(sukukata.toArray('menyangka')).toEqual(['me','nyang','ka']);
expect(sukukata.toArray('menguasai')).toEqual(['me','ngua','sa','i']);
expect(sukukata.toArray('meningkat')).toEqual(['me','ning','kat']);
expect(sukukata.toArray('berfungsi')).toEqual(['ber','fung','si']);
expect(sukukata.toArray('menggubal')).toEqual(['meng','gu','bal']);
expect(sukukata.toArray('Maksudnya')).toEqual(['Mak','sud','nya']);
expect(sukukata.toArray('peringkat')).toEqual(['pe','ring','kat']);
expect(sukukata.toArray('linguistik')).toEqual(['lin','guis','tik']);
expect(sukukata.toArray('kestabilan')).toEqual(['ke','sta','bi','lan']);
expect(sukukata.toArray('ditegaskan')).toEqual(['di','te','gas','kan']);
expect(sukukata.toArray('fikirannya')).toEqual(['fi','ki','ran','nya']);
expect(sukukata.toArray('kebangsaan')).toEqual(['ke','bang','sa','an']);
expect(sukukata.toArray('menggunakan')).toEqual(['meng','gu','na','kan']);
expect(sukukata.toArray('diungkapkan')).toEqual(['di','ung','kap','kan']);
expect(sukukata.toArray('mengucapkan')).toEqual(['me','ngu','cap','kan']);
expect(sukukata.toArray('meningkatkan')).toEqual(['me','ning','kat','kan']);
expect(sukukata.toArray('menghasilkan')).toEqual(['meng','ha','sil','kan']);
expect(sukukata.toArray('mementingkan')).toEqual(['me','men','ting','kan']);
expect(sukukata.toArray('melambangkan')).toEqual(['me','lam','bang','kan']);
expect(sukukata.toArray('menghuraikan')).toEqual(['meng','hu','rai','kan']);
expect(sukukata.toArray('membangkitkan')).toEqual(['mem','bang','kit','kan']);
expect(sukukata.toArray('linguistiknya')).toEqual(['lin','guis','tik','nya']);
expect(sukukata.toArray('mengembangkan')).toEqual(['me','ngem','bang','kan']);
expect(sukukata.toArray('mengungkapkan')).toEqual(['me','ngung','kap','kan']);
expect(sukukata.toArray('memperjuangkan')).toEqual(['mem','per','ju','ang','kan']);
expect(sukukata.toArray('psikolinguistik')).toEqual(['psi','ko','lin','guis','tik']);
expect(sukukata.toArray('sosiolinguistik')).toEqual(['so','sio','lin','guis','tik']);
```

## Bugs
Jika anda terjumpa sebarang masalah, sila laporkan [di sini](https://github.com/izandotnet/sukukata/issues/new)

## Rujukan
Slideshare - [Pola suku kata](https://www.slideshare.net/bingguts/senarai-gabungan-bunyi-kata-pola-suku-kata)

## Penulis
[izandotnet](https://github.com/izandotnet)
