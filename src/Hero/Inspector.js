// const React = wp.element;
import {InspectorControls, MediaPlaceholder} from '@wordpress/block-editor';
import {TextControl} from '@wordpress/components';
import Select from '../components/Select';
const {__} = wp.i18n;

export default function({
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
  setAttributes,
  onImgSelect,
}) {
  const onAttrChange = att => ({target: {value}}) =>
    setAttributes({[att]: value});
  const onChange = prop => value => {
    setAttributes({[prop]: value});
  };

  return (
    <InspectorControls>
      <div className="sidebar__global-settings">
        {img ? (
          <img src={img.sizes.thumbnail.url} />
        ) : (
          <MediaPlaceholder onSelect={onImgSelect} />
        )}

        <Select
          name="heroSize"
          label="Hero Size"
          value={heroSize}
          onChange={onAttrChange('heroSize')}
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
          options={[
            ['primary', 'Primary'],
            ['secondary', 'Secondary'],
            ['tertiary', 'Tertiary'],
          ]}
        />

        <TextControl
          id={__('heading')}
          label="Heading"
          value={heading}
          onChange={onChange('heading')}
        />
        <TextControl
          id={__('subHeading')}
          label="Sub-Heading"
          value={subHeading}
          onChange={onChange('subHeading')}
        />
        <TextControl
          id={__('btnLink')}
          label="Button Link"
          value={btnLink}
          onChange={onChange('btnLink')}
        />
        <Select
          name="btnColor"
          label="Button Color"
          value={btnColor}
          onChange={onAttrChange('btnColor')}
          options={[
            ['primary', 'Primary'],
            ['secondary', 'Secondary'],
            ['tertiary', 'Tertiary'],
          ]}
        />
        <TextControl
          id={__('btnText')}
          label="Button Text"
          value={btnText}
          onChange={onChange('btnText')}
        />
      </div>
    </InspectorControls>
  );
}
