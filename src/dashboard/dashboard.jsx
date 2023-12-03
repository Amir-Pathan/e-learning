import { useEffect, useState } from "react"
import { user } from "../services/user"
import { useDispatch, useSelector } from "react-redux"
import CourseCard from "../lib/card"
import { Container, Typography,Grid } from "@mui/material"
import services from "../services/services"
import { setCourses } from "../redux/actions"


function Dashboard(){

  const [enrollCourses,setEnrollCourses] = useState([])

  const state= useSelector((state)=>state.courses)

  const dispatch= useDispatch()

  useEffect(()=>{

    let userr = user()

    services.getData('courses').then((res)=>{

      dispatch(setCourses(res))

      let cs=[]

      userr.courses.forEach((i)=>{
  
        let indx= state.findIndex((c)=>{
  
          return c.id===i
  
        })
  
       cs.push(state[indx])
  
       setEnrollCourses(cs)

       console.log(cs);
  
  
      })

    })


   // console.log(cs);
 
  },[])


  return(
    <Container>
      <Typography variant="h5" align="center">Enroll Courses</Typography>
      <Grid container item xs={12} md={12}>
          {
            enrollCourses.length>0?
            enrollCourses.map((c,i)=>{

              return <Grid item xs={12} md={4} key={i}> 
              <CourseCard key={i}
              thumbnail={c.thumbnail}
              name={c.name}
              description={c.description}
              enrollmentStatus={c.enrollmentStatus}
              id={c.id}
              />
              </Grid>

            })
            :
            <Typography>Not Enroll Courses Yet</Typography>
          }
      </Grid>
    </Container>
  )

}

export default Dashboard