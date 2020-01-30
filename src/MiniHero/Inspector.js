// const React = wp.element;
const {InspectorControls} = wp.editor;
import {PanelBody, TextControl} from '@wordpress/components';
import MediaUploaderBtn from '../components/MediaUploaderBtn';
import {REORDER} from './EditorImgWrapper';
const {__} = wp.i18n;

export default function({
  attributes: {images},
  onImgSelect,
  onDelete,
  onOrderChange,
  onImgPropChange,
}) {
  return (
    <InspectorControls>
      <div className="sidebar__global-settings">
        <MediaUploaderBtn onSelect={onImgSelect}>Add Image</MediaUploaderBtn>

        {images.map((img, i) => (
          <PanelBody
            title={`Image ${i + 1}`}
            key={img.id}
            icon="format-image"
            initialOpen
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 5,
              }}
            >
              {i !== 0 && (
                <button
                  className="button sidebar__remove-button"
                  onClick={() => onOrderChange(i)(REORDER.LEFT)}
                >
                  Move Up
                </button>
              )}
              {i !== images.length - 1 && (
                <button
                  className="button sidebar__remove-button"
                  onClick={() => onOrderChange(i)(REORDER.RIGHT)}
                >
                  Move Down
                </button>
              )}
            </div>
            {img ? (
              <img src={img.src} title={img.title} />
            ) : (
              <MediaPlaceholder onSelect={onImgSelect} />
            )}

            <TextControl
              id="href"
              label="Link Url (optional)"
              value={img.href}
              onChange={onImgPropChange(i)('href')}
            />

            <button
              className="button sidebar__remove-button"
              style={{backgroundColor: 'red', color: 'white', border: 0}}
              onClick={onDelete(i)}
            >
              Remove
            </button>
          </PanelBody>
        ))}
      </div>
    </InspectorControls>
  );
}
