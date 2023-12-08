function TableHeader(){
    /* responsible for rendering the head of our table with the appropriate columns */
    return(
        <thead >
        <tr>
          <th id="th-name">Name</th>
          <th id="th-URL">URL</th>
          <th id="th-remove">Remove</th>
        
        </tr>
        
      </thead>
     
    )
}

const TableBody = (props) => {
  const rows = props.linkData.map((row, index) => {
      return (
          <tr key={index}>
              <td id="row-name">{row.name}</td>
              
              <td id="row-URL"> 
                  <a href={row.URL}>{row.URL}</a>
              </td>
              <td>
                  <button id="delete-button" onClick={() => props.removeLink(index)}>Delete</button>
              </td>
          </tr>
      )
  })

  return <tbody>{rows}</tbody>
}


function Table({ linkData, removeLink }) {
  return (
      <table>
          <TableHeader />
          <TableBody linkData={linkData} removeLink={removeLink} />
      </table>
  )
}

export default Table;

