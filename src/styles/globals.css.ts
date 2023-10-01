import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
  boxSizing: 'border-box',
  fontSize: '16px'
});

globalStyle('*, *:before, *:after', {
  boxSizing: 'inherit'
});

globalStyle('body, h1, h2, h3, h4, h5, h6, p, ol, ul', {
  margin: '0',
  padding: '0',
  fontWeight: 'normal'
});

globalStyle('ol, ul', {
  listStyle: 'none'
});

globalStyle('img', {
  maxWidth: '100%',
  height: 'auto'
});

globalStyle('a, button', {
  cursor: 'pointer'
});

globalStyle('button', {
  border: 'none',
  outline: 'none',
  backgroundColor: 'inherit'
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit'
});
