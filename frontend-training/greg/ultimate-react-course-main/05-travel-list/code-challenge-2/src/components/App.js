import BillForm from "./BillForm";
import BillTotal from "./BillTotal";
import FriendServiceForm from "./FriendServiceForm";
import ResetButton from "./ResetButton";
import ServiceForm from "./ServiceForm";
import { useState } from "react";

export default function App() {
  const [billCost, setBillCost] = useState("");
  const [service, setService] = useState(0);
  const [friendService, setFriendService] = useState(0);

  return (
    <div className="App">
      <BillForm billCost={billCost} handleBillCost={setBillCost} />
      <ServiceForm service={service} handleService={setService} />
      <FriendServiceForm
        friendService={friendService}
        handleFriendService={setFriendService}
      />
      <BillTotal
        billCost={billCost}
        service={service}
        friendService={friendService}
      />
      <ResetButton
        handleCost={setBillCost}
        handleService={setService}
        handleFriendService={setFriendService}
      />
    </div>
  );
}
