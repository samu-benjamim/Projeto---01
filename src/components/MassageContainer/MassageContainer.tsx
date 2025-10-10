import { Bounce, ToastContainer } from "react-toastify";

export function MassageContainer() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
  );
}
