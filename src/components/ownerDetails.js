import React from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'

const val = Yup.object().shape({
    firstName: Yup.string().required("Reauired"),
    lastName: Yup.string().required("Reauired"),

})

const OwnerDetails = () => {


    return (
        
            <div>
                <Formik
                    initialValues={{    firstName: "",  lastName: ""}}
                    validationSchema={val}
                    onSubmit={(value)=>{
                        console.log(value);
                    }}
                    
                >
                    {({ values, errors, touched, handleChange, handleSubmit }) => (
                        
                        <form onSubmit={handleSubmit}>
                                <input type="text" name="firstName" onChange={handleChange}  value={values.firstName}/>
                                {errors.firstName && touched.firstName && errors.firstName}
                                <input type="text" name="lastName" onChange={handleChange}  value={values.lastName}/>
                                {errors.lastName && touched.lastName && errors.lastName}
                                <button type="submit">Submit</button>
                        </form>
                    )}
                </Formik>
            </div>
            
    )
}
export default OwnerDetails