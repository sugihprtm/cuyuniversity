const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const os = require('os');
const host = '127.0.0.1';
const port = 3002;
// request adalah = data masuk dari luar
// response adalah = data keluar dari sistem

const server =  http.createServer(function(request,response){
    const nama = "Sugih Pratama";
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang-jajan;
    
    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);

    fs.appendFile('sisauang.txt',sisa,()=>{
        console.log('data uang berhasil disimpan');
    });
    
    const sisaRam = os.freemem();
    const jumlahCPU = os.cpus();

    function checkCPU(){
        let myCPU = [];
        jumlahCPU.map((cpu, i)=>{
            myCPU.push(cpu.model)
        })
        return myCPU[0]
    }
    jumlahCPU.map
    const hasil = `
    <head>
        <title>${nama}</title>
    </head>
    <body>
    <h1 style='background: black;color: white;padding: 20px; text-align: center'>NODE JS UANG JAJAN</h1>
    <p>Halo nama saya ${nama} saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} sekarang menjadi ${sisa} </p>
    <h5>sisa RAM PC saya: ${sisaRam}</h5>
    <h5>merk CPU di PC saya: ${checkCPU()}</h5>
    </body>
    `
    
    response.statusCode = 200;
    response.end(hasil);
});
server.listen(port,host,'',function(){
    console.log(`server menyala di ${host}: ${port} `);
});