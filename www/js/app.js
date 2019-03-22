var $$=Dom7;

var app = new Framework7({
  // App root element
  root: '#app',
  card: {
  swipeToClose:false,
  closeByBackdropClick: false
  },
  //theme
  theme: 'md',
  // App Name
  name: 'Mi Horario',
  // App id
  id: 'com.myapp.mihorario',
  // Enable statusbar
  statusbar: {
    enabled:true,
    overlay:true,
    materialBackgroundColor:'#FFFFFFFF' },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');
