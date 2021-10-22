export const showDataCombobox = (typeContactData: any[]) => {
  document.querySelectorAll(".type-contact").forEach((select) => {
    typeContactData.forEach((item: any) => {
      const option = document.createElement("option");
      option.textContent = item.typeName;
      option.value = item.typeName;
      option.setAttribute("id", item.id);
      select?.appendChild(option);
    });
  });
};

export const changeTypeContact = (typeId: string, listContact: any[]) => {
  if (typeId) {
    const filterContact = listContact.filter((item) => item.typeId == typeId);

    let table = document.querySelector("#listContact") as HTMLElement;
    table.innerHTML = "";

    if (filterContact.length)
    {
      filterContact.forEach((emp) => {
        const row = document.createElement("tr");
        Object.keys(emp).forEach((key) => {
          let cell = document.createElement("td");
          let textNode = document.createTextNode(emp[key]);
          cell.appendChild(textNode);
  
          if (key == "typeId") cell.hidden = true;
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
  
        table?.appendChild(row);
      });
    } else {

    }
    
  } 
};
