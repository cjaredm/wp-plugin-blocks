export default function({label, options, defaultValue, onChange, value}) {
  return (
    <div className="select-wrapper">
      <label htmlFor="btnColor">{label}</label>
      <select
        name="btnColor"
        id="btnColor"
        onChange={onChange}
        value={value}
        defaultValue={value || defaultValue}
      >
        {options.map(([value, label]) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
}
