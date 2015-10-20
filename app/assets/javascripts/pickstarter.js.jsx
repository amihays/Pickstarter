window.Routes = function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var root = document.getElementById('content');

  React.render((
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={ProjectsIndex}/>
        <Route path="genres" component={GenresIndex}/>
        <Route path="genres/:id" component={GenreShow}/>
        <Route path="projects/new" component={ProjectForm}/>
        <Route path="projects/:id" component={ProjectShow}/>
        <Route path="/user" component={UserProfile}/>
      </Route>
    </Router>
  ), root)
};
