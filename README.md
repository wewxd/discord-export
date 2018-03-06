## discord-export
A selfbot i use to export messages or files from a discord channel. It has some other basic functions, too.

### Dependencies:

* node.js
* npm packages:  
  * request  
  * discord.js

### Configuration:
In "config.json":
* token: Your token. You can grab it by pressing ctrl+shift+I in the client -> Application -> Local Storage -> token.
* prefix: The prefix to trigger a command. 
* expMsg: The text file in which the bot should export the messages from a channel
* expImg: The folder in which the bot should put the exported images from a channel

### How to run the bot:
* Install node.js
* Fill in the config file
* In the clonned folder, open a terminal and type "npm install discord.js" and "npm install request"
* Run the bot by typing "node ."

### List of commands:

The bot will only react if the account it is logged in types the prefix. It does not react to other people's commands.  
* pp *id*: shows someone's profile picture. In a DM channel, it's not necessary to enter an ID.
* sp: shows the server's picture
* ri: replaces the letters in the message with regional\_indicator emotes
* exptxt: Exports all the messages from a channel in a text file
* expimg: Exports all the images from a channel
* exprename: Exxports all the images from a channel and renames them as such: "username - date.png"
