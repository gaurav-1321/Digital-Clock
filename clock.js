function starttime(){
  const today=new Date();
  let h=today.getHours();
  let m=today.getMinutes();
  let s=today.getSeconds();
  let d=today.getDay(); 
  let dat=today.getDate();
  let month=today.getMonth();
  let year=today.getFullYear();
  m=checkTime(m);
  s=checkTime(s);
  let session="AM";
  if(h==0){
    h=12;
  }
  if(h>12){
    h=h-12;
    session="PM";
  }
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  document.getElementById('head1').innerHTML = days[d] + ", " + dat + " " + months[month] + " " + year;
 document.getElementById('head2').innerHTML=h+":"+m+":"+s+" "+session;
 setTimeout(starttime,1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
starttime();