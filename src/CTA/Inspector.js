// const React = wp.element;
import {InspectorControls, MediaPlaceholder} from '@wordpress/block-editor';
import {PanelBody, TextControl} from '@wordpress/components';
import Select from '../components/Select';
const {__} = wp.i18n;

const REORDER = {
  LEFT: 'left',
  RIGHT: 'right',
};

const initialButtonProps = {
  id: null,
  color: '',
  link: '',
  text: '',
};

export default function({
  attributes: {backgroundColor, texture, heading, subHeading, buttons},
  setAttributes,
}) {
  const onAttrChange = att => e => {
    let value = '';
    if (e.target && e.target.value) value = e.target.value;
    else value = e;
    setAttributes({[att]: value});
  };
  const onOrderChange = from => direction => {
    const moveTo = direction === REORDER.LEFT ? from - 1 : from + 1;
    const reorderedButtons = [...buttons];
    reorderedButtons[moveTo] = buttons[from];
    reorderedButtons[from] = buttons[moveTo];
    setAttributes({buttons: reorderedButtons});
  };
  const onAddButton = () =>
    setAttributes({
      buttons: [
        ...buttons,
        {
          ...initialButtonProps,
          id: new Date().getTime(),
        },
      ],
    });

  return (
    <InspectorControls>
      <div className="sidebar__global-settings">
        {texture ? (
          <img src={texture.sizes.thumbnail.url} />
        ) : (
          <div>
            <p>Set a background texture.</p>
            <MediaPlaceholder
              onSelect={texture =>
                setAttributes({texture, backgroundColor: ''})
              }
            />
          </div>
        )}

        <p>or pick a background color</p>

        <Select
          name="backgroundColor"
          label="Background Color"
          value={backgroundColor}
          onChange={({target: {value}}) =>
            setAttributes({texture: '', backgroundColor: value})
          }
          options={[
            ['', 'None'],
            ['primary', 'Primary'],
            ['secondary', 'Secondary'],
            ['tertiary', 'Tertiary'],
          ]}
        />

        <TextControl
          id={__('heading')}
          label="Heading"
          value={heading}
          onChange={onAttrChange('heading')}
        />
        <TextControl
          id={__('subHeading')}
          label="Sub-Heading"
          value={subHeading}
          onChange={onAttrChange('subHeading')}
        />

        <button
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}
          className="button sidebar__button"
          onClick={onAddButton}
        >
          Add Button
        </button>

        {buttons.length
          ? buttons.map((btn, i) => (
              <PanelBody title={`Button ${i + 1}`} key={btn.id} initialOpen>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 5,
                  }}
                >
                  {i !== 0 && (
                    <button
                      className="button sidebar__button"
                      onClick={() => onOrderChange(i)(REORDER.LEFT)}
                    >
                      Move Up
                    </button>
                  )}
                  {i !== buttons.length - 1 && (
                    <button
                      className="button sidebar__button"
                      onClick={() => onOrderChange(i)(REORDER.RIGHT)}
                    >
                      Move Down
                    </button>
                  )}
                </div>
                <TextControl
                  id={__('btnLink')}
                  label="Button Link"
                  value={btn.link}
                  onChange={onAttrChange('btnLink')}
                />
                <Select
                  name="btnColor"
                  label="Button Color"
                  value={btn.color}
                  onChange={onAttrChange('btnColor')}
                  options={[
                    ['primary', 'Primary'],
                    ['secondary', 'Secondary'],
                    ['tertiary', 'Tertiary'],
                  ]}
                />
                <TextControl
                  id={__('btnText')}
                  label="Button Text"
                  value={btn.text}
                  onChange={onAttrChange('btnText')}
                />
              </PanelBody>
            ))
          : null}
      </div>
    </InspectorControls>
  );
}
