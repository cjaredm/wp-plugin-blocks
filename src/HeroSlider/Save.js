const React = wp.element;
import xss from 'xss';

export function Save({attributes, className}) {
	return (
    <div className={`${className} button__render`}>
      Saved Button
    </div>
	);
}
