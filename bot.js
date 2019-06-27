const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();
const client25 = new Discord.Client();
const client26 = new Discord.Client();
const client27 = new Discord.Client();
const client28 = new Discord.Client();
const client29 = new Discord.Client();
const client30 = new Discord.Client();
const client31 = new Discord.Client();
const client32 = new Discord.Client();
const client33 = new Discord.Client();
const client34 = new Discord.Client();
const client35 = new Discord.Client();
const client36 = new Discord.Client();
const client37 = new Discord.Client();
const client38 = new Discord.Client();
const client39 = new Discord.Client();
const client40 = new Discord.Client();
const client41 = new Discord.Client();
const client42 = new Discord.Client();
const client43 = new Discord.Client();
const client44 = new Discord.Client();
const client45 = new Discord.Client();
const client46 = new Discord.Client();
const client47 = new Discord.Client();
const client48 = new Discord.Client();
const client49 = new Discord.Client();
const client50 = new Discord.Client();
const client51 = new Discord.Client();
const client52 = new Discord.Client();
const client53 = new Discord.Client();
const client54 = new Discord.Client();
const client55 = new Discord.Client();
const client56 = new Discord.Client();
const client57 = new Discord.Client();
const client58 = new Discord.Client();
const client59 = new Discord.Client();
const client60 = new Discord.Client();
const client61 = new Discord.Client();
const client62 = new Discord.Client();
const client63 = new Discord.Client();
const client64 = new Discord.Client();
const client65 = new Discord.Client();
const client66 = new Discord.Client();
const client67 = new Discord.Client();
const client68 = new Discord.Client();
const client69 = new Discord.Client();
const client70 = new Discord.Client();
const client71 = new Discord.Client();
const client72 = new Discord.Client();
const client73 = new Discord.Client();
const client74 = new Discord.Client();
const client75 = new Discord.Client();
const client76 = new Discord.Client();
const client77 = new Discord.Client();
const client78 = new Discord.Client();
const client79 = new Discord.Client();
const client80 = new Discord.Client();
const client81 = new Discord.Client();
const client82 = new Discord.Client();
const myid = ['569861608344518660'];
const prefix = ['-'];

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client2.on('ready', () => {
   console.log(`----------------`);
   console.log(`50 Account Online ✩' `);
   console.log(`----------------`);
});

client3.on('ready', () => {
   console.log(`----------------`);
   console.log(`50 Account Online ✩' `);
   console.log(`----------------`);
});

client.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client2.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});

client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client2.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client2.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو**[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});



client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client3.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client3.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client3.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client3.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client3.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client3.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client3.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client4.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client4.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client4.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client4.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client4.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client4.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client4.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client5.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client5.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client5.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client5.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client5.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});


client5.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});


client5.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client6.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client6.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client6.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client6.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client6.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});


client6.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client6.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client6.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client7.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client7.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client7.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client7.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client7.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});


client7.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});


client7.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client7.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client8.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client8.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client8.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client8.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client8.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});


client8.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client8.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client9.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client10.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client10.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client10.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client10.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client10.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client10.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client10.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client10.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client11.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client11.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client11.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client11.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client11.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client11.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client11.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client11.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client11.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client11.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client12.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client12.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client12.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client12.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client12.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client12.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client12.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client12.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client13.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client13.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client13.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client13.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client13.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client13.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client13.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client13.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client14.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client14.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client14.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client14.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client14.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client14.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client14.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client14.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client15.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client15.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client15.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client15.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client15.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client15.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client15.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client15.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client16.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client16.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client16.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client16.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client16.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client16.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client16.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client16.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client17.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client17.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client17.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client17.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client17.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client17.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client17.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client17.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client18.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client18.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client18.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client18.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client18.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client18.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client18.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client18.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

//توقف
client19.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client19.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client19.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client19.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client19.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client19.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client19.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client19.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client20.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client20.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client20.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client20.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client20.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client20.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client20.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client20.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client20.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client21.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    }
});

client21.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client21.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client21.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client21.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client21.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client21.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client21.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client22.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client22.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client22.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client22.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client22.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client22.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client22.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client22.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client22.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية


client23.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client23.on('message', message => {
    if(message.content === prefix+'راتب'){
        message.channel.send('$daily')
    }
});

client23.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client23.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client23.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client23.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client23.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('$rep <@569861608344518660>')
    }
});

client23.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client23.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية



client24.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client24.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client24.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('$credits')
    }
});

client24.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client24.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client24.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client24.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Vegas');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية


client25.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client25.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client25.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client25.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client25.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client25.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية



client26.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client26.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client26.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client26.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client26.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client26.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية


client27.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client27.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client27.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client27.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client27.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client27.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية



client28.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client28.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client28.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client28.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client28.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client28.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية



client29.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client29.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client29.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client29.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client9.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client29.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية



client30.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client30.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client30.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client30.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client30.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client30.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية


client31.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client31.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client31.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client31.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client31.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client31.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية




client32.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client32.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client32.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client32.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client32.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client32.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية





client33.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client33.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client33.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client33.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client33.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client33.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية



client34.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client34.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client34.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client34.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client34.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client34.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية


client35.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client35.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client35.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client35.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client35.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client35.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية




client36.on('message', message => {//البداية
    if(message.content === prefix+'راتب'){
        message.channel.send('#daily')
    } 
});

client36.on('message', message => {
    if(message.content === prefix+'مبلغ'){
        message.channel.send('#credits')
    }
});

client36.on('message', message => {
    if(message.content === prefix+'مدة'){
        message.channel.send('#user')
    }
});


client36.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send('#rep <@569861608344518660>')
    }
});

client36.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**الو الو الو الو الو الو الو الو الو الو الو **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client36.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Vegas');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});//النهاية






client.login("NTY4MzY0NzUyNDAxNzI3NDk4.XLhBMw.Id8FxuYt45SmGnExWQVlLCcNxEU");
client2.login("NTcyMTgwMzE0Njg5MTEwMDI2.XMbvdw.B__HFJlaNODkiWGcXEHSfwIYIVc");//0
client3.login("NTcyNDAxMDY4MjY1MTc3MDg4.XMbxqw.CIqWd2Q_clDDyh0UdvwlJE3hYMY");
client4.login("NTcyNDA5MzQxNDcxMjI3OTI1.XMb35g.DiIld5Lm4rdUL5zaaIbE3i2FUMs");
client5.login("NTcyNDA5OTAwNzk0MjQ5MjE2.XMb4rA.4gyZtLIgLtZSRkmoGg4hgsKbsPo");
client6.login("NTcyNDEyNjQwMTYxMzAwNTAz.XMb9QQ.0B5y55YGClv0EgPjEnMF2XOnkwQ");
client7.login("NTcyNDQyMDYxNTE3ODgxMzU0.XMcWTg.bLqonhhjMi2O_5TnZ2d1YiizrFs");
client8.login("NTcyNDQzNTg0NDkwNTA0MjAz.XMcXuA.EB_DAUqATO9fOIrk1PzURTBhBfU");
client9.login("NTcyNDQzODYzODM1NDc2MDE5.XMcYZA.3WkmunCLEYiIhPJIKQsk4R44gwA");
client10.login("NTcyNDQ1NzAzMTE3NDcxNzg4.XMcapw.dHplTDpO388vMhDBt_XBQgELu70");
client11.login("NTcyNDQ3Mjc2NDIxNjExNTMz.XMcbUw.zytCNkrQJSUU13MVZnmV9DImpGk");
client12.login("NTcyNDQ3Nzg5NjQ5NDk0MDE3.XMccfQ.BRwk6_BBdR_cdm-W_SPqY-rRuYI");
client13.login("NTcyNDQ4OTg2MjEzMTIyMDU4.XMcdCw.W50ZPWaTDu5YTXrvNDLURduykmQ");
client14.login("NTcyNDQ5NTY2MTA1MDEwMTg5.XMcdlQ.ZKcCpHRYNrbLmXZ37hEQRQaxzck");//*************/*******
client15.login("NTcyNDUwMTQ2Njg0NzY0MjEy.XMceMA.AHBYrI-jDU50IeUO-gwv8w_LNJ4");
client16.login("NTcyNDUxNTc3ODI3Mjk1MjU1.XMcfng.CgjmY5YiHX00eMPHZkVjspKVP64");
client17.login("NTcyNDUyNjk4MDU0NDU5Mzky.XMcgXg.nbMChHA3zkkQKU3tpM9UK6szImI");
client18.login("NTcyNDUzNDA2ODk2MDI5NzE2.XMchEQ.0Lj8anOCj8tRmKAiww8zkrrvOBA");
client19.login("NTcyNDUyMzg4MTkxOTkzODU3.XMcgAw.tN9Oo8ViNHUj2mA4XD_cJqrYfcU");
client20.login("NTcyNDUxNDA4NDAyNTc5NDY3.XMcfXA.0a3sJf7XG_nImuUMjvewj3pHttQ");
