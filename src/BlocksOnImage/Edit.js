import Inspector from './Inspector';
import Save from './Save';

// FYI: You can use React Hooks in the Editor
export default function(props) {
  return (
    <div>
      <Inspector {...props} />
      <Save {...props} />
    </div>
  );
}
