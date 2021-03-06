import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { Button } from 'antd'
import { connect } from 'dva'
import List from './List'
import Modal from './Modal'
import Filter from './Filter'

const UserManagement = ({ location, dispatch, userManagement, loading }) => {
  const { list, pagination, item, modalVisible, modalType, isMotion, entity, locations } = userManagement
  const { pageSize } = pagination

  const modalProps = {
    entity,
    locations,
    item: modalType === 'create' ? {} : item,
    visible: modalVisible,
    maskClosable: false,
    confirmLoading: loading.effects['user/update'],
    title: `${modalType === 'create' ? 'Create User' : 'Update User'}`,
    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      dispatch({
        type: `userManagement/${modalType}`,
        payload: data,
      })
    },
    onCancel () {
      dispatch({
        type: 'userManagement/hideModal',
      })
    },
    entityChange (entityName) {
      dispatch({
        type: 'userManagement/getlocations',
        payload: { entity: entityName },
      })
    },
  }

  const listProps = {
    dataSource: list,
    loading: loading.effects['user/query'],
    pagination,
    location,
    isMotion,
    onChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname,
        query: {
          ...query,
          pageNo: page.current,
          pageSize: page.pageSize,
        },
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'userManagement/delete',
        payload: id,
      })
    },
    onEditItem (v) {
      dispatch({
        type: 'userManagement/showModal',
        payload: {
          modalType: 'update',
          item: v,
        },
      })
    },
  }

  const filterProps = {
    isMotion,
    filter: {
      ...location.query,
    },
    onFilterChange (value) {
      dispatch(routerRedux.push({
        pathname: location.pathname,
        query: {
          ...value,
          pageNo: 1,
          pageSize,
        },
      }))
    },
    onSearch (fieldsValue) {
      fieldsValue.keyword.length ? dispatch(routerRedux.push({
        pathname: '/user',
        query: {
          field: fieldsValue.field,
          keyword: fieldsValue.keyword,
        },
      })) : dispatch(routerRedux.push({
        pathname: '/user',
      }))
    },
    onAdd () {
      dispatch({
        type: 'userManagement/showModal',
        payload: {
          modalType: 'create',
        },
      })
    },
    switchIsMotion () {
      dispatch({ type: 'userManagement/switchIsMotion' })
    },
  }

  return (
    <div className="content-inner">
      <Filter {...filterProps} />
      <List {...listProps} />
      {modalVisible && <Modal {...modalProps} />}
    </div>
  )
}

UserManagement.propTypes = {
  userManagement: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ userManagement, loading }) => ({ userManagement, loading }))(UserManagement)
