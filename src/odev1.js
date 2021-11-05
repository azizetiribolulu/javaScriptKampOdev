/* 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız */

function isPrime (...numbers){
    let sayi 
    for (let i = 0; i< numbers.length; i++){
        sayi = 0
        for(let j=1; j<=numbers[i]; j++){
            if(numbers[i]%j ==0){
                sayi++
            }
        }
        if(sayi==2){
            console.log(numbers[i] + " Sayi asaldir.")
        } else{ 
        console.log( numbers[i] + " Sayi asal degil ")
        }    
    }
}
isPrime(1,2,3,5,7,9,21)


//////////////////////////////////////////////////////////////////////

/*2- Parametre olarak girilen iki sayının arkadaş sayılar 
olup olmadığını bulan programı yazınız. */

function friendsNum(sayi1,sayi2) {
    let toplam1 =0
    let toplam2 =0
    for(let i = 0; i< sayi1; i++){
        if(sayi1%i ==0){
            toplam1 += i
        }
    }    
    for(let i = 0; i<sayi2; i++){
        if(sayi2%i ==0){
            toplam2 += i
        }  
    }
    if ((sayi1 == toplam2) && (sayi2 == toplam1)) {
        console.log( sayi1 +" ve " + sayi2 + " arkadaş sayılardır")    
    } 
    else{
        console.log(sayi1 +" ve " + sayi2 + " arkadaş sayı değillerdir" )
    }   
}
friendsNum(284,220)

///////////////////////////////////////////////////////////////////////////////

/*3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.*/

function mukemmelSayi() {     
    for (let sayi = 0; sayi<=1000; sayi++) {
        let toplam = 0
        for(let i = 0; i<sayi; i++){
            if(sayi%i ==0){
                toplam +=i
            }    
        }
        if(sayi==toplam){
            console.log(sayi + " mükemmeldir.")
        }
    }
}
mukemmelSayi()

////////////////////////////////////////////////////////////////////////////

/* 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.*/

function asalSayac() {
    let sayac = 0
    for( let i=2 ; i<1000; i++){
        for (let j = 1; j<=i; j++){
            if(i%j == 0){
                sayac++
            }
        }
        if(sayac ==2){
            console.log(i  + " asaldır.")
            sayac = 0
        }
        else{
            sayac = 0

        }
    }
}
asalSayac()
