var spa = spa || {};
spa.config = {
  container:'ui-container'
};

document.addEventListener("DOMContentLoaded", function (event) { 

  spa.widgets.service.init(spa.common.ajax);
  
  var router = Router({
    '/' : spa.widgets.controller.index_widgets
  });
  router.init();

  if (window.location.pathname === '/') {
    window.location.href = '#/';
  }

  console.log('react sandbox running...');
});