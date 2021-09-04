import { BrowseRouter as Router, Swithc, Route, Switch} from 'react-router-dom';
//import { Content }  from '/ui/Content';
import { Login }  from '../ui/Login';

function Redirects (){
    return(
        <BrowseRouter>
            <Switch>
                <Route exact path ="/" component={Login}/>
            </Switch>
        </BrowseRouter>
    )
}

export default Redirects;