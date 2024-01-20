export default function BillTotal({ billCost, service, friendService }) {
  const tipCalcTotal = (
    Number(billCost) *
    ((Number(service) + Number(friendService)) / 2)
  ).toFixed(2);
  const calcBillTotal = Number(billCost) + Number(tipCalcTotal);

  return (
    <div className={"bill-total--container"}>
      <strong>
        <p>
          You pay ${calcBillTotal} (${billCost} + ${tipCalcTotal} tip)
        </p>
      </strong>
    </div>
  );
}
