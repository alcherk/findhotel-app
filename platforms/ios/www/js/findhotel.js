document.addEventListener("deviceready", function(){
  var initialize = function(){
    var ref = window.open('http://hotels.findhotel.io/?mobile=1&label=ios-' + window.device.uuid, '_blank', 'location=no,hidden=yes,toolbar=no');
    ref.addEventListener('exit', function(event) { 
      initialize();
    });
    ref.addEventListener('loadstop', function(event) { 
      ref.show();
    });
    ref.addEventListener('loadstart', function(event) { 
      //alert('aa');
      ref.hide();
      
    });
  }

  initialize();
});