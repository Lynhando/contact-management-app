import { Contact } from "../models/contact.js";

export const handleContactStorage = (contactStorage: any[], contactData: any[]) => {
  if (contactStorage && contactStorage.length) {
    return contactStorage
  } else {
    localStorage.setItem("contacts", JSON.stringify(contactData))
    return contactData
  }
}

const showEditDetails = (obj: any) => {
  const form = document.querySelector(".edit-form") as HTMLFormElement;
  form.elements["name"].value = `${obj.name}`;
  form.elements["email"].value = `${obj.email}`;
  form.elements["phone"].value = `${obj.phone}`;
  form.elements["address"].value = `${obj.address}`;

  const contactFormId = document.querySelector("#contactFormId") as HTMLElement
  contactFormId.innerHTML = '';
  contactFormId.appendChild(document.createTextNode(`${obj.id}`))
  contactFormId.hidden = true

  document.querySelectorAll("#editComboboxContact option").forEach((item) => item.removeAttribute("selected"));
  document.querySelector(`#editComboboxContact option[id="${obj.typeId}"]`).setAttribute("selected", "selected");
};

export const editContact = (
  id: number,
  contactName: string,
  email: string,
  phone: string,
  address: string,
  typeId: number
) => {
  const itemContact = new Contact(
    id,
    contactName,
    email,
    phone,
    address,
    typeId
  );
  const contacts = JSON.parse(localStorage.getItem("contacts"));
  const index = contacts.findIndex((item: any) => item.id === id);
  
  contacts.splice(index, 1, itemContact)
  console.log(contacts)
  localStorage.setItem("contacts", JSON.stringify(contacts))
  console.log(contacts)
  location.reload();
};

export const showData = (contacts: any[]) => {
  console.log(contacts)
  const table = document.querySelector("#listContact tbody") as HTMLElement;
  table.innerHTML = "";
  let count = 0
  contacts.forEach((emp) => {
    const row = document.createElement("tr");    
    Object.keys(emp).forEach((key) => {      
      const cell = document.createElement("td");
      const textNode =  document.createTextNode((key === "id") ? `${++count}` : (emp[key]));
      cell.appendChild(textNode);
      if (key == "typeId") cell.hidden = true;
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
    editBtn.addEventListener("click", ((e: CustomEvent) => showEditDetails(emp)) as EventListener);

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

    table?.appendChild(row);
  });
};

export const addContact = (
  contactName: string,
  email: string,
  phone: string,
  address: string,
  typeId: number,
  contacts: any[]
) => {
  const id = contacts.length ? contacts.length + 1 : 1;
  
  const itemContact = new Contact(
    id,
    contactName,
    email,
    phone,
    address,
    typeId
  );

  const selectType = document.querySelector("#typeContact") as HTMLSelectElement;
  const sel = selectType.selectedIndex;
  const opt = selectType.options[sel];
  const selectedTypeId = opt.getAttribute("id");
  if (`${typeId}` === selectedTypeId || !selectedTypeId) {    
    const table = document.querySelector("#listContact tbody");
    const index = table.childNodes.length + 1

    const row = document.createElement("tr");
    Object.keys(itemContact).forEach((key) => {
      let cell = document.createElement("td");
      let textNode = document.createTextNode((key === "id") ? index : itemContact[key]);
      cell.appendChild(textNode);
      if (key === "typeId") cell.hidden = true;
      row.appendChild(cell);
    });

    const editCell = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "btn btn-primary btn-xs edit");
    editBtn.setAttribute("data-toggle", "modal");
    editBtn.setAttribute("data-target", "#edit");

    const editIcon = document.createElement("span");
    editIcon.setAttribute("class", "ti-pencil");
    editBtn.appendChild(editIcon);
    editCell.appendChild(editBtn);
    editBtn.addEventListener("click", ((e: CustomEvent) => showEditDetails(itemContact)) as EventListener);
    row.appendChild(editCell);

    const delCell = document.createElement("td");
    const delBtn = document.createElement("button");
    delBtn.setAttribute("class", "btn btn-danger btn-xs delete");
    delBtn.setAttribute("data-toggle", "modal");
    delBtn.setAttribute("data-target", "#delete");

    const delIcon = document.createElement("span");
    delIcon.setAttribute("class", "ti-trash");
    delBtn.appendChild(delIcon);
    delCell.appendChild(delBtn);
    row.appendChild(delCell);

    table?.appendChild(row);
    
  }
  contacts.push(itemContact);
  localStorage.setItem("contacts", JSON.stringify(contacts));

  return itemContact;
};
