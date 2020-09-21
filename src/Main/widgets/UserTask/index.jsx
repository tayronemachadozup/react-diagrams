import React from 'react'

const UserTask = ({ onClick }) => (
  <div onClick={() => onClick()}>
    <div className="oferta">
      <h3>Seleciona oferta</h3>
    </div>
  </div>
)

const UserTaskPanel = () => (
  <>
    User Task Panel
  </>
)

UserTask.Panel = UserTaskPanel

export default UserTask