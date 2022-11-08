type ProjectProps = {
  side: string;
  title: string;
  description: string;
  github: string;
  website: string;
  img: string;
  altText: string;
};

function Project({
  side,
  title,
  description,
  github,
  website,
  img,
  altText,
}: ProjectProps): JSX.Element {
  const onNavigate = (site: string): void => {
    window.open(site, '_blank');
  };

  if (side === 'left') {
    return (
      <div
        className="project left-side"
        data-aos="fade-right"
        data-aos-easing="ease-in"
      >
        <div className="info-section">
          <h2 className="project-title">{title}</h2>
          <span>{description}</span>
          <div className="btn-container">
            <button onClick={() => onNavigate(github)} type="button">
              GitHub repo
            </button>
            {website === '' ? (
              <></>
            ) : (
              <button onClick={() => onNavigate(website)} type="button">
                Website
              </button>
            )}
          </div>
        </div>
        <div className="project-img-section">
          <img className="project-img" src={img} alt={altText} />
        </div>
      </div>
    );
  } else if (side === 'right') {
    return (
      <div
        className="project right-side"
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
      >
        <div className="project-img-section">
          <img className="project-img" src={img} alt={altText} />
        </div>
        <div className="info-section right">
          <h2 className="project-title">{title}</h2>
          <span>{description}</span>
          <div className="btn-container">
            <button onClick={() => onNavigate(github)} type="button">
              GitHub repo
            </button>
            {website === '' ? (
              <></>
            ) : (
              <button onClick={() => onNavigate(website)} type="button">
                Website
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return <></>;
}

export default Project;
