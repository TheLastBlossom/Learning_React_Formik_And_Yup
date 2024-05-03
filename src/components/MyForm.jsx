import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormValidation  = Yup.object().shape({
    name: Yup.string().min(2, 'The name is not valid').max(45, 'The name is too long').required('The name is required'),
    email: Yup.string().email('The email is not valid').required('The email is required')
})
export const MyForm = () => {    
    const formik = useFormik({
        initialValues: {
            name: 'Jose',
            email: ''
        },
        validationSchema: FormValidation,
        onSubmit: values => {
            console.info(values);

        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name' onChange={formik.handleChange} value={formik.values.name} />
                </div>
                <div className='error'>{formik.errors.name && formik.touched.name ?  formik.errors.name : ''}</div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' id='email' onChange={formik.handleChange}  value={formik.values.email} />
                </div>
                <div className='error'>{formik.errors.email && formik.touched.email ?  formik.errors.email : ''}</div>
                <div className='form-group'>
                    <input type='submit' name='submit' id='submit' value={'Save'} />
                </div>
            </form>
        </div>
    )
}
