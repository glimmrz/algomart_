import DOMPurify from "dompurify";

export default function RichView({ htmlContent }) {
  const sanitizedContent = DOMPurify.sanitize(htmlContent);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
}
