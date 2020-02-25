// const React = wp.element;
const {InspectorControls} = wp.blockEditor;
import BackgroundPicker from '../components/BackgroundPicker';
import {PanelBody, RangeControl} from '@wordpress/components';

export default function(props) {
  const {
    setAttributes,
    attributes: {opacity},
  } = props;
  const onChange = prop => value => {
    setAttributes({[prop]: value});
  };

  return (
    <InspectorControls>
      <div className="sidebar__global-settings">
        <PanelBody title="Background Conotrols" initialOpen>
          <BackgroundPicker {...props} onChange={onChange} />

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
