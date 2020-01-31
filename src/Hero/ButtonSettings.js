import {
  PanelBody,
  TextControl,
  TextareaControl,
  SelectControl,
} from '@wordpress/components';

const REORDER = {
  LEFT: 'left',
  RIGHT: 'right',
};

function getTitle(string) {
  const trimAfter = 15;
  return string.length > trimAfter
    ? string.substr(0, trimAfter).concat('...')
    : string;
}

export default function({
  id,
  index,
  text,
  link,
  color,
  setAttributes,
  buttons,
  isDefaultBtnStyle,
}) {
  const onBtnChange = (prop, i) => value => {
    const newButtons = [...buttons];
    newButtons[i][prop] = value;
    setAttributes({buttons: newButtons});
  };

  const onOrderChange = from => direction => {
    const moveTo = direction === REORDER.LEFT ? from - 1 : from + 1;
    const reorderedButtons = [...buttons];
    reorderedButtons[moveTo] = buttons[from];
    reorderedButtons[from] = buttons[moveTo];
    setAttributes({buttons: reorderedButtons});
  };

  const onDelete = i => () => {
    const newButtons = [...buttons];
    newButtons.splice(i, 1);
    setAttributes({buttons: newButtons});
  };

  return (
    <PanelBody
      key={id}
      title={`Button ${index + 1}: ${getTitle(text)}`}
      initialOpen
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 5,
        }}
      >
        {index !== 0 && (
          <button
            className="button sidebar__button"
            onClick={() => onOrderChange(index)(REORDER.LEFT)}
          >
            Move Up
          </button>
        )}
        {index !== buttons.length - 1 && (
          <button
            className="button sidebar__button"
            onClick={() => onOrderChange(index)(REORDER.RIGHT)}
          >
            Move Down
          </button>
        )}
      </div>
      <TextControl
        id={link}
        label="Button Link"
        value={link}
        onChange={onBtnChange('link', index)}
      />

      <SelectControl
        label="Button Color"
        value={color}
        onChange={onBtnChange('color', index)}
        options={[
          {label: 'Primary', value: 'primary'},
          {label: 'Secondary', value: 'secondary'},
          {label: 'Tertiary', value: 'tertiary'},
        ]}
      />

      <TextareaControl
        id={text}
        label="Button Text"
        value={text}
        onChange={onBtnChange('text', index)}
        help="First line will be bold..."
      />

      <button
        className="button sidebar__button"
        style={{backgroundColor: 'red', border: 0, color: 'white'}}
        onClick={onDelete(index)}
      >
        Remove Button
      </button>
    </PanelBody>
  );
}
