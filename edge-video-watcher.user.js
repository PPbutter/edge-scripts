// ==UserScript==
// @name         Edgenuity Video Watcher
// @namespace    http://tampermonkey.net/
// @version      2
// @description  Automates watching videos
// @author       Subatomicmc
// @match        https://student.edgenuity.com/enrollment/*/coursemap
// @match        https://*.core.learn.edgenuity.com/Player/
// @grant        none
// ==/UserScript==

(function() {
    var _0x44e3=['button','697195bwGwsb','length','73fMDNFC','substring','play','getElementById','160878mhAZqS','parse','enrollment','contains','document','log','location','ActivityTile','/activity/','.core.learn.edgenuity.com/lmsapi/sle/api/enrollments/','Direct\x20Instruction','getElementsByClassName','ActivityTile-status-completed','18977NzLUDD','course-timeline','includes','classList','onclick','children','873870jWPpaE','getting\x20new\x20list','href','appendChild','getElementsByTagName','scroll','goRight','1129107VslULT','338774PoyezV','closed','https://student.edgenuity.com/.*','add','click','parentElement','cookie','open','setAttribute','19823flSYzz','footnav','_blank','uid1_play','indexOf','Warm-Up','toString','if(!document.getElementById(\x27stageFrame\x27).contentWindow.API.FrameChain.framesStatus.includes(\x27incomplete\x27)){window.close()}','createElement','starting\x20interval','31MglVMo'];var _0x413d=function(_0x57b32b,_0x47895a){_0x57b32b=_0x57b32b-0x146;var _0x44e308=_0x44e3[_0x57b32b];return _0x44e308;};var _0xe6a63b=_0x413d;(function(_0x7f02c9,_0x28517f){var _0x2a9d8c=_0x413d;while(!![]){try{var _0x1dc4f8=parseInt(_0x2a9d8c(0x168))+parseInt(_0x2a9d8c(0x15a))*-parseInt(_0x2a9d8c(0x149))+-parseInt(_0x2a9d8c(0x147))+parseInt(_0x2a9d8c(0x160))+parseInt(_0x2a9d8c(0x167))+parseInt(_0x2a9d8c(0x17b))*parseInt(_0x2a9d8c(0x171))+-parseInt(_0x2a9d8c(0x14d));if(_0x1dc4f8===_0x28517f)break;else _0x7f02c9['push'](_0x7f02c9['shift']());}catch(_0x2fe60a){_0x7f02c9['push'](_0x7f02c9['shift']());}}}(_0x44e3,0xae0a6));function playVideo(){var _0x2ab5df=_0x413d,_0x4e45e3=window['frames'][0x0][_0x2ab5df(0x151)][_0x2ab5df(0x14c)](_0x2ab5df(0x174));_0x4e45e3!=undefined&&setTimeout(function(){var _0x22c238=_0x2ab5df;_0x4e45e3['className']==_0x22c238(0x14b)&&_0x4e45e3[_0x22c238(0x15f)][0x0][_0x22c238(0x16c)]();},0x3e8);}'use\x20strict';function readCookie(_0x4f0637){var _0x1e5952=_0x413d,_0x74ff08=_0x4f0637+'=',_0x5dcad2=document[_0x1e5952(0x16e)]['split'](';');for(var _0xf3072d=0x0;_0xf3072d<_0x5dcad2[_0x1e5952(0x148)];_0xf3072d++){var _0xdab027=_0x5dcad2[_0xf3072d];while(_0xdab027['charAt'](0x0)=='\x20')_0xdab027=_0xdab027[_0x1e5952(0x14a)](0x1,_0xdab027['length']);if(_0xdab027['indexOf'](_0x74ff08)==0x0)return _0xdab027['substring'](_0x74ff08['length'],_0xdab027['length']);}return null;}var realm=JSON[_0xe6a63b(0x14e)](readCookie('TokenData'))['Realm'][_0xe6a63b(0x177)](),loc=document[_0xe6a63b(0x153)][_0xe6a63b(0x162)],temp=loc[_0xe6a63b(0x175)](_0xe6a63b(0x14f))+0xb,enrollment=loc['substr'](temp,0x24),url='//r'+(realm['length']==0x1?'0':'')+realm+_0xe6a63b(0x156)+enrollment+_0xe6a63b(0x155),elements=[],acceptedNames=['Instruction',_0xe6a63b(0x176),'Summary',_0xe6a63b(0x157)],timeline,currentAssignment=0x0,openedWindow,minYpos=0x0,scrolled=!![],theInterval,allUndoneVideos=[],windowInterval;function waitForWindowClose(){var _0x87d246=_0xe6a63b;openedWindow[_0x87d246(0x169)]&&(theInterval=setInterval(nextAssignment,0xa),clearInterval(windowInterval));}function nextAssignment(){var _0x4acc5c=_0xe6a63b;console[_0x4acc5c(0x152)]('called');scrolled&&(elements=timeline['getElementsByClassName'](_0x4acc5c(0x154)),console['log'](_0x4acc5c(0x161),minYpos),scrolled=![]);if(elements[_0x4acc5c(0x148)]==0x0||currentAssignment+0x1>elements[_0x4acc5c(0x148)]){elements=[],currentAssignment=0x0,scrolled=!![],elements=timeline[_0x4acc5c(0x158)](_0x4acc5c(0x154)),minYpos=elements[elements[_0x4acc5c(0x148)]-0x1][_0x4acc5c(0x16d)]['offsetTop'],timeline[_0x4acc5c(0x165)](0x0,minYpos),clearInterval(theInterval),theInterval=setInterval(nextAssignment,0xc8);return;}else clearInterval(theInterval),theInterval=setInterval(nextAssignment,0xa);elements[currentAssignment][_0x4acc5c(0x16d)]==null&&(currentAssignment=0x0,elements=[],scrolled=!![]),elements[currentAssignment]['parentElement']['offsetTop']>minYpos&&!elements[currentAssignment]['classList'][_0x4acc5c(0x150)](_0x4acc5c(0x159))&&acceptedNames[_0x4acc5c(0x15c)](elements[currentAssignment][_0x4acc5c(0x164)]('SPAN')[0x0]['innerText'])&&(console[_0x4acc5c(0x152)](elements[currentAssignment]),clearInterval(theInterval),allUndoneVideos['push'](elements[currentAssignment]),console[_0x4acc5c(0x152)]('NEW\x20COUNT:',allUndoneVideos[_0x4acc5c(0x148)]),openedWindow=window[_0x4acc5c(0x16f)](url+elements[currentAssignment]['id'],_0x4acc5c(0x173)),windowInterval=setInterval(waitForWindowClose,0xc8)),currentAssignment++;}function waitForTimeline(){var _0x480b8e=_0xe6a63b;if(document[_0x480b8e(0x158)](_0x480b8e(0x15b))['length']==0x0){setTimeout(waitForTimeline,0x64),console[_0x480b8e(0x152)]('cant\x20find\x20timeline.\x20waiting');return;}timeline=document[_0x480b8e(0x158)](_0x480b8e(0x15b))[0x0][_0x480b8e(0x15f)][0x0],timeline[_0x480b8e(0x165)](0x0,0x0),theInterval=setInterval(nextAssignment,0x1f4);}var regex=new RegExp(_0xe6a63b(0x16a));if(regex['test'](document[_0xe6a63b(0x153)][_0xe6a63b(0x162)]))waitForTimeline();else{document['getElementsByClassName']('goRight')[0x0]['remove']();var button=document[_0xe6a63b(0x179)](_0xe6a63b(0x146));button['classList'][_0xe6a63b(0x16b)](_0xe6a63b(0x166)),button[_0xe6a63b(0x15d)][_0xe6a63b(0x16b)](_0xe6a63b(0x172)),button[_0xe6a63b(0x170)](_0xe6a63b(0x15e),_0xe6a63b(0x178)),document['body'][_0xe6a63b(0x163)](button),console[_0xe6a63b(0x152)](_0xe6a63b(0x17a)),setInterval(playVideo,0x3e8);}
    })();
    