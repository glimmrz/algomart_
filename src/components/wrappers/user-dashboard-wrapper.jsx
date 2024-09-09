import Section from "../section";

export default function UserDashboardWrapper({
  customStyles = "",
  title,
  children,
}) {
  return (
    <Section
      sectionStyles="md:mt-0"
      contentStyles={`${customStyles} rounded-md`}
      title={title}
    >
      {children}
    </Section>
  );
}
