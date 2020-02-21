// const React = wp.element;
const {InspectorControls} = wp.editor;
import BackgroundPicker from '../components/BackgroundPicker';
import ButtonSettings from './ButtonSettings';
import {
  TextControl,
  SelectControl,
  ToggleControl,
  PanelBody,
} from '@wordpress/components';

const initialButtonProps = {
  id: null,
  color: 'tertiary',
  link: '/',
  text: '',
};

export default function(props) {
  const {
    setAttributes,
    attributes: {
      dividerColor,
      heroSize,
      heading,
      subHeading,
      textColor,
      buttons,
      isDefaultStyle,
      isDefaultBtnStyle,
    },
  } = props;
  const onChange = prop => value => {
    setAttributes({[prop]: value});
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
        <PanelBody title="Background Conotrols" initialOpen>
          <BackgroundPicker {...props} onChange={onChange} />

          <SelectControl
            label="Bottom Divider Color"
            value={dividerColor}
            onChange={dividerColor => setAttributes({dividerColor})}
            options={[
              {label: 'None', value: 'none'},
              {label: 'Primary', value: 'primary'},
              {label: 'Secondary', value: 'secondary'},
              {label: 'Tertiary', value: 'tertiary'},
            ]}
          />

          <SelectControl
            label="Size"
            value={heroSize}
            onChange={onChange('heroSize')}
            options={[
              {label: 'Full', value: 'full'},
              {label: 'Half', value: 'half'},
              {label: 'Auto', value: 'auto'},
            ]}
          />
        </PanelBody>

        <PanelBody title="Text Controls">
          <TextControl
            id={heading}
            label="Heading"
            value={heading}
            onChange={onChange('heading')}
          />
          <TextControl
            id={subHeading}
            label="Sub-Heading"
            value={subHeading}
            onChange={onChange('subHeading')}
          />
          <ToggleControl
            label="Text Style"
            help={isDefaultStyle ? 'Bold' : 'Normal'}
            checked={isDefaultStyle}
            onChange={onChange('isDefaultStyle')}
          />
          <SelectControl
            label="Text Color"
            value={textColor}
            onChange={textColor => setAttributes({textColor})}
            options={[
              {label: 'White', value: 'white'},
              {label: 'Black', value: 'black'},
              {label: 'Primary', value: 'primary'},
              {label: 'Secondary', value: 'secondary'},
              {label: 'Tertiary', value: 'tertiary'},
            ]}
          />
        </PanelBody>

        {buttons.length
          ? buttons.map((btn, i) => (
              <ButtonSettings
                {...{
                  ...btn,
                  setAttributes,
                  index: i,
                  buttons,
                  isDefaultBtnStyle,
                }}
              />
            ))
          : null}

        {Boolean(buttons.length) && (
          <PanelBody title="Advanced Button Conotrols" initialClose>
            <ToggleControl
              label="Button Size"
              help={isDefaultBtnStyle ? 'Large' : 'Standard'}
              checked={isDefaultBtnStyle}
              onChange={onChange('isDefaultBtnStyle')}
            />
          </PanelBody>
        )}

        <button
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '5px',
          }}
          className="button sidebar__button"
          onClick={onAddButton}
        >
          Add Button
        </button>
      </div>
    </InspectorControls>
  );
}
