var selectedRow = null;

function onFormSubmit(){

   

    var formData = readFormData();

    if(selectedRow == null){

        dataEntered(formData);

    }

    else{

        updateData(formData);

    }

  

    resetForm();

}

function readFormData(){

    var formData={};

    formData["Name"] = document.getElementById("fullName").value;

    formData["Email_id"] = document.getElementById('email').value;

    formData["Comment"] =  document.getElementById('comment').value;

    return formData;

}

function dataEntered(data){

    var table = document.getElementById('details').getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);

    cell1.innerHTML = data.Name;

    cell1 = newRow.insertCell(1);

    cell1.innerHTML = data.Email_id;

    cell2 = newRow.insertCell(2);

    cell2.innerHTML = data.Comment;

    cell2 = newRow.insertCell(3);

    cell2.innerHTML = `<a onClick="onEdit(this)">Edit</a>&nbsp; <b>/</b>

                      <a onClick="onDelete(this)">Delete</a>`;

 

}

function resetForm(){

    document.getElementById('fullName').value="";

    document.getElementById('email').value="";

    document.getElementById('comment').value="";

    selectedRow = null;

}

function onEdit(td){

    selectedRow = td.parentElement.parentElement;

    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;

    document.getElementById('email').value = selectedRow.cells[1].innerHTML;

    document.getElementById('comment').value = selectedRow.cells[2].innerHTML;

}

 

function updateData(formData){

    selectedRow.cells[0].innerHTML = formData.Name;

    selectedRow.cells[1].innerHTML = formData.Email_id;

    selectedRow.cells[2].innerHTML = formData.Comment;

 

}

function onDelete(td){

    if(confirm("Are you sure to delete this data?")){

    row = td.parentElement.parentElement;

    document.getElementById('details').deleteRow(row.rowIndex);

    resetForm();

    }
}