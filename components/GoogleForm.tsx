import React from "react";

const GoogleForm = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfqXzHY6izTjMdb8RVdE0jSFTW_4B0gwDtUTdT76P5hWwml7A/viewform?embedded=true"
        width="640"
        height="2157"
        style={{ border: "none", margin: 0 }}
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;
