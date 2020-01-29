const React = wp.element;
import Inspector from './Inspector';
import {MediaPlaceholder} from '@wordpress/block-editor';
const {__} = wp.i18n;

const initialSlide = {
  img: null,
  heading: '',
  subHeading: '',
  btnLink: '',
  btnContent: '',
  btnColor: 'tertiary',
  backgroundColor: 'secondary',
};

export function Edit(props) {
  const {
    attributes: {slides, heroSize, backgroundColor, slideSpeed},
    className,
    isSelected,
  } = props;
  const [slideIndex, setslideIndex] = React.useState(0);
  React.useEffect(() => {
    const updateSlide = () => {
      const slideSpeedMS = slideSpeed * 1000;
      if (slides.length < 2) return;
      if (slideIndex !== slides.length - 1) {
        return setTimeout(() => setslideIndex(slideIndex + 1), slideSpeedMS);
      } else {
        return setTimeout(() => setslideIndex(0), slideSpeedMS);
      }
    };
    updateSlide();
  }, [slideIndex, slides.length]);

  const onImgSelect = img =>
    props.setAttributes({
      slides: [
        ...slides,
        // id is generated based on time so it is always unique.
        {id: new Date().getTime(), ...initialSlide, img},
      ],
    });
  const getSlidePosition = (i, currentPosition) => {
    switch (true) {
      case i === currentPosition:
        return 0;
      case i < currentPosition:
        return 100;
      case i > currentPosition:
        return -100;
      default:
        return 100;
    }
  };

  return (
    <div>
      <Inspector {...props} onImgSelect={onImgSelect} />
      <div
        className={`${className} hero-slider__${heroSize}`}
        style={{position: 'relative'}}
      >
        {Boolean(slides.length)
          ? slides.map((slide, i) => (
              <div
                className={`hero-slider__container hero-slider__${heroSize} h-border-${backgroundColor}`}
                style={{
                  width: '100%',
                  transform: `translateX(${getSlidePosition(i, slideIndex)}%)`,
                  transition: `transform cubic-bezier(0.455, 0.03, 0.515, 0.955) 2.5s`,
                  zIndex: i,
                  overflow: 'hidden',
                }}
              >
                <div
                  class={`hero-slider__slide hero-slider__${heroSize}`}
                  style={{
                    minHeight: 200,
                    backgroundImage: `url(${slide.img.sizes.large.url})`,
                  }}
                >
                  {slide.header && (
                    <h2 class={`hero-slider__heading`}>{slide.header}</h2>
                  )}
                  {slide.subHeader && (
                    <p class={`hero-slider__sub-heading`}>{slide.subHeader}</p>
                  )}
                  {slide.btnText && (
                    <a
                      href={slide.btnLink}
                      class={`button button--${slide.btnColor} hero-slider__link`}
                    >
                      {slide.btnText}
                    </a>
                  )}
                </div>
              </div>
            ))
          : (isSelected && <MediaPlaceholder onSelect={onImgSelect} />) || null}
      </div>
    </div>
  );
}
