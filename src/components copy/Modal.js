const React = wp.element;

export function Modal({isOpen, onClose, children, className, setIsOpen, isSelected, heading}) {
  React.useEffect(() => {
    if (!isSelected) {
      setIsOpen(false);
    }
  }, [isSelected]);
  return isOpen ? (
    <div className={`WP_EditorModal ${className ? className : ''}`}>
      <div className="WP_EditorModal__content">
        <button class="WP_EditorModal__toggle dashicons dashicons-no" onClick={onClose} title="Close" aria-label="Close Modal" />
        {heading && <h3>{heading}</h3>}
        {children}
      </div>
    </div>
  ) : null;
}