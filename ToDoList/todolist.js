

const addItem = () => {
    const inputField = document.getElementById("addItemInput");
    const itemList = document.getElementById("itemList");
    const itemName = inputField.value.trim();

    if (itemName !== "") {
        const newItem = document.createElement("li");
        newItem.textContent = itemName;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";

        deleteButton.onclick = () => newItem.remove();

        newItem.appendChild(deleteButton);

        newItem.addEventListener("click", () => {
            
            if(!newItem.classList.contains("completed")){
                newItem.className = "completed-Item";
                newItem.classList.add("completed");
            } else{
                newItem.style.textDecoration = "none";
                newItem.className = "none-Item";
                newItem.classList.remove("completed");
            }

        });

        itemList.appendChild(newItem);
        inputField.value = "";
    }

    else{
        inputField.value = "";
    }
}
