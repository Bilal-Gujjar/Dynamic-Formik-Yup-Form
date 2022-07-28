import React from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";


const valider = Yup.object().shape({
    details: Yup.array().of(
        Yup.object().shape({
            carName : Yup.string().required("Please Enter the Car Name"),
            carModel : Yup.string().required("Please Enter the Car Model"),
            carMakeYear : Yup.string().required("Please Enter the Car Makeear"),
            carCompany : Yup.string().required("Please Enter the Car Company"),


        })
),
    owner: Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        phone : Yup.number().required("Please Enter the Phone Number"),
        address : Yup.string().required("Please Enter the Address"),

    }
    )


})

const OwnerForm = () => {
    return (
        <>
            
            <Formik
                initialValues={{
                    owner : {firstName : "", lastName : "", phone : "", address : ""},
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
                                
                                <h2>Car Owner Details</h2>
                                <div>
                                <label htmlFor={`owner.firstName`} >FirstName</label>
                                    <Field id={`owner.firstName`} name={`owner.firstName`} />
                                    <ErrorMessage component='span' name={`owner.firstName`} />
                                </div>
                                <div>
                                    <label htmlFor={`owner.lastName`} >LastName</label>
                                    <Field id={`owner.lastName`} name={`owner.lastName`} />
                                    <ErrorMessage component='span' name={`owner.lastName`} />

                                </div>
                                <div>
                                    <label htmlFor={`owner.phone`} >Phone</label>
                                    <Field id={`owner.phone`} name={`owner.phone`} />
                                    <ErrorMessage component='span' name={`owner.phone`} />

                                </div>
                                <div>
                                    <label htmlFor={`owner.address`} >Address</label>
                                    <Field id={`owner.address`} name={`owner.address`} />
                                    <ErrorMessage component='span' name={`owner.address`} />

                                </div>
                                
                                <FieldArray name="details" render={
                                    (arrayHelpers) => (
                                        <div>
                                            {formik.values.details.map((details, index) => (
                                                <>
                                                
                                                    <div key={index}>
                                                        {
                                                            <div>
                                                                <><hr/></>
                                                                {index > 0 && <div>
                                                                    <button type="button" onClick={() => arrayHelpers.remove(index)}>Delete</button>
                                                                </div>}
                                                                <div><h3>Enter your car details</h3></div>
                                                                
                                                               
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
export default OwnerForm