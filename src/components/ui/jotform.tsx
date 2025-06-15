export const JotForm = () => {
  return (
    <>
      <iframe
        id="JotFormIFrame-251655442481155"
        title="New Customer Registration Form"
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/251593909830162"
        scrolling="no"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "1000px",
          border: "none",
        }}
      >
        {" "}
      </iframe>{" "}
      <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"></script>{" "}
      <script>
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-251655442481155']",
        "https://form.jotform.com/")
      </script>
    </>
  );
};
