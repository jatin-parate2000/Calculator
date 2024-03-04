function btnAllClearClick()
{
    document.getElementById("txtnumber").value="";
}
function btnRemoveLastClick()
{
    var data=document.getElementById("txtnumber").value;
    var xxx = data.length;
    var sstring= data.substring(0, xxx-1);
    document.getElementById("txtnumber").value= sstring;
}
function btn0Click()
{
    document.getElementById("txtnumber").value +="0";
}
function btn1Click()
{
    document.getElementById("txtnumber").value +="1";
}
function btn2Click()
{
    document.getElementById("txtnumber").value +="2";
}
function btn3Click()
{
    document.getElementById("txtnumber").value +="3";
}
function btn4Click()
{
    document.getElementById("txtnumber").value +="4";
}
function btn5Click()
{
    document.getElementById("txtnumber").value +="5";
}
function btn6Click()
{
    document.getElementById("txtnumber").value +="6";
}
function btn7Click()
{
    document.getElementById("txtnumber").value +="7";
}
function btn8Click()
{
    document.getElementById("txtnumber").value +="8";
}
function btn9Click()
{
    document.getElementById("txtnumber").value +="9";
}
function btnDClick()
{
    document.getElementById("txtnumber").value +=".";
}
//////////////////////////////////////////////////////////////////////
var oldval="";
var op="";
function btnAddClick()
{
    oldval=document.getElementById("txtnumber").value;
    document.getElementById("txtnumber").value="";
    op="add";
}
function btnSubClick()
{
    oldval=document.getElementById("txtnumber").value;
    document.getElementById("txtnumber").value="";
    op="sub";
}
function btnMulClick()
{
    oldval=document.getElementById("txtnumber").value;
    document.getElementById("txtnumber").value="";
    op="mul";
}
function btnDivClick()
{
    oldval=document.getElementById("txtnumber").value;
    document.getElementById("txtnumber").value="";
    op="div";
}
function btnPercentClick()
{
    oldval=document.getElementById("txtnumber").value;
    document.getElementById("txtnumber").value="";
    op="per";
}
///////
function btnEqlClick()
{
    if(op==="add")
    {
        var newval=document.getElementById("txtnumber").value;
        var ans = parseFloat( oldval) + parseFloat( newval);
        document.getElementById("txtnumber").value= ans;
    }
    if(op==="sub")
    {
        var newval=document.getElementById("txtnumber").value;
        var ans = parseFloat( oldval) - parseFloat( newval);
        document.getElementById("txtnumber").value= ans;
    }
    if(op==="mul")
    {
        var newval=document.getElementById("txtnumber").value;
        var ans = parseFloat( oldval) * parseFloat( newval);
        document.getElementById("txtnumber").value= ans;
    }
    if(op==="div")
    {
        var newval=document.getElementById("txtnumber").value;
        var ans = parseFloat( oldval) / parseFloat( newval);
        document.getElementById("txtnumber").value= ans;
    }
    if(op==="per")
    {
        var newval=document.getElementById("txtnumber").value;
        var ans = (parseFloat( oldval) * parseFloat( newval)) / 100;
        document.getElementById("txtnumber").value= ans;
    }
}