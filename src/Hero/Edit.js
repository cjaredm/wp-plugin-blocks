const React = wp.element;
import Inspector from './Inspector';
import {MediaPlaceholder} from '@wordpress/block-editor';
// const {__} = wp.i18n;

export default function(props) {
  const {
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
  } = props;

  const onImgSelect = img => props.setAttributes({img});

  return (
    <div>
      <Inspector {...props} onImgSelect={onImgSelect} />
      <div
        id={id}
        className={`${className} hero__${heroSize}`}
        style={{position: 'relative'}}
      >
        {img ? (
          <div
            className={`hero__container hero__${heroSize}`}
            style={{borderColor: backgroundColor}}
          >
            <div
              className={`hero__slide hero__${heroSize} h-border-${backgroundColor}`}
              style={{
                minHeight: 200,
                backgroundImage: `url(${img.sizes.large.url})`,
              }}
            >
              {heading && <h2 className={`hero__heading`}>{heading}</h2>}
              {subHeading && (
                <p className={`hero__sub-heading`}>{subHeading}</p>
              )}
              {btnText && (
                <a
                  href={btnLink}
                  className={`button button--${btnColor} hero__link`}
                >
                  {btnText}
                </a>
              )}
            </div>
          </div>
        ) : (
          <MediaPlaceholder onSelect={onImgSelect} />
        )}
      </div>
    </div>
  );
}
