export class Contact {
    constructor(_id, _name, _email, _phone, _address, _typeId) {
        this._id = _id;
        this._name = _name;
        this._email = _email;
        this._phone = _phone;
        this._address = _address;
        this._typeId = _typeId;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get phone() {
        return this._phone;
    }
    get address() {
        return this._address;
    }
    get typeId() {
        return this._typeId;
    }
    set id(value) {
        this._id = value;
    }
    set name(value) {
        this._name = value;
    }
    set email(value) {
        this._email = value;
    }
    set phone(value) {
        this._phone = value;
    }
    set address(value) {
        this._address = value;
    }
    set typeId(value) {
        this._typeId = value;
    }
}
