"use client";

import { anim, rsvp,  } from "@/data/data";
import { useState } from "react";
import { motion } from "framer-motion";

type Attending = "Այո" | "Ոչ" | null;

interface FormDataType {
  fullName: string;
  attending: Attending;
  guestCount: number | string;
}

interface MessageType {
  type: "success" | "error" | "";
  text: string;
}

export default function AttendanceGuests() {
  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    attending: null,
    guestCount: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [message, setMessage] = useState<MessageType>({
    type: "",
    text: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "guestCount"
          ? value === ""
            ? ""
            : Math.max(0, Number(value))
          : value,
    }));
  };

  const handleAttendingChange = (value: Attending) => {
    setFormData((prev) => ({
      ...prev,
      attending: value,
      guestCount: value === "Ոչ" ? "" : prev.guestCount,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage({ type: "", text: "" });

    if (!formData.fullName.trim()) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք գրել անուն ազգանունը։",
      });
      return;
    }

    if (formData.attending === null) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք նշել գալու եք, թե ոչ։",
      });
      return;
    }

    const guestCountNumber = Number(formData.guestCount);

    if (
      formData.attending === "Այո" &&
      (!formData.guestCount || guestCountNumber <= 0)
    ) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք նշել քանի հոգով եք գալու։",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(rsvp, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          fullName: formData.fullName,
          attending: formData.attending || "",
          guestCount:
            formData.attending === "Այո"
              ? String(formData.guestCount)
              : "0",
        }).toString(),
      });

      setMessage({
        type: "success",
        text: "Շնորհակալություն։ Ձեր պատասխանը ուղարկվեց։",
      });

      setFormData({
        fullName: "",
        attending: null,
        guestCount: "",
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);

      setMessage({
        type: "error",
        text: "Տեղի ունեցավ սխալ։ Փորձեք կրկին։",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl p-6 mt-20">
      <motion.h1
        {...anim}
        className="text-2xl font-bold text-vrayi text-center mb-10"
      >
        Հրավերի պատասխան
      </motion.h1>

      {message.text && (
        <motion.div
          {...anim}
          className={`p-4 mb-4 rounded-lg ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Full Name */}
        <div>
          <p className="text-start mb-3">
            Խնդրում ենք գրել Ձեր անուն ազգանունը
          </p>

          <motion.input
            {...anim}
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Անուն Ազգանուն"
            className="w-full p-3 border-b rounded-lg"
          />
        </div>

        {/* Attending */}
        <div>
          <p className="text-start mb-3">
            Խնդրում ենք նշել գալու եք, թե ոչ
          </p>

          <motion.div {...anim} className="flex gap-3">
            <button
              type="button"
              onClick={() => handleAttendingChange("Այո")}
              className={`flex-1 p-3 rounded-lg border transition-all duration-200 ${
                formData.attending === "Այո"
                  ? "bg-guyn text-[#FFFDFB] border-guyn"
                  : "text-black"
              }`}
            >
              Այո
            </button>

            <button
              type="button"
              onClick={() => handleAttendingChange("Ոչ")}
              className={`flex-1 p-3 rounded-lg border transition-all duration-200 ${
                formData.attending === "Ոչ"
                  ? "bg-guyn text-[#FFFDFB] border-guyn"
                  : "text-black"
              }`}
            >
              Ոչ
            </button>
          </motion.div>
        </div>

        {/* Guest Count */}
        {formData.attending === "Այո" && (
          <div>
            <p className="text-start mb-3">
              Քանի հոգով եք գալու
            </p>

            <motion.input
              {...anim}
              type="number"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleInputChange}
              placeholder="Քանակ"
              min={1}
              className="w-full p-3 border-b rounded-lg"
            />
          </div>
        )}

        {/* Submit */}
        <motion.button
          {...anim}
          type="submit"
          disabled={isSubmitting}
          className="w-full p-3 bg-guyn text-[#FFFDFB] rounded-lg"
        >
          {isSubmitting ? "Ուղարկվում է..." : "Ուղարկել"}
        </motion.button>
      </form>
    </div>
  );
}