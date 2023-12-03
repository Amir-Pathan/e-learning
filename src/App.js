import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import services from './services/services';
import { login, setCourses } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Routes,Route, useLocation, useNavigate } from 'react-router-dom';
import Login from './login';
import { user } from './services/user';
import TopAppBar from './appbar';
import { routes } from './routes';

function App() {

  const dispatch=useDispatch()

  const state = useSelector((state)=>state)

  const navigate=useNavigate()

  useEffect(()=>{

    console.log(user());

    if(user()!=false){

      dispatch(login())

      services.getData('courses').then((res)=>{

        dispatch(setCourses(res))
  
      })
  
      navigate('/courses')
    

    }else{

      navigate('/login')

    }
    

  },[state.login])

  return (
    <div>
      {
        state.login?
        <TopAppBar/>
        :null
      }
       <Routes>
          {
            state.login?
            routes.map((ele,index)=>{

              return <Route path={ele.path} element={ele.component} key={index}/>

            }):
            <Route path='/login' element={<Login/>}/>

          }
       </Routes>
    </div>
  );
}

export default App;
