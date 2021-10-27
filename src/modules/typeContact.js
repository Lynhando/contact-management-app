import { showData } from "./contact";
export const showDataCombobox = (contactTypes) => {
    document.querySelectorAll(".type-contact").forEach((select) => {
        contactTypes.forEach((item) => {
            const option = document.createElement("option");
            option.textContent = item.typeName;
            option.value = item.typeName;
            option.setAttribute("id", item.id);
            select === null || select === void 0 ? void 0 : select.appendChild(option);
        });
    });
};
export const changeTypeContact = (typeId, contacts) => {
    const table = document.querySelector("#listContact tbody");
    table.innerHTML = "";
    if (typeId) {
        let count = 0;
        const filterContact = contacts.filter((item) => item.typeId == typeId);
        if (filterContact.length) {
            filterContact.forEach((emp) => {
                const row = document.createElement("tr");
                Object.keys(emp).forEach((key) => {
                    const cell = document.createElement("td");
                    const textNode = document.createTextNode((key === "id") ? `${++count}` : (emp[key]));
                    cell.appendChild(textNode);
                    if (key == "typeId")
                        cell.hidden = true;
                    row.appendChild(cell);
                });
                const editCell = document.createElement("td");
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
                const delCell = document.createElement("td");
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
            const row = document.createElement("tr");
            const cell = document.createElement("td");
            cell.setAttribute("colspan", "7");
            cell.setAttribute("class", "text-center");
            const textNode = document.createTextNode("No data records found in table");
            cell.appendChild(textNode);
            row.appendChild(cell);
            table === null || table === void 0 ? void 0 : table.appendChild(row);
        }
    }
    else
        showData(contacts);
};
