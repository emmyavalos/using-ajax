$(document).ready(function(){
$.ajax({ url: "http://json-server.devpointlabs.com/api/v1/users",
         method: 'GET',
         dataType: 'JSON'
        }).done( function(users) {
          console.log(users)
          var list = $('#users');
          list.empty();
          users.forEach( function(user) {
            var li = '<li>' + user.first_name + ' ' + user.last_name + '</li>'
            list.append(li)
          });
      });
});




// $('#toggle').on('click', function() {
//   showForm = !showForm;
//   $('#game-form').remove()
//   $('#games-list').toggle()
//
//   if (showForm) {
//
//     $.ajax({
//       url: '/game_form',
//       method: 'GET'
//     }).done( function(html) {
//       $('#toggle').after(html);
//     });
//   }
// });
