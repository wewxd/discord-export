const fs=require('fs')
const conf=require('./config.json')
const cmd=require('./cmd.js')
const discord=require('discord.js')
const c=new discord.Client()

c.on('ready', ()=>console.log('ok'))

c.on('message', msg=>{
    if(msg.author.id==c.user.id && msg.content.startsWith(conf.prefix)){
        msg.delete()
        msg.content = msg.content.substr(conf.prefix.length)
        let cmdstr = ''
        do{
            cmdstr+=msg.content.charAt(0)
            msg.content = msg.content.substr(1)
        }while(msg.content.charAt(0) && msg.content.charAt(0) !== ' ')

        switch (cmdstr){
            case 'pp':
                cmd.pp(msg)
                break
            case'sp':
                cmd.sp(msg.channel)
                break
            case 'exptxt':
                cmd.exportxd({type: 'msg', msg: msg, stream: fs.createWriteStream(conf.expMsg, {flags: 'w', encoding: 'utf8'}), count: 0, time: new Date().getTime()})
                break
            case 'expimg':
                cmd.exportxd({type: 'img', rename: false, msg: msg, stream: conf.expImg, count: 0, time: new Date().getTime()})
                break
            case 'exprename':
                cmd.exportxd({type: 'img', rename: true, msg: msg, stream: conf.expImg, count: 0, time: new Date().getTime()})
                break
            case 'ri':
                cmd.ri(msg)
                break
            case 'nsfw':
                console.log(msg.channel.nsfw)
                break
            default:
                console.log('that command does not exists')
        }
    }
})

c.login(conf.token)
