import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHeader, TableRow } from 'react-md'
import { Link } from 'react-router-dom'

const headers = [
  'No.',
  'Avatar',
  'FullName',
  'Email',
  'Gender',
  'DOB',
  'Address'
]

const tableStyle = {
  boxShadow: "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
  backgroundColor: "#FFFFFF"
}

const ListAll = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    fetch('http://localhost:5000/user/lists')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        if (result.status === 200) {
          setUsers(result.data)
        } else {
          alert('Get User Failed')
        }
      })

  }, [])

  return (
    <TableContainer>
      <h2 style={{ textAlign: 'center' }}>List of Recruits</h2>
      <Button id="text-button-1" theme="primary" themeType='outline'>
        <Link to='/sign-up-step-1' style={{ textDecoration: 'none' }}>Sign Up</Link>
      </Button>
      <Table fullWidth style={tableStyle}>
        <TableHeader>
          <TableRow>
            {headers.map((header, idx) => (
              <TableCell key={`table-header-${idx}`}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {users ? Object.entries(users).map(([key, value], index) => (
            <TableRow key={`table-row-${key}`}>
              <TableCell key={`no-${index}`}>
                {index + 1}
              </TableCell>
              <TableCell key={`avatar-${index}`}>
                {value.AvatarURL ?
                  <Avatar src={value.AvatarURL} /> :
                  <Avatar color={'orange'} >
                    {value.FirstName.substring(0, 1).toUpperCase()}
                  </Avatar>
                }
              </TableCell>
              <TableCell key={`fullname-${index}`}>
                {value.FirstName} {value.LastName}
              </TableCell>
              <TableCell key={`email-${index}`}>
                {value.Email}
              </TableCell>
              <TableCell key={`gender-${index}`}>
                {value.Gender}
              </TableCell>
              <TableCell key={`dob-${index}`}>
                {value.Dob}
              </TableCell>
              <TableCell key={`address-${index}`}>
                {value.Address}
              </TableCell>
            </TableRow>
          )) :
            <TableRow>
              <TableCell colSpan={7} align={"center"}>
                No Data Found
              </TableCell>
            </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ListAll