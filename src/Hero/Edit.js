const React = wp.element;
import Inspector from './Inspector';
import Save from './Save';
import {MediaPlaceholder} from '@wordpress/block-editor';
import {BG_TYPES} from './BackgroundPicker';
// const {__} = wp.i18n;

export default function(props) {
  const {
    setAttributes,
    attributes: {backgroundType, img},
  } = props;

  return (
    <div>
      <Inspector {...props} />

      {backgroundType === BG_TYPES.img && !img ? (
        <MediaPlaceholder onSelect={img => setAttributes({img})} />
      ) : (
        <Save {...props} />
      )}
    </div>
  );
}
