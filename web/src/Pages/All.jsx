
import {useState,useEffect,useContext,} from 'react'
import {
  Switch,
  Route,
  
} from "react-router-dom";
import {ThemeContext} from './Context/ContextConfig'
import Preloader from '../components/PreLoader'
import Home from "./Home"
import Youtube from "./Youtube";
import Imager from './Imager';
import {Routes} from '../routes'
import Error404 from './404';
import ImgConverter from './ImgConverter'
import Converter from './Converter'
import Img2pdf from './Img2pdf';
import CompressImg from './CompressImg';

function All() {
  const [loaded, setLoaded] = useState(false);
  const RouteWithLoader = ({ component: Component, ...rest }) => {
    
    const Config = useContext(ThemeContext)
    useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 2000);
      return () => clearTimeout(timer);
    }, );
    return (
                    <Route  {...rest} render={props => ( <>  {loaded ? <Component Config={Config} {...props} /> : <Preloader show={loaded ? false :true} />} </> ) } />

      );
  };


  return (
           <Switch>
                <RouteWithLoader exact path={Routes.Home.path} component={Home} />
                <RouteWithLoader path={Routes.Imager.path} component={Imager} />
                <RouteWithLoader path={Routes.CompressImg.path} component={CompressImg} />
                <RouteWithLoader  path={Routes.Video.path} component={Youtube} />
                <RouteWithLoader  path={Routes.ImgConverter.path} component={ImgConverter} />
                <RouteWithLoader  path={Routes.Img2PDF.path} component={Img2pdf} />
                <RouteWithLoader  path={Routes.Converter.path} component={Converter} />
                <RouteWithLoader  path={Routes.error404.path} component={Error404} />
           </Switch>

  );
}

export default All;
