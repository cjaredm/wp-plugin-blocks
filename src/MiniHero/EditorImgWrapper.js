const React = wp.element;
import { IconButton } from '@wordpress/components';
import {InlineEditor} from '../components/InlineEditor';

export const REORDER = {
  LEFT: 'left',
  RIGHT: 'right',
}

export function EditorImgWrapper({onChange, onDelete, img: {content, href, position, length, ...img}, isSelected, onOrderChange}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  React.useEffect(() => {
    if (!isSelected) {
      setIsOpen(false);
    }
  }, [isSelected]);
	return (
    <div className="mini-hero-gallery__mini-hero">
      <LinkModal isOpen={isOpen} onChange={({target: {value}}) => onChange('href')(value)} value={href} onClose={toggleModal} />
      {isSelected && (
        <React.Fragment>
          <button class="mini-hero-gallery__delete-hero" onClick={onDelete} title="Delete">&times;</button>
            {position !== 0 && <button className="mini-hero-gallery__reorder-button mini-hero-gallery__reorder-button--left" onClick={() => onOrderChange(REORDER.LEFT)} alt="Move left">{'<'}</button>}
            <button className="mini-hero-gallery__open-modal" onClick={toggleModal}>🔗</button>
            {position !== length -1 && <button className="mini-hero-gallery__reorder-button mini-hero-gallery__reorder-button--right" onClick={() => onOrderChange(REORDER.RIGHT)} alt="Move right">{'>'}</button>}
        </React.Fragment>
      )}
      <InlineEditor placeholder="Add Text Here" value={content} onChange={onChange('content')} className="mini-hero-gallery__text" />
      <img {...img} className="mini-hero-gallery__img" />
    </div>
	);
}

function LinkModal({isOpen, onClose, ...props}) {
  return isOpen ? (
    <div className="mini-hero-gallery__link-modal">
      <div>
        <button class="mini-hero-gallery__link-modal-toggle" onClick={onClose} title="Close">&times;</button>
        <label htmlFor="image-link">Image Link URL</label>
        <input id="image-link" name="image-link" type="text" {...props} placeholder="http:...url or /slug" />
      </div>
    </div>
  ) : null;
}
