import Button from "@/components/button";
import Input from "@/components/input";

export default function ContactForm() {
  return (
    <form aria-label="contact form" className="grid gap-4">
      <Input
        ariaLabel="full name"
        placeholder="John Doe"
        label="Name"
        required
      />
      <div className="flex gap-4">
        <Input
          ariaLabel="enter email address"
          placeholder="example@email.com"
          label="email"
          required
          type="email"
        />
        <Input
          ariaLabel="enter phone number"
          placeholder="+8801873-228902"
          label="phone"
          required
          type="tel"
        />
      </div>
      <Input
        ariaLabel="enter message"
        placeholder="Hello..."
        label="message"
        required
        type="textarea"
      />
      <Button
        ariaLabel="send message"
        label="send message"
        icon="send"
        variant="primary"
        type="submit"
      />
    </form>
  );
}
