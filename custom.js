$(document).ready(function(){
   
    var cel = false;
    var api;
        
    
    $.getJSON('http://ipinfo.io', function(d) {
        var loc = d.loc;
        
     $.getJSON('http://api.apixu.com/v1/current.json?key=89e89908c79b41a1b0585819172602&q= ' + loc, function(apiData) {
        
         api = apiData;
         
         var location = api.location.name;
         var locationRegion = api.location.region;
         var celsius =  api.current.temp_c;
         var farenheit = api.current.temp_f;
         var condition = api.current.condition;
         var icon = api.current.condition.icon;
         
         
         $('#Icon').prepend('<img height="150px" width="150px" src=' + icon + '>');
         document.getElementById('location').innerHTML = '' + location + ', ' +locationRegion;
         document.getElementById('celsius').innerHTML = '' + celsius + '&deg;C';         //document.getElementById('condition').innerHTML = icon;
         document.getElementById('farenheit').innerHTML = '' + farenheit + '&deg;F';
    });
    })
    
    
    
    });



var api = 'http://api.apixu.com/v1/current.json?key=89e89908c79b41a1b0585819172602&q=28.6491187,77.3543884';