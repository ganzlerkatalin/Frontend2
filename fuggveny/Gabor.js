/*Fuggvenyek 1.feladat - Neveket tartalmazó tömbben van-e Gábor és ha igen, akkor hányadik helyen?*/

var names=["István", "Katalin", "Attila", "Gábor", "Péter","Anna","Kitti"];


if(names.indexOf("Gábor") !== -1)
{
      //  alert("Yes,  the value exists!" );
 var result= names.indexOf("Gábor");

document.writeln("Gábor szerepel a listában a ",result+1,".helyen.")
}
else
{
      document.writeln("Gábor nem szerepel a listában.");
}
