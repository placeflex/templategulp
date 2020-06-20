const $popupShow = $('.big-card');
const $overlayCard = $('.overlay_card');
const $overlay = $('#overlay');
const $noscroll = $('html');

const CLASS_ACTIVE = 'active';
const CLASS_NOSCROLL = 'noscroll';
const CLASS_NOACTIVE = 'noactive';

const showPopup = (() => {
  const showPopupInit = () => {
    $popupShow.on('click', (event) => {
      $(event.currentTarget).addClass(CLASS_ACTIVE);
      // $noscroll.addClass(CLASS_NOSCROLL);
      if ($popupShow.hasClass(CLASS_ACTIVE)) {
        $overlay.addClass(CLASS_ACTIVE);
        $noscroll.addClass(CLASS_NOSCROLL);
        $overlayCard.addClass(CLASS_NOACTIVE);
      } else {
        $overlay.removeClass(CLASS_ACTIVE);
        $noscroll.removeClass(CLASS_NOSCROLL);
        $overlayCard.removeClass(CLASS_NOACTIVE);
      }
    });
    $('#overlay').on('click', () => {
      $popupShow.removeClass(CLASS_ACTIVE);
      $overlay.removeClass(CLASS_ACTIVE);
      $noscroll.removeClass(CLASS_NOSCROLL);
    });
    $('.close-card').click((e) => {
      e.stopPropagation();
      $popupShow.removeClass(CLASS_ACTIVE);
      $overlay.removeClass(CLASS_ACTIVE);
      $noscroll.removeClass(CLASS_NOSCROLL);
    });
  };

  const init = () => {
    showPopupInit();
  };

  return {
    init,
  };
})();

export default showPopup;
