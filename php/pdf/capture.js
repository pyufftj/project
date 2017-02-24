/**
 * Created by KPF on 2017/2/24.
 */
var fs = require("fs");
var args=require('system').args;

var page=require('webpage').create();

page.content = fs.read(args[1]);
page.viewportSize={
    width:1024,
    height:1024
};

page.paperSize={
    format:"A2",
    orientation:"portrait",
    margin:"1cm"
};

window.setTimeout(function () {
   page.render(args[1]);
   phantom.exit();
},1000);