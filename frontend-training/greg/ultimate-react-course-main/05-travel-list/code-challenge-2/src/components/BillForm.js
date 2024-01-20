export default function BillForm({ billCost, handleBillCost }) {
  return (
    <div className="bill">
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Bill value"
        value={billCost}
        onChange={(e) => {
          handleBillCost(Number(e.target.value));
        }}
      />
    </div>
  );
}
