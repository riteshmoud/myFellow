import React, { useState } from 'react'
import { Home } from '../../../common/Base/Home'
import './faculties.css'
import f1 from '../../../../assets/images/f1.png'
import f2 from '../../../../assets/images/f2.png'
import {
  Grid,
  TextField,
} from "@material-ui/core"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { margin } from '@mui/system'



export const Faculties = () => {

  const faculties = [
    {
      name: "Suja Panickar",
      role: "Assistant Professor",
      qualification: "Ph.D. in - Computer Engineering",
      university: "Pune University",
      department: "Department of Computer Engineering and Technology",
      email: "suja.panickar@mitwpu.edu.in",
      image: f2
    },
    {
      name: "Vrushali Kulkarni",
      role: "Professor",
      qualification: "Ph.D. in - Computer Engineering",
      university: "Pune University",
      department: "Department of Computer Engineering and Technology",
      email: "vrushali.kulkarni@mitwpu.edu.in",
      image: f1
    },
  ]

  const [temp, setTemp] = useState(faculties)

  const onFacultyChange = (name) => {
    if (name.trim().length === 0) {
      setTemp(faculties)
    }
    setTemp(
      faculties.filter((e) => {
        return e.name.trim().toLowerCase().includes(name.trim().toLowerCase())
      })
    )
  }

  const facultiesList = temp.map((faculty) => {

    return (
      <div className='faculty-div'>
        <div className='img-div'><img src={faculty.image} alt={faculty.name} /></div>
        <div className='faculty-info-div'>
          <h2>{faculty.name}</h2>
          <h4>{faculty.role}</h4>
          <h4>{faculty.qualification}</h4>
          <h4>{faculty.university}</h4>
          <h4>{faculty.department}</h4>
          <div className='faculty-email-div'>
            {faculty.email}
          </div>
        </div>
      </div>
    )

  })

  return (
    <Home>
      <Grid item>
        <TextField style={{ width: "100%", margin: "0.8rem 0" }} placeholder="Search name..." onChange={(e) => onFacultyChange(e.target.value)} />
      </Grid>
      <div className='main-faculty-div'>
        {facultiesList}
      </div>
    </Home>
  );
}

