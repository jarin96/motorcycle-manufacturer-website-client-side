import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Parts from './Pages/Home/Parts';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Review from './Pages/Dashboard/Review';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import AddProduct from './Pages/Dashboard/AddProduct';
import RequireAdmin from './Pages/Login/RequireAdmin';
import NotFound from './Pages/Shared/NotFound';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import MyPortfolio from './Pages/Home/MyPortfolio';
import Blogs from './Pages/Home/Blogs';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="myportfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="blogs" element={<Blogs></Blogs>} />

        <Route path="purchase/:id" element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='updateProfile/:id' element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path='users' element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}></Route>
          <Route path='manageorders' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageproducts' element={<ManageProducts></ManageProducts>}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
