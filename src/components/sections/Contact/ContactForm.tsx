import React from "react";
import { Input } from "../../ui/Input";
import { TextArea } from "../../ui/TextArea";
import { Button } from "../../ui/Button";

export const ContactForm = () => {
  return (
    <form className="max-w-xl mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="Full Name" placeholder="John Doe" />
        <Input label="Email Address" placeholder="john@example.com" type="email" />
      </div>
      <Input label="Subject" placeholder="Project Inquiry" />
      <TextArea label="Message" placeholder="Tell us about your project..." />
      <div className="mt-8 text-center">
        <Button size="lg">Send Message</Button>
      </div>
    </form>
  );
};
