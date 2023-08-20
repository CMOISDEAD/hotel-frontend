const stateList = [
  { name: "all", title: "Todos" },
  { name: "disponible", title: "Disponibles" },
  { name: "ocupado", title: "Ocupados/Cerrados" },
];

export const RoomsFilter = ({ filter, active, count }) => {
  return (
    <div className="tabs tabs-boxed">
      {stateList.map(({ name, title }, i) => (
        <a
          key={i}
          className={`tab ${active === name && "tab-active"} inline-flex gap-1`}
          data-name={name}
          onClick={filter}
        >
          {title} {active === name && <div className="badge">{count}</div>}
        </a>
      ))}
    </div>
  );
};
