import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { user } from '../../services/user';
import services from '../../services/services';
import { useNavigate } from 'react-router-dom';

function CourseCard(props){

  const [enrollCourses,setEnrollCourses] = React.useState([])

  const [update,setUpdate] = React.useState(false)

  const navigate = useNavigate()

  const {
    thumbnail,
    name,
    description,
    enrollmentStatus,
    id
  }=props

  React.useEffect(()=>{

    let userr= user()

    setUpdate(userr.courses.includes(id))

    setEnrollCourses(userr.courses)

  },[])

  const upDateCourse=(e)=>{

  e.stopPropagation()

    let str= user()

    str.courses.push(id)

    let uid = str.id

    delete str.id

       services.upDateData('users',uid,str).then((res)=>{

        let cs=enrollCourses;

        cs.push(id)

        setUpdate(true)

        setEnrollCourses(cs)

        str.id=uid;

        localStorage.setItem('user',JSON.stringify(str))

       })

  }

  return(
  <>
  <Card sx={{ maxWidth: 345 }} onClick={()=>{
    navigate('/courseDetails/'+id)
  }}>
      <CardMedia
        sx={{ height: 145 }}
        image={thumbnail}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {
          enrollmentStatus==='open'?
          <Button color='inherit' fullWidth variant='outlined'
           disabled={update?enrollCourses.includes(id):false}
           onClick={upDateCourse}
          >Enrolled</Button>:
          <Typography sx={{color:enrollmentStatus==='closed'?'red':'green'}}>
            {enrollmentStatus}
          </Typography>
        }
      </CardActions>
    </Card>
  </>
  )

}

export default CourseCard