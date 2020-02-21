const {Fragment} = wp.element;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {MediaPlaceholder, MediaUpload} from '@wordpress/block-editor';
import {SelectControl} from '@wordpress/components';

export const BG_TYPES = {
  img: 'img',
  texture: 'texture',
  color: 'color',
};

export default function(props) {
  return (
    <Fragment>
      <SelectControl
        label="Background Type"
        value={props.attributes.backgroundType}
        onChange={props.onChange('backgroundType')}
        options={[
          {label: 'Repeatable Texture', value: BG_TYPES.texture},
          {label: 'Image', value: BG_TYPES.img},
          {label: 'Color', value: BG_TYPES.color},
        ]}
      />
      <Options {...props} />
    </Fragment>
  );
}

function Options({
  attributes: {backgroundType, backgroundColor, img},
  setAttributes,
}) {
  switch (true) {
    case backgroundType === BG_TYPES.img || backgroundType === BG_TYPES.texture:
      return (
        <Fragment>
          {img ? (
            <div className="current-media-wrapper">
              <MediaUpload
                onSelect={img => setAttributes({img})}
                value={img.id}
                render={({open}) => (
                  <span className="edit-icon">
                    <FontAwesomeIcon
                      onClick={open}
                      size="lg"
                      icon={faPencilAlt}
                    />
                  </span>
                )}
              />
              <img src={img.sizes.thumbnail.url} />
            </div>
          ) : (
            <MediaPlaceholder onSelect={img => setAttributes({img})} />
          )}
        </Fragment>
      );
    case backgroundType === BG_TYPES.color:
      return (
        <SelectControl
          label="Background Color"
          value={backgroundColor}
          onChange={backgroundColor =>
            setAttributes({img: null, backgroundColor})
          }
          options={[
            {label: 'Primary', value: 'primary'},
            {label: 'Secondary', value: 'secondary'},
            {label: 'Tertiary', value: 'tertiary'},
          ]}
        />
      );
    default:
      return null;
  }
}
