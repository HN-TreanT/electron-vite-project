
import './App.css'
import { Provider } from 'react-redux'
import { Suspense } from 'react'
import { RouterLinks } from './const/RouterLinks'
import Login from './pages/login'
import OrderPage from './pages/order-page'
import { store } from './redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/layout'
import { AppContext, socket } from './context/appContext'
import ChefPage from './pages/chef-page'
function App() {
   
  return (
    <Provider store={store}>
      <BrowserRouter>
         <AppContext.Provider value={{socket}}>
         <div className='MainApp'>
            <div className='ContentApp'>

                {/* <Login/> */}
               <Routes>
                   <Route path={RouterLinks.LOGIN} element={<Login/>}/>
                   <Route path={RouterLinks.HOME_PAGE} element={<Layout/>}/>
                   <Route path={RouterLinks.ORDER_PAGE} element={<Suspense><OrderPage/></Suspense>}/>
                   <Route path={RouterLinks.CHEF_PAGE} element={<Suspense><ChefPage/></Suspense>}/>


               </Routes>
               
            </div>
         </div>
         </AppContext.Provider>
      </BrowserRouter>     
    </Provider>
  )
}

export default App
