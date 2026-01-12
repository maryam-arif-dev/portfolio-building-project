export default function ProfileSection({ headline, subHeadline, image }) {
  return (
    // Profile Section
    <div className="profile-conatainer">
      <div className="profile-image-column">
        <img className="profile-image" src={image} alt="Maryam Arif" />
      </div>
      <div className="headline-column">
        <h2>{headline}</h2>
        <p>{subHeadline}</p>
        <button className="general-button-style">See My GitHub</button>
      </div>
    </div>
  );
}
