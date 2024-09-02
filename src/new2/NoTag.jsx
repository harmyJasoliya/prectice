import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';

const FormikStudent = () => {
    const [detail, setDetail] = useState([])
    const [submit, handleSubmit] = useState([])
    const [editId, setEditId] = useState(null)

    const formik = useFormik({
        initialValues: {
            Name: '',
            n1: '',
            n2: '',
            n3: '',
            n4: '',
            n5: '',

        },
        validationSchema:Yup.object({
           Name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
        }),
        onSubmit: values => {
            
            
           
                formik.resetForm()
                if (editId !== null)
                    {

                        const editData = [...detail]
                        console.log("editdata ==> ",editData);
                        editData[editId] = values 
                        console.log("===>",editData);
                        setDetail(editData)   
                    }
                   
                        else {
                            
                                console.log(values);
                                const data = [...detail, values]
                                console.log("data ==> ",data);
                                setDetail(data)
                                // setEditId(null)
                           
                        }    
                }
            
        })
          


    const DeleteData = (index) => {
        //   console.log(index);
        const newDetail = [...detail]
        // console.log("=======>",newdata);
        newDetail.splice(index, 1)
        // console.log("------>",newdata);
        setDetail(newDetail)
    }

    const EditData = (index) => {

        console.log("editdata index ==> ",index);

        formik.setValues({
            Name: detail[index].Name,
            n1: detail[index].n1,
            n2: detail[index].n2,
            n3: detail[index].n3,
            n4: detail[index].n4,
            n5: detail[index].n5,

        });
        setEditId(index)
     
    }
    
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <table border={1}>
                    <tr>
                        <td>Name</td>
                        
                        <td><input type="text" value={formik.values.Name} name="Name" id="" onChange={formik.handleChange} /></td>
                    </tr>
                    <div>{formik.touched.Name && formik.errors.Name ? (<div>{formik.errors.Name}</div>) : null}</div>
                    
                    <tr>
                        <td>n1</td>
                        <td><input type="text" name="n1" value={formik.values.n1} id="" onChange={formik.handleChange} /></td>
                    </tr>
                    <tr>
                        <td>n2</td>
                        <td><input type="text" name="n2" value={formik.values.n2} id="" onChange={formik.handleChange} /></td>
                    </tr>
                    <tr>
                        <td>n3</td>
                        <td><input type="text" name="n3" value={formik.values.n3} id="" onChange={formik.handleChange} /></td>
                    </tr>
                    <tr>
                        <td>n4</td>
                        <td><input type="text" name="n4" value={formik.values.n4} id="" onChange={formik.handleChange} /></td>
                    </tr>
                    <tr>
                        <td>n5</td>
                        <td><input type="text" name="n5" value={formik.values.n5} id="" onChange={formik.handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Submit</td>
                        <td>
                 <input type="submit" name="submit" id="" />
                        </td>
                    </tr>
                </table>
            </form>




            <table border={1} cellPadding={14} textAlign={'center'} align='center'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>n1</th>
                        <th>n2</th>
                        <th>n3</th>
                        <th>n4</th>
                        <th>n5</th>
                       
                        <th>Delete</th>
                        <th>Edit</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        detail.map((item, index) => (

                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.Name}</td>
                                <td>{item.n1}</td>
                                <td>{item.n2}</td>
                                <td>{item.n3}</td>
                                <td>{item.n4}</td>
                                <td>{item.n5}</td>
                                
                                <td><button onClick={() => DeleteData(index)}>DELETE</button></td>
                                <td><button onClick={() => EditData(index)}>Edit</button></td>
                            </tr>

                        ))

                    }

                </tbody>

            </table>
        </>
    )

}

export default FormikStudent