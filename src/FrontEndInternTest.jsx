
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function FrontEndInternTest() {
  const [activeCard, setActiveCard] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "Language Services",
  });

  const capabilities = [
    "Language Services",
    "Design Services",
    "Translation",
    "Voiceover",
    "Presentation Design",
    "Data Services",
    "UX Research",
    "Video Editing",
    "Content Writing",
    "Proofreading",
    "Market Research",
    "Branding",
    "Subtitling",
  ];

  const usps = [
    {
      title: "Consistently High Quality",
      content: "Technology has brought us to the threshold...",
    },
    {
      title: "Round the Clock Availability",
      content: "Oftentimes our new clients ask us...",
    },
    {
      title: "Faster than the Fastest",
      content: "Rome may not have been built in a day...",
    },
    {
      title: "Information Security",
      content: "ISO 27001:2022 comes within the ISO 27000...",
    },
  ];

  const handleCardNav = (direction) => {
    setActiveCard((prev) =>
      direction === "next"
        ? (prev + 1) % capabilities.length
        : (prev - 1 + capabilities.length) % capabilities.length
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://test.ezworks.ai/form-api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    alert("Form submitted: " + JSON.stringify(data));
  };

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <div className="flex justify-between items-center mb-2">
          <Button onClick={() => handleCardNav("prev")}>◀</Button>
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex transition-transform ease-in-out"
              animate={{ x: `-${activeCard * 100}%` }}
              style={{ width: `${capabilities.length * 100}%` }}
            >
              {capabilities.map((capability, idx) => (
                <Card key={idx} className="w-full min-w-full flex-shrink-0 text-center">
                  <CardContent>
                    <p className="text-xl font-medium">{capability}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
          <Button onClick={() => handleCardNav("next")}>▶</Button>
        </div>
        <div className="flex justify-center space-x-2 mt-2">
          {capabilities.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCard(idx)}
              className={`w-3 h-3 rounded-full ${activeCard === idx ? "bg-blue-600" : "bg-gray-300"}`}
            ></button>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 max-w-md">
          <Input placeholder="Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <Input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <Input type="tel" placeholder="Phone" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
          <Input placeholder="Country" required value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
          <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="p-2 border rounded">
            {capabilities.map((cap, idx) => (
              <option key={idx} value={cap}>{cap}</option>
            ))}
          </select>
          <Button type="submit">Submit</Button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Why EZ Works?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {usps.map((usp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ rotateY: 180 }}
              className="bg-white p-4 rounded-2xl shadow-xl text-center cursor-pointer"
            >
              <p className="text-lg font-semibold">{usp.title}</p>
              <p className="mt-2 text-sm">{usp.content.substring(0, 100)}...</p>
              <a href="#" className="text-blue-600 text-sm">Read More</a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
