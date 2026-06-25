function CohortDetails({ cohort }) {
  return (
    <div>
      <h3>{cohort.code}</h3>
      <h4>{cohort.name}</h4>

      <p>
        <b>Status:</b> {cohort.status}
      </p>

      <p>
        <b>Started On:</b> {cohort.startedOn}
      </p>

      <p>
        <b>Coach:</b> {cohort.coach}
      </p>

      <p>
        <b>Trainer:</b> {cohort.trainer}
      </p>
    </div>
  );
}

export default CohortDetails;