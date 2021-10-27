export class Contact {
    constructor(id, name, email, phone, address, typeId) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.typeId = typeId;
    }
    get $id() {
        return this.id;
    }
    get $name() {
        return this.name;
    }
    get $email() {
        return this.email;
    }
    get $phone() {
        return this.phone;
    }
    get $address() {
        return this.address;
    }
    get $typeId() {
        return this.typeId;
    }
    set $id(value) {
        this.id = value;
    }
    set $name(value) {
        this.name = value;
    }
    set $email(value) {
        this.email = value;
    }
    set $phone(value) {
        this.phone = value;
    }
    set $address(value) {
        this.address = value;
    }
    set $typeId(value) {
        this.typeId = value;
    }
}
