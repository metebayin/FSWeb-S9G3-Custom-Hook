npm start# Durum Bilgili Mantık Oluşturma (Statefull Logic) - Gece Modu (Dark Mode)

Bu proje, bu modülde öğrenilen kavram ve teknikleri uygulamanıza ve bunları somut bir projede uygulamanıza olanak tanır. Bu modülde, React'te Form yönetimini üzerine çalıştınız. Stateful logic nedir, bunlar üzerinde custom hooklar nasıl oluşturulur ve birden fazla hook aynı anda nasıl çalıştırılır bunları öğrendiniz. Projenizde bu konulardaki yeterliliğinizi, öğrendiğiniz tüm şeyleri kullanarak oluşturduğunuz bir uygulamayla göstereceksiniz.

## Pratik yapacağınız yetenekler

- Stateful logic içeren custom hooklar yaratmak
- localStorage Web API ile birlikte çalışan hooklar oluşturmak
- tüm hookların aynı anda çalışabilmesini sağlamak

## Giriş

Bu projede kripto para izleme uygulamasını alacak ve 2 custom hook oluşturup, birlikte çalışmalarını sağlayacaksınız, aynı zamanda kullanıcılar gece modunu açıp (dark mode) uygulamayı kullanabilecekler, uygulama kapanıp açılsa bile gece modu daha önce aktif edildiyse uygulama gece modu açık şekilde başlayacak. 

***Görevlerinizi birer birer tamamladığınızdan ve ilerlemeden önce her bir görevi test ettiğinizden emin olun..***

## Talimatlar

### Görev 1: Proje Kurulumu

* [ ] Projeyi forklayın.
* [ ] Klonlayın
* [ ] Proje dizinine gidin
* [ ] `npm install`
* [ ] `npm start`

### Görev 2: Proje Gereksinimleri

#### Bir geceModuAc hooku oluşturun

* [ ] `hooks` adında bir klasör oluşturun
* [ ] `geceModuAc.js` adında bir dosya oluşturun.
* [ ] Sadece bir boolean(true/false) state değeri ile yüklenen bir hook oluşturun. Bu değer gece modunun açık olup olmadığını belirlemeye yarayacak.
* [ ] Oluşturduğunuz state dilimini ve state'i düzenlemenize yarayan fonksiyonu döndürün.
* [ ] App.js'deki geceModu state tanımlamasını oluşturduğunuz geceModuAc hooku ile değiştirin.

#### localStorageKullan hooku oluşturun

* [ ] `localStorageKullan.js` adında bir dosya oluşturun.
* [ ] Bir key value ve baslangicDegeri alan bir hook oluşturun.

#### geceModuAc çevresinde localStorageKullan 'ı kullanın

* [ ] geceModuAc hooku içine localStorageKullan'ı import edin.
* [ ] localStorage'a kaydedilmiş değere göre UI'den switche tıklandığında gece modunu açıp kapatmayı ayarlayın.
* [ ] App kapatılıp açıldığında gece modu daha önce aktif edildiyse uygulama gece modunda başlasın.

