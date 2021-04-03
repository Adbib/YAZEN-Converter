
import {useState,useEffect} from 'react'
import {
  Switch,
  Route,

} from "react-router-dom";
import Preloader from '../components/PreLoader'
import Home from "./Home"
import Youtube from "./Youtube";
import Imager from './Imager';
import {Routes} from '../routes'
import Error404 from './404';
import ImgConverter from './ImgConverter'
import Converter from './Converter'

function All() {
  const onClick= ()=>{
    console.log("works");
    setLoaded(false)
  }

  const [loaded, setLoaded] = useState(false);
  const RouteWithLoader = ({ component: Component, ...rest }) => {

    useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 5000);
      return () => clearTimeout(timer);
    }, );
    return (
                    <Route  {...rest} render={props => ( <>  <Component {...props} />  <Preloader show={loaded ? false :true} /> </> ) } />

      );
  };


  return (
           <Switch>
                <RouteWithLoader onClick={onClick} exact path={Routes.Home.path} component={Home} />
                <RouteWithLoader onClick={onClick}  path={Routes.Imager.path} component={Imager} />
                <RouteWithLoader  onClick={onClick} path={Routes.Video.path} component={Youtube} />
                <RouteWithLoader  onClick={onClick} path={Routes.ImgConverter.path} component={ImgConverter} />
                <RouteWithLoader  onClick={onClick} path={Routes.Converter.path} component={Converter} />
                <RouteWithLoader  path={Routes.error404.path} component={Error404} />
           </Switch>

  );
}

export default All;
