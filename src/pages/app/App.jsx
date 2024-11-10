import {useRoutes,BrowserRouter} from "react-router-dom";
import Home from "../Home/index.jsx";
import MyAccound from "../MyAccound/index.jsx";
import MyOrder from "../MyOrder/index.jsx";
import MyOrders from "../MyOrders/index.jsx";
import NotFound from "../NotFound/index.jsx";
import SingIn from "../SingIn/index.jsx";

const AppRoutes = ()=>{
    let routes = useRoutes([
        {path:'/',element:<Home/>},
        {path:'/myaccound',element:<MyAccound/>},
        {path:'/myorder',element:<MyOrder/>},
        {path:'/myorders',element:<MyOrders/>},
        {path:'/SingIn',element:<SingIn/>},
        {path:'/*',element:<NotFound/>}
    ])
    return routes;
}

function App() {

  return (
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
