export default function({name, label, options, onChange, value}) {
  const createKey = (a, b) => `${a}${b}`;
  return (
    <div className="select-wrapper">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={onChange} value={value}>
        {options.map(([value, label]) => (
          <option key={createKey(value, name)} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
