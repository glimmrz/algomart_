import Link from "next/link";
import Heading from "@/components/heading";
import FaqDropodown from "@/components/faq-dropdown";
import Text from "@/components/text";
import Container from "@/components/wrappers/container";

export const metadata = {
  title: "Frequently asked questions | AlgoMart",
  description: "Questions asked by our customers.",
};

const faqs = [
  {
    question: "How to order multiple products?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati tempora eius facere? Esse quaerat temporibus alias et beatae iste illum tenetur molestias eligendi architecto earum dolores vitae, delectus assumenda veritatis optio id eaque necessitatibus quia placeat dignissimos obcaecati exercitationem! Expedita laboriosam accusamus perferendis optio nesciunt quia dolorem, id recusandae!",
  },
  {
    question: "How do you deliver products?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati tempora eius facere? Esse quaerat temporibus alias et beatae iste illum tenetur molestias eligendi architecto earum dolores vitae, delectus assumenda veritatis optio id eaque necessitatibus quia placeat dignissimos obcaecati exercitationem! Expedita laboriosam accusamus perferendis optio nesciunt quia dolorem, id recusandae!",
  },
  {
    question: "What is the support center number?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati tempora eius facere? Esse quaerat temporibus alias et beatae iste illum tenetur molestias eligendi architecto earum dolores vitae, delectus assumenda veritatis optio id eaque necessitatibus quia placeat dignissimos obcaecati exercitationem! Expedita laboriosam accusamus perferendis optio nesciunt quia dolorem, id recusandae!",
  },
  {
    question: "Are the products authentic?",
    answer:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    question: "How many products do you have?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati tempora eius facere? Esse quaerat temporibus alias et beatae iste illum tenetur molestias eligendi architecto earum dolores vitae, delectus assumenda veritatis optio id eaque necessitatibus quia placeat dignissimos obcaecati exercitationem! Expedita laboriosam accusamus perferendis optio nesciunt quia dolorem, id recusandae!",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati tempora eius facere? Esse quaerat temporibus alias et beatae iste illum tenetur molestias eligendi architecto earum dolores vitae, delectus assumenda veritatis optio id eaque necessitatibus quia placeat dignissimos obcaecati exercitationem! Expedita laboriosam accusamus perferendis optio nesciunt quia dolorem, id recusandae!",
  },
];

export default function FAQPage() {
  return (
    <Container>
      <div className="grid gap-8 lg:grid-cols-[1.2fr,_2fr] lg:gap-2">
        <div className="h-fit lg:sticky top-[calc(theme(height.navbar)+theme(gap.2))]">
          <Heading title="frequently asked questions" customStyles="!mb-2" />
          <Text>
            Got a question? We got you covered! These are the questions our
            customers asked us the most. If you have further questions, please{" "}
            <Link href="/contact-us" className="text-theme underline">
              contact our support here.
            </Link>
          </Text>
        </div>
        <div className="grid gap-4">
          {faqs?.map((faq, index) => (
            <FaqDropodown key={index} faq={faq} />
          ))}
        </div>
      </div>
    </Container>
  );
}
