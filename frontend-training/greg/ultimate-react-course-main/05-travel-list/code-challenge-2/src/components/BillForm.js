export default function BillForm({ handleBillCost }) {
  return (
    <div className="bill">
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder={"Bill value"}
        onChange={(e) => {
          handleBillCost(e.target.value);
        }}
      />
    </div>
  );
}
