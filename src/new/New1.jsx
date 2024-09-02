import React, { useState } from 'react'
import { Box } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { Button } from 'react-bootstrap'

function New1() {
    const [data, setData] = useState([])
    const [editID, setEditID] = useState(null)
    const [initialValue, setInitialValue] = useState({
        n1: "",
        n2: "",
        n3: "",
        n4: ""
    })

    const Submit = (values) => {
        if (editID == null) {
            const detail = [...data, values]
            setData(detail)
        } else {
            const editData = [...data]
            editData[editID] = values
            setData(editData)
        }
        setEditID(null)
    }

    const Delete = (index) => {
        const newData = [...data]
        newData.splice(index, 1)
        setData(newData)
    }

    const Edit = (item, index) => {
        setInitialValue({
            n1: item.n1,
            n2: item.n2,
            n3: item.n3,
            n4: item.n4
        })
        setEditID(index)
    }

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={initialValue}
                onSubmit={(values, { resetForm }) => {
                    Submit(values);
                    resetForm();
                }}
            >
                <Form>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <table border={1} style={{ borderColor: 'black', borderRadius: '10px' }}>
                                <tbody>
                                    <tr>
                                        <td><h4>Name1:</h4></td>
                                        <td>
                                            <Field
                                                placeholder="N1"
                                                name="n1"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><h4>Name2:</h4></td>
                                        <td>
                                            <Field
                                                placeholder="N2"
                                                name="n2"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><h4>Name3:</h4></td>
                                        <td>
                                            <Field
                                                placeholder="N3"
                                                name="n3"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><h4>Name4:</h4></td>
                                        <td>
                                            <Field
                                                placeholder="N4"
                                                name="n4"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <Button type='submit'>Submit</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Box>
                    </Box>
                </Form>
            </Formik>
            <table>
                <thead>
                    <tr>
                        <th>n1</th>
                        <th>n2</th>
                        <th>n3</th>
                        <th>n4</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.n1}</td>
                            <td>{item.n2}</td>
                            <td>{item.n3}</td>
                            <td>{item.n4}</td>
                            <td>
                                <Button onClick={() => Delete(index)}>Delete</Button>
                                <Button onClick={() => Edit(item, index)}>Edit</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default New1
