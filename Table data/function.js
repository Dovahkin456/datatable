	function addRow() 
	{     
		var name = document.getElementById("name");
		var lname = document.getElementById("lname");
		var dob = document.getElementById("dob");
		var stream = document.getElementById("stream");
		var id = document.getElementById("id");
		var maths = document.getElementById("maths");
		var sc = document.getElementById("sc");
		var eng = document.getElementById("eng");
		var soc = document.getElementById("soc");
		var table = document.getElementById("TableData");
 
		var rowCount = table.rows.length;
		var row = table.insertRow(rowCount);
		row.insertCell(0).innerHTML= name.value;
		row.insertCell(1).innerHTML= lname.value;
		row.insertCell(2).innerHTML= dob.value;
		row.insertCell(3).innerHTML= stream.value;
		row.insertCell(4).innerHTML= id.value;
		row.insertCell(5).innerHTML= maths.value;
		row.insertCell(6).innerHTML= sc.value;
		row.insertCell(7).innerHTML= eng.value;
		row.insertCell(8).innerHTML= soc.value;
		row.insertCell(9).innerHTML= parseInt(maths.value)+parseInt(sc.value)+parseInt(eng.value)+parseInt(soc.value);
		row.insertCell(10).innerHTML= ((parseInt(maths.value)+parseInt(sc.value)+parseInt(eng.value)+parseInt(soc.value))/4);
		row.insertCell(11).innerHTML= '<input type="button" value = " Delete " onClick="Javacsript:deleteRow(this)" class="button">';
	}
 
	function deleteRow(obj) 
	{
		window.alert("Student record Deleted!");
		var index = obj.parentNode.parentNode.rowIndex;
		var table = document.getElementById("TableData");
		table.deleteRow(index);
	}
 
	function addTable() 
	{  
		var myTableDiv = document.getElementById("TableData");
		var table = document.createElement('TABLE');
		table.border='1';
    
		var tableBody = document.createElement('TBODY');
		table.appendChild(tableBody);
		for (var i=0; i<3; i++)
		{
			var tr = document.createElement('TR');
			tableBody.appendChild(tr);
       
			for (var j=0; j<4; j++)
			{
				var td = document.createElement('TD');
				td.width='75';
				td.appendChild(document.createTextNode("Cell " + i + "," + j));
				tr.appendChild(td);
			}
		}
	}
	

	function start() 
	{
		alert("Fill the registration form then press 'Submit', the entered details will appear on the right side table with the total marks calculated.");
	}
	