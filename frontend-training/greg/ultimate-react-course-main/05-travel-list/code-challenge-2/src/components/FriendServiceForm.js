export default function FriendServiceForm({
  friendService,
  handleFriendService,
}) {
  return (
    <div className="friend-service--container">
      <label>How did your friend like the service? </label>
      <select
        name="friend-service-quality"
        value={friendService}
        onChange={(e) => {
          handleFriendService(e.target.value);
        }}
      >
        <option value="0">It was awful (0%)</option>
        <option value="0.1">It was okay (10%)</option>
        <option value="0.15">It was good (15%)</option>
        <option value="0.2">It was very good (20%)</option>
        <option value="0.25">It was very good (25%)</option>
      </select>
    </div>
  );
}
