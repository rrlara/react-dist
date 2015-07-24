var jQuery = require('jquery');

// module.exports = {
//     get: function (callback) {
//         jQuery.ajax({
//             url: 'http://api.open-notify.org/iss-now.json',
//             dataType: 'jsonp',
//             success: function(data){
//                 callback({
//                     latitude: data.iss_position.latitude,
//                     longitude: data.iss_position.longitude
//                 });
//             }
//         });
//     }
// };

module.exports = {
    get: function (callback) {
            function geo_success(position) {
                do_something(position.coords.latitude, position.coords.longitude);
            }

            function geo_error() {
              alert("Sorry, no position available.");
            }

            var geo_options = {
              enableHighAccuracy: true, 
              maximumAge        : 30000, 
              timeout           : 27000
            };

            var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
        }
};