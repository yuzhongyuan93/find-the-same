export default function () {
    //平台、设备和操作系统参数
    const system = {
        win: false,
        mac: false,
        xll: false,
        ipad:false,
        computer:false,//是否是电脑端
        mobile:false,//是否是移动端
    };
    //检测平台
    const p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false;
    if ( system.win || system.mac || system.xll || system.ipad ){//PC端
        system.computer = true;
    }
    else{//移动端
        system.mobile = true;
    }
    return system;
}