export class Station {
  address: string;
  contract_name: string;
  name: string;
  position: {};
  status: string;
  available_bikes: number;

  constructor(address: string, Position: {}, contract_name: string, status: string, available_bikes: number) {
    this.contract_name = contract_name;
    this.address = address;
    this.position = this.position;
    this.status = status;
    this.available_bikes = available_bikes;
  }
}
