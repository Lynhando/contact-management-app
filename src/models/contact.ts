export class Contact {
    private _id: number;
    private _name: string;
    private _email: string;
    private _phone: string;
    private _address: string;
    private _typeId: number;


  constructor(
    _id: number, 
    _name: string, 
    _email: string, 
    _phone: string, 
    _address: string, 
    _typeId: number
) {
    this._id = _id
    this._name = _name
    this._email = _email
    this._phone = _phone
    this._address = _address
    this._typeId = _typeId
  }


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Getter phone
     * @return {string}
     */
	public get phone(): string {
		return this._phone;
	}

    /**
     * Getter address
     * @return {string}
     */
	public get address(): string {
		return this._address;
	}

    /**
     * Getter typeId
     * @return {number}
     */
	public get typeId(): number {
		return this._typeId;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Setter phone
     * @param {string} value
     */
	public set phone(value: string) {
		this._phone = value;
	}

    /**
     * Setter address
     * @param {string} value
     */
	public set address(value: string) {
		this._address = value;
	}

    /**
     * Setter typeId
     * @param {number} value
     */
	public set typeId(value: number) {
		this._typeId = value;
	}


}