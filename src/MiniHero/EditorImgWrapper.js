const React = wp.element;
import {InlineEditor} from '../components/InlineEditor';

export const REORDER = {
  LEFT: 'left',
  RIGHT: 'right',
};

export function EditorImgWrapper({
  onChange,
  img: {content, href, position, length, ...img},
  isSelected,
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  React.useEffect(() => {
    if (!isSelected) {
      setIsOpen(false);
    }
  }, [isSelected]);
  return (
    <div className="mini-hero-gallery__mini-hero">
      <InlineEditor
        placeholder="Add Text Here"
        value={content}
        onChange={onChange('content')}
        className="mini-hero-gallery__text"
      />
      <img {...img} className="mini-hero-gallery__img" />
    </div>
  );
}
