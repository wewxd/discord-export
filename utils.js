const path=require('path')
const fs=require('fs')
const request=require('request')

function download(url, dest, filename){    // URL to download from, destination folder, file name

    if (!url || !dest){console.log('URL and destination required');return}

    dest=typeof(filename)==='string'&&filename!=='' ? path.join(dest, filename+path.basename(url).substr(path.basename(url).lastIndexOf('.'))) : path.join(dest, path.basename(url))

    let i
    while(fs.existsSync(dest)){     // Rename file if it already exists
        i=dest.lastIndexOf('.')
        dest=i!==-1 ? dest.substr(0,i)+Math.floor(Math.random()*10).toString()+dest.substr(i) : dest+Math.floor(Math.random()*10).toString()
    }
    request(url).pipe(fs.createWriteStream(dest))
}

function getDatetimeStr(date){
    return date.getDay()+'-'+date.getMonth()+'-'+date.getFullYear()+' '+date.getHours()+'-'+date.getMinutes()+'-'+date.getSeconds()
}

module.exports={
    download: download,
    getDatetimeStr: getDatetimeStr
}
