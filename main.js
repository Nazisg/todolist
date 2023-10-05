// import axios from 'axios'

// npx json-server --watch db.json --port 3000


    axios.get("http://localhost:3000/data").then((res)=>{
    res.data.forEach(e => {
    var itemHTML  = `
    <div class="item">
    <input class="checkbox" type="checkbox" id="${e.id}">
    <div class="control">
        <input type="text" id="input${e.id}" value="${e.name}"  class="editInput"> 
        <p id="delete${e.id}">SİL</p>
        <p id="edit${e.id}">DƏYİŞ</p>
    </div>
    </div>
    `
    $(".list").append(itemHTML)
    $(`#delete${e.id}`).click(()=> deleteTask(e.id))
    $(`#edit${e.id}`).click(()=>editTask(e.id))

    $("#all").click(()=>{
        $(".checkbox").prop("checked", true);
    })

    $("#delSelected").click(()=>{
        var checkedCheckboxes = $(".checkbox:checked");
        checkedCheckboxes.each(function() {
          var id = $(this).attr("id");
          console.log(id)
          deleteTask(id);
      });
    })

});
})

$("#add").click(()=>{
    const addData =  {name: `${$("#addInput").val()}`,}
    axios.post("http://localhost:3000/data",addData).then((res)=>{   
    })
})

function editTask(id){
    const newName = $(`#input${id}`).val();
    const editData = { name: newName };
    axios.put(`http://localhost:3000/data/${id}`,editData).then((res)=>{   
    })
}

function deleteTask(id){
    axios.delete(`http://localhost:3000/data/${id}`).then((res)=>{
    })
}