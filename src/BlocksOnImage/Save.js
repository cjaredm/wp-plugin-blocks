const {InnerBlocks} = wp.blockEditor;
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
  render,
  className,
  attributes: {backgroundType, backgroundColor, size, img, opacity},
}) {
  return (
    img && (
      <div
        id={id}
        className={`${className} blocks-on-image__${size}`}
        style={{position: 'relative'}}
      >
        <div
          className={`blocks-on-image__container blocks-on-image__${size} h-background-${backgroundColor}`}
        >
          <div
            className="overlay"
            style={{backgroundColor: `rgba(0,0,0, 0.${100 - (100 - opacity)}`}}
          />
          <div
            className={`blocks-on-image__slide blocks-on-image__${size}`}
            style={{
              minHeight: 300,
              ...getBackgroundStyles(backgroundType, img),
            }}
          >
            {render ? <InnerBlocks.Content /> : <InnerBlocks />}
          </div>
        </div>
      </div>
    )
  );
}
