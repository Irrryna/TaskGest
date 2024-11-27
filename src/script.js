let form = document.getElementById("task-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let textArea = document.getElementById("writing");
    let inputValue = textArea.value.trim();

    if (inputValue !== "") {
   
        let li = document.createElement("li");

// conteneur pour le texte éditable
        let taskText = document.createElement("span");
        taskText.textContent = inputValue;
        li.appendChild(taskText);

// bouton "Supprimer"
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.className = "delete-button";
        deleteButton.style.marginLeft = "10px";

        
        deleteButton.addEventListener("click", function () {
            li.remove(); 
        });

        li.appendChild(deleteButton);

// bouton "Éditer"
        let editButton = document.createElement("button");
        editButton.textContent = "Éditer";
        editButton.className = "edit-button";
        editButton.style.marginLeft = "10px";

    // Ajouter l'événement d'édition
        editButton.addEventListener("click", function () {
    // Passer en mode édition
            let newText = prompt("Modifier la tâche :", taskText.textContent);
            if (newText !== null && newText.trim() !== "") {
                taskText.textContent = newText.trim(); 
            }
        });

        li.appendChild(editButton);

        // Ajouter l'élément <li> à la liste <ul>
        let ul = document.getElementById("list");
        ul.appendChild(li);

        // Réinitialiser la zone de texte
        textArea.value = "";
    } else {
        alert("Veuillez entrer une tâche valide !");
    }
});
