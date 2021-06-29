import React, {useState, useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'
import MaterialTable from 'material-table'

function OrderHistory() {
    const state = useContext(GlobalState)

    const [token] = state.token

    const [user, setUser] = useState([])


//    axios.get('/user/history', {
//     headers: {Authorization: token}
//    }).then((res) => {
//     console.log(res.data)
//    })

        useEffect(() => {
            fetch('/user/getuser',{ headers: {Authorization: token}})
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setUser(res)})
        },[])


    const [data, setData] = useState([])

    const columns = [
        {title: 'title', field: 'ProductTitle'},
        {title: 'productId', field: 'productId'},
        {title: 'productPrice', field: 'productPrice'},
        {title: 'quantity', field: 'quantity'},
        {title: 'purchased on', field: 'createdAt'},
    ]


    useEffect(() => {
        fetch('/user/history',{ headers: {Authorization: token}})
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setData(res)})
    },[])




    return (
         <div className="history-page">
             <div>
                 <h2>username: {user.name}</h2>
                 <h2>email: {user.email}</h2>
             </div>
             <MaterialTable 
             title='history'
             data={data}
             columns={columns}
             />
        </div>
    )
}

export default OrderHistory
