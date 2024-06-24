const imgProps = {
  src: "https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const img = React.createElement("img", imgProps, null);

const p = React.createElement("p", {}, "Bengaluru")

const card = React.createElement("div", { className : "card"}, [img, p])


const root = ReactDOM.createRoot(document.getElementById("react-managed-container"))

root.render(card)