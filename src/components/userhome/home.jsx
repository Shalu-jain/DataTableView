import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import '../styles/home.css';
import { Link } from 'react-router-dom';

function Home (){
    const [ data, setData ] = useState();
    const columns = [
        {title: "ID", field: "id"},
        {title: "User ID", field: "userId"},
        {title: "Title", field: "title"}
    ]
    useEffect (() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(response =>{
        setData(response)
    })
}, [])

return (
    <div className="App">
        <h2 align="center">DATATABLE</h2><br/>
        <MaterialTable
        title="USER DATA"
        data={data}
        columns={columns}
        actions={[
            rowData => ({
              icon: () => <Link to={{ pathname: "/detail-page", state: JSON.stringify({ ...rowData})}}><span class="material-icons">
              arrow_forward_ios
              </span></Link>,
              tooltip: 'Show More Details ',
              onClick: (rowData) 
            })
          ]}

        />
    </div>
);
}
export default Home;