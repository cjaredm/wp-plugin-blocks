const React = wp.element;
// import xss from 'xss';

export default function({
  attributes: {
    heroSize,
    backgroundColor,
    img,
    heading,
    subHeading,
    btnLink,
    btnText,
    btnColor,
  },
  className,
  id,
}) {
  return (
    <div
      id={id}
      className={`${className} hero__${heroSize} has-background has-${backgroundColor}-background-color`}
      style={{position: 'relative'}}
    >
      <div className={`hero__container hero__${heroSize}`}>
        <div
          class={`hero__slide hero__${heroSize} h-border-${backgroundColor}`}
          style={{
            minHeight: 200,
            backgroundImage: `url(${img.sizes.large.url})`,
          }}
        >
          {heading && <h2 class={`hero__heading`}>{heading}</h2>}
          {subHeading && <p class={`hero__sub-heading`}>{subHeading}</p>}
          {btnText && (
            <a href={btnLink} class={`button button--${btnColor} hero__link`}>
              {btnText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
