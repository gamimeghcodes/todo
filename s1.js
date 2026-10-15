function active(event) {
    event.preventDefault();

    let taskInput = document.getElementById("task");
    let task = taskInput.value;

    if (task.trim() === "") {
        alert("Please write a valid task");
    } else {
        
        document.getElementById("list").innerHTML += `
            <tr>
                <td class="task-num"></td>
                <td>${task}</td>
                <td><button onclick="deactive(this)">delete</button></td>
            </tr>
        `;

        taskInput.value = "";

        updateNumbers();
    }
}

function deactive(button) {
    button.closest("tr").remove();
    updateNumbers();
}

function updateNumbers() {
    let numbers = document.querySelectorAll("#list .task-num");
    numbers.forEach((cell, index) => {
        cell.textContent = index + 1;
    });
}