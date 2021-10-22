import { Contact } from "../models/contact.js";

export const showData = (contactData: any[]) => {
  const table = document.querySelector("#listContact");
  contactData.forEach((emp) => {
    // console.log(empObj)
    const row = document.createElement("tr");
    Object.keys(emp).forEach((key) => {
      // if (key !== "typeId") {
      let cell = document.createElement("td");
      let textNode = document.createTextNode(emp[key]);
      cell.appendChild(textNode);

      // }
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
};

export const addData = (
  id: any,
  contactName: any,
  email: any,
  phone: any,
  address: any,
  typeId: any
) => {
  // const table = document.querySelector('#listContact') as HTMLTableElement;

  // get all rows in the first table body
  // const rows = table.tBodies[0].rows;

  // const table = document.querySelector("#listContact") as HTMLTableElement
  // const rows = table.tBodies[0].rows;
  // console.log(rows)
  const itemContact = new Contact(
    id,
    contactName.value,
    email.value,
    phone.value,
    address.value,
    typeId
  );
  // console.log(item)
  const table = document.querySelector("#listContact");

  let row = document.createElement("tr");
  Object.keys(itemContact).forEach((key) => {
    console.log(key);
    let cell = document.createElement("td");
    let textNode = document.createTextNode(itemContact[key]);
    cell.appendChild(textNode);
    if (key == "_typeId") cell.hidden = true;
    row.appendChild(cell);
  });

  let editCell = document.createElement("td");
  const editBtn = document.createElement("button");
  editBtn.setAttribute("id", id);
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
  delBtn.setAttribute("id", id);
  delBtn.setAttribute("class", "btn btn-danger btn-xs delete");
  delBtn.setAttribute("data-toggle", "modal");
  delBtn.setAttribute("data-target", "#delete");

  const delIcon = document.createElement("span");
  delIcon.setAttribute("class", "ti-trash");
  delBtn.appendChild(delIcon);
  delCell.appendChild(delBtn);
  row.appendChild(delCell);

  table?.appendChild(row);
  return itemContact;
};
