import PropTypes from 'prop-types'
import ToolbarButton from '../../ToolbarButton'

const hasAlign = (value, foundAlign) => {
  return value.blocks.some(node => node.data.get('align') === foundAlign)
}

// If we have an alignment, clear out the data attribute
const alignStrategy = (change, align) => {
  if (hasAlign(change.value, align)) {
    return change.setBlocks({
      data: { align: null },
    }).focus()
  }
  return change.setBlocks({
    data: { align },
  }).focus()
}

const createButton = (align, icon) => {
    console.log(align, icon)
  return ({value, onChange}) => {
    return (
      <ToolbarButton
        icon={icon}
        onMouseDown={e => {
          return onChange(alignStrategy(value.change(), align))
        }}
        active={hasAlign(value, align)}
      />
    );
  }
};

function AlignPlugin() {
  return {
    toolbarButtons: [
      createButton('left', 'format_align_left'),
      createButton('center', 'format_align_center'),
      createButton('right', 'format_align_right'),
      createButton('justify', 'format_align_justify'),
    ]
  };
}

export default AlignPlugin;