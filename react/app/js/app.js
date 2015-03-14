var spa = spa || {};
spa.config = {
  app_container:'ui-app-container',
  view_container:'ui-view-container'
};

function sendRootToRoute (route) {
  if (window.location.pathname === '/') {
    window.location.href = '#' + route;
  }
}

document.addEventListener("DOMContentLoaded", function (event) { 

  spa.widgets.service.init(spa.common.ajax);
  
  var router = Router({
    '/' : spa.widgets.controller.index_widgets
  });
  router.init();
  sendRootToRoute('/');

});