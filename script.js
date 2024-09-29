fetch('info.json')
    .then(response => response.json())
    .then(courses => {
        const gradesTable = document.getElementById('grades-table');

        courses.forEach(semester => {
            const table = document.createElement('table');
            table.className = 'grades-table'; // Assign class here

            const headerRow = table.insertRow();
            headerRow.insertCell().colSpan = 7;
            headerRow.cells[0].textContent = semester.semester;
            headerRow.className = 'sem'; // Assign class to the semester row

            const headerCells = ['Course', 'Description', 'Unit', 'Grade', 'Remarks', 'Course', 'Term'];
            const headerRow2 = table.insertRow();
            headerCells.forEach(cellText => {
                const th = document.createElement('th');
                th.textContent = cellText;
                headerRow2.appendChild(th);
            });

            semester.courses.forEach(course => {
                const row = table.insertRow();
                row.insertCell().textContent = course.courseCode;
                row.insertCell().textContent = course.description;
                row.insertCell().textContent = course.unit;
                row.insertCell().textContent = course.grade;
                row.insertCell().textContent = course.remarks;
                row.insertCell().textContent = course.courseCode;
                row.insertCell().textContent = course.term;
            });

            gradesTable.appendChild(table);
        });
    })
    .catch(error => console.error('Error loading data:', error));
