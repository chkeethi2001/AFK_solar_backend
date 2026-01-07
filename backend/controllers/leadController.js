import axios from "axios";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx3Hr_WGuo3o0DMV4MEKpKg6fvW8Da2RqfO6eOBsJcKtCgLnXR8G4UaULyrdcb6ge79Gw/exec";

export const submitLead = async (req, res) => {
  try {
    const { name, email, phone, message, source } = req.body;

    // ✅ Guarantee source is always set
    const payload = {
      name: name || "",
      email: email || "",
      phone: phone || "",
      message: message || "",
      source: source || "Solar",  
    };

    const response = await axios.post(APPS_SCRIPT_URL, payload, {
      headers: { "Content-Type": "application/json" },
    });

    return res.json({ success: true, data: response.data });
  } catch (err) {
    console.error(err?.response?.data || err.message);
    return res
      .status(500)
      .json({ success: false, message: "Failed to save lead" });
  }
};
