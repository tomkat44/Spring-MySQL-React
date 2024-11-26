import * as React from 'react';
import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper, Button} from '@mui/material';


export default function Student() {
    
    const paperStyle = {Padding:'50px 20px', width:400, margin:'220px auto'};
    const [name, setName]=useState("");
    const [address, setAddress]=useState("");
    const [students, setStudents] = useState([]);

    const handleClick=(e)=>{
        e.preventDefault();
        const student={name, address};
        console.log(student);

        fetch("http://localhost:8080/student/add", {  //main http address i use in the Postmman
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>
            console.log("Student is added"))
    }

    useEffect(()=>{
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setStudents(result);
        }
      )
      },[])

    //const classes = useStyles();

  return (

    <Container>
            <Paper elevation={3} style={paperStyle}>

<h1 style={{color:"blue"}}>Add Student</h1>
            
    
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth value={name} onChange={(e)=>setName(e.target.value)}/>
      <TextField id="filled-basic" label="Address" variant="filled" fullWidth value={address} onChange={(e)=>setAddress(e.target.value)}/>
      <TextField id="standard-basic" label="Standard" variant="standard" fullWidth/>

      <Button variant="contained" color='secondary' onClick={handleClick}>
  Submit
</Button>
    </Box>
    </Paper>

        <h2>Students</h2>
        <Paper elevation={3} style={paperStyle}>

{students.map(student=>(
  <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
   Id:{student.id}<br/>
   Name:{student.name}<br/>
   Address:{student.address}

  </Paper>
))
}


</Paper>
    </Container>
  );
}
