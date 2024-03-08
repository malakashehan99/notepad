function boldtext(){
    document.execCommand("bold");
}
function underlinetext(){
    document.execCommand("underline");
}
function italictext(){
    document.execCommand("italic");
}
function colortext(){
    let selectcolor = document.getElementById("colorselect").value
    document.execCommand("forecolor",true,selectcolor);
}
function textalignleft(){
    document.execCommand("JustifyLeft",false,null);
}
function textaligncenter(){
    document.execCommand("JustifyCenter");
}
function textalignright(){
    document.execCommand("JustifyRight");
}
function textalignjustify(){
    document.execCommand("JustifyFull");
}
function redo(){
    document.execCommand("redo");
}
function undo(){
    document.execCommand("undo");
}