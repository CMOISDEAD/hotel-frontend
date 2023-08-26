export {};

declare global {
  interface Window {
    createBed: Object<any>;
    createUser: Object<any>;
    createReservation: Object<any>;
    createRoom: Object<any>;
    showModal: Function;
  }
  enum statusEnum {
    aviable = "disponible",
    occupied = "ocupado",
    maintenance = "mantenimiento",
    cleaning = "limpieza",
  }
  enum roleEnum {
    admin = "admin",
    client = "client",
  }
}
