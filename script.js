function getGrade(marks) {
  if (marks >= 90) return 'A+';
  if (marks >= 75) return 'A';
  if (marks >= 60) return 'B';
  if (marks >= 40) return 'C';
  return 'Fail';
}

function addStudent() {
  const name = document.getElementById('name').value;
  const marks = document.getElementById('marks').value;

  if (name === '' || marks === '') {
    alert('Please fill all fields');
    return;
  }

  const table = document.getElementById('resultBody');

  const row = table.insertRow();

  row.insertCell(0).innerHTML = name;
  row.insertCell(1).innerHTML = marks;
  row.insertCell(2).innerHTML = getGrade(marks);

  row.insertCell(3).innerHTML =
    `<button onclick="deleteRow(this)">Delete</button>`;

  document.getElementById('name').value = '';
  document.getElementById('marks').value = '';
}

function deleteRow(btn) {
  btn.parentElement.parentElement.remove();
}
