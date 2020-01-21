const React = wp.element;
import {MyMediaUploader} from '../components/MyMediaUploader';
import {EditorImgWrapper, REORDER} from './EditorImgWrapper';
import {InlineEditor} from '../components/InlineEditor';

export function EditMiniHero({attributes: {images, header}, setAttributes, className, isSelected}) {
  const onHeaderChange = (header) => setAttributes({header});
  const onImgSelect = (img) => setAttributes(
    {images: [
      ...images,
      {id: img.id, src: img.sizes.medium.url, title: img.description, href: ''},
    ]}
  );
  const onImgPropChange = (i) => (prop) => (value) => {
    const currentImgs = [...images];
    currentImgs[i][prop] = value;
    setAttributes({[prop]: currentImgs});
  }
  const onDelete = (i) => () => {
    const imgs = [...images];
    imgs.splice(i, 1);
    setAttributes({images: imgs});
  };
  const onOrderChange = (from) => (direction) => {
    const moveTo = direction === REORDER.LEFT ? from - 1 : from + 1
    const reorderedImages = [...images];
    reorderedImages[moveTo] = images[from];
    reorderedImages[from] = images[moveTo];
    setAttributes({images: reorderedImages});
  };

	return (
    <div className={`${className} mini-hero-gallery__editor`}>
      {/* This is our toolbar under the wp-toolbar, add buttons and whatnot here */}
      {isSelected && (
        <MyMediaUploader onSelect={onImgSelect} >
          {images.length ? 'Add Another Image' : 'Add Mini Hero'}
        </MyMediaUploader>
      )}

      {/* This is where we mimic what is rendered while making it editable */}
      <div className="mini-hero-gallery">
        <InlineEditor
          placeholder="Add Header Here"
          className="mini-hero-gallery__heading h-color-secondary"
          value={header}
          onChange={onHeaderChange}
        />
				<div className="mini-hero-gallery__container custom-mini-heroes">
					{images.map((img, i) => (
            <EditorImgWrapper
              key={img.id}
              img={{...img, position: i, length: images.length}}
              onChange={onImgPropChange(i)}
              onDelete={onDelete(i)}
              onOrderChange={onOrderChange(i)}
              isSelected={isSelected}
            />
					))}
				</div>
      </div>
    </div>
	);
}
