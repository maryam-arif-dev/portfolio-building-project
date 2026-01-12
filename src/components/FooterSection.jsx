export default function FooterSection({
  email,
  linkedInLink,
  gitHubLink,
  location,
}) {
  return (
    // Footer Section
    <footer id="footer">
      <div className="general-contact-container">
        <a href="#">{email}</a>
        <a href={linkedInLink}>Linkdin</a>
        <a href={gitHubLink}>GitHub</a>
        <a href="#">{location}</a>
      </div>
    </footer>
  );
}
