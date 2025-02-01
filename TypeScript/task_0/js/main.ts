interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Axel",
    lastName: "Palombo",
    age: 28,
    location: "Pinamar"
}

const student2: Student = {
    firstName: "Agustin",
    lastName: "Amegeiras",
    age: 27,
    location: "Pocitos"
}

let studentsList: Student[] = [student1, student2]

const table = document.createElement("table");
const headerRow = document.createElement("tr");
const headerName = document.createElement("th");
const headerLocation = document.createElement("th");

headerName.textContent = "First Name";
headerLocation.textContent = "Location";
headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

studentsList.forEach(student => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

document.body.appendChild(table);