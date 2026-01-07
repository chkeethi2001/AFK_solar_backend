import { useEffect, useState } from "react";
import Register from "./Register";

const PopupRegister = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem("token");
    if (!token) {
      // Show register popup after 5s only if user is not logged in
      const timer = setTimeout(() => setOpen(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[9999]">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg relative p-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-4 text-2xl leading-none"
        >
          &times;
        </button>

        {/* Insert your Register component here */}
        <Register />
      </div>
    </div>
  );
};

export default PopupRegister;
