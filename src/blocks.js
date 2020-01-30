import './MiniHero/block.js';
import './Hero/block.js';
// import './HeroSlider/block.js';
// import './ThemedButtonLink/block.js';

// This is how you unregister blocks from the editor.
// wp.domReady(() => {
// 	wp.blocks.unregisterBlockType('core/verse');
// });

// Remove Button Block Styles
wp.domReady(() => {
  wp.blocks.unregisterBlockStyle('core/button', 'default');
  wp.blocks.unregisterBlockStyle('core/button', 'outline');
  wp.blocks.unregisterBlockStyle('core/button', 'squared');
});
