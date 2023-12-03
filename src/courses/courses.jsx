import { Component } from "react"
import { connect } from "react-redux"
import CourseCard from "../lib/card";
import { Container, Typography,Grid } from "@mui/material";


class Courses extends Component{

  


render(){

  return(
    <Container>
       <Typography variant="h3" align="center">Courses</Typography>
       <Grid container item xs={12} md={12}>

        {
          this.props.courses.map((c,i)=>{

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
        }

       </Grid>
    </Container>
  )


}
}

const mapStateToProps=(state)=>{

  return {
    courses:state.courses
  }

}

export default connect(mapStateToProps)(Courses)