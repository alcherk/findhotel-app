document.addEventListener("deviceready", function(){
  var initialize = function(){
    var ref = window.open('http://hotels.findhotel.io/?mobile=1&label=android-' + window.device.uuid, '_blank', 'location=no,hidden=yes'); 
    ref.addEventListener('exit', function(event) { 
      initialize();
    });
    ref.addEventListener('loadstop', function(event) { 
      ref.show();
    });
    ref.addEventListener('loadstart', function(event) { 
      alert('aa');
      ref.hide();
      
    });
  }

  initialize();
});