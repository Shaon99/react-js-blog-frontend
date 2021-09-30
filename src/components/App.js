import Allpost from "./Allpsot";
import Nav from "./Nav";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Blog from "./Blog";
import About from "./About";
import Postdetails from "./Postdetails";

function App() {
  return (
<Router>
<Nav/>  
<Switch>
   <Route exact path="/details/:postId" component={Postdetails}/>
   <Route exact path="/contact" component={About}/>
   <Route exact path="/about" component={About}/>
   <Route exact path="/blog" component={Blog}/>
   <Route exact path="/" component={Allpost}/>
   </Switch>
</Router>
  );
}

export default App;
