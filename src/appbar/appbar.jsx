import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import services from '../services/services';
import { setCourses } from '../redux/actions';
import Drawer from '@mui/material/Drawer';
import {List,ListItem,ListItemText} from '@mui/material';

const items=[
  {
    title:"Dashboard",
    path:'/'
  },
  {
    title:"Course",
    path:'/courses'
  },

]

function TopAppBar(){


  const [searchVal,setSearchVal] = useState('')

  const dispatch= useDispatch()

  const [drawerOpen,setDrawerOpen] = useState(false)

  const handleSearch=()=>{

    if(searchVal.length>0){

        services.getData('courses').then((res)=>{

          let filt = res.filter((i)=>{

            return i.name.includes(searchVal)||i.instructor.includes(searchVal)

          })


          dispatch(setCourses(filt))

        })

    }

  }

  const clearSearch=()=>{

    services.getData('courses').then((res)=>{

      setSearchVal('')

      dispatch(setCourses(res))

    })

  }


  const navigate = useNavigate()
  return(
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"white",color:"black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,display:{md:'none',xs:'block'} }}
            onClick={()=>setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" >
            Heading
          </Typography>
          <Box sx={{display:{md:'block',xs:'none',flexGrow:1}}}>

           {
            items.map((element,index)=>{

              return <Button sx={{color:'black'}} key={index}
              onClick={()=>navigate(element.path)}
              disabled={searchVal.length>0?true:false}
              >{element.title}</Button>

            })
           }

          </Box>
          <Box>
            <TextField
            sx={{width:{xs:'80px',md:'50%'}}}
            size='small'
            label="Search Course"
            value={searchVal}
            onChange={(e)=>setSearchVal(e.target.value)}
            />
            <Button color='inherit' 
            onClick={handleSearch}
            >Search</Button>
            <Button 
            color='inherit'
            onClick={clearSearch}
            >Clear</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    <Drawer
    anchor="left"
    open={drawerOpen}
    onClose={()=>setDrawerOpen(false)}
    >
       <Box sx={{width:250}}>
             <List>
              {
                items.map((i,index)=>{

                  return <ListItem key={index} onClick={()=>{

                    setDrawerOpen(false)
                    
                    navigate(i.path)
                  }
                  }>
                    <ListItemText primary={i.title}/>
                  </ListItem>

                })
              }
              </List>
       </Box>
    </Drawer>
    </>
  )


}

export default TopAppBar