import Inspector from './Inspector';
import Save from './Save';
import {MediaPlaceholder} from '@wordpress/block-editor';

// FYI: You can use React Hooks in the Editor
export default function(props) {
  return (
    <div>
      <Inspector {...props} />
      {props.attributes.img ? (
        <Save {...props} />
      ) : (
        <MediaPlaceholder onSelect={img => props.setAttributes({img})} />
      )}
    </div>
  );
}
