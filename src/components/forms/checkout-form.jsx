import Button from "@/components/button";
import Input from "@/components/input";
import Select from "@/components/select";
import Heading from "@/components/heading";

export default function CheckoutForm() {
  return (
    <form className="flex flex-col gap-4" aria-label="checkout address form">
      <div>
        <Heading title="shipping information" />
        <div className="flex flex-col gap-4 mt-4">
          <Input
            label="full name"
            placeholder="John Doe"
            ariaLabel="customer name"
          />
          <Input
            label="street address"
            placeholder="21/3, Mariana Drive, AC"
            ariaLabel="delivery address"
          />
          <div className="grid grid-cols-[1fr_3fr] gap-4">
            <Input label="zip code" placeholder="1216" ariaLabel="zip code" />
            <Input label="city" placeholder="Dhaka" ariaLabel="city" />
          </div>
          <Input
            label="email address"
            placeholder="example@email.com"
            ariaLabel="email"
          />
          <Input
            label="shipping address same as billing?"
            type="checkbox"
            ariaLabel="shipping address same as billing?"
            id="checkbox"
          />
        </div>
      </div>

      {/* Payment Information */}
      <div className="mt-4">
        <Heading title="payment information" />
        <div className={`grid gap-4 mt-4`}>
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              ariaLabel="credit card number"
              type="number"
              placeholder="1234 5678 1234 4321"
              label="credit card number"
            />
            <Input
              placeholder="John Doe"
              label="name on card"
              ariaLabel="cardholder name"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid lg:grid-cols-2 gap-4">
              <Select
                label="expiry date"
                ariaLabel="card expiry date"
                options={[
                  { label: "01/12", value: "01/12" },
                  { label: "03/06", value: "03/06" },
                  { label: "05/08", value: "05/08" },
                  "07/04",
                ]}
              />
              <Select
                label="expiry year"
                ariaLabel="card expiry year"
                options={[
                  { label: 2028, value: 2028 },
                  { label: 2032, value: 2032 },
                  { label: 2036, value: 2036 },
                ]}
              />
            </div>
            <Input
              type="number"
              label="CVV/CVC"
              placeholder="432"
              ariaLabel="card CVC/CVV number."
            />
          </div>
        </div>
      </div>
      <Button
        ariaLabel="complete payment"
        type="submit"
        label="pay now"
        variant="primary"
        icon="card"
      />
    </form>
  );
}
