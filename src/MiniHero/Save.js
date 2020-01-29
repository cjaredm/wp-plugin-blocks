// const React = wp.element;
import xss from 'xss';

export default function({attributes: {images, header}, className, id}) {
  return (
    <div id={id} className={className}>
      {header && (
        <h3 class={`mini-hero-gallery__heading h-color-secondary`}>{header}</h3>
      )}
      <div class="mini-hero-gallery__container custom-mini-heroes">
        {images.map(img => (
          <a
            key={img.id}
            href={img.href || '#'}
            class="mini-hero-gallery__mini-hero"
          >
            {img.content && (
              <div class="mini-hero-gallery__text-container">
                <h2
                  class="mini-hero-gallery__text"
                  dangerouslySetInnerHTML={{__html: xss(img.content)}}
                ></h2>
              </div>
            )}
            <img src={img.src} class="mini-hero-gallery__img" />
          </a>
        ))}
      </div>
    </div>
  );
}
