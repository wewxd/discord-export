const utils=require('./utils.js')

function pp(msg){
    msg.content = msg.content.substr(1)
    try{
        switch(msg.channel.type){
            case 'text':
                msg.channel.send(msg.guild.members.get(msg.content).user.avatarURL)
                break
            case 'dm':
                msg.channel.send(msg.channel.recipient.avatarURL)
                break
            case 'group':
                msg.channel.send(msg.channel.recipients.get(msg.content).avatarURL)
                break
            default:
                console.log('uh wtf')
        }
    }catch(e){console.log(e)}
}

function sp(channel){
    if(channel.type === 'text'){channel.send(channel.guild.iconURL)}
    else{console.log('no stfu')}
}

function exportxd(param){
    param.msg.channel.fetchMessages({limit: 100, before: param.msg.id}).then(msgs=>{
        msgs=msgs.array()         // Converting map to array then working with an array because it's much faster than working with the map
        msgs.forEach(xd=>{
            if(param.type==='msg'){
                param.stream.write(xd.author.tag+' '+utils.getDatetimeStr(xd.createdAt)+'\r\n'+xd.content.replace('\n', '\r\n')+'\r\n')
                xd.attachments.forEach(att=>{
                    param.stream.write(att.url+'\r\n')
                })
                param.stream.write('\r\n')
            }
            if(param.type==='img'){
                xd.attachments.forEach(att=>{
                    if(param.rename===true){
                        utils.download(att.url, param.stream, xd.author.username+' - '+utils.getDatetimeStr(xd.createdAt))
                    }else{
                        utils.download(att.url, param.stream)
                    }
                })
            }
        })
        param.count+=msgs.length
        param.msg=msgs[msgs.length-1]
        console.log(param.count)
        if(msgs.length==100){
            exportxd(param)
        }
        else{
            if(param.type==='msg'){
                time=(new Date().getTime()-param.time)/1000|0
                param.stream.end(param.count+' messages exported in '+time+' seconds.')
            }
        }
    })
}

function ri(msg){
    if (msg.content.length < 80){
        let newMsg = ''
        let i
        msg.content = msg.content.toLowerCase()
        for (i = 0; i<msg.content.length; i++){
            if (/[a-z]/.test(msg.content.charAt(i))){
                newMsg += ':regional_indicator_' + msg.content.charAt(i) + ':'
            }else{
                switch (msg.content.charAt(i)){
                    case '0':
                        newMsg += ':zero:'
                        break
                    case '1':
                        newMsg += ':one:'
                        break
                    case '2':
                        newMsg += ':two:'
                        break
                    case '3':
                        newMsg += ':three:'
                        break
                    case '4':
                        newMsg += ':four:'
                        break
                    case '5':
                        newMsg += ':five:'
                        break
                    case '6':
                        newMsg += ':six:'
                        break
                    case '7':
                        newMsg += ':seven:'
                        break
                    case '8':
                        newMsg += ':eight:'
                        break
                    case '9':
                        newMsg += ':nine:'
                        break
                    case '!':
                        newMsg += ':exclamation:'
                        break
                    case '?':
                        newMsg += ':question:'
                        break
                    default:
                        newMsg += msg.content.charAt(i)
                }
            }
        }
        msg.channel.send(newMsg)
    }else{console.log('msg too long')}
}

module.exports={
    pp:pp,
    sp:sp,
    exportxd:exportxd,
    ri:ri
}
