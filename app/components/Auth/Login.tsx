'user-client';

import React, { FC, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { AiOutlineEye, AiOutlineEyeInvisible, AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { styles } from '../../styles/style';

type Props = { setRoute: (route: string) => void }

const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Please enter your email"),
    password: Yup.string().required("please enter your password").min(6)
})

const Login: FC<Props> = ({ setRoute }) => {
    const [show, setShow] = useState(false)

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: schema,
        onSubmit: async ({ email, password }) => { console.log(email, password) }
    });

    const { errors, touched, values, handleChange, handleSubmit } = formik;

    return (
        <div className='w-full'><div className={styles.title}>Login with LearnUp</div></div>
    )
}

export default Login