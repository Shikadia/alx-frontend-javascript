const studentList = [
    { firstName: 'Chinedu', lastName: 'Otuka', age: 29, location: 'Lagos' },
    { firstName: 'Alvin', lastName: 'Iheanyichukwu', age: 30, location: 'Delta' },
];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
