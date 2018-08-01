function show_current_time()
{var seconds_current,seconds_previous,separator,date;seconds_current=get_maleisie_seconds();seconds_previous=('seconds_previous'in this)?this.seconds_previous:null;separator=(seconds_previous!=seconds_current)?':':'<font color="#f1f1f1">:</font>';this.seconds_previous=seconds_current;date=new Date(seconds_current*1000);document.getElementById('maleisie_time').innerHTML=_int_pad_string(date.getUTCHours(),2,'0')+separator+_int_pad_string(date.getUTCMinutes(),2,'0');}
function get_maleisie_seconds()
{var date;date=new Date();return(Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),date.getUTCHours(),date.getUTCMinutes(),date.getUTCSeconds())/1000+(8*3600));}
function _int_pad_string(value,length,symbol)
{value=value.toString();while(value.length<length){value=symbol+value;}
return(value);}