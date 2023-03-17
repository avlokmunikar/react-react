import React from 'react'

const DataShow = ({ comment, remove }) => {
  return (
    <div>
      {comment.map((d) => {
        return <div key={d.id}>
          <h1>{d.email}</h1>
          <p>{d.body}</p>
          <button onClick={() => remove(d.id)}>Remove me</button>
        </div>
      })}
    </div>
  )
}

export default DataShow
