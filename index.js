var _0x45be19=_0x41fd;(function(_0x1637cb,_0xe03e43){var _0x55083b=_0x41fd,_0x3b51c3=_0x1637cb();while(!![]){try{var _0x5ed508=parseInt(_0x55083b(0x1fc))/0x1+-parseInt(_0x55083b(0x1d3))/0x2*(-parseInt(_0x55083b(0x1cb))/0x3)+-parseInt(_0x55083b(0x210))/0x4*(-parseInt(_0x55083b(0x1e4))/0x5)+parseInt(_0x55083b(0x1d4))/0x6*(parseInt(_0x55083b(0x1c8))/0x7)+-parseInt(_0x55083b(0x1e1))/0x8*(-parseInt(_0x55083b(0x1da))/0x9)+parseInt(_0x55083b(0x1f6))/0xa*(parseInt(_0x55083b(0x1d1))/0xb)+-parseInt(_0x55083b(0x205))/0xc;if(_0x5ed508===_0xe03e43)break;else _0x3b51c3['push'](_0x3b51c3['shift']());}catch(_0x255d47){_0x3b51c3['push'](_0x3b51c3['shift']());}}}(_0x5738,0x1de35));const moment=require(_0x45be19(0x1d8)),time=moment['tz'](_0x45be19(0x1e0))[_0x45be19(0x1dc)](_0x45be19(0x20a));let cluster=require(_0x45be19(0x1f2)),path=require('path'),fs=require('fs'),package=require(_0x45be19(0x1f9));const {color}=require(_0x45be19(0x1ff)),CFonts=require('cfonts'),Readline=require(_0x45be19(0x1ca)),yargs=require('yargs/yargs'),rl=Readline[_0x45be19(0x1f8)](process[_0x45be19(0x1e3)],process['stdout']);console[_0x45be19(0x1d6)](color(time,'white'),color(_0x45be19(0x20e),_0x45be19(0x1de)),color(_0x45be19(0x20b),_0x45be19(0x204)));var date=new Date(),tahun=date['getFullYear'](),bulan=date[_0x45be19(0x212)](),tanggal=date[_0x45be19(0x1d9)](),hari=date['getDay'](),jams=date[_0x45be19(0x1c9)](),jamNow=date['getHours'](),menitNow=date[_0x45be19(0x1fe)](),detikNow=date[_0x45be19(0x1ed)]();function _0x5738(){var _0x5f0567=['format','Jam\x20:\x20','green','name','Asia/Jakarta','768HZSdvF','Februari','stdin','2395RdMVFg','Malam','Desember','\x20Hari','Sore','Senin','Exited\x20with\x20code:','fork','message','getSeconds','console','process','apply','magenta','cluster','parse','Maret','[RECEIVED]','10VbZILS','Kamis','createInterface','./package.json','Pagi','emit','209354uPAqqd','Mei','getMinutes','./lib/color','Juni','listenerCount','Oktober','Agustus','aqua','7827432zQGRuQ','Sabtu','exitProcess','setupMaster','red','HH:mm:ss','Connecting...','slice','say','[STATUS]','send','740JrtFSz','Juli','getMonth','uptime','Siang','Jum\x27at','unwatchFile','center','error','3577faOwCo','getHours','readline','3OcISKF','argv','simple3d','join','\x20By\x20','Rabu','238370HCupjt','line','405022crjbFi','1074uMUreq','exit','log','Minggu','moment-timezone','getDate','15102BaXMAU','Lightweight\x0aWhatsApp\x20Aine\x20Bot'];_0x5738=function(){return _0x5f0567;};return _0x5738();}switch(hari){case 0x0:hari=_0x45be19(0x1d7);break;case 0x1:hari=_0x45be19(0x1e9);break;case 0x2:hari='Selasa';break;case 0x3:hari=_0x45be19(0x1d0);break;case 0x4:hari=_0x45be19(0x1f7);break;case 0x5:hari=_0x45be19(0x1c4);break;case 0x6:hari=_0x45be19(0x206);break;}switch(bulan){case 0x0:bulan='Januari';break;case 0x1:bulan=_0x45be19(0x1e2);break;case 0x2:bulan=_0x45be19(0x1f4);break;case 0x3:bulan='April';break;case 0x4:bulan=_0x45be19(0x1fd);break;case 0x5:bulan=_0x45be19(0x200);break;case 0x6:bulan=_0x45be19(0x211);break;case 0x7:bulan=_0x45be19(0x203);break;case 0x8:bulan='September';break;case 0x9:bulan=_0x45be19(0x202);break;case 0xa:bulan='November';break;case 0xb:bulan=_0x45be19(0x1e6);break;}switch(jams){case 0x0:jams='Malam';break;case 0x1:jams=_0x45be19(0x1e5);break;case 0x2:jams=_0x45be19(0x1e5);break;case 0x3:jams=_0x45be19(0x1fa);break;case 0x4:jams='Pagi';break;case 0x5:jams='Pagi';break;case 0x6:jams=_0x45be19(0x1fa);break;case 0x7:jams=_0x45be19(0x1fa);break;case 0x8:jams=_0x45be19(0x1fa);break;case 0x9:jams=_0x45be19(0x1fa);break;case 0xa:jams=_0x45be19(0x1fa);break;case 0xb:jams=_0x45be19(0x1c3);break;case 0xc:jams='Siang';break;case 0xd:jams=_0x45be19(0x1c3);break;case 0xe:jams='Siang';break;case 0xf:jams='Sore';break;case 0x10:jams='Sore';break;case 0x11:jams=_0x45be19(0x1e8);break;case 0x12:jams='Malam';break;case 0x13:jams=_0x45be19(0x1e5);break;case 0x14:jams=_0x45be19(0x1e5);break;case 0x15:jams=_0x45be19(0x1e5);break;case 0x16:jams=_0x45be19(0x1e5);break;case 0x17:jams='Malam';break;}switch(jamNow){case 0x0:jamNow='00';break;case 0x1:jamNow='01';break;case 0x2:jamNow='02';break;case 0x3:jamNow='03';break;case 0x4:jamNow='04';break;case 0x5:jamNow='05';break;case 0x6:jamNow='06';break;case 0x7:jamNow='07';break;case 0x8:jamNow='08';break;case 0x9:jamNow='09';break;case 0xa:jamNow='10';break;case 0xb:jamNow='11';break;case 0xc:jamNow='12';break;case 0xd:jamNow='13';break;case 0xe:jamNow='14';break;case 0xf:jamNow='15';break;case 0x10:jamNow='16';break;case 0x11:jamNow='17';break;case 0x12:jamNow='18';break;case 0x13:jamNow='19';break;case 0x14:jamNow='20';break;case 0x15:jamNow='21';break;case 0x16:jamNow='22';break;case 0x17:jamNow='23';break;}switch(menitNow){case 0x0:menitNow='00';break;case 0x1:menitNow='01';break;case 0x2:menitNow='02';break;case 0x3:menitNow='03';break;case 0x4:menitNow='04';break;case 0x5:menitNow='05';break;case 0x6:menitNow='06';break;case 0x7:menitNow='07';break;case 0x8:menitNow='08';break;case 0x9:menitNow='09';break;case 0xa:menitNow='10';break;case 0xb:menitNow='11';break;case 0xc:menitNow='12';break;case 0xd:menitNow='13';break;case 0xe:menitNow='14';break;case 0xf:menitNow='15';break;case 0x10:menitNow='16';break;case 0x11:menitNow='17';break;case 0x12:menitNow='18';break;case 0x13:menitNow='19';break;case 0x14:menitNow='20';break;case 0x15:menitNow='21';break;case 0x16:menitNow='22';break;case 0x17:menitNow='23';break;case 0x18:menitNow='24';break;case 0x19:menitNow='25';break;case 0x1a:menitNow='26';break;case 0x1b:menitNow='27';break;case 0x1c:menitNow='28';break;case 0x1d:menitNow='29';break;case 0x1e:menitNow='30';break;case 0x1f:menitNow='31';break;case 0x20:menitNow='32';break;case 0x21:menitNow='33';break;case 0x22:menitNow='34';break;case 0x23:menitNow='35';break;case 0x24:menitNow='36';break;case 0x25:menitNow='37';break;case 0x26:menitNow='38';break;case 0x27:menitNow='39';break;case 0x28:menitNow='40';break;case 0x29:menitNow='41';break;case 0x2a:menitNow='42';break;case 0x2b:menitNow='43';break;case 0x2c:menitNow='44';break;case 0x2d:menitNow='45';break;case 0x2e:menitNow='46';break;case 0x2f:menitNow='47';break;case 0x30:menitNow='48';break;case 0x31:menitNow='49';break;case 0x32:menitNow='50';break;case 0x33:menitNow='51';break;case 0x34:menitNow='52';break;case 0x35:menitNow='53';break;case 0x36:menitNow='54';break;case 0x37:menitNow='55';break;case 0x38:menitNow='56';break;case 0x39:menitNow='57';break;case 0x3a:menitNow='58';break;case 0x3b:menitNow='59';break;}switch(detikNow){case 0x0:detikNow='00';break;case 0x1:detikNow='01';break;case 0x2:detikNow='02';break;case 0x3:detikNow='03';break;case 0x4:detikNow='04';break;case 0x5:detikNow='05';break;case 0x6:detikNow='06';break;case 0x7:detikNow='07';break;case 0x8:detikNow='08';break;case 0x9:detikNow='09';break;case 0xa:detikNow='10';break;case 0xb:detikNow='11';break;case 0xc:detikNow='12';break;case 0xd:detikNow='13';break;case 0xe:detikNow='14';break;case 0xf:detikNow='15';break;case 0x10:detikNow='16';break;case 0x11:detikNow='17';break;case 0x12:detikNow='18';break;case 0x13:detikNow='19';break;case 0x14:detikNow='20';break;case 0x15:detikNow='21';break;case 0x16:detikNow='22';break;case 0x17:detikNow='23';break;case 0x18:detikNow='24';break;case 0x19:detikNow='25';break;case 0x1a:detikNow='26';break;case 0x1b:detikNow='27';break;case 0x1c:detikNow='28';break;case 0x1d:detikNow='29';break;case 0x1e:detikNow='30';break;case 0x1f:detikNow='31';break;case 0x20:detikNow='32';break;case 0x21:detikNow='33';break;case 0x22:detikNow='34';break;case 0x23:detikNow='35';break;case 0x24:detikNow='36';break;case 0x25:detikNow='37';break;case 0x26:detikNow='38';break;case 0x27:detikNow='39';break;case 0x28:detikNow='40';break;case 0x29:detikNow='41';break;case 0x2a:detikNow='42';break;case 0x2b:detikNow='43';break;case 0x2c:detikNow='44';break;case 0x2d:detikNow='45';break;case 0x2e:detikNow='46';break;case 0x2f:detikNow='47';break;case 0x30:detikNow='48';break;case 0x31:detikNow='49';break;case 0x32:detikNow='50';break;case 0x33:detikNow='51';break;case 0x34:detikNow='52';break;case 0x35:detikNow='53';break;case 0x36:detikNow='54';break;case 0x37:detikNow='55';break;case 0x38:detikNow='56';break;case 0x39:detikNow='57';break;case 0x3a:detikNow='58';break;case 0x3b:detikNow='59';break;}var tampilTanggal=hari+'\x20'+tanggal+'\x20'+bulan+'\x20'+tahun,tampilWaktu=_0x45be19(0x1dd)+jamNow+'\x20'+menitNow+'\x20'+detikNow,tampilHari=''+jams+_0x45be19(0x1e7);console[_0x45be19(0x1d6)](color(tampilTanggal,'pink')),console['log'](color(tampilWaktu,'pink')),console[_0x45be19(0x1d6)](color(tampilHari,'pink')),CFonts[_0x45be19(0x20d)](_0x45be19(0x1db),{'font':'chrome','align':'center','gradient':[_0x45be19(0x209),_0x45be19(0x1f1)]}),CFonts[_0x45be19(0x20d)](package[_0x45be19(0x1df)]+_0x45be19(0x1cf)+(package['author'][_0x45be19(0x1df)]||package['author']),{'font':_0x45be19(0x1ee),'align':_0x45be19(0x1c6),'gradient':[_0x45be19(0x209),_0x45be19(0x1f1)]}),CFonts['say'](''+package[_0x45be19(0x1df)],{'font':_0x45be19(0x1cd),'align':_0x45be19(0x1c6),'gradient':['red',_0x45be19(0x1f1)]});function _0x41fd(_0x48caaf,_0xefad1a){var _0x57385a=_0x5738();return _0x41fd=function(_0x41fdcb,_0x3786b1){_0x41fdcb=_0x41fdcb-0x1c2;var _0x99180e=_0x57385a[_0x41fdcb];return _0x99180e;},_0x41fd(_0x48caaf,_0xefad1a);}var isRunning=![];function start(_0x3f334f){var _0x316028=_0x45be19;if(isRunning)return;isRunning=!![];let _0xd9d212=[path[_0x316028(0x1ce)](__dirname,_0x3f334f),...process[_0x316028(0x1cc)][_0x316028(0x20c)](0x2)];cluster[_0x316028(0x208)]({'exec':path['join'](__dirname,_0x3f334f),'args':_0xd9d212[_0x316028(0x20c)](0x1)});let _0x562246=cluster[_0x316028(0x1eb)]();_0x562246['on'](_0x316028(0x1ec),_0x1ac7bf=>{var _0x32a09c=_0x316028;console[_0x32a09c(0x1d6)](_0x32a09c(0x1f5),_0x1ac7bf);switch(_0x1ac7bf){case'reset':_0x562246[_0x32a09c(0x1ef)]['kill'](),isRunning=![],start[_0x32a09c(0x1f0)](this,arguments);break;case _0x32a09c(0x1c2):_0x562246[_0x32a09c(0x20f)](process['uptime']());break;}}),_0x562246['on'](_0x316028(0x1d5),(_0x14c1f0,_0x7e89df)=>{var _0xcfcc63=_0x316028;isRunning=![],console[_0xcfcc63(0x1c7)](_0xcfcc63(0x1ea),_0x7e89df);if(_0x7e89df===0x0)return;fs['watchFile'](_0xd9d212[0x0],()=>{var _0x3434e7=_0xcfcc63;fs[_0x3434e7(0x1c5)](_0xd9d212[0x0]),start(_0x3f334f);});});let _0x218663=new Object(yargs(process[_0x316028(0x1cc)][_0x316028(0x20c)](0x2))[_0x316028(0x207)](![])[_0x316028(0x1f3)]());if(!_0x218663['test']){if(!rl[_0x316028(0x201)]())rl['on'](_0x316028(0x1d2),_0x3fe87b=>{var _0x193180=_0x316028;_0x562246[_0x193180(0x1fb)](_0x193180(0x1ec),_0x3fe87b['trim']());});}}start('main.js');