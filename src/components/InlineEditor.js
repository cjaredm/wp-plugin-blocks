const React = wp.element;
const {RichText} = wp.editor;

export function InlineEditor(props) {
  return (
    <RichText {...props} tagName={props.tagName || 'h2'} value={props.value} />
  );
}
