import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {BG_TYPES} from './BackgroundPicker';

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
      className={`${className} hero__${heroSize}`}
      style={{position: 'relative'}}
    >
      <div
        className={`hero__container hero__${heroSize} h-background-${backgroundColor ||
          dividerColor}`}
        style={{borderColor: backgroundColor || dividerColor}}
      >
        <div
          class={`hero__slide hero__${heroSize} h-border-${dividerColor}`}
          style={{
            borderBottomWidth: dividerColor === 'none' ? 0 : '10px',
            minHeight: 300,
            ...getBackgroundStyles(backgroundType, img),
          }}
        >
          {heading && (
            <h2
              class={`hero__heading  h-color-${textColor} ${
                isDefaultStyle ? '' : 'hero__heading--normal'
              }`}
            >
              {heading}
            </h2>
          )}
          {subHeading && (
            <p
              class={`hero__sub-heading h-color-${textColor} ${
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
                    class={`button button--${btn.color} hero__link ${
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
