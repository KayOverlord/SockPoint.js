SockPoint.startAnim.whenFROMdown('headtext',"#headTitle",2.5,{opacity:0,ease: Bounce.easeIn,scale:0.3});
SockPoint.startAnim.whenFROMdown('headtext',"#headSubTitle",6,{y:200,ease: Elastic.easeOut.config(1, 0.3)});
SockPoint.startAnim.whenTOdown('mainbody',"#coretitle",2,{opacity:10,rotationY:'+=360',ease: Bounce.easeIn});
SockPoint.startAnim.whenFROMdown('mainbody',".coresub",4,{y:70,opacity:0,ease:Power1.easeIn});
