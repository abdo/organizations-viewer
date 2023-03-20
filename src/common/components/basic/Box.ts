import styled from 'styled-components';

type props = {
  display?: string;
  $span?: boolean;
  hidden?: boolean;
  bg?: string;
  bgc?: string;
  bgs?: string;
  bgi?: { src: string };
  bgp?: string;
  bgr?: string;
  color?: string;
  borderRadius?: string;
  pointer?: boolean;
  cursor?: string;
  pointerEvents?: string;
  b?: string;
  bb?: string;
  bt?: string;
  br?: string;
  bl?: string;
  h?: string;
  maxW?: string;
  maxH?: string;
  minW?: string;
  minH?: string;
  filter?: string;
  zoom?: string;
  flex?: string;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
  textAlign?: string;
  visibility?: string;
  transition?: string;
  transform?: string;
  transformOrigin?: string;
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  opacity?: string;

  clipPath?: string;
  boxShadow?: string;
  naturalShadow?: boolean;
  zIndex?: string;
  ls?: string;
  fontFamily?: string;
  fz?: string;

  fw?: string;
  noSelect?: boolean;
  initialAnimation?: boolean;
  gridTemplateColumns?: string;
  columnGap?: string;
  rowGap?: string;
  gridGap?: string;
  gridColumnStart?: string;
  gridColumnEnd?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  alignSelf?: string;
  flexWrap?: string;
  flexBasis?: string;
  flexGrow?: string;
  w?: string;
  m?: string | number;
  p?: string | number;
};

const Box = styled.div<props>`
  display: ${({ display, $span, hidden }) =>
    hidden ? 'none' : display ? display : $span && 'inline-block'};
  background: ${({ bg }) => bg};
  background-color: ${({ bgc }) => bgc};
  background-size: ${({ bgs }) => bgs};
  background-image: ${({ bgi }) => (bgi?.src ? `url(${bgi?.src})` : bgi)};
  background-position: ${({ bgp }) => bgp};
  background-repeat: ${({ bgr }) => bgr};
  color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => borderRadius};
  cursor: ${({ pointer, cursor }) => (pointer ? 'pointer' : cursor)};
  pointer-events: ${({ pointerEvents }) => pointerEvents};
  border: ${({ b }) => b};
  border-bottom: ${({ bb }) => bb};
  border-top: ${({ bt }) => bt};
  border-right: ${({ br }) => br};
  border-left: ${({ bl }) => bl};
  height: ${({ h }) => h};
  max-width: ${({ maxW }) => maxW};
  max-height: ${({ maxH }) => maxH};
  min-width: ${({ minW }) => minW};
  min-height: ${({ minH }) => minH};
  filter: ${({ filter }) => filter};
  zoom: ${({ zoom }) => zoom};
  flex: ${({ flex }) => flex};
  overflow: ${({ overflow }) => overflow};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};
  text-align: ${({ textAlign }) => textAlign};
  visibility: ${({ visibility }) => visibility};
  transition: ${({ transition }) => transition};
  transform: ${({ transform }) => transform};
  transform-origin: ${({ transformOrigin }) => transformOrigin};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  opacity: ${({ opacity }) => opacity};
  clip-path: ${({ clipPath }) => clipPath};
  box-shadow: ${({ boxShadow, naturalShadow }) =>
    naturalShadow ? `0 7px 7px hsl(0deg 0% 0% / 0.15)` : boxShadow};
  filter: ${({ filter }) => filter};
  z-index: ${({ zIndex }) => zIndex};
  letter-spacing: ${({ ls }) => ls};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fz }) => fz};
  font-weight: ${({ fw }) => fw};
  user-select: ${({ noSelect }) => noSelect && 'none'};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  column-gap: ${({ columnGap }) => columnGap};
  grid-row-gap: ${({ rowGap }) => rowGap};
  grid-gap: ${({ gridGap }) => gridGap};
  grid-column-start: ${({ gridColumnStart }) => gridColumnStart};
  grid-column-end: ${({ gridColumnEnd }) => gridColumnEnd};

  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-grow: ${({ flexGrow }) => flexGrow};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
`;

Box.defaultProps = {
  m: 0,
  p: 0,
  display: 'block',
  hidden: false,
};

export default Box;
