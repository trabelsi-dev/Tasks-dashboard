import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'


function App() {

  const [data, setData] = useState([])

  const columns = [
    { title: "Task_name", field: "Task_name" },
    { title: "assigness", field: "assigness" },
    { title: "Priority", field: "Priority" },
    { title: "Due_date", field: "Due_date" },
  
  ]
  useEffect(() => {
    fetch("https://600e7b0e3bb1d100179df4d5.mockapi.io/Tasks")
      .then(resp => resp.json())
      .then(resp => {
       // console.log(resp[0].Priority);
        
        for (let  i=0 ; i<4 ; i++) {
          if (resp[i].Priority === 1){
            setData(resp[i].Priority ="Critical") 
           
 
         }else if (resp[i].Priority === 2) {
           setData(resp[i].Priority ="High") 
          
        }
        else if (resp[i].Priority === 3) {
          setData(resp[i].Priority ="Medium") 


        }else if (resp[i].Priority === 4) {
          setData(resp[i].Priority ="Low") 


        }
        var date = new Date(resp[i].Due_date*1000);
        var now = date.toLocaleDateString("en-US")
        console.log(date);
        setData(resp[i].Due_date = now) 


        }
        /*
        for (let  i=0 ; i<4 ; i++){
          var date = new Date(resp[i].Due_date*1000);
          var now = date.toLocaleDateString("en-US")
          console.log(date);
          setData(resp[i].Due_date = now) 

        }*/
        setData(resp)

      })
  }, [])

  return (
    <div className="App">
      <h1 align="center">Tasks-dashboard</h1>
<span>
     <div>Nom: oussama</div> 
      <div>Prénom : trabelsi </div>
      <div>Tel: 25 401 215 </div> 
      </span>


      <MaterialTable
        title="tasks"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default App;
