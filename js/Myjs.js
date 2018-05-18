function ChangeDiv(divId,divName,zDivCount) 
{ 
for(i=0;i<=zDivCount;i++) 
{ 
document.getElementById(divName+i).style.display="none"; //将所有的层都隐藏
document.getElementById(i).style.backgroundColor="#FFF"; //将所有的层背景色为白色
 
} 
document.getElementById(divName+divId).style.display="block"; //显示当前层
document.getElementById(divId).style.backgroundColor="#CCC";  //设置单击的选项卡的背景色为灰色
//显示当前层 
} 
