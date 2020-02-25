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
  isSelected,
  attributes: {backgroundType, backgroundColor, img, opacity},
  ...props
}) {
  console.log(props);
  return (
    img && (
      <div id={id} className={`${className}`} style={{position: 'relative'}}>
        <div
          className={`blocks-on-image__container h-background-${backgroundColor}`}
          style={{
            minHeight: 300,
            ...getBackgroundStyles(backgroundType, img),
          }}
        >
          <div
            className="overlay"
            style={{backgroundColor: `rgba(0,0,0, 0.${100 - (100 - opacity)})`}}
          />
          <div
            className={`blocks-on-image__slide ${
              isSelected ? 'inner-blocks-is-selected' : ''
            }`}
          >
            {render ? <InnerBlocks.Content /> : <InnerBlocks />}
          </div>
        </div>
      </div>
    )
  );
}
