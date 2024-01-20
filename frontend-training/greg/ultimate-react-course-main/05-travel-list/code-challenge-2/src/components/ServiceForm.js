export default function ServiceForm({ handleService }) {
  return (
    <div className="service--container">
      <label>How did you like the service? </label>
      <select
        name="service-quality"
        onChange={(e) => {
          handleService(e.target.value);
        }}
      >
        <option value="0.1">It was okay (10%)</option>
        <option value="0.15">It was good (15%)</option>
        <option value="0.2">It was very good (20%)</option>
        <option value="0.25">It was very good (25%)</option>
      </select>
    </div>
  );
}
