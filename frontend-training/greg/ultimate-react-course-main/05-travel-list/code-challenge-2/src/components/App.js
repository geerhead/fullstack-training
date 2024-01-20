import BillForm from "./BillForm";
import BillTotal from "./BillTotal";
import FriendServiceForm from "./FriendServiceForm";
import ServiceForm from "./ServiceForm";
import { useState } from "react";

export default function App() {
  const [billCost, setBillCost] = useState(null);
  const [service, setService] = useState(0.1);
  const [friendService, setFriendService] = useState(0.1);

  return (
    <div className="App">
      <BillForm handleBillCost={setBillCost} />
      <ServiceForm handleService={setService} />
      <FriendServiceForm handleFriendService={setFriendService} />
      <BillTotal
        billCost={billCost}
        service={service}
        friendService={friendService}
      />
    </div>
  );
}
