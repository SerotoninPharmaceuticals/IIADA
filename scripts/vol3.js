$(document).ready(function () {
  target_elements = $('.counter.random-gen');
  target_elements.each(function (index, data) {
    setTimeout(function() {
      var count_number = Math.floor(Math.random()*300);
      if (Math.random()*10 > 7) {
        count_number += Math.floor(Math.random()*4000);
      };
      if (Math.random()*10 > 9) {
        count_number += Math.floor(Math.random()*10000000);
      };
      var count_number_string = count_number.toString();
      var count_number_string_length = count_number_string.length;
      if (count_number_string_length>6) {
        count_number_string = count_number_string.slice(0,count_number_string_length - 6) + ',' +  count_number_string.slice(count_number_string_length - 6,count_number_string_length - 3) + ',' + count_number_string.slice(count_number_string_length - 3,count_number_string_length);
      } else if (count_number_string_length>3) {
        count_number_string = count_number_string.slice(0,count_number_string_length-3) + ',' + count_number_string.slice(count_number_string_length-3,count_number_string_length);
      };
      $(data).find('.number').text(count_number_string);
    }, Math.floor(Math.random()*2000 + 800));
  });

  $('.untouchable').click(function () {
    alert('Please do not touch the exhibits');
    return false;
  });

  // if (!$.cookie('voted')) {
  //   $('.corridor').addClass('lock');
  //   $('.plus-us .goodwill-32').click(function () {
  //     $.cookie('voted', true);
  //     location.reload();
  //   })
  // };
});