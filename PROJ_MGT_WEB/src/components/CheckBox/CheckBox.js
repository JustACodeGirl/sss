import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
const CheckboxGroup = Checkbox.Group

const plainOptions = ['Jack', 'Lucy', 'Tom']
const defaultCheckedList = ['Apple', 'Orange']

class CheckBox extends React.Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    })
  }
  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    })
  }

  render () {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
      </div>
    )
  }
}

CheckBox.propTypes = {
}

export default CheckBox
