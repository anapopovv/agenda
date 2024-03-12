document.getElementById('formC').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    
    var table = document.getElementById('tableC').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = phone;
    
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});  