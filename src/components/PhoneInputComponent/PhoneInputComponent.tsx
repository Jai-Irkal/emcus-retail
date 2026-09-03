"use client";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

export default function CustomPhoneInput() {
  const [phone, setPhone] = useState<string | undefined>();

  return (
    <PhoneInput
      international
      defaultCountry="IN"
      value={phone}
      onChange={setPhone}
      placeholder="Enter phone number"
      className="phone-input"
    />
  );
}