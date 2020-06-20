const menuHumburger = (() => {
  const HUMBURGER = $('header .container .header .menu');
  const HUMBURGER_SPAN = $('header .container .header .menu .hamburger');
  const MENU = $('header .container_fluid .menu');
  const BODY = $('body');
  const HIDE = 'hide';
  const ACTIVE = 'active';
  const menu = () => {
    MENU.toggleClass(HIDE);
    HUMBURGER_SPAN.toggleClass(ACTIVE);
    BODY.toggleClass(HIDE);
  };
  const init = () => {
    HUMBURGER.click(() => menu());
  };
  return {
    init,
  };
})();

export default menuHumburger;
