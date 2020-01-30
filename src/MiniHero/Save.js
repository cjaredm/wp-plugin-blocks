// const React = wp.element;
import xss from 'xss';

export default function({attributes: {images, header}, className, id}) {
  return (
    <div id={id} className={className}>
      {header && (
        <h2 className={`mini-hero-gallery__heading h-color-secondary`}>
          {header}
        </h2>
      )}
      <div className="mini-hero-gallery__container custom-mini-heroes">
        {images.map(img => {
          const Container = img.href ? 'a' : 'div';
          const containerProps = {
            key: img.id,
            className: 'mini-hero-gallery__mini-hero',
          };
          if (img.href) containerProps.href = img.href;
          return (
            <Container {...containerProps}>
              {img.content && (
                <div className="mini-hero-gallery__text-container">
                  <h2
                    className="mini-hero-gallery__text"
                    dangerouslySetInnerHTML={{__html: xss(img.content)}}
                  />
                </div>
              )}
              <img src={img.src} className="mini-hero-gallery__img" />
            </Container>
          );
        })}
      </div>
    </div>
  );
}
