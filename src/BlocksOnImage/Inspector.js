// const React = wp.element;
const {InspectorControls} = wp.blockEditor;
import BackgroundPicker from '../components/BackgroundPicker';
import {SelectControl, PanelBody, RangeControl} from '@wordpress/components';

export default function(props) {
  const {
    setAttributes,
    attributes: {size, opacity},
  } = props;
  const onChange = prop => value => {
    setAttributes({[prop]: value});
  };

  return (
    <InspectorControls>
      <div className="sidebar__global-settings">
        <PanelBody title="Background Conotrols" initialOpen>
          <BackgroundPicker {...props} onChange={onChange} />

          <SelectControl
            label="Size"
            value={size}
            onChange={onChange('size')}
            options={[
              {label: 'Full', value: 'full'},
              {label: 'Half', value: 'half'},
              {label: 'Auto', value: 'auto'},
            ]}
          />

          <RangeControl
            label="Overlay Opacity%"
            value={opacity}
            onChange={onChange('opacity')}
            min={0}
            max={8}
          />
        </PanelBody>
      </div>
    </InspectorControls>
  );
}
