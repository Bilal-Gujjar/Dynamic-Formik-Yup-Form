import React from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";

const valider = Yup.object().shape({
    details: Yup.array().of(
        Yup.object().shape({
            carName : Yup.string().required("Please Enter the Car Name"),
            carModel : Yup.string().required("Please Enter the Car Model"),
            carMakeYear : Yup.string().required("Please Enter the Car Makeear"),
            carCompany : Yup.string().required("Please Enter the Car Company")


        })
)
})

const carForm = () => {
    return (
        <>
        
            <Formik
                initialValues={{
                    details: [{ carName: "", carModel: "", carMakeYear: "", carCompany: "" }],
                    
                }}
                validationSchema={valider}
                onSubmit={(values) => {
                    console.log(values);
                   
                }}

            >
                {
                    (formik) => (
                        <Form>
                            <div className="form-group">
                                
                                <h2>Car Name</h2>
                                <FieldArray name="details" render={
                                    (arrayHelpers) => (
                                        <div>
                                            {formik.values.details.map((details, index) => (
                                                <>
                                                
                                                    <div key={index}>
                                                        {
                                                            <div>
                                                                <div>{`Please Add your Car`}</div>
                                                                <div>
                                                                    <button type="button" onClick={() => arrayHelpers.remove(index)}>Delete</button>
                                                                </div>
                                                                <div>

                                                                    {/*CarName*/}
                                                                    <div>
                                                                        <label htmlFor={`details.${index}.carName`} >Car Name</label>
                                                                        <Field id={`details.${index}.carName`} name={`details.${index}.carName`} />
                                                                        <ErrorMessage component='span' name={`details.${index}.carName`} />
                                                                      
                                                                    </div>

                                                                    {/*CarModel*/}
                                                                    <div>
                                                                        <label htmlFor={`details.${index}.carModel`} >Car Model</label>
                                                                        <Field id={`details.${index}.carModel`} name={`details.${index}.carModel`} />
                                                                        <ErrorMessage component='span' name={`details.${index}.carModel`} />

                                                                    </div>
                                                                    {/*CarMake Year*/}
                                                                    <div>
                                                                        <label htmlFor={`details.${index}.carMakeYear`} >Car Make year</label>
                                                                        <Field id={`details.${index}.carMakeYear`} name={`details.${index}.carMakeYear`} />
                                                                        <ErrorMessage component='span' name={`details.${index}.carMakeYear`} />
                                                                    </div>
                                                                    {/*CarCompany*/}
                                                                    <div>
                                                                        <label htmlFor={`details.${index}.carCompany`} >Car Company</label>
                                                                        <Field id={`details.${index}.carCompany`} name={`details.${index}.carCompany`} />
                                                                        <ErrorMessage component='span' name={`details.${index}.carCompany`} />
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                </>
                                            ))}
                                            <div><button type="button"
                                                onClick={() => arrayHelpers.insert(formik.values.details.length + 1, { carName: "", carModel: "", carMakeYear: "", carCompany: "" })}>Add Car</button>
                                            </div>

                                        </div>
                                    )
                                } ></FieldArray>
                            </div>
                            <div>
                                <button type="submit" >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
            </Formik>
        </>
    )
}
export default carForm