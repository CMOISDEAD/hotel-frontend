export {};

declare global {
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
