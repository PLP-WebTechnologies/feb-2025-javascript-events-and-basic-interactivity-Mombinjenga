document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    // Add event listener for form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value.trim();
        if (task === "") {
            alert("Please enter a task.");
            return;
        }

        addTask(task);
        input.value = ""; // Clear the input field
    });

    // Function to add a task to the list
    function addTask(task) {
        const li = document.createElement("li");
        li.textContent = task;

        // Create "Done" button
        const doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.style.backgroundColor = "#28a745"; // Green color for "Done"
        doneButton.addEventListener("click", () => {
            li.style.textDecoration = "line-through";
            li.style.color = "#6c757d"; // Gray color for completed tasks
        });

        // Create "Delete" button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});