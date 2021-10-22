export const showDataCombobox = (typeContactData) => {
    document.querySelectorAll(".type-contact").forEach((select) => {
        typeContactData.forEach((item) => {
            const option = document.createElement("option");
            option.textContent = item.typeName;
            option.value = item.typeName;
            option.setAttribute("id", item.id);
            select === null || select === void 0 ? void 0 : select.appendChild(option);
        });
    });
};
export const changeTypeContact = (typeId, listContact) => {
    if (typeId) {
        const filterContact = listContact.filter((item) => item.typeId == typeId);
        let table = document.querySelector("#listContact");
        table.innerHTML = "";
        if (filterContact.length) {
            filterContact.forEach((emp) => {
                const row = document.createElement("tr");
                Object.keys(emp).forEach((key) => {
                    let cell = document.createElement("td");
                    let textNode = document.createTextNode(emp[key]);
                    cell.appendChild(textNode);
                    if (key == "typeId")
                        cell.hidden = true;
                    row.appendChild(cell);
                });
                let editCell = document.createElement("td");
                const editBtn = document.createElement("button");
                editBtn.setAttribute("id", emp.id);
                editBtn.setAttribute("class", "btn btn-primary btn-xs edit");
                editBtn.setAttribute("data-toggle", "modal");
                editBtn.setAttribute("data-target", "#edit");
                const editIcon = document.createElement("span");
                editIcon.setAttribute("class", "ti-pencil");
                editBtn.appendChild(editIcon);
                editCell.appendChild(editBtn);
                row.appendChild(editCell);
                let delCell = document.createElement("td");
                const delBtn = document.createElement("button");
                delBtn.setAttribute("id", emp.id);
                delBtn.setAttribute("class", "btn btn-danger btn-xs delete");
                delBtn.setAttribute("data-toggle", "modal");
                delBtn.setAttribute("data-target", "#delete");
                const delIcon = document.createElement("span");
                delIcon.setAttribute("class", "ti-trash");
                delBtn.appendChild(delIcon);
                delCell.appendChild(delBtn);
                row.appendChild(delCell);
                table === null || table === void 0 ? void 0 : table.appendChild(row);
            });
        }
        else {
        }
    }
};
