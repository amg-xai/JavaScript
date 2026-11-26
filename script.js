// ===== Get elements from the page =====
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const prioritySelect = document.getElementById("priority-select");
const taskList = document.getElementById("task-list");
const taskCounter = document.getElementById("task-counter");
const clearBtn = document.getElementById("clear-completed");
const themeBtn = document.getElementById("theme-toggle");
const filterButtons = document.querySelectorAll(".filter-btn");

// ===== App data =====
let tasks = JSON.parse(localStorage.getItem("focusboard_tasks")) || [];
let currentFilter = "all";

// ===== Save tasks to localStorage =====
function saveTasks() {
  localStorage.setItem("focusboard_tasks", JSON.stringify(tasks));
}

// ===== Show tasks on the page =====
function renderTasks() {
  taskList.innerHTML = "";

  // pick which tasks to show (does not change the tasks array)
  let visibleTasks = tasks;
  if (currentFilter === "active") {
    visibleTasks = tasks.filter(function (t) {
      return !t.completed;
    });
  } else if (currentFilter === "completed") {
    visibleTasks = tasks.filter(function (t) {
      return t.completed;
    });
  }

  visibleTasks.forEach(function (task) {
    // <li>
    const li = document.createElement("li");
    li.className = "task-item priority-" + task.priority;
    if (task.completed) {
      li.classList.add("completed");
    }

    // left side: checkbox + text
    const left = document.createElement("div");
    left.className = "task-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("click", function () {
      toggleTask(task.id);
    });

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text; // textContent is safe (no HTML injection)
    span.addEventListener("dblclick", function () {
      editTask(task, span);
    });

    left.appendChild(checkbox);
    left.appendChild(span);

    // right side: badge + delete button
    const right = document.createElement("div");
    right.className = "task-right";

    const badge = document.createElement("span");
    badge.className = "badge badge-" + task.priority;
    badge.textContent = task.priority;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.type = "button";
    deleteBtn.textContent = "✕";
    deleteBtn.addEventListener("click", function () {
      deleteTask(task.id);
    });

    right.appendChild(badge);
    right.appendChild(deleteBtn);

    li.appendChild(left);
    li.appendChild(right);
    taskList.appendChild(li);
  });

  // update counter
  const left = tasks.filter(function (t) {
    return !t.completed;
  }).length;
  taskCounter.textContent = `${left} ${left === 1 ? "task" : "tasks"} remaining`;
}

// ===== 1. Add a task =====
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = taskInput.value.trim();
  if (text === "") {
    return;
  }

  const task = {
    id: Date.now(),
    text: text,
    priority: prioritySelect.value,
    completed: false,
  };

  tasks.push(task);
  taskForm.reset();
  saveTasks();
  renderTasks();
});

// ===== 2. Toggle complete =====
function toggleTask(id) {
  tasks = tasks.map(function (t) {
    if (t.id === id) {
      t.completed = !t.completed;
    }
    return t;
  });
  saveTasks();
  renderTasks();
}

// ===== 3. Delete a task =====
function deleteTask(id) {
  tasks = tasks.filter(function (t) {
    return t.id !== id;
  });
  saveTasks();
  renderTasks();
}

// ===== 4. Filter buttons =====
filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    filterButtons.forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");

    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// ===== 6. Theme switcher =====
function updateThemeButton() {
  if (document.body.classList.contains("dark-theme")) {
    themeBtn.textContent = "☀ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
}

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("focusboard_theme", "dark");
  } else {
    localStorage.setItem("focusboard_theme", "light");
  }

  updateThemeButton();
});

// ===== 7. Bonus: edit task on double click =====
function editTask(task, span) {
  const input = document.createElement("input");
  input.type = "text";
  input.className = "edit-input";
  input.value = task.text;

  span.replaceWith(input);
  input.focus();

  let done = false;

  function saveEdit() {
    if (done) return;
    done = true;

    const newText = input.value.trim();
    if (newText !== "") {
      task.text = newText;
      saveTasks();
    }
    renderTasks();
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      saveEdit();
    } else if (e.key === "Escape") {
      done = true; // cancel, don't save
      renderTasks();
    }
  });

  input.addEventListener("blur", saveEdit);
}

// ===== 7. Bonus: clear completed =====
clearBtn.addEventListener("click", function () {
  tasks = tasks.filter(function (t) {
    return !t.completed;
  });
  saveTasks();
  renderTasks();
});

// ===== When the page loads =====
if (localStorage.getItem("focusboard_theme") === "dark") {
  document.body.classList.add("dark-theme");
}
updateThemeButton();
renderTasks();
