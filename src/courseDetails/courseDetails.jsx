import { Container, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Box from "@mui/material/Box"
import {Accordion,AccordionSummary,AccordionDetails} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function CourseDetails(){


  const [course,setCourse] = useState({})

  const [loading,setLoading] = useState(true)


  const {id} = useParams()

  const state = useSelector((state=>state.courses))

  useEffect(()=>{

    let idx= state.findIndex((i,index)=>{

      return i.id===id

    })

    setLoading(false)

    setCourse(state[idx])

  },[])



  return(
    <Container>
    {
      loading?
       <Typography textAlign={'center'}>Loading...</Typography>
      :<>
        {
          <>
          <Box sx={{display:"flex",flexDirection:{xs:"column",md:'row'},justifyContent:"space-around",marginTop:'10px'}}>
            <Typography variant="h5">{course.name}</Typography>
            <Typography variant="h5">{course.instructor}</Typography>
            <Typography variant="h5">{course.duration}</Typography>
          </Box>
          <Box sx={{display:"flex",flexDirection:{xs:"column",md:'row'},justifyContent:"space-around",marginTop:'5px'}}>
            <Typography variant="h5">Location : {course.location}</Typography>
            <Typography variant="h5">Time  : {course.schedule}</Typography>
          </Box>
          <Typography variant="h4" textAlign={'center'}> 
                Prerequisites
          </Typography>
          <Box sx={{display:"flex",flexDirection:{xs:"column",md:'row'},justifyContent:"space-around",marginTop:'5px'}}>
            {
              course.prerequisites.map((i,index)=>{

                return <Paper key={index} sx={{width:'400px'}}>
                  <Typography variant="h6" align="center">
                    {i}
                  </Typography>
                </Paper>

              })
            }
          </Box>
          <Paper>
          <Typography> Description :</Typography>
          <Typography variant="p">
            {course.description}
          </Typography>
          </Paper>
          <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Syllabus :</Typography>
        </AccordionSummary>
        {
          course.syllabus.map((i,index)=>{
            return <AccordionDetails key={index}>
              <Paper>
            <Typography>
              week {i.week} : {i.topic}
            </Typography>
            <Typography>
              {i.content}
            </Typography>
            </Paper>
          </AccordionDetails>
          })
        }
      </Accordion>
          </>
        }
      </>
    }
    </Container>
  )

}

export default CourseDetails