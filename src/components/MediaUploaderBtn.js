import {Button} from '@wordpress/components';
import {MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';

const ALLOWED_MEDIA_TYPES = ['image'];

export default function({onSelect, value, children}) {
  return (
    <MediaUploadCheck>
      <MediaUpload
        onSelect={onSelect}
        allowedTypes={ALLOWED_MEDIA_TYPES}
        value={value}
        render={({open}) => (
          <Button
            onClick={open}
            className="is-button is-primary"
            style={{marginBottom: 5}}
          >
            {children}
          </Button>
        )}
      />
    </MediaUploadCheck>
  );
}
