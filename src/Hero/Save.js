/* eslint-disable object-curly-spacing */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {BG_TYPES} from '../components/BackgroundPicker';

function getBackgroundStyles(type, img) {
  const backgroundImage = img ? `url(${img.sizes.full.url})` : '';
  switch (true) {
    case Boolean(type === BG_TYPES.img && img):
      return {
        backgroundImage,
      };
    case Boolean(type === BG_TYPES.texture && img):
      return {
        backgroundImage,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      };
    default:
      return {};
  }
}

export default function({
  id,
  className,
  attributes: {
    backgroundType,
    backgroundColor,
    dividerColor,
    heroSize,
    img,
    heading,
    subHeading,
    textColor,
    buttons,
    isDefaultStyle,
    isDefaultBtnStyle,
  },
}) {
  return (
    <div
      id={id}
      className={`${className} hero__${heroSize} full-width`}
      style={{position: 'relative'}}
    >
      <div
        className={`hero__container hero__${heroSize} has-${backgroundColor ||
          dividerColor}-background-color has-${backgroundColor ||
          dividerColor}-border-color`}
        style={{borderColor: backgroundColor || dividerColor}}
      >
        <div
          className={`hero__slide hero__${heroSize} has-${dividerColor}-border-color`}
          style={{
            borderBottomWidth: dividerColor === 'none' ? 0 : '10px',
            minHeight: 300,
            ...getBackgroundStyles(backgroundType, img),
          }}
        >
          {heading && (
            <h2
              className={`hero__heading  has-${textColor}-color ${
                isDefaultStyle ? '' : 'hero__heading--normal'
              }`}
            >
              {heading}
            </h2>
          )}
          {subHeading && (
            <p
              className={`hero__sub-heading has-${textColor}-color ${
                isDefaultStyle ? '' : 'hero__sub-heading--normal'
              }`}
            >
              {subHeading}
            </p>
          )}
          {Boolean(buttons && buttons.length) && (
            <div className="hero_button-row">
              {buttons.map(btn => {
                const btnTextArr = btn.text.split('\n');
                btnTextArr.join(...[<FontAwesomeIcon icon="coffee" />, '\n']);
                console.log(btnTextArr);
                return (
                  <a
                    key={btn.id}
                    href={btn.link}
                    className={`button button-fill-${btn.color} hero__link ${
                      isDefaultBtnStyle ? 'button--large' : ''
                    }`}
                  >
                    <span>{btnTextArr}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
