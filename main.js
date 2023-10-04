// import axios from 'axios'

// npx json-server --watch db.json --port 3000

var data


axios.get("http://localhost:3000/data").then((res)=>{
    data =res.data    

data.forEach(e => {
    console.log(e.name)
    var itemHTML  = `
    <div class="item">
    <input id="checkbox" type="checkbox">
    <div class="control">
        <input type="text" value="${e.name}"  id="editInput"> 
        <p id="delete">SİL</p>
        <p id="edit">DƏYİŞ</p>
    </div>
    </div>
    `
    $(".list").append(itemHTML)

//     $("#delete").click(()=>{
//         axios.delete(`http://localhost:3000/data/${e.id}`).then((res)=>{
//             console.log(res)
//     })
//   })
    $("#edit").click(()=>{
        const editData =  {name: `${$("#editInput").val()}`,}
        axios.put(`http://localhost:3000/data/${e.id}`,editData).then((res)=>{   
            console.log(res)
        })
    })
    var id = e.id
});
$('.item').click(()=>{
    console.log(id)
})
})



$("#add").click(()=>{
    const addData =  {name: `${$("#addInput").val()}`,}
    axios.post("http://localhost:3000/data",addData).then((res)=>{   
    })
})

