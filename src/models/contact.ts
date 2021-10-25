export class Contact {
    private id: number;
    private name: string;
    private email: string;
    private phone: string;
    private address: string;
    private typeId: number;

  constructor(
    id: number, 
    name: string, 
    email: string, 
    phone: string, 
    address: string, 
    typeId: number
) {
    this.id = id
    this.name = name
    this.email = email
    this.phone = phone
    this.address = address
    this.typeId = typeId
  }


    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Getter $phone
     * @return {string}
     */
	public get $phone(): string {
		return this.phone;
	}

    /**
     * Getter $address
     * @return {string}
     */
	public get $address(): string {
		return this.address;
	}

    /**
     * Getter $typeId
     * @return {number}
     */
	public get $typeId(): number {
		return this.typeId;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}

    /**
     * Setter $phone
     * @param {string} value
     */
	public set $phone(value: string) {
		this.phone = value;
	}

    /**
     * Setter $address
     * @param {string} value
     */
	public set $address(value: string) {
		this.address = value;
	}

    /**
     * Setter $typeId
     * @param {number} value
     */
	public set $typeId(value: number) {
		this.typeId = value;
	}
    
}



  