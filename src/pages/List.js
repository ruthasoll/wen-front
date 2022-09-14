import React from "react";
 function List({employees,handleEdit,handleDelete}){
    return(
        <div className="contain-table">
            <table className="striped-table">
  <thead>
    <tr>
      <th>No.</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Email</th>
      <th>phone.no</th>
      <th>gender</th>
      <th>DoB</th>
      <th colSpan={2} className="text-center">
        Actions
      </th>
    </tr>
  </thead>
  <tbody>
    {employees.length>0 ?(
        employees.map((employee,i)=>(
            <tr key={employee.id}>
                <td>{i+1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.DoB}</td>
                <td className="text-right">
                    <button onClick={() => handleEdit(employee.id)} className="button muted-button">Edit</button>
                </td>
                <td className="text-left">
                    <button onClick={() => handleDelete(employee.id)} className="button muted-button">Delete</button>
                </td>

            </tr>
        ))
    ) : (
        <tr>
            <td colSpan={7}>No employees</td>
        </tr>
    )}
  </tbody>
  <tfoot>
    <tr>
      <th>Footer 1</th>
      <th>Footer 2</th>
      <th>Footer 3</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Description 1</td>
      <td>Description 2</td>
      <td>Description 3</td>
    </tr>
    <tr>
      <td>Description 1</td>
      <td>Description 2</td>
      <td>Description 3</td>
    </tr>
    <tr>
      <td>Description 1</td>
      <td>Description 2</td>
      <td>Description 3</td>
    </tr>
  </tbody>
</table>
        </div>
    )
 }
 export default List;