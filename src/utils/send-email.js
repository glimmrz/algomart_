import { WelcomeTemplate } from "@/components/(dashboard)/email-templates/welcome-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeMail(name, subject, emails) {
  await resend.emails.send({
    from: "Support <support@zeris.xyz>",
    to: emails,
    subject: subject,
    react: <WelcomeTemplate firstName={name} />,
  });
}
