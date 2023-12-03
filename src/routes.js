import Courses from "./courses"
import CourseDetails from "./courseDetails"
import Dashboard from "./dashboard"

export const routes=[
  {
    path:'/courses',
    component:<Courses/>
  },
  {
    path:"/courseDetails/:id",
    component:<CourseDetails/>
  },
  {
    path:'/',
    component:<Dashboard/>
  }
]