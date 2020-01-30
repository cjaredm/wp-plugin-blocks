// const React = wp.element;
import Inspector from './Inspector';

// FYI: You can use React Hooks in the Editor
export default function(props) {
  const {
    attributes: {texture, backgroundColor, heading, subHeading, buttons},
    className,
    isSelected,
    id,
  } = props;
  const backgroundImage = texture ? `url(${texture.sizes.full.url})` : '';
  return (
    <div>
      <Inspector {...props} />
      <div id={id} className={className}>
        <div
          className={`call-to-action__container h-background-${backgroundColor}`}
          style={{backgroundImage}}
        >
          <h2 className="call-to-action__heading">
            {heading} <i className="dashicons dashicons-arrow-right-alt" />
          </h2>
          <p className="call-to-action__sub-heading">{subHeading}</p>
          {buttons.length ? (
            <ul>
              {buttons.map(btn => (
                <li>
                  <a href={btn.link} className={`button button--${btn.color}`}>
                    {btn.text}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
