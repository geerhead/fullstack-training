export default function BillForm({ billCost, handleBillCost, display }) {
  return (
    <div className="bill">
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Bill value"
        value={billCost}
        onChange={(e) => {
          if (!Number(e.target.value)) return;
          handleBillCost(Number(e.target.value));
        }}
      />
    </div>
  );
}
