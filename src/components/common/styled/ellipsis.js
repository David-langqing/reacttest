import styled from 'styled-components'

export default ({
  component = null,
  width = 'auto',
  lineClamp = 1
}) => {
  let strTpl = `
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${width};
  `
  if (lineClamp > 1) {
    strTpl += `
      display: -webkit-box !important;
      -webkit-line-clamp: ${lineClamp};
      flex-direction column;
      word-wrap: break-word;
      word-break: break-all;
    `
  } else {
    strTpl += `
      white-space: nowrap;
    `
  }

  return styled(component) `
    ${ strTpl }
  `
}