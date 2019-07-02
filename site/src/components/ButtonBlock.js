/** @jsx jsx */
import { jsx } from 'theme-ui';
import Button from "./Button"

const ButtonBlock = ({ node }) => {
  return (
    <Button sx={{marginBottom: '5'}} href={node.linkUrl}>{node.text}</Button>
  )
}

export default ButtonBlock