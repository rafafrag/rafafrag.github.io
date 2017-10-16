window.addEventListener("load", startUp, false);
function startUp(){
  submitBtn.addEventListener("click", addData, false);
}
//tripple group of buttons
$("#toggle1").click(function(){
  document.getElementById('allDetails').style.display = 'block';
  document.getElementById('organisation').style.display = 'none';  
})
$("#toggle2").click(function(){
  document.getElementById('organisation').style.display = 'block';
  document.getElementById('allDetails').style.display = 'block';
})
$("#toggle3").click(function(){
  document.getElementById('allDetails').style.display = 'none';
})

//adding data to table
var counts = 4;   
function addData() {
    
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var org = document.getElementById("organisationName").value;

    var isChecked2 = document.getElementById("toggle2").checked;         
    var isChecked3 = document.getElementById("toggle3").checked; //if anonymous is checked

    var time = new Date();
    var rows = "";    
    var tbody = document.querySelector("#list tbody");
    var tr = document.createElement("tr");
    var service = document.querySelector('input[name="service"]:checked');
    service = service ? service.value : '';
    var types = document.querySelector('input[name="types"]:checked');
    types = types ? types.value : '';

    if ((parseInt(surname) != (surname)) && (name == parseInt(name)) || (surname == "" || name == "") && (isChecked3 != true)){//validates data entered
        alert("Please, enter name and surname correctly. Thank you!");
    return false;
    }

    if (isChecked3==true){
      rows += "<td>" + ++counts + "</td><td>" + "Anonymous" + "</td><td>" + "Anonymous" + "</td><td>" + service + "</td><td>" + time.getHours() + ":" + time.getMinutes() + "</td>";  
      tr.innerHTML = rows;
      tbody.appendChild(tr); 
      return false;
    }

    if (isChecked2==true){
      rows += "<td>" + ++counts + "</td><td>" + types + "</td><td>" + org + "</td><td>" + service + "</td><td>" + time.getHours() + ":" + time.getMinutes() + "</td>";  
      tr.innerHTML = rows;
      tbody.appendChild(tr); 
    }

    else {
      var title = document.getElementById("title").value;
      rows += "<td>" + ++counts + "</td><td>" + types + "</td><td>" + title + " " + name + " " + surname + "</td><td>" + service + "</td><td>" + time.getHours() + ":" + time.getMinutes() + "</td>";
      tr.innerHTML = rows;
      tbody.appendChild(tr);      
    }
      var frm = document.getElementsByName('contact-form')[0];
      frm.reset();  // Reset
      return false; // Prevent page refresh
}
