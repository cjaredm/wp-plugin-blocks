// const React = wp.element;
// import xss from 'xss';

// !! You cannot use hooks here. Must be a PURE Function returning html
export default function({attributes, className, id}) {
  return (
    <div id={id} className={className}>
      Saved Button
    </div>
  );
}
