import React, { Suspense } from 'react';
import './App.css';
import routes from './router';
import Layout from './components';
import { HashRouter as Router, Route, Link, Routes, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Unauthroised from './components/pages/Unauthroised.js';
import PageNotFound from './components/pages/PageNotFound';
function withLayout(WrappedComponent) {

  return (
    <Suspense fallback={<div className="appLoading">Loading <div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>}>
      <Layout>
        {WrappedComponent}
      </Layout>
    </Suspense>
  )
}
function withOutLayout(WrappedComponent) {
  return (
    <Suspense fallback={<div className="appLoading">Loading <div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>}>
      {WrappedComponent}
    </Suspense>
  )
}

function App() {
  const location = useLocation();
  const navigate = useNavigate()
  const isUserAuth = useSelector(state => state?.loginReducer?.isUserAuth);
  console.log("userSelecytouu=>", location, isUserAuth);
  const getRoutes = () => {
    let route = routes?.find(x => x.path === location.pathname);
    console.log("pathRoyte=>", route);
    if(route){
    if (isUserAuth) {
      if (route) {
        return <Route path={route.path} exact element={route?.isPublic ? withOutLayout(route.element) : withLayout(route.element)} />
      } else {
        return navigate('/404')
      }
    } else {
      console.log("valuessss=>", route === undefined, isUserAuth, route)
      return route === undefined ? <Route path={'/403'} exact element={withOutLayout(<Unauthroised />)} /> : <Route path={route?.path} exact element={route?.isPublic ? withOutLayout(route.element) : !isUserAuth ? <Unauthroised /> : withLayout(route.element)} />
    }
  }else{
    return navigate('/404')
  }
  }
  return (
    <React.Fragment>
      {/* <Router> */}
      <Routes>
        {getRoutes(routes)}
      </Routes>
      {/* <Routes>
        {routes.map((route, idx) => {
          // if (isUserAuth) {
          //   console.log("pathNmae=>1", location.pathname, route.path);
          //   if (location.pathname === route.path) {
          //     console.log("pathNmae=>2", location.pathname, route.path);
          //     return <Route path={route.path} exact element={route?.isPublic ? withOutLayout(route.element) : withLayout(route.element)} key={idx} />
          //   } else {
          //     console.log("pathNmae=>3", location.pathname, route.path);
          //     return navigate(route.path)
          //     //  <Route path={route.path} exact element={withOutLayout(<Unauthroised />)} key={idx} />
          //   }
          // } else {
          //   console.log("pathNmae=>4", isUserAuth, location.pathname, route.path);
          //   return <Route path={route.path} exact element={route?.isPublic ? withOutLayout(route.element) : !isUserAuth ? <Unauthroised /> : withLayout(route.element)} key={idx} />
          // }
          return isUserAuth ?
            (location.pathname === route.path ? <Route path={route.path} exact element={route?.isPublic ? withOutLayout(route.element) : withLayout(route.element)} key={idx} /> : <Route path='/404' exact element={<Unauthroised />} key={idx}/>) :
            <Route path={route.path} exact element={route?.isPublic ? withOutLayout(route.element) : !isUserAuth ? <Unauthroised /> : withLayout(route.element)} key={idx} />
        }
        )}
      </Routes> */}
      {/* </Router> */}
    </React.Fragment>
  );
}

export default App;
