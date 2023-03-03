const notificationBtn = document.querySelector('.header .notification'),
      notification = document.querySelector('.notifications')

notificationBtn.addEventListener('click', () => {
    notification.classList.toggle('showNotification')
});

$(document).ready(function() {
    $('.last-notification').hide();
    $('.last-notification:first-child').show();
    $('.filter_btn').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.last-notification').hide();
      $('.' + pageInfo).show();
    })
  });