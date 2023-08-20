const nama="Sugih Pratama";
let usia = 26;
let biodata = document.getElementById('biodata');
console.log(biodata);
function generateBiodata() {
    let generasi;

    if(usia >= 10 && usia <= 18){
        generasi = "generasi remaja";
    }
    else if(usia > 18 && usia < 30){
        generasi = "generasi dewasa";
    }
    else if(usia>=30){
        generasi = "generasi tua";
    }
    else if(usia<10 && usia >= 2){
        generasi = "generasi anak anak";
    }
    else{
       generasi = "generasi bayi";
    }
    return biodata.innerHTML = `Nama saya adalah ${nama}, usia saya ${usia} tahun dan saya termasuk ${generasi}`;
}
generateBiodata();