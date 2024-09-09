import Heading from "@/components/heading";
import ContactForm from "@/components/forms/contact-form";
import Container from "@/components/wrappers/container";
import DataCell from "@/components/data-cell";

export const metadata = {
  title: "Contact information | AlgoMart",
  description: "Our contact information.",
};

export default function ContactPage() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-2">
        <div className="grid gap-4 h-fit">
          <Heading title="contact information" />
          <div className="h-fit grid grid-cols-1 gap-y-8 gap-x-2 md:grid-cols-2">
            <DataCell
              link
              dataName="phone"
              href="tel:+8801873228724"
              dataValue="+8801873228724"
              icon="phone"
            />
            <DataCell
              link
              dataName="email"
              href="mailto:admin@mail.com"
              dataValue="admin@mail.com"
              icon="email"
            />
            <DataCell
              dataName="Dhaka office"
              dataValue="nala drive, dhaka 1216"
              icon="address"
            />
            <DataCell
              dataName="chittagong office"
              dataValue="marine drive, ctg 2345"
              icon="address"
            />
          </div>
        </div>
        {/* Contact form */}
        <div className="grid gap-4 h-fit">
          <Heading title="send us a message" />
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
