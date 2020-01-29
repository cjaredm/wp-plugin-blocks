// const React = wp.element;
const {InspectorControls} = wp.editor;
const {PanelBody} = wp.components;
import MediaUploaderBtn from '../components/MediaUploaderBtn';
import {TextControl} from '@wordpress/components';
import Select from '../components/Select';
const {__} = wp.i18n;

export default function({
  attributes: {heroSize, slides, backgroundColor, slideSpeed},
  setAttributes,
  onImgSelect,
}) {
  const onAttrChange = att => ({target: {value}}) =>
    setAttributes({[att]: value});
  const onChange = (prop, i) => value => {
    const currentSlides = [...slides];
    currentSlides[i][prop] = value;
    setAttributes({slides: currentSlides});
  };
  const onRemove = i => () => {
    const newSlides = [...slides];
    newSlides.splice(i, 1);
    setAttributes({slides: newSlides});
  };

  return (
    <InspectorControls>
      <div className="sidebar__global-settings">
        {slides.length === 0 && <div>You have no slides set.</div>}
        <MediaUploaderBtn onSelect={onImgSelect}>
          {slides.length ? 'Add Another Slide' : 'Add Hero Image'}
        </MediaUploaderBtn>

        <Select
          name="heroSize"
          label="Hero Size"
          value={heroSize}
          onChange={onAttrChange('heroSize')}
          defaultValue="full"
          options={[
            ['full', 'Full'],
            ['half', 'Half'],
          ]}
        />
        <Select
          name="backgroundColor"
          label="Background Color"
          value={backgroundColor}
          onChange={onAttrChange('backgroundColor')}
          defaultValue="secondary"
          options={[
            ['primary', 'Primary'],
            ['secondary', 'Secondary'],
            ['tertiary', 'Tertiary'],
          ]}
        />
        {slides.length > 1 && (
          <TextControl
            id="slideSpeed"
            label="Slide Speed in seconds"
            value={slideSpeed}
            onChange={value => setAttributes({slideSpeed: value})}
          />
        )}
      </div>

      {Boolean(slides.length) &&
        slides.map((slide, i) => {
          const getId = type => `${type}${slide.id}`;
          return (
            <PanelBody
              key={slide.id}
              title={__(i === 0 ? 'Hero Slider' : `Slide #${i + 1}`)}
              icon="format-image"
              initialOpen
            >
              <img src={slide.img.sizes.thumbnail.url} />

              <TextControl
                id={getId('header')}
                label="Header"
                value={slide.header}
                onChange={onChange('header', i)}
              />
              <TextControl
                id={getId('subHeader')}
                label="Sub-Header"
                value={slide.subHeader}
                onChange={onChange('subHeader', i)}
              />
              <TextControl
                id={getId('btnLink')}
                label="Button Link"
                value={slide.btnLink}
                onChange={onChange('btnLink', i)}
              />
              <Select
                name="btnColor"
                label="Button Color"
                onChange={({target: {value}}) => onChange('btnColor', i)(value)}
                defaultValue="primary"
                options={[
                  ['primary', 'Primary'],
                  ['secondary', 'Secondary'],
                  ['tertiary', 'Tertiary'],
                ]}
              />
              <TextControl
                id={getId('btnText')}
                label="Button Text"
                value={slide.btnText}
                onChange={onChange('btnText', i)}
              />
              <button
                className="button sidebar__remove-slide"
                onClick={onRemove(i)}
              >
                Remove Slide
              </button>
            </PanelBody>
          );
        })}
    </InspectorControls>
  );
}
